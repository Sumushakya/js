import { Button } from "@chakra-ui/react";
import PropTypes from "prop-types";
// import { styles } from "./styles";

function CustomButton(props) {
  const { isSubmitting, btnLabel, btnLeftIcon, btnSxProps, ...rest } = props;
  return (
    <Button
      isDisabled={isSubmitting}
      leftIcon={btnLeftIcon}
      sx={{ ...btnSxProps }}
      {...rest}
    >
      {btnLabel}
    </Button>
  );
}
CustomButton.defaultProps = {
  isSubmitting: false,
  // btnLabel: "Submit",
};
CustomButton.propTypes = {
  isSubmitting: PropTypes.bool,
  btnLabel: PropTypes.string,
  btnLeftIcon: PropTypes.node,
  btnSxProps: PropTypes.object,
};

export default CustomButton;
