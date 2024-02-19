import { createBrowserRouter, } from "react-router-dom";

import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import Leaderboard from "../Pages/Leaderboard";
import Profile from "../Pages/Profile";
import Withdraw from "../Pages/Withdraw";
import WithdrawalHistory from "../Pages/WithdrawalHistory";
import CustomDataset from "../Pages/CustomDataset";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                // loader: () => fetch('https://re-books-server.vercel.app/'),
                element: <Home />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/leaderboard',
                element: <Leaderboard />
            },
            {
                path: '/withdraw',
                element: <Withdraw />
            },
            {
                path: '/custom',
                element: <CustomDataset />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/withdraw/history/:id',
                element: <WithdrawalHistory />
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
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);