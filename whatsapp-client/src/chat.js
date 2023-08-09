

import {Avatar,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import axios from "./axios";

import React, { useState } from 'react';

import "./chat.css";

function Chat({messages}) {
 
  const [input,setInput]=useState("");

 const sendMssage=async (e) => {
      e.preventDefault();
    await  axios.post("/messages/new",{
        "message":input,
        "name":"david",
        "timestamp":"denm",
        "received":false
      })

      setInput("");
 }
 
 
 
  return (
    <div className='chat'>
         <div className='chat_header'>
              <Avatar />


              <div className='chat_info'>
                  <h3>Dance of School</h3>
                  <p>last seen...</p>
              </div>


              <div className='chat_header_right'>
              <IconButton>
             <SearchOutlinedIcon />
             </IconButton> 

            <IconButton>
                <AttachFileIcon />
            </IconButton> 

             <IconButton>    
                  <MoreVertIcon />
             </IconButton>
              </div>
         </div>


     <div className='chat_body'>
      
      {messages.map(message => {
       return ( <p className={`chat_message  ${ !message.received && "chat_receiver"}` }>
          <span className='chat_name'>{message.name}</span>
          {message.message}
         <span className='chat_timestamp'>
         {/* { new Date().toLocaleTimeString()} */}
         {
          message.timestamp
         }
         </span>
      </p>
       )
      })}
      

     
     </div>
     
     <div className='chatbody_footer'>
         <InsertEmoticonIcon />
   
   <form>
   <input
     value={input}
     onChange={e => setInput(e.target.value)}
     placeholder='Type a Message'
     type="text"
      />
             
       <button
       onClick={sendMssage}
        type="submit">
        
            send a message
        </button>     

   </form>

   <MicIcon />

     </div>

       
    </div>
  );
}

export default Chat;
