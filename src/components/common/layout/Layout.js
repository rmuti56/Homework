import { path } from "@/constant";
import { NavLink } from "react-router-dom";
import { StyledLayout } from "./styled-layout";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <ul className="horizontal ho2">
        <div className="container">
          <li>
            <NavLink to={path.posts}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={path.styling}>Styling</NavLink>
          </li>
        </div>
      </ul>
      <div className="container content">{children}</div>
    </StyledLayout>
  );
};

export default Layout;
