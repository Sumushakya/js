import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

function CustomMenu(props) {
  const {
    btnLeftIcon1,
    btnLeftIcon2,
    btnLeftIcon3,
    title1,
    title2,
    editClick,
    deleteClick,
  } = props;
  return (
    <Menu>
      <MenuButton as={IconButton} icon={btnLeftIcon1} />
      <MenuList>
        <MenuItem icon={btnLeftIcon2} onClick={editClick}>
          {title1}
        </MenuItem>
        <MenuItem icon={btnLeftIcon3} onClick={deleteClick}>
          {title2}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
CustomMenu.propTypes = {
  btnLeftIcon1: PropTypes.node,
  btnLeftIcon2: PropTypes.node,
  btnLeftIcon3: PropTypes.node,
  title1: PropTypes.string,
  title2: PropTypes.string,
  editClick: PropTypes.func,
  deleteClick: PropTypes.func,
};

export default CustomMenu;
