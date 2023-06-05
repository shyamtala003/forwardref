import { forwardRef } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, value, onInput } = props;
  return (
    <>
      <br />
      <label>
        {label}
        <input
          value={value}
          onChange={() => {
            onInput(ref.current.value);
          }}
          ref={ref}
        />
      </label>
    </>
  );
});

export default MyInput;
