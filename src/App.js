import  Home  from "./router/home";
import {Route,Switch} from "react-router-dom";
import {About }from "./router/About"
import Search from "./router/search"
import Nav from "./router/nav"
import Load from "./router/onloading"

function App() {
  return (
    <>
    <Load/>
    <Nav/>
    <Switch>
    <Route  path="/about" component={About}/>
  
 
  <Route path="/search" component={Search}/>
    {/* <Users /> */}
  
  <Route path="/" component={Home}/>


  </Switch>
</>
  );
}

export default App;
