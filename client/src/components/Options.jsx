import React,{useContext,useState} from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Assignment,Phone,PhoneDisabled} from '@material-ui/icons'
import {TextField, Button} from '@material-ui/core'
import {SocketContext} from '../Socket'


export default function Options({setusername ,username,setactive,active}) {
    const {me,callAccepted, name, setName,leaveCall,callUser,callEnded}= useContext(SocketContext)
    const [idToCall,setIdToCall]=useState('')
    console.log(me,"this")
    
    return (
        <div className="h-screen flex-1 sm:flex-2 flex justify-center items-center mx-5">
        <div className="padding-10 w-80 border border-gray-50 w-10 rounded-md p-4 shadow-xl ">
              <h1 className="text-2xl text-center">Account Info</h1>
              <form action="submit" className="flex justify-center items-center flex-col ">
                  <TextField fullWidth onChange={(e)=>setName(e.target.value)} margin="dense" size="medium" value={name} className="mb-10" label="Username"/>
                  <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
                  <div className="flex w-full h-20 flex-col justify-around my-6">
                <CopyToClipboard  text={me} href='#'>
                  <Button href='#' variant="contained" size="small" color="primary" > Copy To ClipBoard <Assignment fontSize="small"/> </Button>  
                </CopyToClipboard>
              
           
            {callAccepted && !callEnded ? 
                <Button  fullWidth onClick={leaveCall} variant="contained" size="small"  href='#'> Hang Up<PhoneDisabled fontSize="small"/> </Button>
                :
                <Button  fullWidth onClick={()=>callUser(idToCall)} variant="contained" size="small"  href='#'> Call <Phone fontSize="small"/></Button>
            }
           
              
                  </div>
            
              </form>
          
        </div>
</div>
    )
}
