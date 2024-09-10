import styles from "./nav.module.css";
import logo from "../../assets/logo.png";
import person2 from "../../assets/person2.png";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, ListItem, UnorderedList } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";

const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form");
  };
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <Box position="sticky" top="0" zIndex="999" bgColor="white" p={4}>
      {/* <Box className={styles.navbar}> */}
      <Flex align="center" justifyContent="space-between">
        <Image
          className={styles.navImage}
          src={logo}
          alt="logo"
          onClick={handleLogo}
        />

        <UnorderedList listStyleType="none" className={styles.ul}>
          <ListItem href="#" onClick={handleLogo}>
            Home
          </ListItem>
          <ListItem href="#">My Network</ListItem>
          <ListItem href="#">Jobs</ListItem>
          <ListItem href="#">Messaging</ListItem>
          <ListItem href="#">Network</ListItem>
        </UnorderedList>
        <Image
          className={styles.navImage}
          src={person2}
          alt="pic"
          onClick={handleClick}
        />
      </Flex>
    </Box>
  );
};

export default Nav;
