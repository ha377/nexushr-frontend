import Sidebar from "../components/SidebarSelector";

function EmployeeProfile() {

    // TEMP SAMPLE DATA
    const employee = {

        id: 1,

        name: "Harsha",

        email: "harsha@gmail.com",

        department: "IT",

        salary: 50000,

        role: "Software Engineer",

        phone: "9876543210",

        address: "Andhra Pradesh"
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

                <h1>Employee Profile</h1>

                <div
                    style={{
                        background: "white",
                        padding: "30px",
                        borderRadius: "10px",
                        width: "500px",
                        marginTop: "20px",
                        boxShadow: "0px 0px 10px gray"
                    }}
                >

                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: "20px"
                        }}
                    >

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="profile"
                            width="120"
                        />

                        <h2>{employee.name}</h2>

                        <p>{employee.role}</p>

                    </div>

                    <hr />

                    <p>
                        <strong>ID:</strong>
                        {" "}
                        {employee.id}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        {" "}
                        {employee.email}
                    </p>

                    <p>
                        <strong>Department:</strong>
                        {" "}
                        {employee.department}
                    </p>

                    <p>
                        <strong>Salary:</strong>
                        {" "}
                        ₹{employee.salary}
                    </p>

                    <p>
                        <strong>Phone:</strong>
                        {" "}
                        {employee.phone}
                    </p>

                    <p>
                        <strong>Address:</strong>
                        {" "}
                        {employee.address}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default EmployeeProfile;