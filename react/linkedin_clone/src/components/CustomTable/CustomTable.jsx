import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import CustomTableToolbar from "./CustomTableToolbar";

function CustomTable(props) {
  const {
    data,
    columns,
    header,
    actionButton,
    headerButton,
    currentPage,
    totalPages,
    onPageChange,
  } = props;

  return (
    <Box>
      <TableContainer>
        <CustomTableToolbar header={header} headerButton={headerButton} />
        <Table size="sm">
          <Thead>
            <Tr>
              {columns?.map((column) => (
                <Th key={`${column.label}-tableHeaderKey`}>{column.label}</Th>
              ))}
              <Th>Action Buttons</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((row) => (
              <Tr key={`${row.label}-tableHeaderKey`}>
                {columns?.map((column) => (
                  <Td key={`${column.label}-tableDataKey`}>
                    {row[column.source]}
                  </Td>
                ))}
                <Td>
                  {actionButton?.map((action) => (
                    <IconButton
                      key={`${row.label}-actionKey`}
                      aria-label={action.label}
                      icon={action.icon}
                      variant="ghost"
                      size="md"
                      onClick={() => action.onClick(row.id)}
                    />
                  ))}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justify="center" align="center" mt={4} gap={2}>
        <Button
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Box>
          Page {currentPage} of {totalPages}
        </Box>
        <Button
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.string,
  actionButton: PropTypes.arrayOf(PropTypes.object),
  headerButton: PropTypes.object,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default CustomTable;
