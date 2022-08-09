/* eslint-disable prettier/prettier */
import React, { Fragment } from 'react'

import HeaderButton from './headerButton'

// header icons
import FaceIcon from '@mui/icons-material/Face'
import PetsRoundedIcon from '@mui/icons-material/PetsRounded'
import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded'
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded'
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded'
import SportsBasketballRoundedIcon from '@mui/icons-material/SportsBasketballRounded'
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded'

import styles from '../styles/header/header.module.css'

const Header = ({ filterHandler }) => {
  const scrollToStickerSection = (id) => {
    // first check element exists or not
    if (document.getElementById(id)) {
      // get parent div with its id
      document.getElementById('emojibox-sections-container').scroll({
        // 74.25 is header's height duo to the first element offest is header's height
        top: document.getElementById(id).offsetTop - 74.25,
        behavior: 'smooth'
      })
    }
  }

  const headers = [
    { id: 'Emoji', icon: SentimentSatisfiedAltRoundedIcon },
    { id: 'Face', icon: FaceIcon },
    { id: 'Animals', icon: PetsRoundedIcon },
    { id: 'Food', icon: LunchDiningRoundedIcon },
    { id: 'Sport & Music', icon: SportsBasketballRoundedIcon },
    { id: 'Vehicles & buildings', icon: TimeToLeaveRoundedIcon },
    { id: 'Things', icon: EmojiObjectsRoundedIcon }
  ]

  return (
    <>
      <div className={styles.navbar_container}>
        {headers.map((item) => (
          <HeaderButton
            icon={item}
            id={item.id}
            key={item.id}
            scrollToStickerSection={scrollToStickerSection}
          />
        ))}
      </div>
      <div className={styles.searchbar_container}>
        <input
          type='text'
          className={styles.input}
          placeholder='Search for emoji'
          onChange={(e) => {
            filterHandler(e.target.value)
          }}
        />
      </div>
    </>
  )
}

export default Header
