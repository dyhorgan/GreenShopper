import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteProductThunk} from '../store/products'
import {getAllCartItemsThunk} from '../store/cart'
import {Link} from 'react-router-dom'

export class Confirmation extends Component {
  componentDidMount() {
    this.props.getProductsInCart()
  }

  render() {
    let subTotal = 0
    this.props.cart.forEach(function(item) {
      subTotal += item.price
    })

    return (
      <div className="shoppingComponent">
        <h1>Thanks for your order {this.props.firstName}</h1>
        <p>A confirmation email has been sent.</p>
        <Link to="/products">Browse Products</Link>
      </div>
    )
  }
}

const mapState = state => {
  return {
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    order: state.order,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    deleteProduct: () => dispatch(deleteProductThunk()),
    getProductsInCart: () => dispatch(getAllCartItemsThunk())
  }
}

export default connect(mapState, mapDispatchToProps)(Confirmation)
