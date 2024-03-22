import React from "react";
import { Link } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { colors } from "../../utils/Colors";

const BackButton = ({ where }) => {
  return (
    <Link
      to={where}
      style={{
        color: `${colors.darkBlue}`,
        fontSize: "1.6rem",
        width: "max-content",
      }}
      title="Voltar"
    >
      <IoReturnDownBackSharp />
    </Link>
  );
};
export default BackButton;
