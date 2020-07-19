import React from "react";
// STYLE
import "./Style/App.css";
// COMPONENTS
import ProfileList from "./Components/Profile/ProfileList/ProfileList";
// import ProfileDetails from "./Components/Profile/ProfileDetails/ProfileDetails";
import Navbar from "./Components/Common/Navbar";
import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Common/Footer";
// REACT ROUTER
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#3695EF"
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: "#3695EF",
        main: "#3695EF",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#3695EF"
      }
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(",")
    }
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className="container">
          <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profiles" component={ProfileList} />
            {/* <Route
              exact
              path="/profile/:profileid"
              component={ProfileDetails}
            /> */}
          </Router>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
