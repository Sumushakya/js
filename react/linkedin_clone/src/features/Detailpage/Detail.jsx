import { useContext } from "react";
import styles from "./detail.module.css";
import person4 from "../../assets/person4.png";
import { DetailContext } from "../../context/Detail/DetailContext";
import { Box, Text, Image, ListItem, UnorderedList } from "@chakra-ui/react";

const Detail = () => {
  const { userDetails } = useContext(DetailContext);
  console.log("userdetailsss", userDetails);

  return (
    <Box style={{ flex: 1.2 }}>
      <Box className={styles.container}>
        <Box className={styles.profileCard}>
          <Box className={styles.avatarContainer}>
            <Image src={person4} alt="pic" boxSize="70px" objectFit="cover" />
          </Box>
        </Box>
        <Box className={styles.head}>
          <Text className={styles.pName}>{userDetails?.name}</Text>
          <Text className={styles.pHeadline}>{userDetails?.headline}</Text>
        </Box>
        <Box className={styles.card}>
          <Box style={{ marginTop: "8px" }}>
            <Text className={styles.title}>About</Text>
            <Text className={styles.description}>{userDetails?.about}</Text>
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <Text className={styles.title}>Skills</Text>
            <Text className={styles.description}>
              {userDetails?.skill?.map((skills, index) => (
                <UnorderedList key={index}>
                  <ListItem>{skills}</ListItem>
                </UnorderedList>
              ))}
            </Text>
          </Box>
          <Box style={{ marginTop: "30px" }}>
            <Text className={styles.title}>Education</Text>
            <Text className={styles.description}>
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
