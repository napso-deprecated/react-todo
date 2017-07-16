import React from 'react';
import TodosList from "./todos-list";
import AddTodo from "./add-todo";


const todos = [
    {
        task: 'make homework',
        isCompleted: true
    },
    {
        task: 'go to the gym',
        isCompleted: false
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {todos};
    }

    addTodo(task) {
        this.state.todos.push({
            task: task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos});
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }


    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo.bind(this)}/>
                <TodosList toggleTask={this.toggleTask.bind(this)}
                           saveTask={this.saveTask.bind(this)}
                           todos={this.state.todos}
                           deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );

    }
}

