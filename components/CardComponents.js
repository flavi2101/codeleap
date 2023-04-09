import ContextHook from "../hooks/UseContextHook";
import Link from "next/link";
import axios from "axios";

export function CardTitle({ title }) {
  return <h2>{title}</h2>;
}

export function CardInputData({ label, placeholder, data, setdata }) {
  function changeData(event) {
    setdata(event.target.value);
  }

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        required
        placeholder={placeholder}
        value={data}
        onChange={(event) => changeData(event)}
      ></input>
    </>
  );
}



export function CardButton({ idform, data, cssInfo, textButton }) {
  const {user, dispatch } = ContextHook();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (idform === "register") {
          dispatch({ type: "user", payload: data });
        }else if( idform === 'post'){
          
          axios
          .post("https://dev.codeleap.co.uk/careers/", {
            username:  `${user}`,
            title: `${data.title}`,
            content: `${data.content}`,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }}
      form={idform}
      type="submit"
      value="submit"
      style={
        data === ""
          ? { backgroundColor: "#AAAFB4", borderColor: "#AAAFB4" }
          : { backgroundColor: "#7695EC", borderColor: "#AAAFB4" }
      }
      className={cssInfo.submitButton}
    >
      <Link
        style={{ textDecoration: "none", color: "inherit" }}
        href="/codeleab_network"
      >
        {textButton}
      </Link>
    </button>
  );
}
