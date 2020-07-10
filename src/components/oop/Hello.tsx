import React,{Component} from "react";

interface HelloProps {
    starName:string
}
class Hello extends Component<HelloProps>{
    [x: string]: any
    public state = {name: "", hello: "안녕 "}


    props: any
녕
    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.starName
    }
    public addHello = () =>{
        this.setState({
            name: this.state.hello + this.state.name
        })
    }
    public minerHello = ()=>{
        this.setState({
            name: this.state.name
        })
    }
    public render() {
        return<div>
        <h1>{this.state.name}</h1>
        <button onClick={this.addHello}> 클릭 </button> <br/>
        <button onClick={this.minerHello}> 삭제 </button>
    </div>
    }
}
export default Hello