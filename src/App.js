import { ThemeProvider } from "styled-components";
import "./App.css";
import { Router } from "./router";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

const theme = {
  color: {
    primary: "#C93732",
    bg: "#fff",
    fg: "#F0F0F0",
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
