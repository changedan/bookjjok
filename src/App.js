import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyle.js";
import Home from "./routes/home/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
