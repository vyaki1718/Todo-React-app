import React, { Component } from 'react';
import Todoitem from './Todoitem'

export default class Todolist extends Component
{
    render()
    {
        const { items, clearList, handleDelet, editItem } = this.props
        return (
            <div>

                <ul className="list-group my-5  ">
                    <h3 className="text-capitalize text-center">Todo List</h3>
                    {items.map(item =>
                    {
                        return <Todoitem
                            key={item.id}
                            title={item.title}
                            handleDelet={() => handleDelet(item.id)}
                            editItem={() => editItem(item.id)}
                        />

                    })}

                    <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize mt-5">Clear List</button>
                </ul>

            </div>
        )
    }
}
