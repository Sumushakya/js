import styles from "./postlist.module.css";
import person from "../../assets/person.png";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "./Icons";
import { FaEllipsis, FaCircleXmark } from "react-icons/fa6";
import { PostlistContext } from "../../context/PostList/PostlistContext";
import { Box, Text } from "@chakra-ui/react";
import CustomButton from "../../components/CustomButton";

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
              {/* <Button
                border="none"
                background="none"
                onClick={() =>
                  setVisible({
                    ...visible,
                    [indvpostList.id]: !visible[indvpostList.id],
                  })A
                }
              >
                <FaEllipsis/>
              </Button> */}
              <CustomButton
                btnLeftIcon={<FaEllipsis />}
                btnSxProps={{ border: "none", background: "none" }}
                onClick={() =>
                  setVisible({
                    ...visible,
                    [indvpostList.id]: !visible[indvpostList.id],
                  })
                }
              />
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
                    {/* <Button
                      border="none"
                      background="none"
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
                    </Button> */}
                    <CustomButton
                      btnLeftIcon={<FaCircleXmark />}
                      btnSxProps={{ border: "none", background: "none" }}
                      onClick={() =>
                        setVisible((prevVisible) => ({
                          ...prevVisible,
                          [indvpostList.id]: false,
                        }))
                      }
                    />
                  </Box>
                  <Box className={styles.content}>
                    <Box className={styles.modalBtnWrapper}>
                      {/* <Button
                        border="none"
                        background="none"
                        className={styles.btnEdit}
                        onClick={() => handleEdit(indvpostList.id)}
                      >
                        Edit
                      </Button> */}
                      <CustomButton
                        btnLabel="Edit"
                        btnSxProps={{ border: "none", background: "none" }}
                        onClick={() => handleEdit(indvpostList.id)}
                      />
                    </Box>
                    <Box className={styles.modalBtnWrapper}>
                      {/* <Button
                        border="none"
                        background="none"
                        className={styles.btnDelete}
                        onClick={() => handleDelete(indvpostList.id)}
                      >
                        Delete
                      </Button> */}
                      <CustomButton
                        btnLabel="Delete"
                        btnSxProps={{ border: "none", background: "none" }}
                        onClick={() => handleDelete(indvpostList.id)}
                      />
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
        <CustomButton
          btnLabel="Add Post"
          btnSxProps={{
            backgroundColor: "#1264b6",
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
