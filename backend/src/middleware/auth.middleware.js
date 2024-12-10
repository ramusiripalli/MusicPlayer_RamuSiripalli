import { clerkClient, requireAuth } from '@clerk/express';

export const protectRoute = async (req,res,next) => {
    if(!req.auth.userId){
        return res.status(401).json({message : " Unauthorized- you must be logged in"});
    }
    next(); 
} //checking if the user is authenticated or not

export const requireAdmin= async(req,res,next) => { //checking if user is admin or not 
    try{
const currentUser = await clerkClient.users.getUser(req.auth.userId);
const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailAddress;
if(!isAdmin){
    return res.status(403).json({message:"unauthorized- you must be admin"});
}
next();
    }catch(error){
return res.status(500).json({ message: "Internal server Error" ,error});
    }
}