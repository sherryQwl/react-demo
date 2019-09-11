import React, { Component, Fragment } from "react";
import TodoItem from "./todoItem";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: []
    };
    this.changeInput = this.changeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelet = this.handleDelet.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputVal}
            onChange={this.changeInput}
          />
          <button onClick={this.handleClick}>提交</button>
        </div>
        <div>
          <ul>
            {this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  <TodoItem
                    content={item}
                    index={index}
                    deleteEvent={this.handleDelet}
                  ></TodoItem>
                </div>
              );
            })
            //   this.state.list.map((item, index) => {
            //   return (
            //     <li key={index} onClick={this.handleDelet.bind(this, index)}>
            //       {item}
            //     </li>
            //   );
            // })
            }
          </ul>
        </div>
      </Fragment>
    );
  }
  // input的change事件，数据响应绑定
  changeInput(e) {
    // this.setState({
    //   inputVal: e.target.value
    // });
    let inputVal = e.target.value;
    this.setState(() => ({ inputVal }));
  }
  // 点击事件
  handleClick(e) {
    const { list, inputVal } = this.state;
    let arr = [...list, inputVal];
    this.setState({
      inputVal: "",
      list: arr
    });
    this.setState(preve => ({
      list: [...preve.list, preve.inputVal],
      inputVal: ""
    }));
  }
  // 删除
  handleDelet(index) {
    console.log(index);
    const { list } = this.state;
    let arr = [...list];
    arr.splice(index, 1);
    this.setState({
      list: arr
    });
  }
}
