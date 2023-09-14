import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Asider from "./components/Asider";
import Boxs from "./components/Boxs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Content />
        <Asider/>
      </div>
      <div className="box-content">
        <Boxs/>
        <Boxs/>
        <Boxs/>
        <Boxs/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
