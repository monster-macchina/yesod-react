

document.getElementById("hident4").innerHTML = "This text was added by the Javascript part of the homepage widget.";


$(function() {
  $("#js-commentForm").submit(function(event) {
    event.preventDefault();

    var message = $("#js-createCommentTextarea").val();
    // (Browsers that enforce the "required" attribute on the textarea won't see this alert)
    if (!message) {
      alert("Please fill out the comment form first.");
      return;
    }

    // Make an AJAX request to the server to create a new comment
    $.ajax({
      url: 'http://localhost:3000/comments',
      type: 'POST',
      contentType: "application/json",
      data: JSON.stringify({
        message: message,
      }),
      success: function (data) {
        var newNode = $("<li></li>");
        newNode.text(data.message);
        console.log(data);
        $("#js-commentList").append(newNode);
      },
      error: function (data) {
        console.log("Error creating comment: " + data);
      },
    });

  });
});

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./temp/ChoiceBar.tmp.js":
/*!*******************************!*\
  !*** ./temp/ChoiceBar.tmp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChoiceBar)\n/* harmony export */ });\nfunction ChoiceBar(_ref) {\n  var title = _ref.title,\n    percent = _ref.percent,\n    count = _ref.count,\n    onClickHandler = _ref.onClickHandler;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBar\",\n    onClick: onClickHandler\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Progress\",\n    style: {\n      width: percent + \"%\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarTitle\"\n  }, title)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarBadge\"\n  }, count));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/ChoiceBar.tmp.js?");

/***/ }),

/***/ "./temp/InactiveVoteComposer.tmp.js":
/*!******************************************!*\
  !*** ./temp/InactiveVoteComposer.tmp.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InactiveVoteComposer)\n/* harmony export */ });\nfunction InactiveVoteComposer(_ref) {\n  var onActivate = _ref.onActivate;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Row VotesRow Selectable\",\n    onClick: onActivate\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"Title\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"Emphasis\"\n  }, \"What do \", /*#__PURE__*/React.createElement(\"b\", null, \"you\"), \" want to know ?\"), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Badge\"\n  }, \"Add Voting\")), /*#__PURE__*/React.createElement(\"p\", null, \"Click here to leave your own question.\"));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/InactiveVoteComposer.tmp.js?");

/***/ }),

/***/ "./temp/VoteComposer.tmp.js":
/*!**********************************!*\
  !*** ./temp/VoteComposer.tmp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VoteComposer)\n/* harmony export */ });\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction VoteComposer(_ref) {\n  var onSave = _ref.onSave,\n    onDeactivate = _ref.onDeactivate;\n  var _React$useState = React.useState(\"\"),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    voteTitle = _React$useState2[0],\n    setVoteTitle = _React$useState2[1];\n  var _React$useState3 = React.useState(\"\"),\n    _React$useState4 = _slicedToArray(_React$useState3, 2),\n    voteDescription = _React$useState4[0],\n    setVoteDescription = _React$useState4[1];\n  var _React$useState5 = React.useState([\"\"]),\n    _React$useState6 = _slicedToArray(_React$useState5, 2),\n    choices = _React$useState6[0],\n    setChoices = _React$useState6[1];\n  var titleInputRef = React.useRef();\n  function updateChoice(choiceIx, choiceTitle) {\n    var newChoices = choices.map(function (c, ix) {\n      return ix === choiceIx ? choiceTitle : c;\n    });\n    if (choices[choiceIx].length === 0 && choiceIx === choices.length - 1) {\n      newChoices.push(\"\");\n    }\n    setChoices(newChoices);\n  }\n  function save() {\n    var newVote = {\n      id: \"vote_\".concat(Date.now()),\n      title: voteTitle,\n      description: voteDescription,\n      choices: choices.slice(0, -1).map(function (c, ix) {\n        return {\n          title: c,\n          id: \"choice_\".concat(ix),\n          count: 0\n        };\n      })\n    };\n    onSave(newVote);\n  }\n  function reset() {\n    setVoteTitle(\"\");\n    setVoteDescription(\"\");\n    setChoices([\"\"]);\n    titleInputRef.current.focus();\n  }\n  var formCompleted = voteTitle && voteDescription && choices.length > 1 && choices.every(function (c, ix) {\n    return ix === choices.length - 1 || c.length > 0;\n  });\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Row VoteComposer Spacer\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Head\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"Title\"\n  }, /*#__PURE__*/React.createElement(\"input\", {\n    className: \"Title\",\n    autoFocus: true,\n    name: \"title\",\n    type: \"text\",\n    placeholder: \"What do you want to know ?\",\n    value: voteTitle,\n    onChange: function onChange(e) {\n      return setVoteTitle(e.target.value);\n    },\n    ref: titleInputRef\n  })), /*#__PURE__*/React.createElement(\"input\", {\n    className: \"Description\",\n    name: \"description\",\n    type: \"text\",\n    placeholder: \"Describe your question in one sentence here\",\n    value: voteDescription,\n    onChange: function onChange(e) {\n      return setVoteDescription(e.target.value);\n    }\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Body\"\n  }, choices.map(function (choice, ix) {\n    return /*#__PURE__*/React.createElement(\"input\", {\n      className: \"Choice\",\n      type: \"text\",\n      key: \"choices_\".concat(ix),\n      value: choice,\n      placeholder: \"Choice #".concat(ix + 1),\n      onChange: function onChange(event) {\n        return updateChoice(ix, event.target.value);\n      }\n    });\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ButtonBar\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    disabled: !formCompleted,\n    className: \"Button\",\n    onClick: save\n  }, \"Save\"), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"Button\",\n    onClick: onDeactivate\n  }, \"Cancel\"), /*#__PURE__*/React.createElement(\"button\", {\n    className: \"Button\",\n    onClick: reset\n  }, \"Reset\"))));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/VoteComposer.tmp.js?");

/***/ }),

/***/ "./temp/VoteController.tmp.js":
/*!************************************!*\
  !*** ./temp/VoteController.tmp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VoteController)\n/* harmony export */ });\n/* harmony import */ var _VoteList_tmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoteList.tmp.js */ \"./temp/VoteList.tmp.js\");\n/* harmony import */ var _VoteComposer_tmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoteComposer.tmp.js */ \"./temp/VoteComposer.tmp.js\");\n/* harmony import */ var _InactiveVoteComposer_tmp_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InactiveVoteComposer.tmp.js */ \"./temp/InactiveVoteComposer.tmp.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\nfunction voteControllerReducer(state, action) {\n  switch (action.type) {\n    case \"SET_CURRENT_VOTE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentVoteId: action.vote.id,\n        voteComposerActive: false\n      });\n    case \"UNSET_CURRENT_VOTE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentVoteId: null\n      });\n    case \"CLOSE_VOTE_COMPOSER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        voteComposerActive: false\n      });\n    case \"OPEN_VOTE_COMPOSER\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        currentVoteId: null,\n        voteComposerActive: true\n      });\n    case \"ADD_VOTE\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        voteComposerActive: false,\n        allVotes: [].concat(_toConsumableArray(state.allVotes), [action.vote])\n      });\n    case \"REGISTER_VOTE\":\n      var vote = action.vote,\n        choice = action.choice;\n      var newVotes = state.allVotes.map(function (v) {\n        return v.id !== vote.id ? v : _objectSpread(_objectSpread({}, vote), {}, {\n          choices: vote.choices.map(function (c) {\n            return c.id !== choice.id ? c : _objectSpread(_objectSpread({}, c), {}, {\n              count: c.count + 1\n            });\n          })\n        });\n      });\n      return _objectSpread(_objectSpread({}, state), {}, {\n        allVotes: newVotes\n      });\n    default:\n      throw new Error(\"Invalid action: \".concat(action.type));\n  }\n}\nfunction VoteController(_ref) {\n  var initialVotes = _ref.initialVotes;\n  var _React$useReducer = React.useReducer(voteControllerReducer, {\n      allVotes: initialVotes,\n      currentVoteId: null,\n      voteComposerActive: false\n    }),\n    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),\n    _React$useReducer2$ = _React$useReducer2[0],\n    allVotes = _React$useReducer2$.allVotes,\n    currentVoteId = _React$useReducer2$.currentVoteId,\n    voteComposerActive = _React$useReducer2$.voteComposerActive,\n    dispatch = _React$useReducer2[1];\n  function setCurrentVote(vote) {\n    dispatch({\n      type: \"SET_CURRENT_VOTE\",\n      vote: vote\n    });\n  }\n  function unsetCurrentVote() {\n    dispatch({\n      type: \"UNSET_CURRENT_VOTE\"\n    });\n  }\n  function closeVoteComposer() {\n    dispatch({\n      type: \"CLOSE_VOTE_COMPOSER\"\n    });\n  }\n  function openVoteComposer() {\n    dispatch({\n      type: \"OPEN_VOTE_COMPOSER\"\n    });\n  }\n  function addVote(vote) {\n    dispatch({\n      type: \"ADD_VOTE\",\n      vote: vote\n    });\n  }\n  function registerVote(vote, choice) {\n    dispatch({\n      type: \"REGISTER_VOTE\",\n      vote: vote,\n      choice: choice\n    });\n  }\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_VoteList_tmp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    allVotes: allVotes,\n    currentVoteId: currentVoteId,\n    onSelectVote: setCurrentVote,\n    onDismissVote: unsetCurrentVote,\n    onRegisterVote: registerVote\n  }), voteComposerActive ? /*#__PURE__*/React.createElement(_VoteComposer_tmp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onDeactivate: closeVoteComposer,\n    onSave: addVote\n  }) : /*#__PURE__*/React.createElement(_InactiveVoteComposer_tmp_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onActivate: openVoteComposer\n  }));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/VoteController.tmp.js?");

/***/ }),

/***/ "./temp/VoteList.tmp.js":
/*!******************************!*\
  !*** ./temp/VoteList.tmp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VoteList)\n/* harmony export */ });\n/* harmony import */ var _VoteSummary_tmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VoteSummary.tmp.js */ \"./temp/VoteSummary.tmp.js\");\n/* harmony import */ var _VotingComponent_tmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VotingComponent.tmp.js */ \"./temp/VotingComponent.tmp.js\");\n\n\nfunction VoteList(_ref) {\n  var allVotes = _ref.allVotes,\n    currentVoteId = _ref.currentVoteId,\n    onSelectVote = _ref.onSelectVote,\n    onRegisterVote = _ref.onRegisterVote,\n    onDismissVote = _ref.onDismissVote;\n  return /*#__PURE__*/React.createElement(\"div\", null, allVotes.map(function (vote) {\n    return vote.id === currentVoteId ? /*#__PURE__*/React.createElement(_VotingComponent_tmp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: vote.id,\n      vote: vote,\n      onDismissVote: onDismissVote,\n      onRegisterChoice: onRegisterVote\n    }) : /*#__PURE__*/React.createElement(_VoteSummary_tmp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: vote.id,\n      vote: vote,\n      onActivate: onSelectVote\n    });\n  }));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/VoteList.tmp.js?");

/***/ }),

/***/ "./temp/VoteSummary.tmp.js":
/*!*********************************!*\
  !*** ./temp/VoteSummary.tmp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VoteSummary)\n/* harmony export */ });\nfunction VoteSummary(_ref) {\n  var vote = _ref.vote,\n    onActivate = _ref.onActivate;\n  var totalVotes = vote.choices.reduce(function (prev, curr) {\n    return prev + curr.count;\n  }, 0);\n  function handleClick() {\n    onActivate(vote);\n  }\n  return /*#__PURE__*/React.createElement(\"div\", {\n    onClick: handleClick,\n    className: \"Row VotesRow Selectable\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"Title\"\n  }, vote.title, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Badge\"\n  }, totalVotes, \" Votes\")), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"Emphasis\"\n  }, vote.description));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/VoteSummary.tmp.js?");

/***/ }),

/***/ "./temp/VotingComponent.tmp.js":
/*!*************************************!*\
  !*** ./temp/VotingComponent.tmp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VotingComponent)\n/* harmony export */ });\n/* harmony import */ var _ChoiceBar_tmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChoiceBar.tmp.js */ \"./temp/ChoiceBar.tmp.js\");\n\nfunction VotingComponent(_ref) {\n  var vote = _ref.vote,\n    onRegisterChoice = _ref.onRegisterChoice,\n    onDismissVote = _ref.onDismissVote;\n  var totalVotes = vote.choices.reduce(function (prev, curr) {\n    return prev + curr.count;\n  }, 0);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Row VotingRow Spacer\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Head\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"Title\"\n  }, vote.title, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Badge\"\n  }, totalVotes, \" Votes\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Description Emphasis\"\n  }, vote.description)), /*#__PURE__*/React.createElement(\"div\", null, vote.choices.map(function (choice) {\n    return /*#__PURE__*/React.createElement(_ChoiceBar_tmp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      key: choice.id,\n      title: choice.title,\n      percent: choice.count * (100 / totalVotes),\n      count: choice.count,\n      onClickHandler: function onClickHandler() {\n        return onRegisterChoice(vote, choice);\n      }\n    });\n  })), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ButtonBar\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Button\",\n    onClick: onDismissVote\n  }, \"Vote later\")));\n}\n\n//# sourceURL=webpack://mythirdapp/./temp/VotingComponent.tmp.js?");

/***/ }),

/***/ "./temp/home.tmp.js":
/*!**************************!*\
  !*** ./temp/home.tmp.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(r) { if (Array.isArray(r)) return r; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nconsole.log(\"JavaScript starts\");\ndocument.getElementById("hident5").innerHTML = \"This text was added by Ralf.\";\nvar Hello = /*#__PURE__*/function (_React$Component) {\n  function Hello() {\n    _classCallCheck(this, Hello);\n    return _callSuper(this, Hello, arguments);\n  }\n  _inherits(Hello, _React$Component);\n  return _createClass(Hello, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, \"Hello, \", this.props.name, \"!\");\n    }\n  }]);\n}(React.Component);\nReactDOM.render( /*#__PURE__*/React.createElement(Hello, {\n  name: \"World\"\n}), document.getElementById("hident6"));\nvar LikeButton1 = /*#__PURE__*/function (_React$Component2) {\n  function LikeButton1(props) {\n    var _this;\n    _classCallCheck(this, LikeButton1);\n    _this = _callSuper(this, LikeButton1, [props]);\n    _this.state = {\n      liked: false\n    };\n    return _this;\n  }\n  _inherits(LikeButton1, _React$Component2);\n  return _createClass(LikeButton1, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n      if (this.state.liked) {\n        return 'You liked this.';\n      }\n      return /*#__PURE__*/React.createElement(\"button\", {\n        onClick: function onClick() {\n          return _this2.setState({\n            liked: true\n          });\n        }\n      }, \"Like\");\n    }\n  }]);\n}(React.Component);\nReactDOM.render( /*#__PURE__*/React.createElement(LikeButton1, null), document.getElementById("hident7"));\nfunction Greeter(props) {\n  var _React$useState = React.useState(\"\"),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    greeting = _React$useState2[0],\n    setGreeting = _React$useState2[1];\n  function handleGreetClick() {\n    alert(\"Hello, \".concat(greeting));\n  }\n  var charsRemaining = props.maxLength - greeting.length;\n  var greetingInvalid = greeting.length == 0 || charsRemaining < 0;\n  return /*#__PURE__*/React.createElement(\"div\", null, \"Greeting:\", /*#__PURE__*/React.createElement(\"span\", null, \" \"), /*#__PURE__*/React.createElement(\"input\", {\n    value: greeting,\n    onChange: function onChange(e) {\n      return setGreeting(e.target.value);\n    }\n  }), /*#__PURE__*/React.createElement(\"span\", null, charsRemaining), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"button\", {\n    disabled: greetingInvalid,\n    onClick: handleGreetClick\n  }, \"Greet\"), /*#__PURE__*/React.createElement(\"span\", null, \" \")));\n}\nReactDOM.render( /*#__PURE__*/React.createElement(Greeter, {\n  maxLength: 20\n}), document.getElementById("hident8"));\nvar HelloWorld = function HelloWorld() {\n  return /*#__PURE__*/React.createElement(\"div\", null, \"Hello, you fat old world!\");\n};\nReactDOM.render( /*#__PURE__*/React.createElement(HelloWorld, null), document.getElementById("hident9"));\nfunction ChoiceBar1(_ref) {\n  var title = _ref.title,\n    percent = _ref.percent;\n  var _React$useState3 = React.useState(percent),\n    _React$useState4 = _slicedToArray(_React$useState3, 2),\n    count = _React$useState4[0],\n    setCount = _React$useState4[1];\n  function handleClick() {\n    setCount(count + 1);\n  }\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBar\",\n    onClick: handleClick\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Progress\",\n    style: {\n      \"width\": count + \"%\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarTitle\"\n  }, title)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarBadge\"\n  }, count));\n}\nReactDOM.render( /*#__PURE__*/React.createElement(ChoiceBar1, {\n  title: \"Progress Bar\",\n  percent: 37\n}), document.getElementById("hident10"));\nfunction ChoiceBar(_ref2) {\n  var title = _ref2.title,\n    percent = _ref2.percent,\n    count = _ref2.count,\n    onClickHandler = _ref2.onClickHandler;\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBar\",\n    onClick: onClickHandler\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Progress\",\n    style: {\n      width: percent + \"%\"\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarTitle\"\n  }, title)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"ChoiceBarBadge\"\n  }, count));\n}\nfunction VotingComponent1(_ref3) {\n  var initialVote = _ref3.vote;\n  var _React$useState5 = React.useState(initialVote),\n    _React$useState6 = _slicedToArray(_React$useState5, 2),\n    vote = _React$useState6[0],\n    setVote = _React$useState6[1];\n  var totalVotes = vote.choices.reduce(function (prev, curr) {\n    return prev + curr.count;\n  }, 0);\n  function registerChoice(choice) {\n    setVote(_objectSpread(_objectSpread({}, vote), {}, {\n      choices: vote.choices.map(function (c) {\n        return choice.id !== c.id ? c : _objectSpread(_objectSpread({}, choice), {}, {\n          count: choice.count + 1\n        });\n      })\n    }));\n  }\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Row VotingRow Spacer\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Head\"\n  }, /*#__PURE__*/React.createElement(\"h1\", {\n    className: \"Title\"\n  }, vote.title, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Badge\"\n  }, totalVotes, \" Votes\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"Description Emphasis\"\n  }, vote.description)), /*#__PURE__*/React.createElement(\"div\", null, vote.choices.map(function (choice) {\n    return /*#__PURE__*/React.createElement(ChoiceBar, {\n      key: choice.id,\n      title: choice.title,\n      percent: choice.count * (100 / totalVotes),\n      count: choice.count,\n      onClickHandler: function onClickHandler() {\n        return registerChoice(choice);\n      }\n    });\n  })));\n}\nvar vote = {\n  title: \"How is your day?\",\n  description: \"Tell me: how has your day been so far?\",\n  choices: [{\n    id: \"choice_1\",\n    title: \"Good\",\n    count: 7\n  }, {\n    id: \"choice_2\",\n    title: \"Bad\",\n    count: 12\n  }, {\n    id: \"choice_3\",\n    title: \"Not sure yet\",\n    count: 1\n  }]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactDOM.render( /*#__PURE__*/React.createElement(VotingComponent1, {\n  vote: vote\n}), document.getElementById("hident11")));\ndocument.write(\"Java Script loaded\");\nconsole.log(\"Java Script loaded\");\n\n//# sourceURL=webpack://mythirdapp/./temp/home.tmp.js?");

/***/ }),

/***/ "./temp/index.tmp.js":
/*!***************************!*\
  !*** ./temp/index.tmp.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_tmp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.tmp.js */ \"./temp/home.tmp.js\");\n/* harmony import */ var _VoteController_tmp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VoteController.tmp.js */ \"./temp/VoteController.tmp.js\");\n\n\nvar allVotes = [{\n  id: \"vote_1\",\n  title: \"How is your day?\",\n  description: \"Tell me: how has your day been so far?\",\n  choices: [{\n    id: \"choice_1\",\n    title: \"Good\",\n    count: 7\n  }, {\n    id: \"choice_2\",\n    title: \"Bad\",\n    count: 12\n  }, {\n    id: \"choice_3\",\n    title: \"Not sure yet\",\n    count: 1\n  }]\n}, {\n  id: \"vote_2\",\n  title: \"Programming languages\",\n  description: \"What is your preferred language?\",\n  choices: [{\n    id: \"choice_1\",\n    title: \"JavaScript\",\n    count: 5\n  }, {\n    id: \"choice_2\",\n    title: \"Java\",\n    count: 9\n  }, {\n    id: \"choice_3\",\n    title: \"Plain english\",\n    count: 17\n  }]\n}];\nReactDOM.render( /*#__PURE__*/React.createElement(_VoteController_tmp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  initialVotes: allVotes\n}), document.getElementById("hident12"));\n\n//# sourceURL=webpack://mythirdapp/./temp/index.tmp.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./temp/index.tmp.js");
/******/ 	
/******/ })()
;