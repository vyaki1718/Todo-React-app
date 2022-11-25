import { Component } from 'react';
import Todoinput from "./Components/Todoinput";
import Todolist from "./Components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css"
import { v4 as uuid } from 'uuid'
// import { Component } from "react";

class App extends Component
{
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  }
  handleChange = e =>
  {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e =>
  {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }
    console.log(newItem)
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false
    })
  }
  clearList = () =>
  {
    this.setState({
      items: []
    })
  }
  handleDelet = (id) =>
  {
    const filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filterItem
    })
  }
  editItem = id =>
  {
    console.log(id)
    const filterItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: filterItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })

  }
  render()
  {
    return (
      <div className="container" >
        <div className="row ">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize tetx-centre">Todo Input</h3>
            <Todoinput
              item={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <Todolist items={this.state.items}
              clearList={this.clearList}
              handleDelet={this.handleDelet}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>



    );
  }
}

export default App;
