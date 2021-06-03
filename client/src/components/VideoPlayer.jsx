import React,{useContext} from 'react'
import {SocketContext } from '../Socket'
import CircularProgress from '@material-ui/core/CircularProgress';
export default function VideoPlayer({active , username}) {
    const {name,callAccepted, myVideo ,userVideo,callEnded,stream,call} = useContext(SocketContext)
    
    return (
        <div className={`absolute flex items-center flex-col sm:flex-row justify-center px-5 ${!stream ? 'none h-0 w-0  opacity-0 transition-all duration-400' : "h-80 w-9/12 transition-all delay-100 duration-500"}`}>

   {stream && 
   
            <>
            <div className="bg-black   flex justify-center w-screen sm:w-full">
                <h1 className="text-white absolute font-bold text-center ml-3 mt-2">{!name? 'Name' : name}</h1>
                <video playsInline ref={myVideo} autoPlay/>
            </div>
            </>
   }
   {callAccepted && !callEnded && 
        <>
        <div className=" bg-black min-h-full flex justify-center sm:w-full w-screen mt-2 sm:m-5">
     
        {!userVideo ? 
        <CircularProgress/>
            :
        <>
        <h1 className="text-white absolute font-bold text-center  mt-2 ">{call.name || 'Name'}</h1>
        <video playsInline ref={userVideo} autoPlay/>
        </>
        }
        </div>
        </>
   
   }
        
    
    </div>
   
    )
}
