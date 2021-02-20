import { ThemeProvider } from "styled-components";
import "./App.css";
import { Router } from "./router";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { Layout } from "./components";

TimeAgo.addDefaultLocale(en);

const theme = {
  color: {
    primary: "#C93732",
    bg: "#fff",
    fg: "#F0F0F0",
    white: "#fff",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div className="app">
          <Router />
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
