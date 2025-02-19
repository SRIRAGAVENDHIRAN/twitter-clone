import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/common/SideBar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

function App() {

  return (
    <div className='flex max-w-6xl mx-auto'>
      {/* sidebar is a common component cuz its not wrapped  */}
      <Sidebar/>
      <Routes>
        <Route path = '/' element = {<HomePage/>} />
        <Route path = '/login' element = {<LoginPage/>} />
        <Route path = '/signup' element = {<SignUpPage/>} />
        <Route path = '/notifications' element = {<NotificationPage/>} />
        <Route path = '/profile/:username' element = {<ProfilePage/>} />

      </Routes>
      <RightPanel/>
    </div>
  )
}

export default App;
