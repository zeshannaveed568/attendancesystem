import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import StudentLogin from "./pages/students/StudentLogin";
import Register from "./pages/students/Register";
import ForgetPassword from "./pages/students/ForgetPassword";
import StudentDash from "./pages/students/StudentDash";
import LeaveRequest from "./pages/students/LeaveRequest";
import ViewAttendance from "./pages/students/ViewAttendance";
import AdminDash from "./pages/admin/AdminDash";
import { useEffect, useState } from "react";
import AdminMenu from "./components/AdminMenu";
import Navbar from "./components/Navbar";
import AllStudents from "./pages/admin/AllStudents";
import ViewAttendanceAdmin from "./pages/admin/ViewAttendanceAdmin";
import LeaveRequests from "./pages/admin/LeaveRequests";
import GradingSystem from "./pages/admin/GradingSystem";
import CreateAttendanceReport from "./pages/admin/CreateAttendanceReport";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  const role = user?.role;


  const navbar = role === 'admin' ? <AdminMenu role={role} /> : <Navbar role={role} />;

  const isHomePage = window.location.pathname === '/';
  const isLoginPageAdmin = window.location.pathname === '/admin/login';
  const isLoginPageStudent = window.location.pathname === '/student/login';
  const isSignupPage = window.location.pathname === '/student/register';
  const isLeaveRequestPage = window.location.pathname === '/student/leaverequest';



  return (
    <>
      {navbar && !isHomePage && !isLoginPageStudent && !isLoginPageAdmin && !isSignupPage && !isLeaveRequestPage ? (
        <nav>
          {window.location.pathname === '/admin/dashboard' ||
            window.location.pathname === '/admin/allstudents' ||
            window.location.pathname === '/admin/viewattendance' ||
            window.location.pathname === '/admin/attendancereport' ||
            window.location.pathname === '/admin/leaverequest' ||
            window.location.pathname === '/admin/grading' ?
            (
              <AdminMenu role={role} />
            ) : (
              <Navbar role={role} />
            )}
        </nav>
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDash />} />
        <Route path="/admin/allstudents" element={<AllStudents />} />
        <Route path="/admin/viewattendance" element={<ViewAttendanceAdmin />} />
        <Route path="/admin/attendancereport" element={<CreateAttendanceReport />} />
        <Route path="/admin/leaverequest" element={<LeaveRequests />} />
        <Route path="/admin/grading" element={<GradingSystem />} />
        {/* Student Routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDash />} />
        <Route path="/student/leaverequest" element={<LeaveRequest />} />
        <Route path="/student/viewattendance" element={<ViewAttendance />} />
        <Route path="/student/register" element={<Register />} />
        <Route path="/student/forget-password" element={<ForgetPassword />} />
      </Routes>
    </>
  );
}

export default App;
