import React,{Component} from "react";
export default class Clock extends Component {
    public state = {time: ""}
    public tick = () => {
        this.setState({
            time: "지금 시각은 " + new Date().toLocaleTimeString() + " 입니다."
        })
    }

    public render() {
        return <div>
            <h2>{this.state.time}</h2>
            <button onClick={this.tick}> 클릭</button>
        </div>
    }
}