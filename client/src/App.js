import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MainAnimePage from "./anime-component/MainAnimePage";
// import UnPrivateRoute from "./hocs/UnPrivateRoute";
import PrivateRoute from "./hocs/PrivateRoute";
import UnPrivateRoute from "./hocs/UnPrivateRoute";
import Subscribes from "./components/Subscribes";
import Season from "./components/Season";

// react-router is a routing system for react, so you have a main 'Router' and a
// 'Route' component . the 'Route' component takes in a path and based on that path
// it's gonna render components that you want to be rendered out
import { BrowserRouter as Router, Route } from "react-router-dom";

// App component here is gonna contain our whole application, so our application is
// gonna to end up having access to the users and authenticated states that we want
function App() {
  return (
    <Router>
      <Navbar />

      {/* component={Home} is the component we want to render */}
      {/* path="/" is the URL is gonna matched up with component={Home}, and
      component={Home} render the Home component when you hit "/" route*/}
      {/* the 'exact' property is because the react router uses partial pattern
      matching. so if I create another route and have "/something...", it will
      actually render out both routes. we don't want that to happen */}
      <Route exact path="/" component={Home} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/register" component={Register} />
      <PrivateRoute
        path="/subscribes"
        roles={["user", "admin"]}
        component={Subscribes}
      />
      {/* <PrivateRoute
        path="/admin"
        roles={["user", "admin"]}
        component={SubList}
      /> */}
      <PrivateRoute
        path="/main"
        roles={["user", "admin"]}
        component={MainAnimePage}
      />

      <PrivateRoute
        path="/season"
        roles={["user", "admin"]}
        component={Season}
      />
    </Router>
  );
}

export default App;
