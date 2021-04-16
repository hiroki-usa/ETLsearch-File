import React from "react";
import HeaderComponent from "../HeaderComponent";
import logo from "../profile_icon.png";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { GoogleLogin, GoogleLogout, useGoogleLogin, FontAwesome } from "react-google-login";
import Goodlist from "../Goodlist";
import UserRBlist from "../UserRblist";

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "user?user_id=12345678",
            list: [],
        }
    }

    componentDidMount() {
         // URLから取得したデータをListの中に格納
        fetch(this.state.url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                this.setState({
                    list: data
                })
            })
    }
    // componentDidUpdate(prevProps) {
    //     console.log(this.props.keyword)
    //     if (this.props.keyword !== prevProps.keyword) {
    //         fetch(this.state.url + this.props.keyword)
    //             .then(res => {
    //                 return res.json();
    //             })
    //             .then(data => {
    //                 console.log(data);
    //                 this.setState({
    //                     list: data
    //                 })
    //             })
    //     }
    // }
    render() {
        const { list } = this.state;
        console.log(this.state.list)
        return (
            <>
            {/* 取得したデータの各パラメータを表示させる */}
                <div class="profile">
                    <div class="profile_image">
                        <img src={logo} alt="logo"></img>
                    </div>
                    <div class="profile_text">
                        <div　className="containerA">
                            <div className="item1"><button>編集</button></div>
                            <div className="item1"><button>削除</button></div>
                        </div>
                        <div　className="containerB">
                            <div className="item2">UserName：<p class="profile_text_name">{this.state.list.display_name}</p></div>
                            <div className="item2"><button><a href="/followerlist_p">フォロワーリスト</a></button></div>
                        </div>
                        <div　className="containerC">
                            <div className="item3"><p>メールアドレス：{this.state.list.mail}</p></div>
                            <div className="item3"><p>SNSurl：{this.state.list.provider_mail}</p></div>
                            <div className="item3"><p>勤務地：{this.state.list.work_place}</p></div>
                            <div className="item3"><p>分野：{this.state.list.major}</p></div>
                        </div>
                    </div>                    
                </div>
               {/* タブ機能を使用し、ページ内でタブを使用できるようにする。 */}
                <div className="tabstyle"> 
                    <Tabs className="react-tabs">
                        <TabList>
                            <Tab>いいね一覧</Tab>
                            <Tab>出版した論文</Tab>
                        </TabList>
                            
                        <TabPanel>
                            <h2>いいね一覧</h2>
        　　　　{/* いいね論文一覧のデータを、関数として呼び出して表示 */}
                            <Goodlist/>
                        </TabPanel>
                        <TabPanel>                                
                            <h2>出版した論文一覧</h2>
                            {/* {<UserRBlist/>} */}
                        </TabPanel>
                    </Tabs>
                </div>
                <footer>
                    <div>
                        <p>卒研</p>
                    </div>
                </footer>

                <style jsx>{`
                    .profile {
                        background-color: #fff; /* 背景色 */
                        padding: 20px;
                        margin-left:20%;
                        margin-right:20%;
                        display: flex;
                        width:800px;

                        border: solid 3px #eaedf2; /* 枠線の種類、太さ、色 */
                    }
                    .profile_text{
                        width:1000px;
                    }
                    .profile_image {
                        text-align: center;
                        padding-right: 14px;
                        padding-left: 20px;
                        padding
                    }
                    .profile_image img {
                        max-width: 150px;
                        border-radius: 100%;
                    }
                    .profile_text_name {
                        font-weight: bold;
                        font-size:40px;
                        margin: 6px 0;
                    }
                    .profile_text_description {
                        font-size: .8em;
                        margin: 0;
                    }


                    .containerA{
                        display:flex;
                        justify-content:flex-end;
                    }
                    .item1{
                        margin:10px;
                    }
                    .containerB{
                        display:flex;
                        justify-content:space-around;
                    }
                    .item2{
                        margin:5px;
                    }
                    .containerC{
                        display:grid;
                        grid-template-columns:300px 300px;
                    }
                    .item3{
                        margin:5px;
                    }
                    .tabstyle{
                        width: 70%;
                        margin:0 auto;
                        margin-top: 20px;
                    }

                    .react-tabs {
                        -webkit-tap-highlight-color: transparent;
                      }
                      
                      .react-tabs__tab-list {
                        border-bottom: 1px solid #aaa;
                        margin: 0 0 10px;
                        padding: 0;
                      }
                      
                      .react-tabs__tab {
                        display: inline-block;
                        border: 1px solid transparent;
                        border-bottom: none;
                        bottom: -1px;
                        position: relative;
                        list-style: none;
                        padding: 6px 12px;
                        cursor: pointer;
                      }
                      
                      .react-tabs__tab--selected {
                        background: #fff;
                        border-color: #aaa;
                        color: black;
                        border-radius: 5px 5px 0 0;
                      }
                      
                      .react-tabs__tab--disabled {
                        color: GrayText;
                        cursor: default;
                      }
                      
                      .react-tabs__tab:focus {
                        box-shadow: 0 0 5px hsl(208, 99%, 50%);
                        border-color: hsl(208, 99%, 50%);
                        outline: none;
                      }
                      
                      .react-tabs__tab:focus:after {
                        content: "";
                        position: absolute;
                        height: 5px;
                        left: -4px;
                        right: -4px;
                        bottom: -5px;
                        background: #fff;
                      }
                      
                      .react-tabs__tab-panel {
                        display: none;
                      }
                      
                      .react-tabs__tab-panel--selected {
                        display: block;
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
// @media screen and (max-width:480px) {
//     .profile {
//       display: block;
//     }
//     .profile_image {
//       padding-right: 0;
//     }
//     .profile_image img {
//       max-width: 300px;
//     }
//     .profile_text_name {
//       text-align: center;
//       margin-top: 6px;
//     }
// }
  