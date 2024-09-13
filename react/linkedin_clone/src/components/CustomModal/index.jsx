import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomModal(props) {
  const {
    isOpen,
    onClose,
    size,
    title,
    bodyContent,
    footerButtons,
    isCentered,
    hasCloseBtn = true,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={size}
      isCentered={isCentered}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        {hasCloseBtn && <ModalCloseButton />}
        <ModalBody>{bodyContent}</ModalBody>
        <ModalFooter>{footerButtons}</ModalFooter>
      </ModalContent>
    </Modal>
  );
}
CustomModal.defaultProps = {
  size: "md",
  isCentered: false,
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "full"]),
  isCentered: PropTypes.bool,
  bodyContent: PropTypes.node,
  footerButtons: PropTypes.node,
  hasCloseBtn: PropTypes.bool,
};

export default CustomModal;
