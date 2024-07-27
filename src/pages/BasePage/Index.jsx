import { Outlet } from "react-router-dom"

const BasePage = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default BasePage