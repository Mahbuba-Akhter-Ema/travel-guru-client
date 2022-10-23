import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AllCity from "../../Pages/AllCity/AllCity/AllCity";
import CityDetails from "../../Pages/CityDetails/CityDetails/CityDetails";
import Details from "../../Pages/Details/Details/Details";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Profile from "../../Pages/Profile/Profile";
import Welcome from "../../Pages/Welcome/Welcome";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <AllCity></AllCity>

            },
            {
                path: '/',
                element: <CityDetails></CityDetails>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://travel-guru-server-jade.vercel.app/details/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/welcome',
                element: <PrivateRoute><Welcome></Welcome></PrivateRoute>
            },
            {
                path:'/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])