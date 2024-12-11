import {
  Box,
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
  const { data, columns, header, actionButton } = props;

  return (
    <Box>
      <TableContainer>
        <CustomTableToolbar header={header} />
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
    </Box>
  );
}

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  header: PropTypes.string,
  actionButton: PropTypes.arrayOf(PropTypes.object),
};

export default CustomTable;
