// import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostpageFooter from "./PostpageFooter";
import { FaEllipsis, FaCirclePlus, FaPenToSquare } from "react-icons/fa6";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";
import { FaTrash } from "react-icons/fa";
import { styles } from "./styles";
import CustomMenu from "../../components/CustomMenu";
import axios from "axios";

const PostList = () => {
  const { postlistDetails, setPostlistDetails } = useContext(PostlistContext);

  // useEffect(() => {
  //   const localStoragePostList = JSON.parse(localStorage.getItem("postList"));
  //   if (localStoragePostList) {
  //     setPostData(() => localStoragePostList);
  //   }
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts`)
      .then((res) => setPostlistDetails(res.data));
  }, [setPostlistDetails]);

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/postform");
  };
  // const handleClick = () => {
  //   navigate("/list");
  // };

  const handleEdit = (id) => {
    console.log("edit", id, postlistDetails);
    {
      postlistDetails.find((indvpostList) => indvpostList.id === id);
    }
    // navigate("/postform", { state: { key: id } });

    navigate("/postform", { state: { actionType: "EDIT", id: id } });
  };

  const handleDelete = (id) => {
    const deleteData = postlistDetails.filter(
      (indvpostList) => indvpostList.id !== id
    );
    setPostlistDetails(deleteData);
  };

  return (
    <Box flex="4" style={styles.container}>
      {postlistDetails?.map((indvpostList) => (
        <Box key={indvpostList.id} style={styles.innerbox}>
          <Box>
            <Flex justify="space-between">
              <Box>
                <Box>
                  <Flex direction="row" gap="8px">
                    <img src={person} alt="person" width="40px" height="40px" />
                    <Box>
                      <Flex direction="column">
                        <Text style={styles.nameContent}>
                          {indvpostList.name}
                        </Text>
                        <Text style={styles.headlineContent}>
                          {indvpostList.headline}
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box style={{ position: "relative" }}>
                <CustomMenu
                  btnLeftIcon1={<FaEllipsis />}
                  btnLeftIcon2={<FaPenToSquare />}
                  btnLeftIcon3={<FaTrash />}
                  title1="Edit"
                  title2="Delete"
                  editClick={() => handleEdit(indvpostList.id)}
                  deleteClick={() => handleDelete(indvpostList.id)}
                />
              </Box>
            </Flex>
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
            <PostpageFooter postDetail={indvpostList} />
          </Box>
        </Box>
      ))}
      <br />
      <br />
      <Box>
        <CustomButton
          btnLabel="Add Post"
          btnRightIcon={<FaCirclePlus />}
          regularBtnStyle={{ bg: "blue", _hover: { bg: "#1264b6" } }}
          btnSxProps={{
            color: "white",
            position: "fixed",
          }}
          onClick={handleAdd}
          style={styles.btn}
        />
        {/* <CustomButton
          btnLabel="List Table"
          regularBtnStyle={{ bg: "blue", _hover: { bg: "#1264b6" } }}
          btnSxProps={{ color: "white" }}
          onClick={handleClick}
          styles={styles.btn}
        /> */}
      </Box>
    </Box>
  );
};

export default PostList;
