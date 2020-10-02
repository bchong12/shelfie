import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: 0,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
    };
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  updatePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  updateImageUrl = (e) => {
    this.setState({
      imageUrl: e.target.value,
    });
  };

  emptyState = () => {
    this.setState({
      name: "",
      price: 0,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",
    });
  };

  addToInventory = () => {
    axios.post("/api/inventory", {
      name: `${this.state.name}`,
      price: `${this.state.price}`,
      imageUrl: `${this.state.imageUrl}`,
    });
  };

  editProduct = () => {
    axios.put(`/api/inventory/${this.props.productId}`, {
      name: `${this.state.name}`,
      price: `${this.state.price}`,
      imageUrl: `${this.state.imageUrl}`,
    });
  };

  render() {
    return (
      <div className="form">
        <input
          id="imageUrl"
          placeholder="imageUrl"
          onChange={this.updateImageUrl}
        />
        <input id="name" placeholder="name" onChange={this.updateName} />
        <input id="price" placeholder="price" onChange={this.updatePrice} />
        <button
          onClick={() => {
            this.emptyState();
            document.getElementById("imageUrl").value = "";
            document.getElementById("name").value = "";
            document.getElementById("price").value = "";
            this.props.changeEditBack();
          }}
        >
          Cancel
        </button>
        {this.props.toggleEdit ? (
          <Link to="/">
            <button
              onClick={() => {
                this.editProduct();
                this.props.getInventory();
                this.emptyState();
                document.getElementById("imageUrl").value = "";
                document.getElementById("name").value = "";
                document.getElementById("price").value = "";
                this.props.changeEditBack();
              }}
            >
              Edit
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={() => {
                this.addToInventory();
                this.props.getInventory();
                this.emptyState();
                document.getElementById("imageUrl").value = "";
                document.getElementById("name").value = "";
                document.getElementById("price").value = "";
              }}
            >
              Add
            </button>
          </Link>
        )}
      </div>
    );
  }
}

export default Form;
