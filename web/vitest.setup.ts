import "@testing-library/jest-dom";
import "regenerator-runtime/runtime";
/**
 * fix: `matchMedia` not present, legacy browsers require a polyfill
 */
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
