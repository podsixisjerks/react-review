import React from 'React';
import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            First Name:
            <input name="firstName" onChange={this.onChangeHandler}/>
          </label>
          <label>
            Last Name:
            <input name="lastName" onChange={this.onChangeHandler}/>
          </label>
        </form>
        <List changeHandler={this.onChangeHandler}/>
      </div>
    );
  }
}

export default App;