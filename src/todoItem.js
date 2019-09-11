import React, { Component } from "react";

export default class todoItem extends Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }
    handleDelete(){
        this.props.deleteEvent(this.props.index)
    }

}