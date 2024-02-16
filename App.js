import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

// Header
//  - Logo
//  - Title
//  - Nav List
//      - Home
//      - About US
//      - Contact US
//      - Contact US
//  -Sign button
//
// Body
//  - Search Bar
//  - Restaurant
//      - Cards
//
// Footer
//  - Links

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
