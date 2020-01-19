webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/ShowTodo/ShowTodo.js":
/*!*****************************************!*\
  !*** ./components/ShowTodo/ShowTodo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TodoItem */ "./components/ShowTodo/TodoItem.js");





var _jsxFileName = "D:\\XAMPP\\htdocs\\learning\\nextjs\\nextjs_todo\\components\\ShowTodo\\ShowTodo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var ShowTodo =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ShowTodo, _Component);

  function ShowTodo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ShowTodo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ShowTodo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ShowTodo, [{
    key: "render",
    value: function render() {
      var _this = this;

      //console.log("Show: ",this.props.todos)
      console.log("Test: ", this.props.data);
      return this.props.data.map(function (todo) {
        return __jsx(_TodoItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: todo.id,
          todoItem: todo,
          delTodo: _this.props.delTodos,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        });
      });
    }
  }]);

  return ShowTodo;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShowTodo);

/***/ })

})
//# sourceMappingURL=index.js.545d1fb8a9cb4d0a0bb2.hot-update.js.map