import React, { useState, useContext } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routers";
import { ResetPage } from '../src/Context/ResetPage'
import { nightMode } from "./Context/nightMode";


export default function App() {

  let routers = useRoutes(routes)
  const [mainPage, setmainPage] = useState(1)
  const [dayNight, setdayNight] = useState(true)


  return (
    <>
      <nightMode.Provider value={{dayNight, setdayNight}}>
        <ResetPage.Provider value={{ mainPage, setmainPage }}>
          {routers}
        </ResetPage.Provider>
      </nightMode.Provider>
    </>
  );
}


