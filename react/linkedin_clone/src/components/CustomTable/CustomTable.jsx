import {
  Box,
  Flex,
  // Button,
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
// import CustomHeaderButton from "./CustomHeaderButton";
import CustomButton from "../CustomButton";

function CustomTable(props) {
  const { data, columns, header, actionButton } = props;

  return (
    <Box>
      <TableContainer>
        <Box>
          <Flex justify="space-between" align="center" />
          <CustomTableToolbar header={header} />
          <CustomButton
            enableHover={true}
            btnLabel="Create"
            regularBtnStyle={{
              bg: "blue",
              _hover: { bg: "#1264b6" },
            }}
            btnSxProps={{
              color: "white",
              mt: "8px",
            }}
            onClick={() => console.log("button clicked")}
          />
        </Box>

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
  headerButton: PropTypes.object,
};

export default CustomTable;
