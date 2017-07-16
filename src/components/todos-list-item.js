import React from 'react';
import _ from 'lodash';

export default class TodosListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    renderTaskSection() {
        const taskStyle = {
            color: this.props.isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={this.props.task} ref="editInput"/>
                    </form>
                </td>
            );
        }
        return (
            <td onClick={this.props.toggleTask.bind(this, this.props.task)} style={taskStyle}>{this.props.task}</td>
        );
    }

    onEditClick() {
        this.setState({isEditing: true});
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }

    onSaveClick(e) {
        e.preventDefault();
        const oldTasl = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTasl, newTask);
        this.setState({isEditing: false});
    }


    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection(this)}
            </tr>
        );

    }

}

