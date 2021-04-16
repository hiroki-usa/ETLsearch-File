import React from "react";
import Rirekilist from "../RirekiList";
import HeaderComponent from "../HeaderComponent";


export default class Rireki extends React.Component {
    render() {
        
        return (
            <>
                <h2　className="rireki">検索履歴</h2>
                <div className="rirekilist">
                    <style>{'table,th,td {border:1px solid black;}'}</style>
                    <Rirekilist/>
                </div>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>
                <style>{`
                .rireki{
                    text-align: center;
                    margin:20px 30% 20px 30%;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
                }
                .rirekilist{
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