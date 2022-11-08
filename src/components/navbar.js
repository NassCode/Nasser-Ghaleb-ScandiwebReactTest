import { Component } from "react";
import CartOverlay from "./CartOverlay";

class Navbar extends Component {
  render() {
    console.log(this.props.cartOverlayState);
    return (
      <div className="navbar container">
        <div className="categoriesContainer">
          <span onClick={() => this.props.tabChange("All")}>All</span>

          <span onClick={() => this.props.tabChange("Clothes")}>Clothes</span>

          <span onClick={() => this.props.tabChange("Tech")}>Tech</span>
        </div>

        <span>\__LOGO__/</span>

        <div className="cartContainer">
          <span>$</span>
          <span>
            <CartOverlay 
            cartOverlayState={this.props.cartOverlayState} cartItems={this.props.cartItems}
            incrementQuantity={this.props.incrementQuantity}
            decrementQuantity={this.props.decrementQuantity}
            toggleCartOverlay={this.props.toggleCartOverlay}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
