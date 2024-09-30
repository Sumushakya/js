import { useContext } from "react";
// import styles from "./detail.module.css";
import person4 from "../../assets/person4.png";
import { DetailContext } from "../../context/Detail/DetailContext";
import { Box, Text, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import { styles } from "./styles";

const Detail = () => {
  const { userDetails } = useContext(DetailContext);
  console.log("userdetailsss", userDetails);

  return (
    <Box flex="1.2">
      <Box style={styles.container}>
        <Box style={styles.profileCard}>
          <Box style={styles.avatarContainer}>
            <Image src={person4} alt="pic" boxSize="70px" objectFit="cover" />
          </Box>
        </Box>
        <Box style={styles.head}>
          <Text style={styles.pName}>{userDetails?.name}</Text>
          <Text style={styles.pHeadline}>{userDetails?.headline}</Text>
        </Box>
        <Box style={styles.card}>
          <Box style={{ marginTop: "8px" }}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.description}>{userDetails?.about}</Text>
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <Text style={styles.title}>Skills</Text>
            <Text style={styles.description}>
              {userDetails?.skill?.map((skills, index) => (
                <UnorderedList key={index}>
                  <ListItem>{skills}</ListItem>
                </UnorderedList>
              ))}
            </Text>
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.description}>
              {userDetails?.education?.map((education, index) => (
                <UnorderedList key={index}>
                  <ListItem>{education}</ListItem>
                </UnorderedList>
              ))}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Detail;
