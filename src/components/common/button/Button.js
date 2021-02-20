const Button = ({ onClick, type, children, style, className }) => {
  return (
    <div onClick={onClick} style={style} className={`${className} ${type}`}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  type: "default",
};

export default Button;
