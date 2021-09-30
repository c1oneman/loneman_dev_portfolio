import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/core-components/Nav";
import Home from "./components/pages/Home";
import ScrollToTop from "./components/core-components/ScrollToTop";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <footer>
        {/* <FooterDesktop /> */}
        {/* <FooterMobile /> */}
      </footer>
      <ScrollToTop />
    </Router>
  );
}

export default App;
