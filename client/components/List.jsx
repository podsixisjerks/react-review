import React from 'React';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: '',
      todos: []
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    let currentTodos = this.state.todos;
    currentTodos.push(this.state.todo);
    this.setState({
      todo: '',
      todos: currentTodos
    });
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div>
        <form id="form" onSubmit={this.submitHandler}>
          <label>
            To-do:
            <input name="todo" required onChange={this.onChangeHandler}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {this.state.todos.map( (todo, index) => (
            <ListEntry todo={todo} key={index} index={index}/>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;