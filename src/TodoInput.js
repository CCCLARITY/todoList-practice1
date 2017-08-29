import React, { Component } from 'react';
import './TodoInput.css'

export default class TodoInput extends Component{
	render(){
		return <input type="text" value={this.props.content}
			placeholder="在这里输入待办任务，回车添加到待办列表"
			className="TodoInput"
			onChange={this.changeTitle.bind(this)}
			onKeyPress={this.submit.bind(this)}/>
	}
	submit(e){
		if(e.key === 'Enter'){
			this.props.onSubmit(e)
		}
	}
	changeTitle(e){
		this.props.onChange(e)
	}
}