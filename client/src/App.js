import { TextField , Button} from '@material-ui/core';
import './App.css';
import react,{useState,useEffect,useContext} from 'react';
import {SocketContext} from './Socket'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
function App() {
  const {stream}=useContext(SocketContext)
  const [username,setusername]=useState("");
  const [active,setactive]=useState(false);
  useEffect(()=>{
      console.log(username);
  },[username])
  return (
    <div className=" flex flex-col w-screen h-auto sm:flex-row">
        <div className="bg-blue-400 h-screen w-screen flex justify-center items-center">
              <h1 className={` flex text-white ${!stream ? 'text-4xl sm:text-5xl font-bold drop-shadow-sm transition-all duration-500' : 'absolute sm:text-3xl transform -translate-y-72 transition-all duration-500'}`}>Video Chat</h1>
              <VideoPlayer active={active} username={username} />
              <Notifications/>
        </div>
        <Options active={active} username={username} setusername={setusername} setactive={setactive}/>
    </div>
  );
}

export default App;
