import React from "react";
import SearchBar from "./SearchBar";
import Rblist from "./Rblist";
import HeaderComponent from "./HeaderComponent";
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Icon from "./pages/icon";
import Top from "./pages/top";
import Profile from "./pages/profile";
import Bookmark from "./pages/bookmark";
import Rireki from "./pages/rireki";
import LoginLogout from "./pages/login_logout";
import Result from "./pages/result";
import Newlist_p from "./pages/newlist_p";
import Looks_p from "./pages/looks_p";
import Followerlist_p from "./pages/followerlist_p";
import Userlist_p from "./pages/userlist_p";


//mport NavigationVar from "./NavigationVar";

export default class App extends React.Component {
    render() {
        return (
            // パスの決定
            <div>
                <HeaderComponent /> 
                <Router>
                    <Switch>
                    <Route strict exact path="/" component={Top}></Route>
                    {/* <Route strict exact path="/icon" component={Icon}></Route> */}
                    <Route strict exact path="/profile" component={Profile}></Route>
                    <Route strict exact path="/bookmark" component={Bookmark}></Route>
                    <Route strict exact path="/rireki" component={Rireki}></Route>
                    <Route strict exact path="/login_logout" component={LoginLogout}></Route>
                    <Route strict exact path="/result" component={Result}></Route>
                    <Route strict exact path="/newlist_p" component={Newlist_p}></Route>
                    <Route strict exact path="/looks_p" component={Looks_p}></Route>
                    <Route strict exact path="/followerlist_p" component={Followerlist_p}></Route>
                    <Route strict exact path="/userlist_p" component={Userlist_p}></Route>        
                    </Switch>
                </Router>
                    
            </div>
        );
    }
}