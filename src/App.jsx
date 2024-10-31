import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/Main.scss';
import Home from './pages/Home/Home';

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
            <RouterProvider router={router} />
        </>
    );
};

export default App;
