/* eslint-disable prettier/prettier */
import React, { useState } from 'react'

import Emoji from './emoji'
import Header from './header'
import { sections } from './sections'

import styles from '../styles/main/main.module.css'

const Main = ({
  setVisibility,
  visibility,
  EmojiClickedHandler,
  style,
  className
}) => {
  React.useEffect(() => {
    // * close pop up on clicking outside
    // ! get main package div (if this id change the package crashed)
    var ignoreClickOnMeElement = document.getElementById(
      'react-customizable-emojibox'
    )

    //  create click listenner for all document
    document.addEventListener('click', function (event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target)
      if (!isClickInsideElement && visibility) {
        //  to render the index file and remove emojibox
        setVisibility(false)
        // to notice 21 line condition is false
        // eslint-disable-next-line no-const-assign
        visibility = false
      }
    })
  })

  // ! the reason I use if conditional for window is for next.js duo to serverside render
  const [recently, setRecently] = useState(
    window
      ? window.localStorage.getItem('RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY')
        ? JSON.parse(
            window.localStorage.getItem('RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY')
          )
        : []
      : []
  )

  const [filteredEmojis, setFilteredEmojis] = useState(sections)

  const filterHandler = (searchedText) => {
    // * get no inherit copy of sections duo if change sectionsCopy with this trick the sections will change
    const sectionsCopy = JSON.parse(JSON.stringify(sections))
    sectionsCopy.forEach((item) => {
      item.emojis = item.emojis.filter((item) =>
        item.keywords.includes(searchedText)
      )
    })
    setFilteredEmojis(JSON.parse(JSON.stringify(sectionsCopy)))
  }

  const recentlyHandler = (emoji) => {
    // get a copy of recently to push new emoji
    const recentlyCopy = recently

    // first check if emoji exists in recently
    const isEmojiExisted = recently.find((item) => item.defaultEmoji === emoji)

    // if exists we have to remove the older one so we find its index
    if (isEmojiExisted) {
      recentlyCopy.splice(
        recentlyCopy.findIndex((item) => item.defaultEmoji === emoji),
        1
      )
    }
    // add new emoji to array in first index
    recentlyCopy.unshift({
      defaultEmoji: emoji
    })

    // remove last emoji if is more than 14 ( 2 rows ) to be cleaner
    if (recentlyCopy.length > 14) {
      recentlyCopy.pop()
    }

    // this part is duo to js can't recognize 2 array with diffrent properties so we use this trick to solve it
    setRecently(JSON.parse(JSON.stringify(recentlyCopy)))

    // at the end push it to localhost for next usages
    window.localStorage.setItem(
      'RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY',
      JSON.stringify(recentlyCopy)
    )
  }

  return (
    <div
      className={`${styles.container} ${className && className}`}
      style={style && style}
      id='react-customizable-emojibox'
    >
      <Header filterHandler={filterHandler} />
      <div className={styles.body} id='emojibox-sections-container'>
        {recently.length !== 0 && (
          <div id='Recently' className={styles.section}>
            <p>Recently</p>
            <div className={styles.emojis}>
              {recently.map((item) => (
                <Emoji
                  key={item.defaultEmoji}
                  allArray={item.allArray}
                  defaultEmoji={item.defaultEmoji}
                  EmojiClickHandler={EmojiClickedHandler}
                  recentlyHandler={recentlyHandler}
                />
              ))}
            </div>
          </div>
        )}
        {filteredEmojis.map(
          (item) =>
            item.emojis.length !== 0 && (
              <div id={item.id} className={styles.section} key={item.id}>
                <p>{item.id}</p>
                <div className={styles.emojis}>
                  {item.emojis.map((item) => (
                    <Emoji
                      key={item.defaultEmoji}
                      allArray={item.allArray}
                      defaultEmoji={item.defaultEmoji}
                      EmojiClickHandler={EmojiClickedHandler}
                      recentlyHandler={recentlyHandler}
                    />
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Main
