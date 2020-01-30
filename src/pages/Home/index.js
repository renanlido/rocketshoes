import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const routes = ['products'];

    const [products] = await Promise.all(
      routes.map(async route => {
        const data = await api.get(route);
        return data;
      })
    );

    const newProduct = products.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: newProduct });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
