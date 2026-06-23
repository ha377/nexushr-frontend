import { Link } from "react-router-dom";

function Sidebar() {

    const role =
        localStorage.getItem("role");

    const logout = () => {

        localStorage.clear();

        window.location.href = "/";
    };

    return (

        <div
            className="
                w-64
                h-screen
                bg-slate-900
                text-white
                fixed
                p-5
            "
        >

            <h1
                className="
                    text-3xl
                    font-bold
                    mb-10
                "
            >
                NexusHR
            </h1>

            <div
                className="
                    flex
                    flex-col
                    gap-5
                "
            >

                {/* DASHBOARD */}

                <Link to="/dashboard">
                    Dashboard
                </Link>

                {/* ADMIN */}

                {
                    role === "ADMIN" && (

                        <>
                            <Link to="/employees">
                                Employees
                            </Link>

                            <Link to="/attendance">
                                Attendance
                            </Link>

                            <Link to="/leave">
                                Leave Management
                            </Link>

                            <Link to="/payroll">
                                Payroll
                            </Link>

                            <Link to="/recruitment">
                                Recruitment
                            </Link>

                            <Link to="/candidates">
                                Candidates
                            </Link>

                            <Link to="/attendance-calendar">
                                Attendance Calendar
                            </Link>
                        </>
                    )
                }

                {/* HR */}

                {
                    role === "HR" && (

                        <>
                            <Link to="/employees">
                                Employees
                            </Link>

                            <Link to="/recruitment">
                                Recruitment
                            </Link>

                            <Link to="/candidates">
                                Candidates
                            </Link>

                            <Link to="/payroll">
                                Payroll
                            </Link>
                        </>
                    )
                }

                {/* EMPLOYEE */}

                {
                    role === "EMPLOYEE" && (

                        <>
                            <Link to="/attendance">
                                Attendance
                            </Link>

                            <Link to="/attendance-calendar">
                                Attendance Calendar
                            </Link>

                            <Link to="/profile">
                                Profile
                            </Link>

                            <Link to="/leave">
                                My Leaves
                            </Link>
                        </>
                    )
                }

                {/* MANAGER */}

                {
                    role === "MANAGER" && (

                        <>
                            <Link to="/leave">
                                Leave Approval
                            </Link>

                            <Link to="/attendance">
                                Attendance
                            </Link>
                        </>
                    )
                }

                <button
                    onClick={logout}
                    className="
                        bg-red-500
                        p-2
                        rounded
                        mt-10
                    "
                >
                    Logout
                </button>

            </div>

        </div>
    );
}

export default Sidebar;