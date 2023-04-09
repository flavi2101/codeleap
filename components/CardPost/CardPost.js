import { useState } from "react";
import styles from "./CardPost.module.css";
import { CardTitle, CardInputData, CardButton } from "../CardComponents";
export default function CardPost() {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  return (
    <div className={styles.CardPost}>
      <CardTitle title="What's on your mind?"></CardTitle>
      <form
        id="post"
        
      >
        <CardInputData
          label="Title"
          placeholder="Hello world"
          data={title}
          setdata={settitle}
        ></CardInputData>
        <label>Content</label>
        <textarea
          required
          label="Content"
          rows="7"
          placeholder="Content here"
          value={content}
          onChange={(event) => setcontent(event.target.value)}
        ></textarea>
        <CardButton
          idform="post"
          data={{title,content}}
          cssInfo={styles}
          textButton="Create"
          resetfiels={{settitle,setcontent}}
        ></CardButton>
      </form>
    </div>
  );
}
