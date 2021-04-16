import React from "react";
function HeaderComponent() {
    return (
        <header className="page-header wrapper">
            {/* 各ページへの遷移URL */}
            <nav>
                <ul className="main-nav">
                    <li><a href="/">トップページ</a></li>
                    <li><a href="/bookmark"> ブックマーク </a></li>
                    <li><a href="/rireki"> 検索履歴 </a></li>
                    <li><a href="/userlist_p"> ユーザリスト </a></li>
                    <li><a href="/profile"> プロフィール </a></li>
                    <li><a href="login_logout"> ログイン・ログアウト </a></li>
                </ul>
            </nav>
             {/* レイアウトのCSS */}
            <style jsx>{`
                /* ヘッダー */
                .page-header{
                    display: block;
                }
                .wrapper{
                    margin:0 15%;
                    padding: 0 10px;
                }
                /* ナビゲーションバー */
                .main-nav{
                    display: flex;
                    font-size: 1.25rem;
                    text-transform: uppercase;
                    margin-top: 50px;
                    list-style: none;
                    background: #FFF;
                    border: solid 3px #8b8d91;/*線*/
                    border-radius: 10px;/*角の丸み*/
                    padding: 10px;
                }
                .main-nav li{
                    margin: auto;
                }
                .main-nav a{
                    text-decoration: none;
                    color: #67bbff;
                    border: solid 2px #67bbff;
                    border-radius: 3px;
                    transition: .4s;
                }
                .main-nav a:hover{
                    background: #67c5ff;
                    color: white;
                }

            `}</style>
        </header>
    )
}
export default HeaderComponent;