import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MyChatBot from "./components/MyChatBot";
import './App.css';
import {Hello, Counter,Clock, Kitty} from "./components/oop/index";
import Home from "./pages/home/Home";

class App extends React.Component<any, any>{
    public render() {
        return <div>
            <Router>
            <Link to="/">홈</Link><br/>
            <Link to="/chat">챗봇</Link><br/>
            <Link to="/hello">인사</Link><br/>
            <Link to="/counter">카운터</Link><br/>
            <Link to="/clock">시계</Link><br/>
            <Link to="/kitty">고양이</Link>
            <Route exact path='/chat' component={MyChatBot}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/hello' component={Hello}>
                <Hello starName={"홍길동"}/>
            </Route>
            <Route exact path='/counter'>
                <Counter starNumber={0}/>
            </Route>
            <Route exact path='/clock' component={Clock}/>
            <Route exact path='/kitty' component={Kitty}/>
        </Router>
        </div>
    }
}
export default App;