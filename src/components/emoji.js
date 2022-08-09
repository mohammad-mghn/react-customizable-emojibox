/* eslint-disable prettier/prettier */

// we have to add Fragment because we need <></> is return section
import React, { Fragment, useState } from 'react'

import styles from '../styles/emoji/emoji.module.css'

const Emoji = (props) => {
  const { defaultEmoji, allArray, EmojiClickHandler, recentlyHandler } = props

  // for all colors section
  const [moreEmoji, setMoreEmoji] = useState(false)

  const moreEmojiHandler = () => {
    setMoreEmoji((prevValue) => !prevValue)
  }

  const EmojiClickedHandler = (e, char = defaultEmoji) => {
    // add to recently part
    recentlyHandler(char)
    // add to input
    EmojiClickHandler(char)
    // close more emoji if that emoji contains moreEmoji property
    if (moreEmoji) {
      setMoreEmoji((prevValue) => !prevValue)
    }
  }

  return (
    <div className={styles.container}>
      <p onClick={EmojiClickedHandler} className={styles.emoji_main}>
        {defaultEmoji}
      </p>
      {allArray && (
        <>
          <span className={styles.main} onClick={moreEmojiHandler} />
          {moreEmoji && (
            <>
              <div
                className={styles.pop_up_closer}
                onClick={moreEmojiHandler}
              />
              <div className={styles.pop_up_main}>
                {allArray.map((item) => (
                  <div
                    key={item}
                    onClick={(e) => {
                      EmojiClickedHandler(e, item)
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default Emoji
