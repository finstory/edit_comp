import { Route, Routes } from "react-router-dom";
import { AppMain } from "./AppMain";


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppMain />} />
      </Routes>
    </>
  );
};
