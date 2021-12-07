/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function validateForm() {\n  function validateEmail() {\n    const email = document.querySelector('.email');\n    if (!email.checkValidity()) {\n      document.querySelector('.email-error').textContent = email.validationMessage;\n      return false;\n    }\n    document.querySelector('.email-error').textContent = '';\n    return true;\n  }\n  function validateCountry() {\n    const country = document.querySelector('.country');\n    console.log(country.value);\n    if (!country.checkValidity()) {\n      document.querySelector('.country-error').textContent = country.validationMessage;\n      return false;\n    }\n    if (country.value === 'unitedstates' || country.value === 'united states') {\n      document.querySelector('.country-error').textContent = '';\n      return true;\n    }\n    if (country.value !== 'unitedstates' || country.value !== 'united states') {\n      //    just one country for the sake of simplicity, in an actual form, this would be a for loop\n      //    testing our input against the loop variables.\n      //    I.E: if(country.value.toLowerCase() === countries[i])\n      document.querySelector('.country-error').textContent = 'enter a valid country(only the united states is valid)';\n      //    country.setCustomValidity('enter a valid country(only the united states is valid)');\n      return false;\n    }\n  }\n  const submit = document.querySelector('.submit');\n  submit.addEventListener('click', () => {\n    console.log('click');\n    const email = validateEmail();\n    const country = validateCountry();\n  });\n}\nvalidateForm();\n\n\n//# sourceURL=webpack://O-Forms-Practice/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;