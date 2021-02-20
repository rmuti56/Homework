import { path } from "@/constant";
import { PostsPage, StylingPage } from "@/pages";
import { Redirect, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route path={path.posts}>
        <PostsPage />
      </Route>
      <Route path={path.styling}>
        <StylingPage />
      </Route>
      <Redirect to={path.posts} />

    </Switch>
  );
};

export default Router;
