import { Button, IconButton } from "@chakra-ui/react";
import PropTypes from "prop-types";
// import { styles } from "./styles";
import { ButtonType } from "../../constants/ButtonType";
import { useMemo } from "react";

const { REGULAR } = ButtonType;

function CustomButton(props) {
  const {
    btnType = REGULAR,
    enableHover,
    // hoverStyles,
    isSubmitting,
    btnLabel,
    btnLeftIcon,
    btnRightIcon,
    btnSxProps,
    ...rest
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hoverStyles = enableHover
    ? { _hover: { bg: "blue" } }
    : { _hover: { border: "none", background: "none" } };

  const prepareBtn = useMemo(() => {
    const tempBtn = {
      ICON_BUTTON: (
        <IconButton
          icon={btnLeftIcon}
          sx={{ ...btnSxProps, ...hoverStyles }}
          {...rest}
          aria-label={btnLabel || "Default Label"}
        />
      ),
      REGULAR: (
        <Button
          isDisabled={isSubmitting}
          leftIcon={btnLeftIcon}
          rightIcon={btnRightIcon}
          sx={{ ...btnSxProps, ...hoverStyles }}
          {...rest}
        >
          {btnLabel}
        </Button>
      ),
    };
    return tempBtn;
  }, [
    btnLabel,
    btnLeftIcon,
    btnRightIcon,
    btnSxProps,
    hoverStyles,
    isSubmitting,
    rest,
  ]);

  return prepareBtn[btnType];
}

CustomButton.defaultProps = {
  isSubmitting: false,
  enableHover: false,
};
CustomButton.propTypes = {
  isSubmitting: PropTypes.bool,
  btnLabel: PropTypes.string,
  btnLeftIcon: PropTypes.node,
  btnRightIcon: PropTypes.node,
  btnSxProps: PropTypes.object,
  btnType: PropTypes.oneOf(["REGULAR", "ICON_BUTTON"]),
  enableHover: PropTypes.bool,
};

export default CustomButton;
