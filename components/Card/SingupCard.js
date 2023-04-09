import { useState } from "react";
import styles from "./Card.module.css";
import { CardTitle, CardInputData, CardButton } from "../CardComponents";
export default function SinupCard() {
  const [username, setusername] = useState("");

  return (
    <div className={styles.Card}>
      <CardTitle title="Welcome to Codeleap network!"></CardTitle>
      <form id="register">
        <CardInputData
          label="Please enter your username"
          placeholder="John doe"
          data={username}
          setdata={setusername}
        ></CardInputData>

        <CardButton
          idform="register"
          data={username}
          cssInfo={styles}
          textButton="Enter"
        ></CardButton>
      </form>
    </div>
  );
}
