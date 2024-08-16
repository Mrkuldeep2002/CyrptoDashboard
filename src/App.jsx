import './App.css'
import Support from './pages/Support/Support';
import Transaction from './pages/Transaction/Transaction';
import Dashboard from './pages/dashboard/Dashboard'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  }
]);
function App() {
   return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
