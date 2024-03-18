import styled from "styled-components";
import { colors } from "../../../utils/Colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 13px;
  padding-bottom: 13px;

  .container-balloon {
    display: flex;
    justify-content: space-between;
    width: 70%;
    border-radius: 23px;
    padding: 9px 23px;
    background-color: ${colors.backgroundColor};
    border-radius: 25px;
    color: ${colors.darkBlue};
    box-shadow: 0px 0px 17px -3px ${colors.lightBlue};
    transition: all 0.2s;
    &:hover {
      background-color: ${colors.darkBlue};
      color: #fff;
      box-shadow: 0px 0px 25px -3px ${colors.lightBlue};
      a {
        color: #fff;
      }
    }
  }

  .task {
    display: flex;
    align-items: center;
    width: 100%;
    p {
      margin: 0;
    }
  }
  a {
    width: 100%;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  .date {
    display: flex;
    align-items: center;
    gap: 13px;

    button {
      border-radius: 19px;
      font-size: 1.2rem;
      svg {
        margin-bottom: 5px;
      }
    }
  }
`;
