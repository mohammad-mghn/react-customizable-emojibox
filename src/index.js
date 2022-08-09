// we have to add Fragment because we need <></> is return section
import React, { Fragment } from 'react'

import Main from './components/main'
import { GlobalStyles } from './module/globalStyles'
import {
  GlassTheme,
  LightTheme,
  DarkTheme,
  MaterialTheme
} from './module/themes'

import { ThemeProvider } from 'styled-components'

const EmojiBox = (props) => {
  const {
    visibility,
    setVisibility,
    theme,
    EmojiClickedHandler,
    style,
    className
  } = props

  return (
    <>
      {visibility && (
        <ThemeProvider theme={theme ? theme : GlassTheme}>
          <GlobalStyles />
          <Main
            visibility={visibility}
            setVisibility={setVisibility}
            EmojiClickedHandler={EmojiClickedHandler}
            style={style}
            className={className}
          />
        </ThemeProvider>
      )}
    </>
  )
}
export default React.memo(EmojiBox)

export { LightTheme, DarkTheme, GlassTheme, MaterialTheme }
