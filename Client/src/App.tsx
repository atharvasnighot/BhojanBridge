import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import { Routes, Route } from "react-router";

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
