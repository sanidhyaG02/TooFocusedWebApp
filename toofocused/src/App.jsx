import './App.css';
import Register from './Register';
import Login from './Login';
import ForgetPass from './ForgotPass';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

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
                </Routes >
            </div>
        </Router>
    </div>
  );
}

export default App;
