import React,{Component} from "react";

export default class Kitty extends Component {
    public formatDate(date) {
        return date.toLocaleDateString();
    }

        public state = {
            date: new Date(),
            text: 'I hope you enjoy learning React!',
            author: {
            name: 'Hello Kitty',
            avatarUrl: '1.jpg'
            },
        };
        public render(){
        return <div className = "Comment" >
        <div className = "UserInfo" >
        <img className = "Avatar"
        src = {this.state.author.avatarUrl}
        alt = {this.state.author.name}/>
        <div
        className = "UserInfo-name" >
            {this.state.author.name}
            </div>
            </div>
            <div
        className = "Comment-text" > {this.state.text} </div>
            <div className = "Comment-date">
            {this.formatDate(this.state.date)}
        </div>
        </div>
    }
}

