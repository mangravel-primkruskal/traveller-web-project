import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./page/Home/index.js";
import Login from "./page/Auth/Login.js";
import Register from "./page/Auth/Register.js";
import Dashboard from "./page/Dashboard/index.js";
import Sidebar from "./component/Sidebar.js";
import UserManagement from "./page/UserManagement/index.js";
import VenueManagement from "./page/VenueManagement";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        {window.location.pathname.indexOf("login") === -1 &&
        window.location.pathname.indexOf("register") === -1 ? (
          <>
            <Sidebar />
            <main role="main" className="col-sm-9 ml-sm-auto col-md-10 pt-3">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/usermanagement" component={UserManagement} />
                <Route path="/venuemanagement" component={VenueManagement} />
              </Switch>
            </main>
          </>
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/usermanagement" component={UserManagement} />
            <Route path="/venuemanagement" component={VenueManagement} />
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;
