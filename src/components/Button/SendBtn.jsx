import PropTypes from "prop-types";

import * as SC from "./Button.styled";

export const SendBtn = ({ type = "submit", children, actionHandler }) => {
  return (
    <SC.SendBtn type={type} onClick={actionHandler}>
      {children}
    </SC.SendBtn>
  );
};

SendBtn.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionHandler: PropTypes.func,
};
