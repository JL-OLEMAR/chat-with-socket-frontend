import React, { useContext } from 'react'

import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'

import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {
  const { chatState } = useContext(ChatContext)
  const { auth } = useContext(AuthContext)

  const { uid } = auth

  return (
    <div className="inbox_chat">

      {/* <!-- conversación activa inicio --> */}
      {
        chatState.usuarios
          .filter(user => user.uid !== uid)
          .map((usuario) => (
            <SidebarChatItem
              key={usuario.uid}
              usuario={usuario}
            />
          ))
      }
      {/* <!-- conversación activa Fin --> */}

      {/* <!-- Espacio extra para scroll --> */}
      <div className="extra_space"></div>

    </div>
  )
}
