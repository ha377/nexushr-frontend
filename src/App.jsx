import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import Employees from "./pages/Employees";

import Attendance from "./pages/Attendance";

import Payroll from "./pages/Payroll";

import LeaveManagement from "./pages/LeaveManagement";

import Recruitment from "./pages/Recruitment";

import EmployeeProfile from "./pages/EmployeeProfile";

import ProtectedRoute from "./routes/ProtectedRoute";

import Candidates from "./pages/Candidates";
import AttendanceCalendar from "./pages/AttendanceCalendar";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LOGIN */}

                <Route
                    path="/"
                    element={<Login />}
                />

                {/* DASHBOARD */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>
                    }
                />

                {/* EMPLOYEES */}

                <Route
                    path="/employees"
                    element={
                        <ProtectedRoute>

                            <Employees />

                        </ProtectedRoute>
                    }
                />

                {/* ATTENDANCE */}

                <Route
                    path="/attendance"
                    element={
                        <ProtectedRoute>

                            <Attendance />

                        </ProtectedRoute>
                    }
                />

                {/* PAYROLL */}

                <Route
                    path="/payroll"
                    element={
                        <ProtectedRoute>

                            <Payroll />

                        </ProtectedRoute>
                    }
                />

                {/* LEAVE */}

                <Route
                    path="/leave"
                    element={
                        <ProtectedRoute>

                            <LeaveManagement />

                        </ProtectedRoute>
                    }
                />

                {/* RECRUITMENT */}

                <Route
                    path="/recruitment"
                    element={
                        <ProtectedRoute>

                            <Recruitment />

                        </ProtectedRoute>
                    }
                />

                {/* PROFILE */}

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>

                            <EmployeeProfile />

                        </ProtectedRoute>
                    }
                />
<Route
    path="/candidates"
    element={<Candidates />}
/>
<Route
    path="/attendance-calendar"
    element={
        <AttendanceCalendar />
    }
/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;