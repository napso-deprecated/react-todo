import React from 'react';
import _ from 'lodash';
import TodosListItem from "./todos-list-item"
class TodosList extends React.Component {

    render() {
        return (
            <table>
                <thead>
                <tr>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                    {this.renderItems()}
                </tbody>

            </table>
        );

    }

    renderItems() {
        return _.map(this.props.todos, (todo,index) => <TodosListItem
            key={index} {...todo}
            saveTask={this.props.saveTask}
            toggleTask={this.props.toggleTask}
            deleteTask={this.props.deleteTask}
        />)
    }
}

export default TodosList;
