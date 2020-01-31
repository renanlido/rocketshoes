import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h1 {
    padding-bottom: 30px;
    color: #7159c1;
    font-size: 24px;
    font-weight: bold;
  }
`;

export const EmptyCart = styled.div`
  display: ${props => (props.empty ? 'block' : 'none')};
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 40px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    h1 {
      font-size: 18px;
      margin-top: 10px;
      font-weight: bold;
      text-transform: uppercase;
      color: #7159c1;
      padding-bottom: 5px;
    }

    p {
      font-size: 15px;
      color: #666;
      padding-bottom: 40px;
    }
  }
`;

export const Products = styled(Link)`
  display: flex;
  align-items: center;

  height: 50px;
  margin-right: 5px;
  border: 1px solid #7159c1;
  border-radius: 4px;
  padding: 12px 20px;

  background: none;
  text-decoration: none;

  color: #7159c1;

  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    color: ${darken(0.2, '#7159c1')};
  }
`;

export const CartItems = styled.ul`
  display: ${props => (!props.empty ? 'block' : 'none')};
  height: 100%;
  width: 100%;

  background: #fff;
  margin-right: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;

  li {
    list-style: none;
    border: 1px solid #eee;
    padding: 20px;
    position: relative;
    margin-bottom: 20px;

    > button {
      position: absolute;
      background: none;
      border: 0;
      top: 20px;
      right: 20px;
    }
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  border-bottom: 2px solid #eee;

  img {
    height: 120px;
  }

  div {
    margin-left: 12px;

    h3 {
      margin-bottom: 5px;
      font-size: 20px;
      max-width: 400px;
    }

    p {
      font-size: 12px;
      color: #999;

      span {
        color: #7159c1;
        text-decoration: underline;
      }
    }
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;

    span {
      color: #999;
      font-weight: bold;
    }

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #999;
      padding: 6px 0 6px 10px;
      width: 36px;
      text-align: center;
    }

    button {
      background: none;
      border: 0;
      padding: 0 10px;
      color: #999;
    }
  }

  strong {
    font-size: 18px;
  }
`;

export const ProductItemDetails = styled.div`
  margin-top: 30px;

  span {
    font-size: 17px;
    color: #666;
    font-weight: bold;
  }

  div {
    display: flex;
    margin-top: 20px;
    align-items: baseline;
    justify-content: baseline;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #7159c1;
      padding: 6px;
      width: 40%;
      height: 50px;
      margin-right: 10px;

      &::placeholder {
        color: #7159c1;
        font-weight: bolder;
        font-size: 12px;
      }
    }

    button {
      background: none;
      height: 50px;
      margin-right: 5px;
      color: #999;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;
    }

    a {
      font-size: 10px;
      text-decoration: underline;
      width: auto;
      color: #999;
    }
  }
`;

export const CartSumary = styled.div`
  display: ${props => (!props.empty ? 'block' : 'none')};
  background: #fff;
  width: 55%;
  height: 100%;
  border-radius: 4px;
  padding: 30px;

  ul {
    background: #eee;
    border-radius: 4px;
    list-style: none;
    padding: 10px;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 20px 5px;

      border-bottom: 2px solid #ccc;

      &:last-child {
        border-bottom: none;
      }

      > span {
        font-weight: 600;
        color: #666;
        font-size: 14px;
        line-height: 23px;
      }

      strong {
        font-weight: bold;
        font-size: 16px;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        span {
          display: block;
          font-size: 10px;
          color: #666;

          strong {
            font-size: 10px;
          }
        }
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    button {
      margin: 20px 10px;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      &:last-child {
        margin-top: 0;
        color: #7159c1;
        border: 1px solid #7159c1;
        background: none;
      }
    }
  }
`;
