import { BrowserRouter, Route, Routes } from "react-router-dom"
import BasePage from "./pages/BasePage/Index"
import Home from "./pages/Home/Index"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<BasePage />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes