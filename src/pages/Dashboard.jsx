import { useEffect, useState } from "react";
import axios from "axios";
import AttendanceChart from "../components/AttendanceChart";
import NotificationBell from "../components/NotificationBell";
import Sidebar from "../components/Sidebar";
function Dashboard() {

    const [stats, setStats] = useState({});

    useEffect(() => {

        loadStats();

    }, []);

    const loadStats = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8082/dashboard/stats"
            );

            setStats(response.data);

        } catch (error) {

            console.log(error);
        }
    };

return (

    <div
        style={{
            display: "flex"
        }}
    >

        <Sidebar />

        <div
            style={{
                marginLeft: "270px",
                padding: "30px",
                width: "100%"
            }}
        >

            <h1
                className="
                    text-4xl
                    font-bold
                    mb-8
                "
            >
                Dashboard
            </h1>

            <div
                className="
                    grid
                    grid-cols-3
                    gap-5
                    mb-8
                "
            >

                <div className="bg-blue-500 text-white p-5 rounded">
                    <h2>Total Employees</h2>
                    <h1 className="text-3xl">
                        {stats.totalEmployees || 0}
                    </h1>
                </div>

                <div className="bg-yellow-500 text-white p-5 rounded">
                    <h2>Pending Leaves</h2>
                    <h1 className="text-3xl">
                        {stats.pendingLeaves || 0}
                    </h1>
                </div>

                <div className="bg-green-500 text-white p-5 rounded">
                    <h2>Approved Leaves</h2>
                    <h1 className="text-3xl">
                        {stats.approvedLeaves || 0}
                    </h1>
                </div>

                <div className="bg-red-500 text-white p-5 rounded">
                    <h2>Rejected Leaves</h2>
                    <h1 className="text-3xl">
                        {stats.rejectedLeaves || 0}
                    </h1>
                </div>

                <div className="bg-purple-500 text-white p-5 rounded">
                    <h2>Total Candidates</h2>
                    <h1 className="text-3xl">
                        {stats.totalCandidates || 0}
                    </h1>
                </div>

                <div className="bg-indigo-500 text-white p-5 rounded">
                    <h2>Selected Candidates</h2>
                    <h1 className="text-3xl">
                        {stats.selectedCandidates || 0}
                    </h1>
                </div>

            </div>

            <AttendanceChart />

            <NotificationBell />

        </div>

    </div>
);}

export default Dashboard;