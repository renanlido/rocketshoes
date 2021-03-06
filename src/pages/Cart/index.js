import React from 'react';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { FiShoppingCart } from 'react-icons/fi';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  EmptyCart,
  Products,
  CartItems,
  CartSumary,
  ItemDetails,
  ItemFooter,
  ProductItemDetails,
} from './styles';

function Cart({
  cart,
  subtotal,
  cartSize,
  removeFromCart,
  updateAmountRequest,
}) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      <EmptyCart empty={cartSize <= 0 ? 1 : 0}>
        <div>
          <FiShoppingCart size={100} color="#7159c1" />
          <h1>Seu carrinho está vazio!</h1>
          <p>
            Adicione produtos ao carrinho clicando no botão &quot;Comprar&quot;
            na página de produto
          </p>
          <Products to="/">VOLTAR PARA A PÁGINA INICIAL</Products>
        </div>
      </EmptyCart>

      <CartItems empty={cartSize <= 0 ? 1 : 0}>
        <h1>Meu Carrinho</h1>
        {cart.map(product => (
          <li key={product.id}>
            <button type="button" onClick={() => removeFromCart(product.id)}>
              <MdDelete size={20} color="#7159c1" />
            </button>
            <ItemDetails>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>Ref: {product.reference}</p>
                <p>
                  Vendido e entregue por <span>Rocketshoes</span>
                </p>
              </div>
            </ItemDetails>
            <ItemFooter>
              <div>
                <span>Quantidade: </span>
                <button type="button" onClick={() => decrement(product)}>
                  <MdRemoveCircleOutline size={20} />
                </button>
                <input type="number" readOnly value={product.amount} />
                <button type="button" onClick={() => increment(product)}>
                  <MdAddCircleOutline size={20} />
                </button>
              </div>
              <strong>{product.productSubtotal}</strong>
            </ItemFooter>
          </li>
        ))}
        <ProductItemDetails>
          <span>Simule frete e prazo de entrega</span>
          <div>
            <input type="text" placeholder="Digite aqui seu cep" />
            <button type="button">Calcular</button>
            <a
              href="http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm"
              target="blank"
            >
              Não sei meu CEP
            </a>
          </div>
        </ProductItemDetails>
      </CartItems>

      <CartSumary empty={cartSize <= 0 ? 1 : 0}>
        <h1>Resumo da Compra</h1>

        <ul>
          <li>
            <span>Subtotal ({cartSize} itens)</span>
            <strong>{subtotal}</strong>
          </li>
          <li>
            <span>Frete Rocketshoes</span>
            <div>
              <strong>R$ 10,00</strong>
              <span>De 10 a 15 dias úteis</span>
            </div>
          </li>
          <li>
            <span>Descontos</span>
            <strong> R$ 10,00 </strong>
          </li>
          <li>
            <span>Valor total</span>
            <div>
              <strong>R$ 0,00</strong>
              <span>
                Em até <strong>10x</strong> de <strong>R$ 90,00</strong> sem
                juros
              </span>
            </div>
          </li>
        </ul>
        <div>
          <button type="button">Finalizar</button>
          <button type="button">Escolher mais Produtos</button>
        </div>
      </CartSumary>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    productSubtotal: formatPrice(product.price * product.amount),
  })),
  subtotal: formatPrice(
    state.cart.reduce((subtotal, product) => {
      return subtotal + product.price * product.amount;
    }, 0)
  ),
  cartSize: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  cart: propTypes.arrayOf(
    propTypes.shape({
      map: propTypes.object,
    })
  ).isRequired,
  removeFromCart: propTypes.func.isRequired,
  updateAmountRequest: propTypes.func.isRequired,
  subtotal: propTypes.string.isRequired,
  cartSize: propTypes.number.isRequired,
};
