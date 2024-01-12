import { BUTTON_TEST_ID } from "./consts";
import { ButtonProps } from "./types";

export const Button = (props: ButtonProps) => {
  const { children, ...elementAttributes } = props;
  return (
    <button
      data-testid={BUTTON_TEST_ID}
      {...elementAttributes}
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "40px",
        backgroundColor: "#00F",
        color: "#FFF",
      }}
    >
      {children}
    </button>
  );
};
