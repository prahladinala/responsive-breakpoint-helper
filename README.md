# 📏 Responsive Breakpoint Helper

![Responsive Breakpoint Helper](https://media.giphy.com/media/26Fxy3Iz1ari8oytO/giphy.gif) <!-- Replace this with an actual GIF or relevant image -->

A lightweight npm package that provides a simple API to check the current responsive breakpoint (like `isMobile()`, `isTablet()`, etc.) based on common screen sizes. Perfect for conditionally rendering components in React or other frameworks! 🚀

## 📦 Installation

Install the package via npm:

```bash
npm install responsive-breakpoint-helper
```

Or using yarn:

```bash
yarn add responsive-breakpoint-helper
```

## 🛠️ Usage

Import the functions you need and start using them in your project:

```bash
const { isMobile, isTablet, isLaptop, isDesktop } = require('responsive-breakpoint-helper');

if (isMobile()) {
  console.log('You are on a mobile device!');
}
```

### Available Functions

- `isMobile()` 📱 - Returns true if the screen width is within mobile range.
- `isTablet()` 📲 - Returns true if the screen width is within tablet range.
- `isLaptop()` 💻 - Returns true if the screen width is within laptop range.
- `isDesktop()` 🖥️ - Returns true if the screen width is within desktop range.

## 🧩 Breakpoint Ranges

The breakpoints are defined as follows:

| Device  | Max Width                 |
| ------- | ------------------------- |
| Mobile  | `<= 480px`                |
| Tablet  | `> 480px` and `<= 768px`  |
| Laptop  | `> 768px` and `<= 1024px` |
| Desktop | `> 1024px`                |

These can be easily customized within the package if your project requires different breakpoints! 🎯

## ✨ Features

- ✅ Lightweight: Minimal impact on your bundle size.
- 📱 Responsive: Works out-of-the-box with popular responsive breakpoints.
- ⚡ Easy to Use: Simple API for quick integration.
- 🛠️ Framework Agnostic: Use with React, Vue, Angular, or any other JavaScript framework.

## 📖 Example

Here's a simple example of using `Responsive Breakpoint Helper` in a React component:

```js
import React from "react";
import { isMobile, isTablet } from "responsive-breakpoint-helper";

const ResponsiveComponent = () => {
  if (isMobile()) {
    return <MobileView />;
  }

  if (isTablet()) {
    return <TabletView />;
  }

  return <DesktopView />;
};

export default ResponsiveComponent;
```

## 🧪 Running Tests

To run tests and ensure everything is working correctly, use:

```bash
npm test
```

Make sure to have Jest installed and properly configured!

## 🤝 Contributing

Contributions are welcome! Please check out the issues to see what needs help or submit a new issue if you find one.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## 📄 License

This project is licensed under the ISC License

## Made with ❤️ by Prahlad Inala

Enjoy using the Responsive Breakpoint Helper! 😊🚀
