import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Storage from "./pages/Storage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Home />}/>
          <Route path="/storage" element={<Storage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
