import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import BrowsePage from "./pages/browsePage/BrowsePage";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPages from "./pages/mainPages/MainPages";
import { dataObject } from "./server";
import { IDeafaultState } from "./types";
// import { getResponse } from "./functions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // искуственный запрос

    // async function getData() {
    // const response = await getResponse(`url`, "GET");
    // if (response.ok) {
    //   const data = await response.json();
    //   dispatch({ type: "SET_DATA", payload: data[0]["children"] });
    //   dispatch({ type: "STOP_LOADING" });
    // }
    // }
    // getData();

    setTimeout(() => {
      const data = dataObject[0]["children"];
      dispatch({ type: "SET_DATA", payload: data });
      dispatch({ type: "STOP_LOADING" });
    }, 2000);
  }, []);

  const logined = useSelector((state: IDeafaultState) => state.logined);

  return (
    <Routes>
      <Route path="/" element={<MainPages />} />
      <Route
        path="/login"
        element={logined ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/browse"
        element={logined ? <BrowsePage /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
