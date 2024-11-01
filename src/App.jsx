import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/Main.scss';
import Home from './pages/Home/Home';
import Joyride from 'react-joyride';

/**
 * Router Configuration
 * 
 * This section sets up the routing for the application using React Router.
 * The `createBrowserRouter` function is used to define the routes,
 * with a single route that renders the `Home` component at the root path.
 */

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
])

/**
 * App Component
 * 
 * The main application component that initializes the router and renders
 * the application. It provides the routing context to the entire app
 * using the `RouterProvider`.
 * 
 * @returns {JSX.Element} The JSX element representing the app.
 */

function App() {

    const steps = [
        {
            target: '#chat',
            content: 'Este é o chat, fique a vontade para utilizá-lo da sua forma!',
        },
        {
            target: '#aside',
            content: 'Aqui está a barra de acesso rápido.',
        },
        {
            target: '#startupmode',
            content: 'Habilite o Startup Mode.',
        },
        {
            target: '#darkmode',
            content: 'Habilite o dark mode.',
        },
        {
            target: 'body',
            content: 'O site é 100% responsivo.',
        },
    ];

    return (
        <>
            <RouterProvider router={router} />
            <Joyride steps={steps} continuous={true} />
        </>
    );
};

export default App;
