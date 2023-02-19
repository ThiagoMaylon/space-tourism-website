import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { MenuMobile } from "./components/MenuMobile"
import { Home } from "./pages/Home"

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  return(
    <BrowserRouter>
      <Header setIsVisible={setIsVisible}/>
      <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible}/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

