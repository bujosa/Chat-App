import React from "react";

export const ChatList = () => {
  return (
    <div className="chat_list">
      {/*active_chat*/}
      <div className="chat_people">
        <div className="chat_img">
          <img
            src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
            alt="sunil"
          />
        </div>
        <div className="chat_ib">
          <h5>Some random name</h5>
          <span className="text-success">Online</span>
          <span className="text-danger">Offline</span>
        </div>
      </div>
    </div>
  );
};
