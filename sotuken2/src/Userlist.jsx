import React from "react";
export default class Userlist extends React.Component {
    constructor() {
        super();
        this.state = {
            url: "/users",
            list: [],
            id:"",
        }
    }
    // ユーザ情報を取得
    componentDidMount() {
        // fetch(this.state.url + this.props.keyword)
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

    componentDidUpdate(prevProps,prevState) {
        // if (this.props.keyword !== prevProps.keyword) {
        //     fetch(this.state.url + this.props.keyword)
        //         .then(res => {
        //             return res.json();
        //         })
        //         .then(data => {
        //             console.log(data);
        //             this.setState({
        //                 list: data
        //             })
        //         })
        // }
        // フォローボタンを押した際にフォローリストに登録する
        if (this.state.id !== prevState.id){
            fetch("/follow?user_id=11112345678&following_id=" + this.state.id , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Accept": "application/json,text/plain,*/*"
                },
                body: ""
            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    }
    // handleClick (prevState) {
    //     if (this.state.id !== prevState.id){
    //         fetch("/follow?user_id=11112345678&following_id=" + this.state.id , {
    //             method: "DELETE",
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //                 "Accept": "application/json,text/plain,*/*"
    //             },
    //             body: ""
    //         }).then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //             })
    //     }
    // }

    render() {
        const { list } = this.state;
        console.log(this.state.list)
        return (
            <div >
                {
                    list.length > 0 ?
                            list.map((element, index) => {
                                return (
                                    <ul>
                                        <li className="box3">
                                            <h3>{element.display_name}</h3>
                                            {/* <div className="container">{(() => {
                                                const items = [];
                                                for (let i = 0; i < element.authors.length; i++) {
                                                    items.push(<a>{element.authors[i].name},</a>)
                                                }
                                                return <div className="item">著者：{items}</div>;
                                            })()}
                                            </div> */}
                                            <div className="container">
                                            <div className="item">メールアドレス：{element.mail}　分野：{element.major}　勤務地:{element.work_place}</div>
                                                <div className="item1"><button　onClick={ () => this.setState({id: element.provider_id})}>フォロー</button></div>
                                            </div>
                                        </li>
                                    </ul>

                                )
                            })
                    :<div>データをダウンロード中</div>
                }
                
                <style>{`
                    ul {
                        list-style: none;
                    }
                    h3{  
                        margin-top:10px ;
                        margin-bottom:0;
                        margin-left:30px;
                        font-size:25px;
                    }

                    .item{
                        background: #FFF;
                        margin:10px;
                        padding:5px;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                    }
                    .item1{
                        margin-top:15px;
                        margin-left:100px;
                        margin-right:20px;
                    }
                    .item2{
                        margin-top:15px;
                    }

                    .container{
                        margin-left:20px;
                        display:flex;
                    }

                    .box3 {
                        width:900px;
                        background: #FFF;
                        border: solid 3px #8b8d91;/*線*/
                        border-radius: 10px;/*角の丸み*/
                        margin-top:10px ;
                        margin-bottom:10px;
                    }
                `}</style>
            </div >
        )
    }
}