import { types } from '../../types/types'

// const initialState = {
//   uid: '',
//   chatActivo: null, // UID del usuario al que yo quiero enviar mensajes
//   usuarios: [], // Todos los usuarios de la base datos
//   mensajes: [] // El chat seleccionado
// }

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usuariosCargados:
      return {
        ...state,
        usuarios: [...action.payload]
      }

    case types.activarChat:
      if (state.chatActivo === action.payload) return state

      return {
        ...state,
        chatActivo: action.payload,
        mensajes: []
      }

    default:
      return state
  }
}
