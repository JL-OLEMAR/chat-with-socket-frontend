import { animateScroll } from 'react-scroll'

export const scrollToBotton = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 0
  })
}

export const scrollToBottonAnimated = (id) => {
  animateScroll.scrollToBottom({
    containerId: id,
    duration: 250
  })
}
