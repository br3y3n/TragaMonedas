import { BrowserRouter } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContext";

import AllRoutes from "./routes/AllRoutes.routes";

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
