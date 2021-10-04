import { Redirect, Route } from "react-router-dom";
import {
  Home,
  Login
} from "./pages";

export const Routes: React.FC = () => {
  return (
    <>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </>
  );
};