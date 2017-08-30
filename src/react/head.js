import React, { Component } from "react";
import Title from "./head/title";//标题栏
import Message from "./head/message";//标题栏
import Nav from "./head/nav";//导航栏
import "./head.css";

class Head extends Component{
	render(){
		return(
			<div className="head">
				<Title />
				<Message />
				<Nav />
			</div>
		);
	}
}
export default Head;

