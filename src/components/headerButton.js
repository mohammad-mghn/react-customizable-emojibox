/* eslint-disable prettier/prettier */
import React from 'react'

import styles from '../styles/header/header.module.css'

const HeaderButton = ({ icon, id, scrollToStickerSection }) => {
  const [isActive, setIsActive] = React.useState(id === 'Emoji')

  React.useEffect(() => {
    document
      .getElementById('emojibox-sections-container')
      .addEventListener('scroll', function () {
        if (document.getElementById(id)) {
          var element = document.getElementById(id)
          var position = element.getBoundingClientRect()
          // 366 is sections' container height and 74.25 is header height to become sure that element pass the header
          if (position.top <= 366 && position.bottom >= 74.25) {
            setIsActive(true)
          } else {
            setIsActive(false)
          }
        }
      })
  }, [])

  return (
    <button
      className={`${styles.button} ${isActive && styles.active}`}
      onClick={() => {
        scrollToStickerSection(id)
      }}
    >
      <icon.icon />
    </button>
  )
}

export default HeaderButton
