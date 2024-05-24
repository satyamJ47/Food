import React from "react";
class Profile extends React.Component {
  // mandatory function
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <h1>Profile Class</h1>
        <h1>Surname : {this.props.surname}</h1>
        <h1>Name : {this.props.name}</h1>
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrementer
        </button>
      </div>
    );
  }
}

export default Profile;
