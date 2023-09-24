import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import AppliedJobs from './components/Appliedjobs/AppliedJobs.jsx';
import ErrorPage from './components/Errorpage/ErrorPage.jsx';
import JobDetails from './components/jobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
          {
            path:"/",
            element:<Home></Home>,
          },{
             path:"/applied",
             element:<AppliedJobs></AppliedJobs>,
              loader:()=> fetch('/jobs.json'),    
          },{
             path:'/job/:id',
               loader:()=> fetch('/jobs.json'),
             element:<JobDetails></JobDetails>,
          },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
