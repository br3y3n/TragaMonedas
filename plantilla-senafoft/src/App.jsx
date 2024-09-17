import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext";

import AllRoutes from "./routes/AllRoutes.routes";


import { GlobalContext } from "./context/GlobalContext.jsx";

const App = () => {

  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </GlobalContextProvider>
  )
}

export default App;
