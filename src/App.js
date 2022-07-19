import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Enumeration from "./components/Enumeration";
import Layout from "./components/Layout";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/enumeration", element: <Enumeration /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((routeItem) => {
          return (
            <Route
              path={routeItem.path}
              element={<Layout>{routeItem.element}</Layout>}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
