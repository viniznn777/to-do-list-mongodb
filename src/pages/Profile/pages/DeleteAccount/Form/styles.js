import styled from "styled-components";
import { colors } from "../../../../../utils/Colors";

export const Container = styled.form`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    width: 100%;
    color: ${colors.darkBlue};
    display: flex;
    justify-content: flex-start;
    padding-bottom: 25px;
    flex-direction: column;
  }
  .container-inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 12px;

    label {
      color: ${colors.lightBlue};
      padding-bottom: 12px;
      font-size: 1.2rem;
    }

    input {
      border-radius: 25px;
      padding: 13px;
      padding-left: 12px;
      font-size: 1.1rem;
      color: ${colors.lightBlue};
      box-shadow: 0px 0px 17px -3px ${colors.lightBlue};
      border: none;
      outline: none;
      transition: all 0.2s;
      &:focus {
        box-shadow: 0px 0px 25px -3px ${colors.lightBlue};
      }
    }
  }
  .container-button-submit {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 23px;
    padding-bottom: 23px;
    button {
      order: 2;
      width: 40%;
      padding: 12px;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 25px;
    }
    a {
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
