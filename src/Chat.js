import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IoMdSearch } from "react-icons/io";
import { IoAttach } from "react-icons/io5";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import "./chat.css";
function Chat(){
  return (
    <div className="chat_secton">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <IoMdSearch />
          </IconButton>
          <IconButton>
            <IoAttach />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="display_section">
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_reciever " >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p><p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p><p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message" >
          <span className="chat_name" >vipul</span>
          this message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat_footer">
        <IconButton><InsertEmoticonIcon/></IconButton>
        <form >
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a messsage</button>
        </form>
        <IconButton><MicIcon/></IconButton>
        
      </div>
    </div>
  );
}

export default Chat;
