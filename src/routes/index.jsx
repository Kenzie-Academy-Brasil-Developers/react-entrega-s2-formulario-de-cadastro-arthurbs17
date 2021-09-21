import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/user">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
