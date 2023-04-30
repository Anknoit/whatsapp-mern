import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  MoreVertOutlined,
  SearchOutlined,
} from "@mui/icons-material";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen...</p>
        </div>
        <div className="chat__headerRight">
          {/* <IconButton></IconButton> gives click functionality to the button */}
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Chat;
