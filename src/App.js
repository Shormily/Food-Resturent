import "./App.css";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Services from "./Component/Services/Services";
import Contct from "./Component/Contact/Contct";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import NotFound from "./NotFound/NotFound";
import ContactUS from "./Component/ContactUS/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/kitchen">
            <Contct></Contct>
          </Route>
          <Route path="/*">
            <NotFound></NotFound>
          </Route>
          <Route path="/contactUs">
            <ContactUS></ContactUS>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
