import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register/>,
  },
])

function App() {
  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;  