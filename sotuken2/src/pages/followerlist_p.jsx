import React from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Followerlist from "../Followerslist";

export default class Followerlist_p extends React.Component {
    render() {
        return (
            <>
                <h2　className="tittle">フォローリスト</h2>
                <div className="b">
                    <style>{'table,th,td {border:1px solid black;}'}</style> 
                    <Followerlist/>
                </div>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>

                <style jsx>{`
                .tittle{
                    text-align: center;
                    margin:20px 30% 20px 30%;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
                }
                
                .b{
                    margin:5px 30px 5px 16%;
                }

                footer{
                    background: #432;
                    text-align: center;
                    padding: 15px 0;
                }
                footer p{
                    color: #fff;
                    font-size:0.875rem
                }
                `}</style>
            </>
            )
    }
}