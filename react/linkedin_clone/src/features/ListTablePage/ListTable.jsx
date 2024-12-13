import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useTableColumns } from "./useTableColumns";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import CustomButton from "../../components/CustomButton";

const ListTable = () => {
  const [tableData, setTableData] = useState([]);
  // console.log("objectksjdjdjdjdjdjdjd", tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts`)
      .then((res) => setTableData(res.data));
  }, [setTableData]);

  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  console.log("pageeeeeeeeeeeeeeee", totalPages);

  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  console.log("jdhjdkjkd", paginatedData);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const columns = useTableColumns();

  const listActionButton = [
    {
      label: "Edit",
      icon: <EditIcon />,
      onClick: (id) => console.log("Edit button clicked for ID:", id),
    },
    {
      label: "View",
      icon: <ViewIcon />,
      onClick: (id) => console.log("view button clicked for ID:", id),
    },
    {
      label: "Delete",
      icon: <DeleteIcon />,
      onClick: (id) => console.log("delete  button clicked for ID:", id),
    },
  ];

  const headerButton = (
    <CustomButton
      btnLabel="Create"
      regularBtnStyle={{
        bg: "blue",
        _hover: { bg: "#1264b6" },
      }}
      btnSxProps={{
        color: "white",
        mt: "4px",
      }}
      onClick={() => console.log("button clicked")}
    />
  );
  return (
    <Box p={4}>
      <CustomTable
        header="User Information Table"
        columns={columns}
        data={paginatedData}
        actionButton={listActionButton}
        headerButton={headerButton}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default ListTable;
