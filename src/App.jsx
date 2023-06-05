import { useRef, useState } from "react";
import MyInput from "./components/MyInput";

export default function Form() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const name = useRef(null);
  const email = useRef(null);

  function handleClick(e) {
    e.preventDefault();
    if (inputName.length <= 2) {
      name.current.focus();
    } else if (!inputEmail.includes("@")) {
      email.current.focus();
    } else {
      alert("everything is ok");
      setInputEmail("");
      setInputName("");
    }
  }

  return (
    <form>
      <MyInput
        label="Enter your name:"
        value={inputName}
        onInput={setInputName}
        ref={name}
      />
      <MyInput
        label="Enter your email:"
        value={inputEmail}
        onInput={setInputEmail}
        ref={email}
      />
      <button type="submit" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
