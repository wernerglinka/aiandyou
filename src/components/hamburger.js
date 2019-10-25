import styled from "@emotion/styled";

const Hamburger = styled.button`
  position: fixed;
  top: 35px;
  right: 30px;
  z-index: 1001;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background: none;
  border: none;

  &:focus {
    outline: 0;
  }

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 4px;
    width: 30px;
    background: #000;
    position: absolute;
    top: 15px;
    display: block;
    content: "";
    transition: all 0.3s ease-in-out;
  }
  span:before {
    top: -8px;
  }
  span:after {
    top: auto;
    bottom: -8px;
  }
  &:hover {
    span,
    span:before,
    span:after {
      background: red;
    }
  }

  &.active {
    span {
      background-color: transparent;
    }
    span:before,
    span:after {
      top: 0;
    }
    span:before {
      transform: rotate(45deg);
    }
    span:after {
      transform: rotate(-45deg);
    }
    &:hover {
      span:before,
      span:after {
        background: red;
      }
    }
  }
`;

export default Hamburger;
