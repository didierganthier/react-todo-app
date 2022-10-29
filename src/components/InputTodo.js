import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            title: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: "",
            })
        } else {
            alert("Please write item")
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Add todo..." value={this.state.title} onChange={this.onChange} />
                <button>Submit</button>
            </form>
        )
    }
}
export default InputTodo