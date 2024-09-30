// import styles from "./nav.module.css";
import logo from "../../assets/logo.png";
import person2 from "../../assets/person2.png";
import { useNavigate } from "react-router-dom";
import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { styles } from "./styles";
const Nav = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/form");
  };
  const handleLogo = () => {
    navigate("/");
  };
  return (
    <Box style={styles.container}>
      <Box style={styles.navbar}>
        {/* <Flex align="center" justify="space-between"> */}
        <Image
          style={styles.navImage}
          src={logo}
          alt="logo"
          onClick={handleLogo}
        />

        <UnorderedList listStyleType="none" style={styles.ul}>
          <ListItem href="#" onClick={handleLogo}>
            Home
          </ListItem>
          <ListItem href="#">My Network</ListItem>
          <ListItem href="#">Jobs</ListItem>
          <ListItem href="#">Messaging</ListItem>
          <ListItem href="#">Network</ListItem>
        </UnorderedList>
        <Image
          style={styles.navImage}
          src={person2}
          alt="pic"
          onClick={handleClick}
        />
        {/* </Flex> */}
      </Box>
    </Box>
  );
};

export default Nav;
