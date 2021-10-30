import Header from "./comp/Header";
import Footer from "./comp/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardList from "./comp/CardList";
import CoursePage from "./comp/CoursePage";
import AddCourse from "./comp/AddCourse";
import Form from "./comp/Form";

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Router>
        <Switch>
          <Route
            exact
            path="/courses/:title/:desc/:rating/:youtube"
            children={<CoursePage />}
          />

          <Route exact={true} path="/" component={CardList} />
          <Route exact={true} path="/add" component={AddCourse} />
          <Route exact={true} path="/form" component={Form} />
        </Switch>
      </Router>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default App;
