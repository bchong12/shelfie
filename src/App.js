import React from "react";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      toggleEdit: false,
      productId: null,
    };
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory = () => {
    axios
      .get("/api/inventory")
      .then((res) => {
        this.setState({
          inventory: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  changeEdit = () => {
    this.setState({
      toggleEdit: true,
    });
  };

  changeEditBack = () => {
    this.setState({
      toggleEdit: false,
    });
  };

  changeProductId = (num) => {
    this.setState({
      productId: num,
    });
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header className="marginalized" />
          <Route exact path="/">
            <div className="right-left">
              <Dashboard
                getInventory={this.getInventory}
                inventory={this.state.inventory}
                changeEdit={this.changeEdit}
                changeProductId={this.changeProductId}
              />
            </div>
          </Route>
          <Route path="/form">
            <Form
              getInventory={this.getInventory}
              toggleEdit={this.state.toggleEdit}
              changeEdit={this.changeEdit}
              changeEditBack={this.changeEditBack}
              productId={this.state.productId}
            />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
