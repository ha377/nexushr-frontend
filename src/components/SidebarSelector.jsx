import AdminSidebar from "./AdminSidebar";
import HRSidebar from "./HRSidebar";
import EmployeeSidebar from "./EmployeeSidebar";
import ManagerSidebar from "./ManagerSidebar";

function SidebarSelector() {

    const role =
        localStorage.getItem("role");

    console.log("Sidebar Role:", role);

    if(role === "ADMIN")
        return <AdminSidebar />;

    if(role === "HR")
        return <HRSidebar />;

    if(role === "EMPLOYEE")
        return <EmployeeSidebar />;

    if(role === "MANAGER")
        return <ManagerSidebar />;

    return (
        <h1>
            No Sidebar Found:
            {role}
        </h1>
    );
}

export default SidebarSelector;