import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={this.props.className} id="Header">
        <div className="right">SHELFIE</div>
        <div className="left">
          <Link to="/">Dashboard</Link>
          <Link to="/form/add">Add</Link>
        </div>
      </div>
    );
  }
}

export default Header;
