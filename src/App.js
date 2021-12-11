import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import DoctorDetail from './pages/Home/Doctors/DoctorDetail/DoctorDetail';
import Login from './pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path=":doctorId" element={
            <PrivateRoute>
              <DoctorDetail />
            </PrivateRoute>
          }
          />


          {/* <Route path="login" element={<Login />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
    </div>

  );
}

export default App;
