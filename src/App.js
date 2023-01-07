import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout_A, Layout_B, Layout_C } from "./components/layout";
import { Resto }  from "./pages/resto";

import { Entrees } from "./pages/entrees";
import { Plats } from "./pages/plats";
import { Desserts } from "./pages/desserts";

import { NoPage } from "./pages/no_page";

import './App.css';
// based on https://www.w3schools.com/react/react_router.asp
function App() {
  return (
    <BrowserRouter>
      {/* Before rect 18 'Routes' was 'Switch' */}
      <Routes>
        {/* You can have Route struture with fews elements */}
        <Route path="/" element={<Layout_A/>}>
          {/* nested elements of the layout */}
          {/* index take the path '/' */}
          <Route index element={<Resto />} />
        </Route>

        <Route path="/" element={<Layout_B/>}>
          {/* we add the path parameter to '/' from the parent path */}
          <Route path="entrees" element={<Entrees />} />
          <Route path="plats" element={<Plats />} />
          <Route path="desserts" element={<Desserts />} />
        </Route>

        <Route path="/" element={<Layout_C/>}>
          {/* '*' take the element don't match with any page and return to NoPage like the 404 not found :) */}
          <Route path="*" element={<NoPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
