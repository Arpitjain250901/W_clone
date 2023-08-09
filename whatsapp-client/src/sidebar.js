import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import {Avatar,IconButton} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from "./sidebarchat";

function sidebar() {
  return (
    <div className="sidebar ">
      
      <div className="header">

<Avatar src="https://tse1.mm.bing.net/th?&id=OVP.uJRcA0D2n_Xt2-a-l5RDdgEsDP&w=274&h=189&c=7&pid=2.1&rs=1" />
         
        <div className="header_right">       
            <IconButton>
              <DonutLargeIcon />
             </IconButton> 

            <IconButton>
                <ChatIcon />
            </IconButton> 

             <IconButton>    
                  <MoreVertIcon />
             </IconButton>       
     </div>
     
       </div>





     <div className='searchbar'>
            <div className='search_container'>
             <SearchOutlinedIcon />
               <input type="text"  placeholder='search or start new chat' />

            </div>

     </div>


   




     <div  className='sidebar_chats'>
                
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />





     </div>







    </div>
  );
}

export default sidebar;
