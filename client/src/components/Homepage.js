import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export class Homepage extends Component {
  state = {

  }

  render() {
    return (
      <div>
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login"><button>Login</button></Link>
      </div>
    )
  }
}

export default Homepage

