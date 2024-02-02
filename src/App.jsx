import Header from "./components/header/Header"
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className='w-screen h-screen'>
            <Header />

            {/* Dyanamic page */}
            <Outlet />
        </div>
    )
}

export default App