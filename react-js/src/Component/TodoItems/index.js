import React from 'react'
import './style.css'

const TodoItems = (props) => {

    const {showItems, deleteItem} = props
    const ListItems = showItems.map(item => {
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span onClick={() => deleteItem(item.id)}> &times; </span>
            </div>
        )
    })


    return (
        <div>
            {ListItems}
        </div>
    )
}

export default TodoItems

