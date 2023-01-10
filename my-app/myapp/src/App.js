import {
  BrowserRouter as Router,
  Route,Routes
} from "react-router-dom";

import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
     <Router>
      <div>
        <Routes>
          
            <Route path="/" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile/>}/>                          
          
        </Routes>
      </div>
     </Router> 
    </div>
  );
}

export default App;
