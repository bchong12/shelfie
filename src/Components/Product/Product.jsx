import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  deleteItem = () => {
    axios.delete(`api/inventory/${this.props.id}`);
    this.props.getInventory();
  };

  render() {
    return (
      <div className="product">
        <img className="product-img" src={this.props.imageUrl} />
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <div className="bottom">
          <Link to="/form/edit">
            <button
              onClick={() => {
                this.props.changeEdit();
                this.props.changeProductId(this.props.id);
              }}
            >
              EDIT
            </button>
          </Link>
          <button onClick={this.deleteItem}>DELETE</button>
        </div>
      </div>
    );
  }
}

export default Product;
