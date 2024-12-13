import { Box, Flex, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomTableToolbar = ({ header, headerButton }) => {
  return (
    <Flex justify="space-between" align="center" pb={4}>
      <Heading size="md" fontWeight="medium" textAlign="center">
        {header}
      </Heading>
      {headerButton && <Box>{headerButton}</Box>}
    </Flex>
  );
};

CustomTableToolbar.propTypes = {
  header: PropTypes.string,
  headerButton: PropTypes.node,
};

export default CustomTableToolbar;
