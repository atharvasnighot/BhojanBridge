import Page1 from "./page/Page1";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
      </Routes>
    </>
  )
}

export default App
