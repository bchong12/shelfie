import React from "react";
import Product from "../Product/Product";
import "./Dashboard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.inventory.map((el, i) => {
          return (
            <Product
              key={i}
              name={el.name}
              imageUrl={el.image_url}
              price={el.price}
              id={el.product_id}
              getInventory={this.props.getInventory}
              changeEdit={this.props.changeEdit}
              changeProductId={this.props.changeProductId}
            />
          );
        })}
      </div>
    );
  }
}

export default Dashboard;
