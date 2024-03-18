import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;

  .title {
    width: 50%;
    color: ${colors.darkBlue};
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .top {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
      padding: 10px 12px;
      background-color: ${colors.darkBlue};
      border: none;
      outline: none;
      font-size: 1.3rem;
      box-shadow: -1px 0px 20px 0px ${colors.darkBlue};
      border-radius: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s;
      &:active {
        transform: scale(0.9);
      }

      svg {
        color: #fff;
      }
    }
  }

  .container-input {
    display: flex;
    align-items: center;
    border-radius: 25px;
    box-shadow: 0px 0px 17px -3px ${colors.lightBlue};
    padding: 0 30px;
    transition: all 0.2s;

    &:focus-within {
      box-shadow: 0px 0px 25px -3px ${colors.lightBlue};
    }

    svg {
      margin-right: 10px;
      font-size: 1.6rem;
      color: ${colors.darkBlue};
    }

    input {
      width: 100%;
      background-color: ${colors.backgroundColor};
      padding: 13px;
      font-size: 1.1rem;
      color: ${colors.lightBlue};
      border: none;
      outline: none;
      &::placeholder {
        color: ${colors.darkBlue};
      }
    }
  }

  .highlight {
    background-color: yellow;
    font-weight: bold;
  }
`;
