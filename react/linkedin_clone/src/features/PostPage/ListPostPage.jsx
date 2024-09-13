import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import { FaEllipsis, FaCirclePlus, FaPenToSquare } from "react-icons/fa6";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { FaTrash } from "react-icons/fa";

const PostList = () => {
  const { postlistDetails, setPostlistDetails } = useContext(PostlistContext);
  console.log("data", postlistDetails);

  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const localStoragePostList = JSON.parse(localStorage.getItem("postList"));
  //   if (localStoragePostList) {
  //     setPostData(() => localStoragePostList);
  //   }
  // }, []);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };

  const handleEdit = (id) => {
    console.log("edit", id, postlistDetails);
    {
      postlistDetails.find((indvpostList) => indvpostList.id === id);
    }
    // navigate("/postform", { state: { key: id } });

    navigate("/postform", { state: { actionType: "EDIT", id: id } });
  };

  const handleDelete = (id) => {
    console.log("oooooooooooooooo", id, postlistDetails);
    const deleteData = postlistDetails.filter(
      (indvpostList) => indvpostList.id !== id
    );
    setPostlistDetails(deleteData);
  };

  return (
    <Box className={styles.container} style={{ flex: 4 }}>
      {postlistDetails?.map((indvpostList) => (
        <Box key={indvpostList.id} className={styles.innerbox}>
          <Box className={styles.contain}>
            <Box>
              <Box className={styles.imageContent}>
                <img src={person} alt="person" width="40px" height="40px" />
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Text className={styles.nameContent}>
                    {indvpostList.name}
                  </Text>
                  <Text className={styles.headlineContent}>
                    {indvpostList.headline}
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box style={{ position: "relative" }}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaEllipsis />}
                  variant="ghost"
                  _hover={{ bag: "f2f2f2", borderRadius: "12px" }}
                />
                <MenuList>
                  <MenuItem
                    icon={<FaPenToSquare />}
                    onClick={() => handleEdit(indvpostList.id)}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    icon={<FaTrash />}
                    onClick={() => handleDelete(indvpostList.id)}
                  >
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
          <br />
          <Box>
            <Text>{indvpostList.des}</Text>

            <Box
              style={{
                marginTop: "5px",
                width: "100%",
                height: "100%",
              }}
            >
              <img
                src="https://st.depositphotos.com/1927453/1975/i/380/depositphotos_19750405-stock-photo-alone-tree-on-meadow-at.jpg"
                alt="dummy"
                style={{
                  width: "inherit",
                  height: "inherit",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Icons id={indvpostList.id} />
          </Box>
        </Box>
      ))}
      <br />
      <br />
      <Box>
        <CustomButton
          enableHover={true}
          btnLabel="Add Post"
          btnRightIcon={<FaCirclePlus />}
          regularBtnStyle={{ bg: "blue", _hover: { bg: "#1264b6" } }}
          btnSxProps={{
            color: "white",
            position: "fixed",
          }}
          onClick={handleAdd}
          className={styles.btn}
        />
      </Box>
    </Box>
  );
};

export default PostList;
