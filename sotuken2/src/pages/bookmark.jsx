import React from "react";
import Bookmarklist from "../Bookmarklist";
import HeaderComponent from "../HeaderComponent";

export default class Bookmark extends React.Component {
    render() {
        return (
            <>
                <h2　className="tittle">ブックマークした論文</h2>
                <div className="Booklist">
                    <style>{'table,th,td {border:1px solid black;}'}</style>
             {/* Bookmark.jsxを関数として呼び出し */}
                    <Bookmarklist/>
                </div>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>
                <style>{`
                .tittle{
                    text-align: center;
                    margin:20px 30% 20px 30%;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
                }

                .Booklist{
                    margin:20px 20px 20px 16%;
                    text-align: center;
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