import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './styles/Main.scss'
import Home from './pages/Home/Home'

/**
 *
 * @returns
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])

/**
 *
 *
 */

function App() {

    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
    )
}

export default App
