import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import { FaEllipsis } from "react-icons/fa6";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import { Box, Button, Text } from "@chakra-ui/react";

const PostList = () => {
  const { postlistDetails, setPostlistDetails } = useContext(PostlistContext);
  console.log("data", postlistDetails);

  const [visible, setVisible] = useState(false);

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

  const handleCloseOutsideClick = (e, id) => {
    if (e.target.classList.contains(styles.modal)) {
      setVisible((prevVisible) => ({ ...prevVisible, [id]: false }));
    }
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
              <Button
                style={{
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setVisible({
                    ...visible,
                    [indvpostList.id]: !visible[indvpostList.id],
                  })
                }
              >
                <FaEllipsis />
              </Button>
              {visible[indvpostList.id] && (
                <Box
                  key={indvpostList.id}
                  className={styles.modal}
                  onClick={(e) => handleCloseOutsideClick(e, indvpostList.id)}
                  style={{ display: "block" }}
                >
                  <Box
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      className={styles.close}
                      // onClick={() => setVisible(false)}
                      onClick={() =>
                        setVisible((prevVisible) => ({
                          ...prevVisible,
                          [indvpostList.id]: false,
                        }))
                      }
                    >
                      &times;
                    </Button>
                  </Box>
                  <Box className={styles.content}>
                    <Box className={styles.modalBtnWrapper}>
                      <Button
                        className={styles.btnEdit}
                        onClick={() => handleEdit(indvpostList.id)}
                      >
                        Edit
                      </Button>
                    </Box>
                    <Box className={styles.modalBtnWrapper}>
                      <Button
                        className={styles.btnDelete}
                        onClick={() => handleDelete(indvpostList.id)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )}
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
        <Button
          colorScheme="blue"
          position="fixed"
          className={styles.btn}
          onClick={handleAdd}
        >
          Add post
        </Button>
      </Box>
    </Box>
  );
};

export default PostList;
