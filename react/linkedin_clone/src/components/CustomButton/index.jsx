import { Button, IconButton, Tooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";
// import { styles } from "./styles";
import { ButtonType } from "../../constants/ButtonType";
import { useMemo } from "react";

const { REGULAR } = ButtonType;

function CustomButton(props) {
  const {
    btnType = REGULAR,
    // enableHover,
    isSubmitting,
    iconBtnStyle,
    regularBtnStyle,
    btnLabel,
    btnLeftIcon,
    btnRightIcon,
    btnSxProps,
    tooltipLabel,
    ...rest
  } = props;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const hoverStyles = enableHover
  //   ? { _hover: { bg: "#1264b6" } }
  //   : {
  //       _hover: {
  //         border: "none",
  //         background: "#f2f2f2",
  //         borderRadius: "12px",
  //       },
  //     };

  const prepareBtn = useMemo(() => {
    const tempBtn = {
      ICON_BUTTON: (
        <IconButton
          icon={btnLeftIcon}
          sx={{ ...iconBtnStyle, ...btnSxProps }}
          {...rest}
          aria-label={btnLabel || "Default Label"}
        />
      ),
      REGULAR: (
        <Button
          isDisabled={isSubmitting}
          leftIcon={btnLeftIcon}
          rightIcon={btnRightIcon}
          sx={{ ...regularBtnStyle, ...btnSxProps }}
          {...rest}
        >
          {btnLabel}
        </Button>
      ),
    };
    if (tooltipLabel) {
      return {
        ICON_BUTTON: (
          <Tooltip label={tooltipLabel}>{tempBtn.ICON_BUTTON}</Tooltip>
        ),
        REGULAR: <Tooltip label={tooltipLabel}>{tempBtn.REGULAR}</Tooltip>,
      };
    }
    return tempBtn;
  }, [
    btnLeftIcon,
    iconBtnStyle,
    btnSxProps,
    rest,
    btnLabel,
    isSubmitting,
    btnRightIcon,
    regularBtnStyle,
    tooltipLabel,
  ]);

  return prepareBtn[btnType];
}

CustomButton.defaultProps = {
  isSubmitting: false,
};
CustomButton.propTypes = {
  isSubmitting: PropTypes.bool,
  btnLabel: PropTypes.string,
  btnLeftIcon: PropTypes.node,
  btnRightIcon: PropTypes.node,
  btnSxProps: PropTypes.object,
  btnType: PropTypes.oneOf(["REGULAR", "ICON_BUTTON"]),

  tooltipLabel: PropTypes.string,
};

export default CustomButton;
