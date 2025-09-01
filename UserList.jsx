import React from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],   
      loading: true, 
      error: null,   
    };
  }
  //Mounting Phase//
  componentDidMount() {
    console.log("ComponentDidMount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ users: data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }
  render() {
    console.log("render")
    const { users, loading, error } = this.state;

    if (loading) {
      return <p>Loading users...</p>;
    }

    if (error) {
      return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    return (
      <div>
        <h2>User List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
