import { Link } from "react-router-dom";

function EmployeeSidebar() {

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

            <Link to="/attendance">
                My Attendance
            </Link>

            <br /><br />

            <Link to="/leave">
                My Leaves
            </Link>

            <br /><br />

            <Link to="/payroll">
                My Payroll
            </Link>

            <br /><br />

            <Link to="/profile">
                Profile
            </Link>

            <br /><br />

            <button onClick={logout}>
                Logout
            </button>

        </div>
    );
}

export default EmployeeSidebar;