import { createBrowserRouter} from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut/>,
    },
  ]); 
  export default router;