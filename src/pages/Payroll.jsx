import { useEffect, useState } from "react";

import SidebarSelector from "../components/SidebarSelector";
import API from "../services/api";

function Payroll() {

    const [employees, setEmployees] = useState([]);

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

                <h1>Payroll Module</h1>

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

                            <th>Department</th>

                            <th>Salary</th>

                            <th>Bonus</th>

                            <th>Total Salary</th>

                        </tr>

                    </thead>
<button
    onClick={() =>
        window.open(
            "https://nexushr-backend-1.onrender.com/payslip/1"
        )
    }
>
    Download Payslip
</button>
                    <tbody>

                        {
                            employees.map((employee) => {

                                const bonus =
                                    employee.salary * 0.10;

                                const total =
                                    employee.salary + bonus;

                                return (

                                    <tr key={employee.id}>

                                        <td>
                                            {employee.id}
                                        </td>

                                        <td>
                                            {employee.name}
                                        </td>

                                        <td>
                                            {employee.department}
                                        </td>

                                        <td>
                                            ₹{employee.salary}
                                        </td>

                                        <td>
                                            ₹{bonus}
                                        </td>

                                        <td>
                                            ₹{total}
                                        </td>

                                    </tr>
                                );
                            })
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Payroll;