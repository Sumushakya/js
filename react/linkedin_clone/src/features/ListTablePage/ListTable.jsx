import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useTableColumns } from "./useTableColumns";
import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";

const ListTable = () => {
  const [tabledata, setTableData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts`)
      .then((res) => setTableData(res.data));
  }, [setTableData]);

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

  const headerButton = {
    label: "Create",
  };

  return (
    <Box p={4}>
      <CustomTable
        header="User Information Table"
        columns={columns}
        data={tabledata}
        actionButton={listActionButton}
        Button={headerButton}
      />
    </Box>
  );
};

export default ListTable;
