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
        {this.state.firstName === this.props.firstName && this.state.lastName === this.props.lastName ? (
          <List />
        ) : (
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
        )}
      </div>
    );
  }
}

export default App;