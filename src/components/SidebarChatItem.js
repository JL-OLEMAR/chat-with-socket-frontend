import React from 'react'

export const SidebarChatItem = () => {
  return (
    <div className="chat_list">
      {/* active_chat */}
      <div className="chat_people">
        <div className="chat_img">
          <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/>
        </div>
        <div className="chat_ib">
          <h5>Sunil Rajput <span className="chat_date">Dec 25</span></h5>
          <p>Test, which is a new approach to have all solutions astrology under one roof.</p>
        </div>
      </div>
    </div>
  )
}
