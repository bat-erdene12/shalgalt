import React from "react"
import Home from "./components/Home";
import Readmore from "./components/read more/readmore";
import Readmore2 from "./components/read more/readmore2";
import Readmore3 from "./components/read more/readmore3";
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/read" element={<Readmore/>}/>
        <Route path="/read2" element={<Readmore2/>}/>
        <Route path="/read3" element={<Readmore3/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
