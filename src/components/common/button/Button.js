import { StyledButton } from "./styled-button";

const Button = ({
  onClick,
  type,
  children,
  style,
  className,
  shape,
  ...restProps
}) => {
  const getShapeClass = () => {
    if (shape === "circle") {
      return "shape-circle";
    } else if (shape === "round") {
      return "shape-round";
    }
    return "";
  };
  const getButtonTypeClass = () => {
    if (type === "default") {
      return "btn-default";
    } else if (type === "primary") {
      return "btn-primary";
    }
    return "";
  };
  return (
    <StyledButton
      onClick={onClick}
      style={style}
      className={`${
        className || ""
      } ${getButtonTypeClass()} ${getShapeClass()}`}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;
