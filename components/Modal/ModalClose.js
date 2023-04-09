import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { CardInputData } from "../CardComponents";
import { useState } from "react";
import { CardButton } from "../CardComponents";
import styles from "../../components/CardPost/CardPost.module.css";
import { CardTitle } from "../CardComponents";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  inlineSize: "90%",
  blockSize: "15%",
  borderRadius: "16px",
  border: "none",
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  inlineSize: "90%",
  blockSize: "35%",
  borderRadius: "16px",
  border: "none",
};

const styleDiv_Button = (val) => {
  if (!val) {
    return {
      display: "flex",
      flexDirection: "row",
      inlineSize: "30%",
      columnGap: "16px",
      position: "relative",
      insetInlineStart: "75%",
      insetBlockStart: "50%",
    };
  } else {
    return{
      display: "flex",
      flexDirection: "row",
      inlineSize: "30%",
      columnGap: "16px",
      position: "relative",
      insetInlineStart: "60%",
     

    }
  }
};

function buttonStyle(bg, col) {
  return {
    backgroundColor: bg,
    color: col,
    borderRadius: "8px",
    ":focus": {
      backgroundColor: bg,
    },
  };
}
export default function ChangePost({
  openModal,
  close,
  id,
  textButton,
  modalText,
  postData,
}) {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  function changePost(id) {
    console.log(`delete item ${id}`);
  }

  if (textButton === "Delete") {
    return (
      <div>
        <Modal
          open={openModal}
          onClose={!openModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            backgroundColor: "rgb(220,220,220)",
          }}
        >
          <Box sx={style}>
            <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
              {modalText}
            </Typography>
            <Box sx={styleDiv_Button(false)}>
              <Button
                variant="outlined"
                sx={buttonStyle("white", "black")}
                onClick={() => close(false)}
              >
                Cancel
              </Button>
              <Button
                variant="outlined"
                sx={buttonStyle("red", "white")}
                onClick={() => changePost(id)}
              >
                {textButton}
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    );
  } else if (textButton === "edit") {
    return (
      <Modal
        open={openModal}
        onClose={!openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          backgroundColor: "rgb(220,220,220)",
        }}
      >
        <Box sx={style2}>
          <div className={styles.CardPostDelete}>
            <CardTitle title={modalText}></CardTitle>
            <form id="post">
              <CardInputData
                label="Title"
                placeholder="Hello world"
                data={postData.title}
                setdata={settitle}
              ></CardInputData>
              <label>Content</label>
              <textarea
                required
                label="Content"
                rows="7"
                placeholder="Content here"
                value={postData.content}
                onChange={(event) => setcontent(event.target.value)}
              ></textarea>
              <Box sx={styleDiv_Button(true)}>
                <Button
                  variant="outlined"
                  sx={buttonStyle("white", "black")}
                  onClick={() => close(false)}
                >
                  Cancel
                </Button>
                <CardButton
                  idform="post"
                  data={{ title, content }}
                  cssInfo={styles}
                  textButton={textButton}
                ></CardButton>
              </Box>
            </form>
          </div>
        </Box>
      </Modal>
    );
  }
}
