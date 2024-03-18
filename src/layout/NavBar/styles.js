import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Header = styled.header`
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.backgroundColor};
  .header {
    padding-top: 60px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    p {
      color: ${colors.lightBlue};
    }

    img {
      width: 200px;
      height: 100px;
    }
  }
`;
