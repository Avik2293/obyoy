import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Leaderboard from "../Pages/Leaderboard";
import Profile from "../Pages/Profile";
import Withdraw from "../Pages/Withdraw";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                // loader: () => fetch('https://re-books-server.vercel.app/'),
                element: <Home></Home>
            },
            {
                path: '/profile',
                // loader: () => fetch('https://re-books-server.vercel.app/'),
                element: <Profile></Profile>
            },
            {
                path: '/leaderboard',
                // loader: () => fetch('https://re-books-server.vercel.app/'),
                element: <Leaderboard></Leaderboard>
            },
            {
                path: '/withdraw',
                // loader: () => fetch('https://re-books-server.vercel.app/'),
                element: <Withdraw></Withdraw>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <BuyerRoute><Payment></Payment></BuyerRoute>,
            //     loader: ({ params }) => fetch(`https://re-books-server.vercel.app/bookings/${params.id}`)
            // },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);