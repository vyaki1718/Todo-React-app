import React, { Component } from 'react'

export default class Todoitem extends Component
{
    render()
    {
        const { title, handleDelet, editItem } = this.props
        return (
            <div>
                <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                    <h6>{title}</h6>
                    <div className="todo-icon">
                        <span className="mx-2 text-success">
                            <button type="button" onClick={editItem}>  <i className="fas fa-pen"></i> </button>
                        </span>
                        <span className="mx-2 text-danger">
                            <button onClick={handleDelet} > <i className="fas fa-trash"></i> </button>
                        </span>
                    </div>
                </li>
            </div>
        )
    }
}
