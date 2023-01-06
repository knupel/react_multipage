import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/layout";
import { Resto }  from "./pages/resto";

import { Entrees } from "./pages/entrees";
import { Plats } from "./pages/plats";
import { Desserts } from "./pages/desserts";

import { NoPage } from "./pages/no_page";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Resto />} />

          <Route path="entrees" element={<Entrees />} />
          <Route path="plats" element={<Plats />} />
          <Route path="desserts" element={<Desserts />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
