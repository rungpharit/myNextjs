webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/picture/index.js":
/*!*************************************!*\
  !*** ./components/picture/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "D:\\XAMPP\\htdocs\\learning\\nextjs\\nextjs_todo\\components\\picture\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Picture =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Picture, _Component);

  function Picture(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Picture);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Picture).call(this, props));
    _this.state = {
      img: '',
      img2: ''
    };
    _this.submitpicture = _this.submitpicture.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.getPicture = _this.getPicture.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Picture, [{
    key: "submitpicture",
    value: function submitpicture(e) {
      var _this2 = this;

      e.preventDefault();
      var fd = new FormData();
      fd.append('image', e.target.someExpressFiles.files[0], e.target.someExpressFiles.files[0].name);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.someExpressFiles.files[0]);

      reader.onload = function (e) {
        console.log('ee: ', e);
        console.log('img: ', e.target.result);
        console.log('img type: ', typeof e.target.result);

        _this2.setState({
          img: e.target.result
        });
      };

      console.log('file: ', e.target.someExpressFiles.files[0]);
      var image = e.target.someExpressFiles.files[0];
      console.log('image: ', image);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/api/upload/', fd).then(function (response) {
        console.log('res:', response);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "getPicture",
    value: function getPicture() {
      var _this3 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPicture$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("".concat(this.state.img2));
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('http://localhost:5000/api/upload/').then(function (response) {
                console.log('resdfdd:', response.data.img.data.data);
                console.log('tetet: ', typeof response.data.img.data);
                var buff = new Buffer(response.data.img.data.data);
                console.log('tetet2: ', typeof buff);
                var base64data = buff.toString('base64');
                console.log('tetet: ', typeof base64data); //   let objJsonStr = JSON.stringify(response.data.img.data.data);
                // let objJsonB64 = Buffer.from(objJsonStr).toString("base64");
                // console.log('tetet: ',typeof(objJsonB64))

                _this3.setState({
                  img2: base64data
                });

                console.log('img2: ', _this3.state.img2);
              }); // console.log('yyy: ',this.state.img2)

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("data:image/jpeg;base64,".concat(this.state.img2));
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("button", {
        name: "tt",
        value: "test",
        onClick: this.getPicture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      })), __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "With ", __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "\"express\""), " npm package"), __jsx("form", {
        onSubmit: this.submitpicture,
        encType: "multipart/form-data",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Text field title: ", __jsx("input", {
        type: "text",
        name: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "File: ", __jsx("input", {
        type: "file",
        name: "someExpressFiles",
        multiple: "multiple",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), __jsx("input", {
        type: "submit",
        value: "Upload",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx("img", {
        src: "data:image/jpeg;base64,".concat(this.state.img2),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      })), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("img", {
        src: this.state.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
    }
  }]);

  return Picture;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Picture);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ })

})
//# sourceMappingURL=index.js.768534afab16f54a7a37.hot-update.js.map