# react-customizable-emojibox

easy customizable emojibox component for react applications created by [vito.mohagheghian](https://github.com/vito-mohagheghian)

## [Live Demo](https://google/com)

![Preview](/assets/captured.gif)  

## Install

```bash
npm install react-customizable-emojibox

or 

yarn add react-customizable-emojibox
```

## Usage

```jsx
import React, { useState, useRef } from "react";

import EmojiBox from "react-customizable-emojibox";
import "react-customizable-emojibox/dist/index.css";  

const Example = () => {
  const [emoji, setEmoji] = useState(false);

  const emojiHandler = () => {
    setEmoji((prevValue) => !prevValue);
  };

  const inputRef = useRef(null);
  
  const EmojiClickedHandler = (char) => {
    inputRef.current.value += char;
  };

  return (
        <div>
          <input type="text" placeholder="type a messege" ref={inputRef} />
          <div className="emoji-container">
            <button onClick={emojiHandler} className="emoji_button">
             emoji
            </button>
            <EmojiBox
              visibility={emoji}
              setVisibility={setEmoji}
              EmojiClickedHandler={EmojiClickedHandler}
            />
          </div>
        </div>
    )
};

export default Example;

```

### Accepted props

| Name                    | Type       | Default Value | Required? | Description                                                                                             |
| ----------------------- | ---------- | ------------- | --------- | ------------------------------------- |
| className |  className | `undefined` | No | Help you to customize it easily.                   
| theme | `Object` |  GlassTheme | No | some predesigned themes which I explained in next part
| visibility | `Boolean` |  false | Yes | state that manage package display


## License

MIT © [vito-mohagheghian](https://github.com/vito-mohagheghian)
