import React, { useEffect, useState } from "react";
import './App.css';
import Sidebar from "./sidebar.js";
import Chat from "./chat.js";
import Pusher from "pusher-js";
import axios from "./axios";




function App() {

  const [messages,setmessages]=useState([]);
   
  useEffect(()  => {
    axios.get('/messages/syc')
         .then(response => {
        //  console.log(response.data);
          setmessages(response.data);
        })



  },[]);





   useEffect(() => {
    const pusher = new Pusher('f53a06dac72a63c45f00', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe("messages");
    channel.bind('inserted', function(data) {
      //alert(JSON.stringify(data));
      setmessages([...messages,data]);
    });
   
    //clean up
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

    
  },[messages]);

 console.log(messages);
  return (
    <div className="app">
      < div className="app_body">

           <Sidebar />

           <Chat messages={messages}/>

           </div>
      {/* /*sidebar*/ }
      {/* chat component */}
    </div>
  );
}

export default App;
