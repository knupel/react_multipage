import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutA, LayoutB, LayoutC } from "./components/layout";
import { Lab }  from "./pages/lab";

import { ProjetA } from "./pages/projet_a";
import { ProjetB } from "./pages/projet_b";
import { ProjetC } from "./pages/projet_c";

import { NoPage } from "./pages/no_page";

import './App.css';
// based on https://www.w3schools.com/react/react_router.asp
function App() {
  return (
    <BrowserRouter>
      {/* Before react 18 'Routes' was 'Switch' */}
      <Routes>
        {/* You can have Route struture with fews elements */}
        <Route path="/" element={<LayoutA/>}>
          {/* nested elements of the layout */}
          {/* index take the path '/' */}
          <Route index element={<Lab/>}/>
        </Route>

        <Route path="/" element={<LayoutB/>}>
          {/* we add the path parameter to '/' from the parent path */}
          <Route path="projet_a" element={<ProjetA/>} />
          <Route path="projet_b" element={<ProjetB/>} />
          <Route path="projet_c" element={<ProjetC/>} />
        </Route>

        <Route path="/" element={<LayoutC/>}>
          {/* '*' take the element don't match with any page and return to NoPage like the 404 not found :) */}
          <Route path="*" element={<NoPage/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
