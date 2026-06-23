import { useEffect, useState } from "react";

import Sidebar from "../components/SidebarSelector";

import API from "../services/api";

function Attendance() {

    const [employees, setEmployees] = useState([]);

    const [attendance, setAttendance] = useState({});

    // FETCH EMPLOYEES
    const fetchEmployees = async () => {

        try {

            const response =
                await API.get("/employees");

            setEmployees(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchEmployees();

    }, []);

    // HANDLE STATUS
    const handleStatusChange = (
        employeeId,
        status
    ) => {

        setAttendance({
            ...attendance,
            [employeeId]: status
        });
    };

    // SAVE ATTENDANCE
    const saveAttendance = async () => {

        try {

            const attendanceList =
                employees.map((employee) => ({

                    employeeId: employee.id,

                    status:
                        attendance[employee.id]
                        || "Absent"
                }));

            console.log(attendanceList);

            alert(
                "Attendance Saved Successfully"
            );

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

            <SidebarSelector />

            <div
                style={{
                    marginLeft: "270px",
                    padding: "30px",
                    width: "100%"
                }}
            >

                <h1>Attendance Module</h1>

                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        background: "white",
                        marginTop: "20px"
                    }}
                >

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            employees.map((employee) => (

                                <tr key={employee.id}>

                                    <td>
                                        {employee.id}
                                    </td>

                                    <td>
                                        {employee.name}
                                    </td>

                                    <td>

                                        <select
                                            onChange={(e) =>
                                                handleStatusChange(
                                                    employee.id,
                                                    e.target.value
                                                )
                                            }
                                        >

                                            <option>
                                                Present
                                            </option>

                                            <option>
                                                Absent
                                            </option>

                                        </select>

                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

                <button
                    onClick={saveAttendance}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        background: "green",
                        color: "white",
                        border: "none"
                    }}
                >
                    Save Attendance
                </button>

            </div>

        </div>
    );
}

export default Attendance;