import Page1 from "./page/Page1";
import Page2 from "./page/Page2";
import { Routes, Route } from "react-router";
import Page3 from "./page/Page3";
import Page4 from "./page/Page4";
import Page5 from "./page/Page5";
import Page6 from "./page/Page6";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page4 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page2 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
      </Routes>
    </>
  )
}

export default App
