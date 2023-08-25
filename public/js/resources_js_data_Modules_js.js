"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_data_Modules_js"],{

/***/ "./resources/js/data/Modules.js":
/*!**************************************!*\
  !*** ./resources/js/data/Modules.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getModuleByID: () => (/* binding */ getModuleByID)
/* harmony export */ });
var getModuleByID = function getModuleByID(id) {
  return fetch("http://localhost:8000/api/modules/" + id, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'bearer' + localStorage.getItem('token'),
      'Accept': 'application/json'
    })
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data;
  });
};

/***/ })

}]);