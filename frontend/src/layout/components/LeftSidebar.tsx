import PlaylistSkeleton from "@/components/skeletons/PlaylistSkeleton.tsx";
import { buttonVariants } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"
import { HomeIcon, Library } from "lucide-react"
import { Link } from "react-router-dom";
import { useMusicStore  } from "@/stores/useMusicStore.ts";
import { useEffect } from "react";


const LeftSidebar = () => {
const { isLoading,albums,fetchAlbums} = useMusicStore();

useEffect(() => {
fetchAlbums();
},[fetchAlbums]);
console.log({albums});
  return (
    <div className="h-full flex flex-col gap-2">        
      <div className="rounded-lg bg-pink-700/80 p-4">
            <div className="space-y-2 ">
                <Link to={'/'} className={cn(buttonVariants({
                    variant:"ghost", className:"w-full justify-start text-white hover:bg-pink-800"
                }))}>
                <HomeIcon className="mr-2 size-5" /><span className="hidden md:inline">Home</span>
                </Link>
            </div>
        </div>
      
        <div className="flex-1 rounded-lg bg-zinc-900 p-4 border-[3px] border-pink-700/70">
            <div className="flex items-center justify-between mb-4"> 
                <div className="flex items-center text-green-300/90 px-2">
                    <Library className="mr-2 size-5" />
                    <span className="hidden md:inline">Playlists</span>
                </div>
            </div>
            <ScrollArea className="h-[calc(100vh-290px)]">
                <div className="space-y-2">
                    {isLoading ? (
                        <PlaylistSkeleton />
                    ) : (
                        albums.map((album) => (
                            <Link
                                to={`/albums/${album._id}`}
                                key={album._id}
                                className='p-2 hover:bg-zinc-800 rounded-md flex items-center gap-3 group cursor-pointer'
                            >
                                <img
                                    src={album.imageUrl}
                                    alt='Playlist img'
                                    className='size-12 rounded-md flex-shrink-0 object-cover'
                                />

                                <div className='flex-1 min-w-0 hidden md:block'>
                                    <p className='font-medium truncate'>{album.title}</p>
                                    <p className='text-sm text-zinc-400 truncate'>Album • {album.artist}</p>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </ScrollArea>
        </div>
    </div>
  )
}

export default LeftSidebar