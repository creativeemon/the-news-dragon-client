import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Categories from "../pages/Home/Categorie/Categories";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/Shared/News/News";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../pages/Shared/Terms/Terms";




const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/categories/0"></Navigate>
            },
            {
                path: 'login',
               element:<Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'categories',
        element: <Main></Main>,
        children: [
            {
               path: ':id',
               element:<Categories></Categories>, 
               loader: ({params}) => fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) =>fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
])
export default router;