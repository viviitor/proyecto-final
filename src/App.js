import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import {Login} from "./auth/Login";
import {Logout} from "./auth/Logout";
import { Fragment } from "react";

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ?(
          <Fragment>
          <Home/>
          <Logout/>
          </Fragment>
        ): (
        <Login/>
        )}        
      </header>
    </div>
  );
}

export default App;
