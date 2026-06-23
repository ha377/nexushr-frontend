import { useEffect, useState } from "react";
import axios from "axios";
import API from "../services/api";
import Sidebar from "../components/SidebarSelector";

function Employees() {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");
    const [salary, setSalary] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [search, setSearch] = useState("");
    const [photo, setPhoto] = useState(null);

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const uploadPhoto = async () => {

        if (!photo) {
            return "";
        }

        const formData = new FormData();

        formData.append(
            "file",
            photo
        );

        const response =
            await axios.post(
                "http://localhost:8082/employees/upload-photo",
                formData,
                {
                    headers: {
                        "Content-Type":
                            "multipart/form-data"
                    }
                }
            );

        return response.data;
    };

    const fetchEmployees = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response =
                await API.get(
                    "/employees",
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

            setEmployees(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const saveEmployee = async () => {

        try {

            const token =
                localStorage.getItem("token");

            if (editingId) {

                await API.put(
                    `/employees/${editingId}`,
                    {
                        name,
                        email,
                        department,
                        salary
                    },
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                alert("Employee Updated");

            } else {

                const photoName =
                    await uploadPhoto();

                await API.post(
                    "/employees",
                    {
                        name,
                        email,
                        department,
                        salary,
                        profilePhoto:
                            photoName
                    },
                    {
                        headers: {
                            Authorization:
                                `Bearer ${token}`
                        }
                    }
                );

                alert("Employee Added");
            }

            setName("");
            setEmail("");
            setDepartment("");
            setSalary("");
            setPhoto(null);
            setEditingId(null);

            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
    };

    const deleteEmployee = async (id) => {

        try {

            const token =
                localStorage.getItem("token");

            await API.delete(
                `/employees/${id}`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert("Employee Deleted");

            fetchEmployees();

        } catch (error) {

            console.log(error);
        }
    };

    const editEmployee = (employee) => {

        setEditingId(employee.id);
        setName(employee.name);
        setEmail(employee.email);
        setDepartment(employee.department);
        setSalary(employee.salary);
    };

    useEffect(() => {

        fetchEmployees();

    }, []);

    return (

        <div style={{ display: "flex" }}>

            <Sidebar />

            <div
                style={{
                    marginLeft: "270px",
                    padding: "30px",
                   
                }}
            >

                <h1>Employees</h1>

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        marginBottom: "20px"
                    }}
                >

                    <h3>
                        {
                            editingId
                                ? "Update Employee"
                                : "Add Employee"
                        }
                    </h3>

                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="text"
                        placeholder="Department"
                        value={department}
                        onChange={(e) =>
                            setDepartment(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="number"
                        placeholder="Salary"
                        value={salary}
                        onChange={(e) =>
                            setSalary(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="file"
                        onChange={
                            handleFileChange
                        }
                    />

                    <button
                        onClick={saveEmployee}
                    >
                        {
                            editingId
                                ? "Update"
                                : "Add"
                        }
                    </button>

                    <button
                        onClick={() =>
                            window.open(
                                "http://localhost:8082/export/employees"
                            )
                        }
                    >
                        Export CSV
                    </button>

                    <button
                        onClick={() =>
                            window.open(
                                "http://localhost:8082/excel/employees"
                            )
                        }
                    >
                        Export Excel
                    </button>

                </div>

                <input
                    type="text"
                    placeholder="Search Employee..."
                    value={search}
                    onChange={(e) =>
                        setSearch(
                            e.target.value
                        )
                    }
                />

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
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            employees
                                .filter(
                                    employee =>
                                        employee.name
                                            ?.toLowerCase()
                                            .includes(
                                                search.toLowerCase()
                                            )
                                )
                                .map(
                                    employee => (

                                        <tr
                                            key={
                                                employee.id
                                            }
                                        >

                                            <td>
                                                {
                                                    employee.id
                                                }
                                            </td>

                                            <td>

                                                {
                                                    employee.profilePhoto &&

                                                    <img
                                                        src={
                                                            `http://localhost:8082/profile-photos/${employee.profilePhoto}`
                                                        }
                                                        width="60"
                                                        height="60"
                                                        alt="profile"
                                                    />
                                                }

                                            </td>

                                            <td>
                                                {
                                                    employee.name
                                                }
                                            </td>

                                            <td>
                                                {
                                                    employee.email
                                                }
                                            </td>

                                            <td>
                                                {
                                                    employee.department
                                                }
                                            </td>

                                            <td>
                                                {
                                                    employee.salary
                                                }
                                            </td>

                                            <td>

                                                <button
                                                    onClick={() =>
                                                        editEmployee(
                                                            employee
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        deleteEmployee(
                                                            employee.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>
                                    )
                                )
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Employees;