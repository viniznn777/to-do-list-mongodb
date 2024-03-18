import React from "react";
import ContainerLoader from "./styles";

const Loader = () => {
  return (
    <ContainerLoader>
      <div className="lds-dual-ring"></div>
    </ContainerLoader>
  );
};

export default Loader;
