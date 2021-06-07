import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={HomePage} />
      <Route path='/projects' exact component={ProjectsPage} />
      <Route path='/about' exact component={AboutPage} />
      <Route path='/contact' exact component={ContactPage} />
    </Router>
  );
}

export default App;
