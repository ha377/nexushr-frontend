import { useEffect, useState } from "react";
import axios from "axios";

function LeaveManagement() {

    const [leaves, setLeaves] = useState([]);

    const loadLeaves = async () => {

        try {

            const response =
                await axios.get(
                    "https://nexushr-backend-1.onrender.com/leave"
                );

            setLeaves(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        loadLeaves();

    }, []);

    const approveLeave = async (id) => {

        try {

            await axios.put(
                `http://localhost:8082/leave/approve/${id}`
            );

            loadLeaves();

        } catch (error) {

            console.log(error);
        }
    };

    const rejectLeave = async (id) => {

        try {

            await axios.put(
                `http://localhost:8082/leave/reject/${id}`
            );

            loadLeaves();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="p-5">

            <h1 className="text-3xl font-bold mb-5">
                Leave Management
            </h1>

            <table
                className="
                    w-full
                    border
                    border-gray-300
                "
            >

                <thead>

                    <tr>

                        <th>ID</th>

                        <th>Employee ID</th>

                        <th>Reason</th>

                        <th>From</th>

                        <th>To</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        leaves.map((leave) => (

                            <tr key={leave.id}>

                                <td>{leave.id}</td>

                                <td>
                                    {leave.employeeId}
                                </td>

                                <td>
                                    {leave.reason}
                                </td>

                                <td>
                                    {leave.fromDate}
                                </td>

                                <td>
                                    {leave.toDate}
                                </td>

                                <td>
                                    {leave.status}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            approveLeave(
                                                leave.id
                                            )
                                        }
                                    >
                                        Approve
                                    </button>

                                    <button
                                        onClick={() =>
                                            rejectLeave(
                                                leave.id
                                            )
                                        }
                                    >
                                        Reject
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default LeaveManagement;