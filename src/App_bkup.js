import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import Header from "./views/header/Header";
import Section_initial from "./views/section_initial";

import Footer from "./views/footer/footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Section_initial />
    {/* <Section_initial />
    <Section_0 />
    <Section_1 />
    <Section_2 />
    <Section_3 />
    <Section_4 />
    <Section_5 /> */}
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
