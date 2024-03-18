import styled from "styled-components";
import { colors } from "../../../utils/Colors";

export const FormContainer = styled.form`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

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

    input,
    textarea {
      border-radius: 25px;
      padding: 13px;
      padding-left: 12px;
      font-size: 1.1rem;
      color: ${colors.darkBlue};
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
      border: none;
      outline: none;
      font-size: 1.1rem;
      color: #ffffff;
      font-weight: bold;
      border-radius: 25px;
      background-color: ${colors.darkBlue};
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        background-color: rgba(47, 49, 245, 0.8);
      }
    }
    a {
      color: ${colors.darkBlue};
      font-size: 1.6rem;
    }
  }
`;
