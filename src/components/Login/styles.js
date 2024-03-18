import styled from "styled-components";
import { colors } from "../../utils/Colors";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.backgroundColor};
`;
