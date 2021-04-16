import React from "react";
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            a: "",
        }
    }

    changeHandler(e) {
        this.setState({
            a: e.target.value
        })
    }
    //キーワードをAppに渡す
    changeKeyword() {
        this.setState({
            keyword: this.state.a
        }, () => {
            this.props.g.getChildrenMsg(this, this.state.keyword)
        })
    }
    render() {
        return (
            < div >
                <input type="text" value={this.state.a}  placeholder="ここに入力" onChange={this.changeHandler.bind(this)} />
                <input type="button" value="検索" onClick={this.changeKeyword.bind(this)}/>
                <p>あなたが選択したジャンルは{this.state.a}です。</p>
            </div >
        )
    }
}