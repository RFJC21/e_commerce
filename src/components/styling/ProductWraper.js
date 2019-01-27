import styled from "styled-components";

export const ProductWraper = styled.div`
  /*card footer*/
  .card {
    border-color: transparent;
    transition: all 0.75s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.75s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  /*image*/
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.75s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  /*button*/
  /*transform 100% desaparece, a 0 aparece*/
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 0.75s linear;
  }
  .cart-btn:hover {
    color: var(--lightBlue);
    cursor: pointer;
  }
`;
