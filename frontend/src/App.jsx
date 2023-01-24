import './CSS/App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgetPass from './Pages/ForgotPass';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <Router>
            <div>
                <Routes >
                    <Route exact path="/" element={ <Register /> } />
                    <Route path="/login" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    <Route path="/forget-password" element={ <ForgetPass /> } />
                    <Route path="/home" element={ <Home /> } />
                    <Route path="/profile" element={<Profile/>}/>
                </Routes >
            </div>
        </Router>
    </div>
  );
}

export default App;
