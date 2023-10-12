import Page1 from "./page/Page1";
import { Routes, Route } from "react-router";
import Page2 from "./page/Page2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App
