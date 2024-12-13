import { Card, CardContent } from '@/components/ui/card'
import { axiosInstance } from '@/lib/axios';
import { useUser } from '@clerk/clerk-react';
import { Loader } from 'lucide-react'
import  { useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallBackPage = () => {
const {isLoaded,user} = useUser();
const navigate = useNavigate();
const syncAttempted = useRef(false);
  useEffect(()=>{
    const syncUser = async()=>{
      if(!isLoaded || !user || syncAttempted.current) return ;
try {
 syncAttempted.current = true;  //for optimization ,the function skips the sync logic to prevent duplicate executions.
  await axiosInstance.post('/auth/callback',{
    id:user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    imageUrl:user.imageUrl
  })
} catch (error) {
  console.log("Error in auth callback",error);
}
finally{
navigate('/',)
}
}
    syncUser();

  },[isLoaded,navigate,user]);
  return (
    <div className='h-screen w-full bg-black flex  items-center justify-center'>
      <Card className='w-[90%] max-w-md bg-violet-900 border-white'>
        <CardContent className='flex flex-col items-center gap-4 pt-6'>
        <Loader className='animate-spin text-green-400 size-10'/>
        <h3 className='text-xl text-white font-bold'>Logging you in</h3>
        <p>Redirecting......</p>
        </CardContent>
      </Card>


    </div>
  )
}

export default AuthCallBackPage