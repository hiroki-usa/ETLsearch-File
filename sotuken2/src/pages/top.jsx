import React from "react";
import Newlist from "../Newlist";
import Lookslist from "../Looks";

export default class Top extends React.Component {
    // 取得するキーワードのセット
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            childrenMsg: '',
            keyword: ''
        }
    }
    // 検索キーワドの取得
    handleChange(e){
        this.setState({
          text: e.target.value
        })
    }
    // キーワードをURlへと渡す
    handleClick(){
        this.props.history.push({
            pathname: '/result',
            search:'q=' + this.state.text,
            state: { text: this.state.text }
        });
    }

    render() {
        return (
            <>
                {/* 検索バー */}
                <form className="search"> 
                    <input type='text' value={this.state.text} onChange={this.handleChange} className="searchbox"></input>
                    <button onClick={this.handleClick}className="searchbutton">検索</button>
                </form>

                {/* フィルターの選択ボタン */}
                <div className="main">
                  <aside>
                      <label className="checkbox">
                          <input type="checkbox"　/> free text
                      </label>
                      <label className="checkbox">
                          <input type="checkbox"/>  本文に含まれているワードを含む
                      </label>
                  </aside>

                {/* 最新論文と最近注目されている論文一覧 */}
                  <article>
                      <div className="box2" >
                          <p>最新論文</p>
                      </div>  
                      <div>
                    {/* Newlit呼び出し */}
                        <Newlist/>
                      </div>
                      <div className="more">
                        <a href="/newlist_p">もっとみる</a>
                      </div>
                      
                      <br></br>

                      <div className="box2" >
                          <p>最近注目されている論文</p>
                      </div>
                      <div>
                    {/* Looklit呼び出し */}
                        <Lookslist/>
                      </div> 
                      <div className="more">
                        <a href="/looks_p">もっとみる</a>
                      </div>

                      <br></br>

                      <div className="box2">
                          <p>フォロワーの論文</p>
                      </div>
                      <div className="more">
                        <a href="/followerlist_p">もっとみる</a>
                      </div>
                  </article>
                </div>
                {/* ページ下部のフッター */}
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>

                {/* 各種レイアウトのCSS */}
                <style>{`
                    html {
                        font-size: 100%;
                    }
                    body{
                        line-height: 1.5;
                        color: black;
                    }
                    a{
                        text-decoration: none;
                    }
                    img{
                        max-width: 100%;
                    }
                    
                    /* サイドとメインの大きさ */
                    .main{
                        display: flex;
                        justify-content: space-evenly;
                        margin-bottom: 10%;
                    }
                    article{
                        width: 80%;
                    }
                    aside{
                        width: 15%;
                        height: 15%;
                        background: #FFF;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                    }
                    .box2 {
                    margin-top: 10px;
                    margin-bottom:10px;
                    margin-left: 10px;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
                    padding: 10px;
                    display: inline-block;
                    }
                    
                    .box2 p {
                        margin:auto;
                        font-weight: bold;
                    }
                    
                    .search{
                        text-align: center;
                        margin-top:10px;
                        margin-bottom:20px;
                    }

                    .searchbox{
                        width: 360px;
                        padding: 5px 8px;
                        border-radius: 6px;
                        border-top: 1px solid #aaa;
                        border-left: 1px solid #aaa;
                        border-right: 2px solid #aaa;
                        border-bottom: 2px solid #aaa;
                        background-image: none
                        background-color: #ddd;
                        font-size: 20px;
                    }
                    .searchbutton{
                        position: relative;
                        display: inline-block;
                        padding: 5px 8px;
                        text-decoration: none;
                        color: #FFF;
                        background: #fd9535;/*背景色*/
                        border-bottom: solid 2px #d27d00;/*少し濃い目の色に*/
                        border-radius: 4px;/*角の丸み*/
                        box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
                        font-weight: bold;
                    }
                    .searchbutton:active{
                        border-bottom: solid 2px #fd9535;
                        box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
                    }
                    /* サイドのチェックボックス */
                    .checkbox{
                        margin-top: 10px;
                        margin-bottom:10px;
                        margin-left: 10px;
                        margin-right: 10px;
                        background: #FFF;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                        padding: 10px;
                        display: block;
                    }
                    
                    .more{
                       margin-top:10px;
                       margin-left:59%;
                    }
                    
                    /* フッター */
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


// import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
// import HeaderComponent from "../HeaderComponent";
// import SearchBar from "../SearchBar";
// import Rblist from "../Rblist";