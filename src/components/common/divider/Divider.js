import { StyledDivider } from "./styled-divider";

const Divider = ({ type, className, style }) => {
  return <StyledDivider style={style} className={`${className} ${type}`} />;
};

Divider.defaultProps = {
  type: "horizontal",
};
export default Divider;
