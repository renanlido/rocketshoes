/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import {
  Container,
  CartItems,
  CartSumary,
  ItemDetails,
  ItemFooter,
  ProductItemDetails,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <CartItems>
        <h1>Meu Carrinho</h1>
        <li>
          <button type="button">
            <MdDelete size={20} color="#7159c1" />
          </button>
          <ItemDetails>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom1.jpg"
              alt="Tênis"
            />
            <div>
              <h3>Tenis Legal</h3>
              <p>Ref: #1235R</p>
              <p>
                Vendido e entregue por <span>Rocketshoes</span>
              </p>
            </div>
          </ItemDetails>
          <ItemFooter>
            <div>
              <span>Quantidade: </span>
              <button type="button">
                <MdRemoveCircleOutline size={20} />
              </button>
              <input type="number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} />
              </button>
            </div>

            <strong>R$ 258,80</strong>
          </ItemFooter>
        </li>

        <li>
          <button type="button">
            <MdDelete size={20} color="#7159c1" />
          </button>
          <ItemDetails>
            <img
              src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-feminino/26/HZM-1729-026/HZM-1729-026_zoom1.jpg"
              alt="Tênis"
            />
            <div>
              <h3>Tenis Legal</h3>
              <p>Ref: #1235R</p>
              <p>
                Vendido e entregue por <span>Rocketshoes</span>
              </p>
            </div>
          </ItemDetails>
          <ItemFooter>
            <div>
              <span>Quantidade: </span>
              <button type="button">
                <MdRemoveCircleOutline size={20} />
              </button>
              <input type="number" readOnly value={1} />
              <button type="button">
                <MdAddCircleOutline size={20} />
              </button>
            </div>

            <strong>R$ 258,80</strong>
          </ItemFooter>
        </li>

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

      <CartSumary>
        <h1>Resumo da Compra</h1>

        <ul>
          <li>
            <span>Subtotal (3 itens)</span>
            <strong>R$ 300,00</strong>
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
            <strong> R$ 0,00 </strong>
          </li>
          <li>
            <span>Valor total</span>
            <div>
              <strong>R$ 900,00</strong>
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
