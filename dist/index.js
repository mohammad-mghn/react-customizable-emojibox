function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var FaceIcon = _interopDefault(require('@mui/icons-material/Face'));
var PetsRoundedIcon = _interopDefault(require('@mui/icons-material/PetsRounded'));
var LunchDiningRoundedIcon = _interopDefault(require('@mui/icons-material/LunchDiningRounded'));
var TimeToLeaveRoundedIcon = _interopDefault(require('@mui/icons-material/TimeToLeaveRounded'));
var EmojiObjectsRoundedIcon = _interopDefault(require('@mui/icons-material/EmojiObjectsRounded'));
var SportsBasketballRoundedIcon = _interopDefault(require('@mui/icons-material/SportsBasketballRounded'));
var SentimentSatisfiedAltRoundedIcon = _interopDefault(require('@mui/icons-material/SentimentSatisfiedAltRounded'));
var styledComponents = require('styled-components');

var styles = {"container":"_emoji-module__container__3uB1j","emoji_main":"_emoji-module__emoji_main__SO2d4","pop_up_closer":"_emoji-module__pop_up_closer__2vib_","pop_up_main":"_emoji-module__pop_up_main__3WdON"};

var Emoji = function Emoji(props) {
  var defaultEmoji = props.defaultEmoji,
      allArray = props.allArray,
      EmojiClickHandler = props.EmojiClickHandler,
      recentlyHandler = props.recentlyHandler;

  var _useState = React.useState(false),
      moreEmoji = _useState[0],
      setMoreEmoji = _useState[1];

  var moreEmojiHandler = function moreEmojiHandler() {
    setMoreEmoji(function (prevValue) {
      return !prevValue;
    });
  };

  var EmojiClickedHandler = function EmojiClickedHandler(e, _char) {
    if (_char === void 0) {
      _char = defaultEmoji;
    }

    recentlyHandler(_char);
    EmojiClickHandler(_char);

    if (moreEmoji) {
      setMoreEmoji(function (prevValue) {
        return !prevValue;
      });
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React__default.createElement("p", {
    onClick: EmojiClickedHandler,
    className: styles.emoji_main
  }, defaultEmoji), allArray && /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("span", {
    className: styles.main,
    onClick: moreEmojiHandler
  }), moreEmoji && /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles.pop_up_closer,
    onClick: moreEmojiHandler
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles.pop_up_main
  }, allArray.map(function (item) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: item,
      onClick: function onClick(e) {
        EmojiClickedHandler(e, item);
      }
    }, item);
  })))));
};

var styles$1 = {"navbar_container":"_header-module__navbar_container__OazCJ","button":"_header-module__button__8JIRF","active":"_header-module__active__2kd8q","searchbar_container":"_header-module__searchbar_container__1ooIA","input":"_header-module__input__2j0Sq"};

var HeaderButton = function HeaderButton(_ref) {
  var icon = _ref.icon,
      id = _ref.id,
      scrollToStickerSection = _ref.scrollToStickerSection;

  var _React$useState = React__default.useState(id === 'Emoji'),
      isActive = _React$useState[0],
      setIsActive = _React$useState[1];

  React__default.useEffect(function () {
    document.getElementById('emojibox-sections-container').addEventListener('scroll', function () {
      if (document.getElementById(id)) {
        var element = document.getElementById(id);
        var position = element.getBoundingClientRect();

        if (position.top <= 366 && position.bottom >= 74.25) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    });
  }, []);
  return /*#__PURE__*/React__default.createElement("button", {
    className: styles$1.button + " " + (isActive && styles$1.active),
    onClick: function onClick() {
      scrollToStickerSection(id);
    }
  }, /*#__PURE__*/React__default.createElement(icon.icon, null));
};

var Header = function Header(_ref) {
  var filterHandler = _ref.filterHandler;

  var scrollToStickerSection = function scrollToStickerSection(id) {
    if (document.getElementById(id)) {
      document.getElementById('emojibox-sections-container').scroll({
        top: document.getElementById(id).offsetTop - 74.25,
        behavior: 'smooth'
      });
    }
  };

  var headers = [{
    id: 'Emoji',
    icon: SentimentSatisfiedAltRoundedIcon
  }, {
    id: 'Face',
    icon: FaceIcon
  }, {
    id: 'Animals',
    icon: PetsRoundedIcon
  }, {
    id: 'Food',
    icon: LunchDiningRoundedIcon
  }, {
    id: 'Sport & Music',
    icon: SportsBasketballRoundedIcon
  }, {
    id: 'Vehicles & buildings',
    icon: TimeToLeaveRoundedIcon
  }, {
    id: 'Things',
    icon: EmojiObjectsRoundedIcon
  }];
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.navbar_container
  }, headers.map(function (item) {
    return /*#__PURE__*/React__default.createElement(HeaderButton, {
      icon: item,
      id: item.id,
      key: item.id,
      scrollToStickerSection: scrollToStickerSection
    });
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$1.searchbar_container
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    className: styles$1.input,
    placeholder: "Search for emoji",
    onChange: function onChange(e) {
      filterHandler(e.target.value);
    }
  })));
};

var sections = [{
  id: 'Emoji',
  emojis: [{
    defaultEmoji: '😄',
    keywords: ''
  }, {
    defaultEmoji: '😁',
    keywords: ''
  }, {
    defaultEmoji: '😆',
    keywords: ''
  }, {
    defaultEmoji: '😅',
    keywords: ''
  }, {
    defaultEmoji: '😂',
    keywords: ''
  }, {
    defaultEmoji: '🤣',
    keywords: ''
  }, {
    defaultEmoji: '😊',
    keywords: ''
  }, {
    defaultEmoji: '😇',
    keywords: ''
  }, {
    defaultEmoji: '🙂',
    keywords: ''
  }, {
    defaultEmoji: '🙃',
    keywords: ''
  }, {
    defaultEmoji: '😉',
    keywords: ''
  }, {
    defaultEmoji: '😌',
    keywords: ''
  }, {
    defaultEmoji: '😍',
    keywords: ''
  }, {
    defaultEmoji: '🥰',
    keywords: ''
  }, {
    defaultEmoji: '😘',
    keywords: ''
  }, {
    defaultEmoji: '😗',
    keywords: ''
  }, {
    defaultEmoji: '😙',
    keywords: ''
  }, {
    defaultEmoji: '😚',
    keywords: ''
  }, {
    defaultEmoji: '😋',
    keywords: ''
  }, {
    defaultEmoji: '😛',
    keywords: ''
  }, {
    defaultEmoji: '😝',
    keywords: ''
  }, {
    defaultEmoji: '😜',
    keywords: ''
  }, {
    defaultEmoji: '🤪',
    keywords: ''
  }, {
    defaultEmoji: '🤨',
    keywords: ''
  }, {
    defaultEmoji: '🧐',
    keywords: ''
  }, {
    defaultEmoji: '🤓',
    keywords: ''
  }, {
    defaultEmoji: '😎',
    keywords: ''
  }, {
    defaultEmoji: '🤩',
    keywords: ''
  }, {
    defaultEmoji: '🥳',
    keywords: ''
  }, {
    defaultEmoji: '😏',
    keywords: ''
  }, {
    defaultEmoji: '😒',
    keywords: ''
  }, {
    defaultEmoji: '😞',
    keywords: ''
  }, {
    defaultEmoji: '😔',
    keywords: ''
  }, {
    defaultEmoji: '😟',
    keywords: ''
  }, {
    defaultEmoji: '😕',
    keywords: ''
  }, {
    defaultEmoji: '😣',
    keywords: ''
  }, {
    defaultEmoji: '😖',
    keywords: ''
  }, {
    defaultEmoji: '😫',
    keywords: ''
  }, {
    defaultEmoji: '😩',
    keywords: ''
  }, {
    defaultEmoji: '🥺',
    keywords: ''
  }, {
    defaultEmoji: '😢',
    keywords: ''
  }, {
    defaultEmoji: '😭',
    keywords: ''
  }, {
    defaultEmoji: '😤',
    keywords: ''
  }, {
    defaultEmoji: '😠',
    keywords: ''
  }, {
    defaultEmoji: '😡',
    keywords: ''
  }, {
    defaultEmoji: '🤬',
    keywords: ''
  }, {
    defaultEmoji: '🤯',
    keywords: ''
  }, {
    defaultEmoji: '😳',
    keywords: ''
  }, {
    defaultEmoji: '🥵',
    keywords: ''
  }, {
    defaultEmoji: '🥶',
    keywords: ''
  }, {
    defaultEmoji: '😱',
    keywords: ''
  }, {
    defaultEmoji: '😨',
    keywords: ''
  }, {
    defaultEmoji: '😰',
    keywords: ''
  }, {
    defaultEmoji: '😥',
    keywords: ''
  }, {
    defaultEmoji: '😓',
    keywords: ''
  }, {
    defaultEmoji: '🤗',
    keywords: ''
  }, {
    defaultEmoji: '🤔',
    keywords: ''
  }, {
    defaultEmoji: '🤭',
    keywords: ''
  }, {
    defaultEmoji: '🤫',
    keywords: ''
  }, {
    defaultEmoji: '🤥',
    keywords: ''
  }, {
    defaultEmoji: '😶',
    keywords: ''
  }, {
    defaultEmoji: '😐',
    keywords: ''
  }, {
    defaultEmoji: '😑',
    keywords: ''
  }, {
    defaultEmoji: '😬',
    keywords: ''
  }, {
    defaultEmoji: '🙄',
    keywords: ''
  }, {
    defaultEmoji: '😯',
    keywords: ''
  }, {
    defaultEmoji: '😧',
    keywords: ''
  }, {
    defaultEmoji: '😮',
    keywords: ''
  }, {
    defaultEmoji: '😲',
    keywords: ''
  }, {
    defaultEmoji: '🥱',
    keywords: ''
  }, {
    defaultEmoji: '😴',
    keywords: ''
  }, {
    defaultEmoji: '🤤',
    keywords: ''
  }, {
    defaultEmoji: '😪',
    keywords: ''
  }, {
    defaultEmoji: '😵',
    keywords: ''
  }, {
    defaultEmoji: '🤐',
    keywords: ''
  }, {
    defaultEmoji: '🥴',
    keywords: ''
  }, {
    defaultEmoji: '🤢',
    keywords: ''
  }, {
    defaultEmoji: '🤮',
    keywords: ''
  }, {
    defaultEmoji: '🤧',
    keywords: ''
  }, {
    defaultEmoji: '😷',
    keywords: ''
  }, {
    defaultEmoji: '🤒',
    keywords: ''
  }, {
    defaultEmoji: '🤕',
    keywords: ''
  }, {
    defaultEmoji: '🤑',
    keywords: ''
  }, {
    defaultEmoji: '🤠',
    keywords: ''
  }, {
    defaultEmoji: '😈',
    keywords: ''
  }, {
    defaultEmoji: '👹',
    keywords: ''
  }, {
    defaultEmoji: '👺',
    keywords: ''
  }, {
    defaultEmoji: '🤡',
    keywords: ''
  }, {
    defaultEmoji: '💩',
    keywords: ''
  }, {
    defaultEmoji: '👻',
    keywords: ''
  }, {
    defaultEmoji: '💀',
    keywords: ''
  }, {
    defaultEmoji: '☠️',
    keywords: ''
  }, {
    defaultEmoji: '👽',
    keywords: ''
  }, {
    defaultEmoji: '👾',
    keywords: ''
  }, {
    defaultEmoji: '🤖',
    keywords: 'man'
  }, {
    defaultEmoji: '🎃',
    keywords: ''
  }]
}, {
  id: 'Face',
  emojis: [{
    defaultEmoji: '👶',
    keywords: 'baby kid little',
    allArray: ['👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿']
  }, {
    defaultEmoji: '👧',
    keywords: 'teenager girl ',
    allArray: ['👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿']
  }, {
    defaultEmoji: '🧒',
    keywords: 'man boy guy',
    allArray: ['🧒', '🧒🏻', '🧒🏼', '🧒🏽', '🧒🏾', '🧒🏿']
  }, {
    defaultEmoji: '👦',
    keywords: 'man boy guy',
    allArray: ['👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿']
  }, {
    defaultEmoji: '👩',
    keywords: 'woman girl',
    allArray: ['👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿']
  }, {
    defaultEmoji: '🧑',
    keywords: 'man men quy boy',
    allArray: ['🧑', '🧑🏻', '🧑🏼', '🧑🏽', '🧑🏾', '🧑🏿']
  }, {
    defaultEmoji: '👨',
    keywords: 'man men quy boy',
    allArray: ['👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿']
  }, {
    defaultEmoji: '👩‍🦱',
    keywords: 'woman women girl',
    allArray: ['👩‍🦱', '👩🏻‍🦱', '👩🏼‍🦱', '👩🏽‍🦱', '👩🏾‍🦱', '👩🏿‍🦱']
  }, {
    defaultEmoji: '🧑‍🦱',
    keywords: 'man men quy boy',
    allArray: ['🧑‍🦱', '🧑🏻‍🦱', '🧑🏼‍🦱', '🧑🏽‍🦱', '🧑🏾‍🦱', '🧑🏿‍🦱']
  }, {
    defaultEmoji: '👨‍🦱',
    keywords: 'man men quy boy',
    allArray: ['👨‍🦱', '👨🏻‍🦱', '👨🏼‍🦱', '👨🏽‍🦱', '👨🏾‍🦱', '👨🏿‍🦱']
  }, {
    defaultEmoji: '👩‍🦳',
    keywords: 'woman women mom grandma grandmother',
    allArray: ['👩‍🦳', '👩‍🦳', '👩🏻‍🦳', '👩🏽‍🦳', '👩🏾‍🦳', '👩🏿‍🦳']
  }, {
    defaultEmoji: '🧑‍🦳',
    keywords: 'father man grandpa grandfather',
    allArray: ['🧑‍🦳', '🧑🏻‍🦳', '🧑🏼‍🦳', '🧑🏽‍🦳', '🧑🏾‍🦳', '🧑🏿‍🦳']
  }, {
    defaultEmoji: '👩‍🦲',
    keywords: 'girl bald',
    allArray: ['👩‍🦲', '👩🏻‍🦲', '👩🏼‍🦲', '👩🏽‍🦲', '👩🏾‍🦲', '👩🏿‍🦲']
  }, {
    defaultEmoji: '🧑‍🦲',
    keywords: 'boy bald',
    allArray: ['🧑‍🦲', '🧑🏻‍🦲', '🧑🏼‍🦲', '🧑🏽‍🦲', '🧑🏾‍🦲', '🧑🏿‍🦲']
  }, {
    defaultEmoji: '🧔‍♂',
    keywords: 'man men boy guy',
    allArray: ['🧔‍♂', '🧔🏻‍♂', '🧔🏼‍♂', '🧔🏽‍♂', '🧔🏾‍♂', '🧔🏿‍♂']
  }, {
    defaultEmoji: '👵',
    keywords: 'woman women mom grandma grandmother',
    allArray: ['👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿']
  }, {
    defaultEmoji: '🧓',
    keywords: 'father man grandpa grandfather',
    allArray: ['🧓', '🧓🏻', '🧓🏼', '🧓🏽', '🧓🏾', '🧓🏿']
  }, {
    defaultEmoji: '👴',
    keywords: 'father man grandpa grandfather bald',
    allArray: ['👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿']
  }, {
    defaultEmoji: '👳‍♀️',
    keywords: 'turban brother',
    allArray: ['👳‍♀️', '👳🏻‍♀️', '👳🏼‍♀️', '👳🏽‍♀️', '👳🏾‍♀️', '👳🏿‍♀️']
  }, {
    defaultEmoji: '👳‍♂️',
    keywords: 'turban brother',
    allArray: ['👳‍♂️', '👳🏻‍♂️', '👳🏼‍♂️', '👳🏾‍♂️', '👳🏽‍♂️', '👳🏿‍♂️']
  }, {
    defaultEmoji: '🧕',
    keywords: 'hijab chador',
    allArray: ['🧕', '🧕🏻', '🧕🏼', '🧕🏽', '🧕🏾', '🧕🏿']
  }, {
    defaultEmoji: '👮‍♀️',
    keywords: 'police officer',
    allArray: ['👮‍♀️', '👮🏻‍♀️', '👮🏼‍♀️', '👮🏽‍♀️', '👮🏾‍♀️', '👮🏿‍♀️']
  }, {
    defaultEmoji: '👮‍♂️',
    keywords: 'police officer',
    allArray: ['👮‍♂️', '👮🏻‍♂️', '👮🏼‍♂️', '👮🏽‍♂️', '👮🏾‍♂️', '👮🏿‍♂️']
  }, {
    defaultEmoji: '👷‍♀️',
    keywords: 'engineer',
    allArray: ['👷‍♀️', '👷🏻‍♀️', '👷🏼‍♀️', '👷🏽‍♀️', '👷🏾‍♀️', '👷🏿‍♀️']
  }, {
    defaultEmoji: '👩‍⚕️',
    keywords: 'nurse doctor',
    allArray: ['👩‍⚕️', '👩🏻‍⚕️', '👩🏼‍⚕️', '👩🏽‍⚕️', '👩🏾‍⚕️', '👩🏿‍⚕️']
  }, {
    defaultEmoji: '🧑🏻‍⚕️',
    keywords: 'nurse doctor',
    allArray: ['🧑🏻‍⚕️', '🧑‍⚕️', '🧑🏽‍⚕️', '🧑🏾‍⚕️', '🧑🏿‍⚕️']
  }, {
    defaultEmoji: '👩‍🍳',
    keywords: 'cooker chef',
    allArray: ['👩‍🍳', '👩🏻‍🍳', '👩🏼‍🍳', '👩🏽‍🍳', '👩🏾‍🍳', '👩🏿‍🍳']
  }, {
    defaultEmoji: '👩‍🎓',
    keywords: 'student graduater',
    allArray: ['👩‍🎓', '👩🏻‍🎓', '👩🏼‍🎓', '👩🏽‍🎓', '👩🏾‍🎓', '👩🏿‍🎓']
  }, {
    defaultEmoji: '🧑‍🎓',
    keywords: 'student graduater',
    allArray: ['🧑‍🎓', '🧑🏻‍🎓', '🧑🏼‍🎓', '🧑🏽‍🎓', '🧑🏾‍🎓', '🧑🏿‍🎓']
  }, {
    defaultEmoji: '👩‍🏫',
    keywords: 'sir teacher',
    allArray: ['👩‍🏫', '👩🏻‍🏫', '👩🏼‍🏫', '👩🏽‍🏫', '👩🏾‍🏫', '👩🏿‍🏫']
  }, {
    defaultEmoji: '🧑‍🏫',
    keywords: 'teacher madam',
    allArray: ['🧑‍🏫', '🧑🏻‍🏫', '🧑🏼‍🏫', '🧑🏽‍🏫', '🧑🏾‍🏫', '🧑🏿‍🏫']
  }, {
    defaultEmoji: '👩‍💻',
    keywords: 'programmer geek developer',
    allArray: ['👩‍💻', '👩🏻‍💻', '👩🏼‍💻', '👩🏽‍💻', '👩🏾‍💻', '👩🏿‍💻']
  }, {
    defaultEmoji: '🧑‍💻',
    keywords: 'programmer geek developer',
    allArray: ['🧑‍💻', '🧑🏻‍💻', '🧑🏼‍💻', '🧑🏽‍💻', '🧑🏾‍💻', '🧑🏿‍💻']
  }, {
    defaultEmoji: '🤰',
    keywords: 'pregnant',
    allArray: ['🤰', '🤰🏻', '🤰🏼', '🤰🏽', '🤰🏾', '🤰🏿']
  }, {
    defaultEmoji: '🤲',
    keywords: 'prey hands hand palm',
    allArray: ['🤲', '🤲🏻', '🤲🏼', '🤲🏽', '🤲🏾', '🤲🏿']
  }, {
    defaultEmoji: '👐',
    keywords: 'prey hands hand palm',
    allArray: ['👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿']
  }, {
    defaultEmoji: '🙌',
    keywords: 'prey hands hand palm',
    allArray: ['🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿']
  }, {
    defaultEmoji: '👏',
    keywords: 'clapping hands',
    allArray: ['👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿']
  }, {
    defaultEmoji: '🤝',
    keywords: 'shake hand'
  }, {
    defaultEmoji: '👍',
    keywords: 'like',
    allArray: ['👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿']
  }, {
    defaultEmoji: '👎',
    keywords: 'dislike',
    allArray: ['👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿']
  }, {
    defaultEmoji: '👊',
    keywords: 'punch fist',
    allArray: ['👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿']
  }, {
    defaultEmoji: '✊',
    keywords: 'fist hand ',
    allArray: ['✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿']
  }, {
    defaultEmoji: '🤛',
    keywords: 'fist punch',
    allArray: ['🤛', '🤛🏻', '🤛🏼', '🤛🏽', '🤛🏾', '🤛🏿']
  }, {
    defaultEmoji: '🤜',
    keywords: 'fist punch',
    allArray: ['🤜', '🤜🏻', '🤜🏼', '🤜🏽', '🤜🏾', '🤜🏿']
  }, {
    defaultEmoji: '🤞',
    keywords: '',
    allArray: ['🤞', '🤞🏻', '🤞🏼', '🤞🏽', '🤞🏾', '🤞🏿']
  }, {
    defaultEmoji: '✌️',
    keywords: 'victory',
    allArray: ['✌️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿']
  }, {
    defaultEmoji: '🤟',
    keywords: 'love',
    allArray: ['🤟', '🤟🏻', '🤟🏼', '🤟🏽', '🤟🏾', '🤟🏿']
  }, {
    defaultEmoji: '👌',
    keywords: 'great awesome',
    allArray: ['👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿']
  }, {
    defaultEmoji: '🤘',
    keywords: 'horns',
    allArray: ['🤘', '🤘🏻', '🤘🏼', '🤘🏽', '🤘🏾', '🤘🏿']
  }, {
    defaultEmoji: '🤌',
    keywords: 'little',
    allArray: ['🤌', '🤌🏻', '🤌🏼', '🤌🏽', '🤌🏾', '🤌🏿']
  }, {
    defaultEmoji: '👈',
    keywords: 'left arrow',
    allArray: ['👈', '👈🏻', '👈🏽', '👈🏼', '👈🏾', '👈🏿']
  }, {
    defaultEmoji: '👉',
    keywords: 'roght arrow',
    allArray: ['👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿']
  }, {
    defaultEmoji: '👆',
    keywords: 'top arrow',
    allArray: ['👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿']
  }, {
    defaultEmoji: '👇',
    keywords: 'botton arrow',
    allArray: ['👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿']
  }, {
    defaultEmoji: '🤙',
    keywords: 'call me',
    allArray: ['🤙', '🤙🏻', '🤙🏼', '🤙🏽', '🤙🏾', '🤙🏿']
  }, {
    defaultEmoji: '🖕',
    keywords: 'fuck',
    allArray: ['🖕', '🖕🏻', '🖕🏼', '🖕🏽', '🖕🏾', '🖕🏿']
  }, {
    defaultEmoji: '✋',
    keywords: 'hand palm',
    allArray: ['✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿']
  }, {
    defaultEmoji: '🦶',
    keywords: '',
    allArray: ['🦶', '🦶🏻', '🦶🏼', '🦶🏽', '🦶🏾', '🦶🏿']
  }, {
    defaultEmoji: '👂',
    keywords: 'ear',
    allArray: ['👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿']
  }, {
    defaultEmoji: '👄',
    keywords: 'lips'
  }, {
    defaultEmoji: '👀',
    keywords: 'eyes'
  }, {
    defaultEmoji: '👁️',
    keywords: 'eye'
  }, {
    defaultEmoji: '👥',
    keywords: 'people'
  }, {
    defaultEmoji: '👤',
    keywords: 'person'
  }, {
    defaultEmoji: '🗣️',
    keywords: 'talk speech'
  }, {
    defaultEmoji: '🧠',
    keywords: 'brain'
  }, {
    defaultEmoji: '🫀',
    keywords: 'heart'
  }, {
    defaultEmoji: '👅',
    keywords: 'tongue'
  }, {
    defaultEmoji: '🦷',
    keywords: 'teeth tooth'
  }]
}, {
  id: 'Animals',
  emojis: [{
    defaultEmoji: '🐶',
    keywords: 'dog poppy'
  }, {
    defaultEmoji: '🐱',
    keywords: 'cat kity kitten'
  }, {
    defaultEmoji: '🐭',
    keywords: 'mouse mice'
  }, {
    defaultEmoji: '🐹',
    keywords: 'mouse mice'
  }, {
    defaultEmoji: '🐰',
    keywords: 'rabbit'
  }, {
    defaultEmoji: '🦊',
    keywords: 'fox'
  }, {
    defaultEmoji: '🐻',
    keywords: 'bear'
  }, {
    defaultEmoji: '🐼',
    keywords: 'panda'
  }, {
    defaultEmoji: '🐻‍❄',
    keywords: 'bear panda'
  }, {
    defaultEmoji: '🐨',
    keywords: 'coala'
  }, {
    defaultEmoji: '🐯',
    keywords: 'tigger'
  }, {
    defaultEmoji: '🦁',
    keywords: 'lion'
  }, {
    defaultEmoji: '🐮',
    keywords: 'cow'
  }, {
    defaultEmoji: '🐷',
    keywords: 'pig'
  }, {
    defaultEmoji: '🐽',
    keywords: 'pig nose'
  }, {
    defaultEmoji: '🐸',
    keywords: 'frog amphibians'
  }, {
    defaultEmoji: '🐵',
    keywords: 'monkey'
  }, {
    defaultEmoji: '🙈',
    keywords: 'blind see'
  }, {
    defaultEmoji: '🙉',
    keywords: 'deaf mute slience'
  }, {
    defaultEmoji: '🙊',
    keywords: 'speechless mute'
  }, {
    defaultEmoji: '🐒',
    keywords: 'monkey'
  }, {
    defaultEmoji: '🐔',
    keywords: 'hen'
  }, {
    defaultEmoji: '🐧',
    keywords: 'penguin'
  }, {
    defaultEmoji: '🐦',
    keywords: 'bird'
  }, {
    defaultEmoji: '🐤',
    keywords: 'chick chicken bird'
  }, {
    defaultEmoji: '🐣',
    keywords: 'chick chicken bird'
  }, {
    defaultEmoji: '🐥',
    keywords: 'chick chicken bird'
  }, {
    defaultEmoji: '',
    keywords: ''
  }, {
    defaultEmoji: '🦆',
    keywords: 'duck'
  }, {
    defaultEmoji: '🦅',
    keywords: 'eagle'
  }, {
    defaultEmoji: '🦉',
    keywords: 'owl'
  }, {
    defaultEmoji: '🦇',
    keywords: 'bat'
  }, {
    defaultEmoji: '🐺',
    keywords: 'wolf wolves'
  }, {
    defaultEmoji: '🐗',
    keywords: 'pig hog'
  }, {
    defaultEmoji: '🐴',
    keywords: 'horse'
  }, {
    defaultEmoji: '🦄',
    keywords: 'unicorn'
  }, {
    defaultEmoji: '🐝',
    keywords: 'bee invertabrates'
  }, {
    defaultEmoji: '🪱',
    keywords: 'worm'
  }, {
    defaultEmoji: '🐛',
    keywords: 'firefly'
  }, {
    defaultEmoji: '🦋',
    keywords: 'butterfly'
  }, {
    defaultEmoji: '🐌',
    keywords: 'snail'
  }, {
    defaultEmoji: '🐞',
    keywords: 'bug ladybug'
  }, {
    defaultEmoji: '🐜',
    keywords: 'ant'
  }, {
    defaultEmoji: '🪰',
    keywords: 'fly'
  }, {
    defaultEmoji: '🪲',
    keywords: 'cockroach'
  }, {
    defaultEmoji: '🪳',
    keywords: 'cockroach'
  }, {
    defaultEmoji: '🦟',
    keywords: 'mosquito'
  }, {
    defaultEmoji: '🕷️',
    keywords: 'spider'
  }, {
    defaultEmoji: '🐢',
    keywords: 'turtle'
  }, {
    defaultEmoji: '🐍',
    keywords: 'snake'
  }, {
    defaultEmoji: '🐬',
    keywords: 'dolphin'
  }, {
    defaultEmoji: '🐳',
    keywords: 'whale'
  }, {
    defaultEmoji: '🐋',
    keywords: 'whale'
  }, {
    defaultEmoji: '🦈',
    keywords: 'shark'
  }, {
    defaultEmoji: '🐘',
    keywords: 'elephent'
  }, {
    defaultEmoji: '🐄',
    keywords: 'cow'
  }, {
    defaultEmoji: '🐎',
    keywords: 'horse'
  }, {
    defaultEmoji: '🐈‍⬛',
    keywords: 'cat'
  }, {
    defaultEmoji: '🐓',
    keywords: 'rooster'
  }]
}, {
  id: 'Food',
  emojis: [{
    defaultEmoji: '🍏',
    keywords: 'apple'
  }, {
    defaultEmoji: '🍎',
    keywords: 'apple'
  }, {
    defaultEmoji: '🍐',
    keywords: 'bear'
  }, {
    defaultEmoji: '🍊',
    keywords: 'pear'
  }, {
    defaultEmoji: '🍋',
    keywords: 'lemon'
  }, {
    defaultEmoji: '🍌',
    keywords: 'banana'
  }, {
    defaultEmoji: '🍉',
    keywords: 'indian melon'
  }, {
    defaultEmoji: '🍇',
    keywords: 'grape'
  }, {
    defaultEmoji: '🍓',
    keywords: 'strawberry'
  }, {
    defaultEmoji: '🍅',
    keywords: 'tomato'
  }, {
    defaultEmoji: '🥝',
    keywords: 'kiwy'
  }, {
    defaultEmoji: '🥥',
    keywords: 'coconut'
  }, {
    defaultEmoji: '🍒',
    keywords: 'cherry'
  }, {
    defaultEmoji: '🍈',
    keywords: 'melon'
  }, {
    defaultEmoji: '🫐',
    keywords: 'blueberry'
  }, {
    defaultEmoji: '🍆',
    keywords: 'eggplant'
  }, {
    defaultEmoji: '🥦',
    keywords: 'broccoli'
  }, {
    defaultEmoji: '🥬',
    keywords: 'lettuce'
  }, {
    defaultEmoji: '🥑',
    keywords: 'avocado'
  }, {
    defaultEmoji: '🌶️',
    keywords: 'pepper'
  }, {
    defaultEmoji: '🫑',
    keywords: 'bell pepper'
  }, {
    defaultEmoji: '🌽',
    keywords: 'corn'
  }, {
    defaultEmoji: '🥕',
    keywords: 'carrot'
  }, {
    defaultEmoji: '🥖',
    keywords: 'bread'
  }, {
    defaultEmoji: '🍞',
    keywords: 'bread'
  }, {
    defaultEmoji: '🥯',
    keywords: 'donut dumpling'
  }, {
    defaultEmoji: '🥔',
    keywords: 'potato'
  }, {
    defaultEmoji: '🧅',
    keywords: 'onion'
  }, {
    defaultEmoji: '🧄',
    keywords: 'garlic'
  }, {
    defaultEmoji: '🧀',
    keywords: 'cheese'
  }, {
    defaultEmoji: '🍳',
    keywords: 'egg'
  }, {
    defaultEmoji: '🥩',
    keywords: 'meet'
  }, {
    defaultEmoji: '🥓',
    keywords: 'bacon'
  }, {
    defaultEmoji: '🥪',
    keywords: 'sandwich'
  }, {
    defaultEmoji: '🍕',
    keywords: 'pizza'
  }, {
    defaultEmoji: '🍟',
    keywords: 'fries'
  }, {
    defaultEmoji: '🍔',
    keywords: 'hamburger'
  }, {
    defaultEmoji: '🌭',
    keywords: 'sandwich hotdog'
  }, {
    defaultEmoji: '🦴',
    keywords: 'bone'
  }, {
    defaultEmoji: '🍗',
    keywords: 'chicken'
  }, {
    defaultEmoji: '🌮',
    keywords: 'sandwich'
  }, {
    defaultEmoji: '🍣',
    keywords: 'cheese cake'
  }, {
    defaultEmoji: '🍜',
    keywords: 'spaghetti'
  }, {
    defaultEmoji: '🍚',
    keywords: 'rice'
  }, {
    defaultEmoji: '🍰',
    keywords: 'cheesecake'
  }, {
    defaultEmoji: '🍦',
    keywords: 'ice cream'
  }, {
    defaultEmoji: '🍧',
    keywords: 'ice cream'
  }, {
    defaultEmoji: '🍿',
    keywords: 'pop corn'
  }, {
    defaultEmoji: '🍫',
    keywords: 'chocolate'
  }, {
    defaultEmoji: '🍩',
    keywords: 'donut'
  }, {
    defaultEmoji: '🍪',
    keywords: 'cookies'
  }, {
    defaultEmoji: '🍺',
    keywords: 'beer'
  }, {
    defaultEmoji: '🍷',
    keywords: 'wine'
  }, {
    defaultEmoji: '🧋',
    keywords: 'ice latte'
  }]
}, {
  id: 'Sport & Music',
  emojis: [{
    defaultEmoji: '⚽️',
    keywords: 'ball football soccer'
  }, {
    defaultEmoji: '🏀',
    keywords: 'basketball'
  }, {
    defaultEmoji: '🏈',
    keywords: 'football'
  }, {
    defaultEmoji: '⚾️',
    keywords: 'baseball'
  }, {
    defaultEmoji: '🥎',
    keywords: 'tennis'
  }, {
    defaultEmoji: '🎾',
    keywords: 'tennis'
  }, {
    defaultEmoji: '🏐',
    keywords: 'volleyball'
  }, {
    defaultEmoji: '🪃',
    keywords: 'boomerang'
  }, {
    defaultEmoji: '🥍',
    keywords: 'badminton'
  }, {
    defaultEmoji: '🏒',
    keywords: 'hokey'
  }, {
    defaultEmoji: '🏑',
    keywords: 'golf'
  }, {
    defaultEmoji: '🏸',
    keywords: 'badminton'
  }, {
    defaultEmoji: '🏓',
    keywords: 'table tennis'
  }, {
    defaultEmoji: '🪀',
    keywords: 'yo yo'
  }, {
    defaultEmoji: '🎱',
    keywords: 'snoker biliard'
  }, {
    defaultEmoji: '🏹',
    keywords: 'bow'
  }, {
    defaultEmoji: '🤿',
    keywords: 'diving'
  }, {
    defaultEmoji: '🥊',
    keywords: 'kick boxing box'
  }, {
    defaultEmoji: '🥋',
    keywords: 'karate'
  }, {
    defaultEmoji: '⛸️',
    keywords: 'skate'
  }, {
    defaultEmoji: '🛹',
    keywords: 'skate'
  }, {
    defaultEmoji: '🏆',
    keywords: 'cup'
  }, {
    defaultEmoji: '🥇',
    keywords: 'first'
  }, {
    defaultEmoji: '🥈',
    keywords: 'second'
  }, {
    defaultEmoji: '🥉',
    keywords: 'third'
  }, {
    defaultEmoji: '🎭',
    keywords: 'show movie theater'
  }, {
    defaultEmoji: '🎨',
    keywords: 'painting colors'
  }, {
    defaultEmoji: '🎬',
    keywords: 'movie film'
  }, {
    defaultEmoji: '🎤',
    keywords: 'mic microphone sing song music'
  }, {
    defaultEmoji: '🎧',
    keywords: 'headphone earbud sound '
  }, {
    defaultEmoji: '🎼',
    keywords: 'melody sol key'
  }, {
    defaultEmoji: '🎹',
    keywords: 'key piano '
  }, {
    defaultEmoji: '🥁',
    keywords: 'drum'
  }, {
    defaultEmoji: '🎯',
    keywords: 'dart'
  }, {
    defaultEmoji: '♟️',
    keywords: 'chess'
  }, {
    defaultEmoji: '🎲',
    keywords: 'mench'
  }, {
    defaultEmoji: '🎻',
    keywords: 'violin'
  }, {
    defaultEmoji: '🎸',
    keywords: 'quitar'
  }, {
    defaultEmoji: '🎳',
    keywords: 'bowling'
  }, {
    defaultEmoji: '🎮',
    keywords: 'game joystick'
  }, {
    defaultEmoji: '🧩',
    keywords: 'puzzle'
  }]
}, {
  id: 'Vehicles & buildings',
  emojis: [{
    defaultEmoji: '🚗',
    keywords: 'car veichle'
  }, {
    defaultEmoji: '🚕',
    keywords: 'texi car'
  }, {
    defaultEmoji: '🚌',
    keywords: 'bus'
  }, {
    defaultEmoji: '🏎️',
    keywords: 'f1 sport car'
  }, {
    defaultEmoji: '🚒',
    keywords: 'firefighters'
  }, {
    defaultEmoji: '🦼',
    keywords: 'wheelchair'
  }, {
    defaultEmoji: '🚜',
    keywords: 'tractor'
  }, {
    defaultEmoji: '🚛',
    keywords: 'truck'
  }, {
    defaultEmoji: '🛴',
    keywords: 'bike scooter'
  }, {
    defaultEmoji: '🚲',
    keywords: 'bike'
  }, {
    defaultEmoji: '🛵',
    keywords: 'motorcycle bike '
  }, {
    defaultEmoji: '🏍️',
    keywords: 'motorcycle bike'
  }, {
    defaultEmoji: '🚨',
    keywords: 'tocsin'
  }, {
    defaultEmoji: '🚔',
    keywords: 'police'
  }, {
    defaultEmoji: '🚖',
    keywords: 'taxi'
  }, {
    defaultEmoji: '🚅',
    keywords: 'train subway'
  }, {
    defaultEmoji: '🚄',
    keywords: 'train subway'
  }, {
    defaultEmoji: '🚈',
    keywords: 'train subway'
  }, {
    defaultEmoji: '🚂',
    keywords: 'train subway'
  }, {
    defaultEmoji: '✈️',
    keywords: 'airplane'
  }, {
    defaultEmoji: '🚁',
    keywords: 'helicopter'
  }, {
    defaultEmoji: '🛸',
    keywords: 'ufo'
  }, {
    defaultEmoji: '🚀',
    keywords: 'rocket'
  }, {
    defaultEmoji: '🛰️',
    keywords: 'satellite'
  }, {
    defaultEmoji: '⛴️',
    keywords: 'crouse'
  }, {
    defaultEmoji: '🛳️',
    keywords: 'crouse'
  }, {
    defaultEmoji: '🛥️',
    keywords: 'crouse'
  }, {
    defaultEmoji: '⚓️',
    keywords: 'anchor'
  }, {
    defaultEmoji: '🪝',
    keywords: 'rose'
  }, {
    defaultEmoji: '🗽',
    keywords: 'ny big apple new york'
  }, {
    defaultEmoji: '🗿',
    keywords: 'moya'
  }, {
    defaultEmoji: '⛽️',
    keywords: 'gas station'
  }, {
    defaultEmoji: '🏰',
    keywords: 'disneyland'
  }, {
    defaultEmoji: '🗻',
    keywords: 'mountain'
  }, {
    defaultEmoji: '🏢',
    keywords: 'building'
  }, {
    defaultEmoji: '🏭',
    keywords: 'building'
  }, {
    defaultEmoji: '🏬',
    keywords: 'building'
  }, {
    defaultEmoji: '🏣',
    keywords: 'hospital'
  }, {
    defaultEmoji: '🛣️',
    keywords: 'roud path'
  }, {
    defaultEmoji: '🕋',
    keywords: 'kaaba'
  }, {
    defaultEmoji: '⛩️',
    keywords: 'japan china'
  }, {
    defaultEmoji: '🕌',
    keywords: 'mosque'
  }, {
    defaultEmoji: '⛪️',
    keywords: 'mosque palce'
  }]
}, {
  id: 'Things',
  emojis: [{
    defaultEmoji: '⌚️',
    keywords: 'clock time'
  }, {
    defaultEmoji: '📱',
    keywords: 'phone mobile'
  }, {
    defaultEmoji: '💻',
    keywords: 'computer laptop'
  }, {
    defaultEmoji: '⌨️',
    keywords: 'keyboard type typing'
  }, {
    defaultEmoji: '🖥️',
    keywords: 'computer pc '
  }, {
    defaultEmoji: '🖨️',
    keywords: 'printer scanner'
  }, {
    defaultEmoji: '🖱️',
    keywords: 'mouse trackpad'
  }, {
    defaultEmoji: '🖲️',
    keywords: 'joystick'
  }, {
    defaultEmoji: '📸',
    keywords: 'camera'
  }, {
    defaultEmoji: '💿',
    keywords: 'cd '
  }, {
    defaultEmoji: '💾',
    keywords: 'driver'
  }, {
    defaultEmoji: '🕹️',
    keywords: 'joy stick joystick'
  }, {
    defaultEmoji: '📹',
    keywords: 'camera'
  }, {
    defaultEmoji: '🎥',
    keywords: 'camera'
  }, {
    defaultEmoji: '📞',
    keywords: 'phone telphone'
  }, {
    defaultEmoji: '☎️',
    keywords: 'phone telphone'
  }, {
    defaultEmoji: '📠',
    keywords: 'fax pinter'
  }, {
    defaultEmoji: '📺',
    keywords: 'tv television'
  }, {
    defaultEmoji: '⏱️',
    keywords: 'timer stopwatch'
  }, {
    defaultEmoji: '🧭',
    keywords: 'compass'
  }, {
    defaultEmoji: '🎙️',
    keywords: 'mic microphone'
  }, {
    defaultEmoji: '📻',
    keywords: 'radio'
  }, {
    defaultEmoji: '⌛️',
    keywords: 'hourglass time'
  }, {
    defaultEmoji: '💵',
    keywords: 'money cash'
  }, {
    defaultEmoji: '🛢️',
    keywords: 'window'
  }, {
    defaultEmoji: '🧯',
    keywords: 'fire extinguisher'
  }, {
    defaultEmoji: '💰',
    keywords: 'money cash'
  }, {
    defaultEmoji: '💎',
    keywords: 'gem'
  }, {
    defaultEmoji: '⚖️',
    keywords: 'judge'
  }, {
    defaultEmoji: '🪛',
    keywords: 'guitar'
  }, {
    defaultEmoji: '🔧',
    keywords: 'pickle wrench'
  }, {
    defaultEmoji: '🔩',
    keywords: 'bolt and nut'
  }, {
    defaultEmoji: '🪚',
    keywords: 'saw'
  }, {
    defaultEmoji: '🧲',
    keywords: 'magnet'
  }, {
    defaultEmoji: '🔫',
    keywords: 'gun'
  }, {
    defaultEmoji: '💣',
    keywords: 'bomg bang'
  }, {
    defaultEmoji: '🧨',
    keywords: 'tnt bomb bang'
  }, {
    defaultEmoji: '🔪',
    keywords: 'knife knives'
  }, {
    defaultEmoji: '🧬',
    keywords: 'dna'
  }, {
    defaultEmoji: '🦠',
    keywords: 'vairus varus'
  }, {
    defaultEmoji: '🌡️',
    keywords: 'Thermometer'
  }, {
    defaultEmoji: '🧻',
    keywords: 'toolet paper'
  }, {
    defaultEmoji: '🧼',
    keywords: 'soup'
  }, {
    defaultEmoji: '📤',
    keywords: 'upload'
  }, {
    defaultEmoji: '📥',
    keywords: 'download'
  }, {
    defaultEmoji: '🎉',
    keywords: 'suprise'
  }, {
    defaultEmoji: '🔎',
    keywords: 'search explore'
  }, {
    defaultEmoji: '🔓',
    keywords: 'unlock'
  }, {
    defaultEmoji: '🔒',
    keywords: 'lock'
  }, {
    defaultEmoji: '📏',
    keywords: 'ruler'
  }]
}];

var styles$2 = {"container":"_main-module__container__2p_SA","body":"_main-module__body__31fTd","section":"_main-module__section__2nfvj","emojis":"_main-module__emojis__2Ipt5"};

var Main = function Main(_ref) {
  var setVisibility = _ref.setVisibility,
      visibility = _ref.visibility,
      EmojiClickedHandler = _ref.EmojiClickedHandler,
      style = _ref.style,
      className = _ref.className;
  React__default.useEffect(function () {
    var ignoreClickOnMeElement = document.getElementById('react-customizable-emojibox');
    document.addEventListener('click', function (event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

      if (!isClickInsideElement && visibility) {
        setVisibility(false);
        visibility = false;
      }
    });
  });

  var _useState = React.useState(window ? window.localStorage.getItem('RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY') ? JSON.parse(window.localStorage.getItem('RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY')) : [] : []),
      recently = _useState[0],
      setRecently = _useState[1];

  var _useState2 = React.useState(sections),
      filteredEmojis = _useState2[0],
      setFilteredEmojis = _useState2[1];

  var filterHandler = function filterHandler(searchedText) {
    var sectionsCopy = JSON.parse(JSON.stringify(sections));
    sectionsCopy.forEach(function (item) {
      item.emojis = item.emojis.filter(function (item) {
        return item.keywords.includes(searchedText);
      });
    });
    setFilteredEmojis(JSON.parse(JSON.stringify(sectionsCopy)));
  };

  var recentlyHandler = function recentlyHandler(emoji) {
    var recentlyCopy = recently;
    var isEmojiExisted = recently.find(function (item) {
      return item.defaultEmoji === emoji;
    });

    if (isEmojiExisted) {
      recentlyCopy.splice(recentlyCopy.findIndex(function (item) {
        return item.defaultEmoji === emoji;
      }), 1);
    }

    recentlyCopy.unshift({
      defaultEmoji: emoji
    });

    if (recentlyCopy.length > 14) {
      recentlyCopy.pop();
    }

    setRecently(JSON.parse(JSON.stringify(recentlyCopy)));
    window.localStorage.setItem('RECAT-CUSTOMIZABLE-EMOJIBOX-RECENTLY', JSON.stringify(recentlyCopy));
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.container + " " + (className && className),
    style: style && style,
    id: "react-customizable-emojibox"
  }, /*#__PURE__*/React__default.createElement(Header, {
    filterHandler: filterHandler
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.body,
    id: "emojibox-sections-container"
  }, recently.length !== 0 && /*#__PURE__*/React__default.createElement("div", {
    id: "Recently",
    className: styles$2.section
  }, /*#__PURE__*/React__default.createElement("p", null, "Recently"), /*#__PURE__*/React__default.createElement("div", {
    className: styles$2.emojis
  }, recently.map(function (item) {
    return /*#__PURE__*/React__default.createElement(Emoji, {
      key: item.defaultEmoji,
      allArray: item.allArray,
      defaultEmoji: item.defaultEmoji,
      EmojiClickHandler: EmojiClickedHandler,
      recentlyHandler: recentlyHandler
    });
  }))), filteredEmojis.map(function (item) {
    return item.emojis.length !== 0 && /*#__PURE__*/React__default.createElement("div", {
      id: item.id,
      className: styles$2.section,
      key: item.id
    }, /*#__PURE__*/React__default.createElement("p", null, item.id), /*#__PURE__*/React__default.createElement("div", {
      className: styles$2.emojis
    }, item.emojis.map(function (item) {
      return /*#__PURE__*/React__default.createElement(Emoji, {
        key: item.defaultEmoji,
        allArray: item.allArray,
        defaultEmoji: item.defaultEmoji,
        EmojiClickHandler: EmojiClickedHandler,
        recentlyHandler: recentlyHandler
      });
    })));
  })));
};

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var GlobalStyles = styledComponents.createGlobalStyle(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n    :root{\n        --background:", ";\n        --borderColor:", ";\n        --iconColor:", ";\n        --activeIconColor:", ";\n        --searchInputBC:", ";\n        --searchInputColor:", ";\n    }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.background;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.borderColor;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.iconColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.activeIconColor;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.searchInputBC;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.searchInputColor;
});

var GlassTheme = {
  background: 'rgba(155, 153, 153, 0.099)',
  borderColor: '#8a8a8a70',
  iconColor: '#8a8a8a70',
  activeIconColor: '#dadada',
  searchInputBC: '#93949440',
  searchInputColor: '#c9c9c98e'
};
var LightTheme = {
  background: '#fff',
  borderColor: '#a9a9a970',
  iconColor: '#949494',
  activeIconColor: '#131313',
  searchInputBC: '#e0e0e0',
  searchInputColor: '#00000080'
};
var DarkTheme = {
  background: '#141414',
  borderColor: '#8a8a8a70',
  iconColor: '#8a8a8a70',
  activeIconColor: '#A1A1A1',
  searchInputBC: '#93949440',
  searchInputColor: '#A1A1A1'
};
var MaterialTheme = {
  background: '#020039',
  borderColor: '#8a8a8a70',
  iconColor: '#8a8a8a70',
  activeIconColor: '#dadada',
  searchInputBC: '#93949440',
  searchInputColor: '#c9c9c98e'
};

var EmojiBox = function EmojiBox(props) {
  var visibility = props.visibility,
      setVisibility = props.setVisibility,
      theme = props.theme,
      EmojiClickedHandler = props.EmojiClickedHandler,
      style = props.style,
      className = props.className;
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, visibility && /*#__PURE__*/React__default.createElement(styledComponents.ThemeProvider, {
    theme: theme ? theme : GlassTheme
  }, /*#__PURE__*/React__default.createElement(GlobalStyles, null), /*#__PURE__*/React__default.createElement(Main, {
    visibility: visibility,
    setVisibility: setVisibility,
    EmojiClickedHandler: EmojiClickedHandler,
    style: style,
    className: className
  })));
};

var index = React__default.memo(EmojiBox);

exports.DarkTheme = DarkTheme;
exports.GlassTheme = GlassTheme;
exports.LightTheme = LightTheme;
exports.MaterialTheme = MaterialTheme;
exports.default = index;
//# sourceMappingURL=index.js.map
