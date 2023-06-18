import "./App.css";
import Router from "./routes/Router";
import { ThemeProvider } from "@mui/material";
import { THEME } from "./FontTheme";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
