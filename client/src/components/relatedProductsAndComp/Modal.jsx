import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  // transform: translate(2, 2);
  background-color: white;
  border: solid black 1px;
  padding: 15px;
  z-Index: 1000;
  width: auto;
  td {
    text-align: center;
  };
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
    padding-right: 40px;
  }
`;

export default function Modal({ open, children, onClose, x, y }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalWrapper style={{ top: `${y}px`, left: `${x}px` }}>
        <Comparing>COMPARING</Comparing>
        <ProductNames>
          <span>Product Short Name 1</span>
          <span>Product Short Name 2</span>
        </ProductNames>
        <table>
          <tr>
            <td>✓</td>
            <td>GMO and Pesticide-free</td>
            <td>✓</td>
          </tr>
          <tr>
            <td>✓</td>
            <td>Made with 100% Genetic Modification</td>
            <td> </td>
          </tr>
          <tr>
            <td>✓</td>
            <td>This is made up</td>
            <td>✓</td>
          </tr>
          <tr>
            <td> </td>
            <td>Feature Description</td>
            <td>✓</td>
          </tr>
          <tr>
            <td> </td>
            <td>Some other product comparision metrics</td>
            <td>✓</td>
          </tr>
        </table>
        {children}
      </ModalWrapper>
    </>,
    document.getElementById('portal'),
  );
}
