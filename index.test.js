// index.test.js
const { isMobile, isTablet, isLaptop, isDesktop } = require("./index");

// Mock the window.innerWidth for testing different breakpoints
const setWindowWidth = (width) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });

  // Trigger a resize event to update the window dimensions
  window.dispatchEvent(new Event("resize"));
};

describe("Responsive Breakpoint Helper", () => {
  test("isMobile() should return true for mobile widths", () => {
    setWindowWidth(480);
    expect(isMobile()).toBe(true);

    setWindowWidth(320);
    expect(isMobile()).toBe(true);
  });

  test("isTablet() should return true for tablet widths", () => {
    setWindowWidth(600);
    expect(isTablet()).toBe(true);

    setWindowWidth(768);
    expect(isTablet()).toBe(true);
  });

  test("isLaptop() should return true for laptop widths", () => {
    setWindowWidth(1024);
    expect(isLaptop()).toBe(true);

    setWindowWidth(800);
    expect(isLaptop()).toBe(true); // Correct expectation: falls into laptop
  });

  test("isDesktop() should return true for desktop widths", () => {
    setWindowWidth(1200);
    expect(isDesktop()).toBe(true);

    setWindowWidth(1400);
    expect(isDesktop()).toBe(true);
  });

  test("Functions should return false for other breakpoints", () => {
    setWindowWidth(500); // falls into tablet
    expect(isMobile()).toBe(false);
    expect(isLaptop()).toBe(false);
    expect(isDesktop()).toBe(false);
  });
});
