import { path } from "@/constant";
import { HomePage, PostsPage, StylingPage } from "@/pages";
import { Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route path={path.home} exact={true}>
        <HomePage />
      </Route>
      <Route path={path.posts}>
        <PostsPage />
      </Route>
      <Route path={path.styling}>
        <StylingPage />
      </Route>
    </Switch>
  );
};

export default Router;
