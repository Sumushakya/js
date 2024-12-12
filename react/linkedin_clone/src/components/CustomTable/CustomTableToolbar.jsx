import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomTableToolbar = ({ header }) => {
  return (
    <Heading size="md" fontWeight="medium" pt={4}>
      {header}
    </Heading>
  );
};

CustomTableToolbar.propTypes = {
  header: PropTypes.string,
};

export default CustomTableToolbar;
