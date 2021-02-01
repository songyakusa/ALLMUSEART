import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../../scoll";
import More from "../../Pages/More/index";
import First from "../First/index";
export default function Routes() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
       <Route exact path="/" component={First}/>
        <Route exact path="/More" component={More}/>
      </Switch>
    </div>
  );
}
