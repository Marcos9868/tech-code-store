import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />}/>
          </Route>
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
