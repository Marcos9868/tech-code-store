import { Outlet } from "react-router-dom"
import MenuBar from "../MenuBar/MenuBar"
import { Container } from "./styles"

const StorageBox = () => {
  return (
    <Container>
      <MenuBar />
      <section>
        <Outlet />
      </section>
    </Container>
  )
}

export default StorageBox