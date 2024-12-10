import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import {cloudinary } from "../lib/cloudinaryy.js";

const uploadToCloudinary = async (file) => {
	try {
		const result = await cloudinary.uploader.upload(file.tempFilePath, {
			resource_type: "auto",
		});
		return result.secure_url;
	} catch (error) {
		console.log("Error in uploadToCloudinary", error);
		throw new Error("Error uploading to cloudinary");
	}
};

export const createSong= async (req,res,next)=>{
    try{
if(!req.files || !req.files.audioFile || !req.files.imageFile ){
    res.status(400).json({ 
        message : "please upload all the files"
    });
}

const {title,artist,albumId,duration} = req.body;
const audioFile = req.files.audioFile;
const imageFile = req.files.imageFile;

const audioUrl = await uploadToCloudinary(audioFile);
const imageUrl = await uploadToCloudinary(imageFile);

const song = new Song({
    title,
    artist,
    albumId : albumId || null,
    duration,
    audioUrl,
    imageUrl
})
 
await song.save();

if(albumId){
    await Album.findByIdAndUpdate(albumId,{
        $push: { songs:song._id }
    })
}
res.status(201).json(song);

}catch(error){
console.log("Error in Create Song",error);
next(error);
    }
};