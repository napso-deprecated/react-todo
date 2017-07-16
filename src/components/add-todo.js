import React from 'react';
import _ from 'lodash';

export default class AddTodo extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.refs.addTodoInput.value);
        this.props.addTodo(this.refs.addTodoInput.value);
        this.refs.addTodoInput.value = '';

    }

    render() {

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="add a new todo" ref="addTodoInput"/>
                <button>Submit</button>
            </form>
        );

    }

}

