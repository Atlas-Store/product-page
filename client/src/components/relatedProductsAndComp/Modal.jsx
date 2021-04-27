import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: solid black 1px;
  padding: 15px;
  z-Index: 1000;
  width: auto;
  td {
    text-align: center;
  };
  .icon {
    position: absolute;
    right: 4px;
    top: 4px;
    height: 20px;
    width: 20px;
    margin: 4px 4px;
    background: white;
    border-radius: 30px;
    z-Index: 4;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-Index: 1000;
`;

const Comparing = styled.div`
  padding-bottom: 10px;
  font-size: small;
`;

const ProductNames = styled.div`
  padding-bottom: 20px;
  font-weight: bold;
  span :first-of-type {
    padding-left: 3px;
    padding-right: 50px;
  }
  span :n-of-type(2) {
    padding-left:3px;
  }
`;

export default function Modal({
  open, children, onClose, x, y, product, currentProduct,
}) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper style={{ top: `${y}px`, left: `${x}px` }}>
        <img
          className="icon"
          src="./delete.png"
          alt="delete icon"
          onClick={onClose}
        />
        <Comparing>COMPARING</Comparing>
        <ProductNames>
          <span>{currentProduct.name}</span>
          <span>{product.name}</span>
        </ProductNames>
        <table>
          <tr>
            <td>✓</td>
            <td>Long-lasting durability</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>✓</td>
            <td>Made with 100% Cotton</td>
            <td> </td>
          </tr>
          <tr>
            <td>✓</td>
            <td>Water and Sweat Resistant</td>
            <td>✓</td>
          </tr>
          <tr>
            <td> </td>
            <td>Feature Description</td>
            <td>✓</td>
          </tr>
          <tr>
            <td> </td>
            <td>3-month Money-back Guarantee</td>
            <td>✓</td>
          </tr>
        </table>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('portal'),
  );
}
