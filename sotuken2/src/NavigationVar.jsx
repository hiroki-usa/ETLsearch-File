import React from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
               <NavLink exact to="/icon">アイコン</NavLink> 
            </div>
        )
    }
}