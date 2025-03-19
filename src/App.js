import React from 'react';
import Route from "./Routes";
import { BrowserRouter, Routes,  Navigate ,useRoutes} from "react-router-dom";
import './assets/scss/themes.scss';
import { ToastContainer } from "react-toastify";




// import React from "react";

// import Login from "./pages/Authentication/Login";
// import ForgetPasswordPage from "./pages/Authentication/ForgetPassword"; 
// import './assets/scss/themes.scss';
// 
// import "react-toastify/dist/ReactToastify.css";
// import Header from "./pages/Layout/Header";
// function App() {
//   return (
//     <>
//       <ToastContainer 
//       position="top-right"
//       autoClose={3000} />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/forgot-password" element={<ForgetPasswordPage/>} />
//           <Route path="/Header" element={<Header/>}></Route>
        
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

function App() {
  return (
    <React.Fragment>
      <Route />
    </React.Fragment>
  );
}





export default App;
