import styled from "styled-components";
import { colors } from "../../utils/Colors";

const ContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;

    &::after {
      content: " ";
      display: block;
      width: 44px;
      height: 44px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid red;
      border-color: ${colors.darkBlue} transparent ${colors.darkBlue}
        transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ContainerLoader;
