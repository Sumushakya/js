export const styles = {
  container: {
    border: "2px solid #e3e4df",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  profileCard: {
    position: "relative",
    padding: "35px",
    backgroundColor: "lightblue",
    borderRadius: "8px 8px 0 0",
  },
  avatarContainer: {
    display: "flex",
    position: "absolute",
    bottom: "-30px",
    /* left: calc(100%-90px), */
    left: "120px",
    alignItems: "center",
    justifyContent: "center",
  },
  head: {
    textAlign: "center",
    marginTop: "30px",
  },
  pName: {
    margin: 0,
    padding: "8px",
    fontSize: "16px",
    fontWeight: "900",
    textDecoration: "underline",
  },
  pHeadline: {
    margin: 0,
    color: "grey",
    fontSize: "15px",
    paddingBottom: "4px",
    borderBottom: "1px solid #ddd",
    /* border-bottom: 1px solid grey, */
  },
  card: {
    /* margin: 4px, */
    paddingLeft: "30px",
  },
  title: {
    margin: 0,
    color: "#2a78ca",
    fontWeight: "600",
    fontsize: "16px",
    cursor: "pointer",
  },
  description: {
    marginTop: "4px",
    fontSize: "15px",
    color: "rgb(65, 60, 60)",
  },
  skillDetail: {
    border: "2px solid #ddd",
    background: "#f2f2f2",
    marginTop: "10px",
    paddingLeft: "20px",
    borderRadius: "8px",
  },
  formContainer: {
    marginTop: "10px",
  },

  label: {
    paddingBottom: "10px",
    display: "block",
    fonWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #e3e4df",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#1264b6",
    color: "white",
    padding: "10px 15px",
    border: "1px solid #e3e4df",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    _hover: {
      backgroundColor: "#2980b9",
    },
  },
  skill: {
    display: "flex",
    justifyContent: "space-between",
    gap: "100px",
    border: "2px solid #ddd",
    background: "#f2f2f2",
    marginTop: "8px",
    padding: "12px",
    borderRadius: "12px",
    // listStyleType: "none",
  },

  addButton: {
    marginTop: "8px",
  },
  error: {
    color: "red",
    fontSize: "15px",
  },

};
