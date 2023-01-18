import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import Storage from "./pages/Storage/Storage"

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/storage" element={<Storage />}/>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
