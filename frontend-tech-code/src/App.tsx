import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./components/Storage/Create/Create"
import ListStorage from "./components/Storage/ListStorage/ListStorage"
import Remove from "./components/Storage/Remove/Remove"
import Update from "./components/Storage/Update/Update"
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
            <Route path="/storage" element={<Storage />}>
              <Route path="/storage/list" element={<ListStorage />} />
              <Route path="/storage/create" element={<Create />} />
              <Route path="/storage/update" element={<Update />}/>
              <Route path="/storage/remove" element={<Remove />}/>
            </Route>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
