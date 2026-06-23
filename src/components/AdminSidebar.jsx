import { Link } from "react-router-dom";

function AdminSidebar() {

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";
    };

    return (

        <div
            style={{
                width: "250px",
                height: "100vh",
                background: "#1e3a8a",
                color: "white",
                padding: "20px",
                position: "fixed"
            }}
        >

            <h1>NexusHR</h1>

            <Link to="/dashboard">Dashboard</Link><br /><br />

            <Link to="/employees">Employees</Link><br /><br />

            <Link to="/attendance">Attendance</Link><br /><br />

            <Link to="/leave">Leave</Link><br /><br />

            <Link to="/payroll">Payroll</Link><br /><br />

            <Link to="/recruitment">Recruitment</Link><br /><br />

            <Link to="/candidates">Candidates</Link><br /><br />

            <Link to="/attendance-calendar">
                Attendance Calendar
            </Link>

            <br /><br />

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default AdminSidebar;