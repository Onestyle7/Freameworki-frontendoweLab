import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Lab1Page from "./pages/Lab1";
import Lab2 from "./pages/Lab2";
import Lab3 from "./pages/Lab3";
import Lab4 from "./pages/Lab4";
import NotFound from "./pages/NotFound";
import AppReducer from "./data/AppReducer";
import AppContext from "./data/AppContext";
import data from "./data/module-data";

const menuItems = [
  { id: 1, label: "Home", url: "/", urlPattern: "/", element: <Home /> },
  { id: 2, label: "Laboratorium 1", url: "/lab1", urlPattern: "/lab1", element: <Lab1Page /> },
  { id: 3, label: "Laboratorium 2", url: "/lab2/1", urlPattern: "/lab2/:id", element: <Lab2 /> },
  { id: 4, label: "Laboratorium 3", url: "/lab3", urlPattern: "/lab3", element: <Lab3 /> },
  { id: 5, label: "Laboratorium 4", url: "/lab4", urlPattern: "/lab4", element: <Lab4 /> },
];

function App() {
  const [state, appDispatch] = useReducer(AppReducer, data);

  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch }}>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.urlPattern} element={item.element} />
          ))}
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </AppContext.Provider>
  );
}

export default App;
