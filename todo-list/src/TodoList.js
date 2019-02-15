import React, { Component } from 'react'

class TodoList extends Component {
    componentDidUpdate() {
        this.props.inputElement.current.focus()
    }

    render() {
        const { addItem, inputElement, currentItem, handleInput } = this.props

        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={ addItem }>
                        <input
                            placeholder="Task"
                            ref={ inputElement }
                            value={ currentItem.text }
                            onChange={ handleInput }
                        />
                        <button type="submit"> Add Task</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList