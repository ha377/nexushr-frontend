import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleLogin = async () => {

        try {

            const response = await fetch(
                "http://localhost:8082/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();
console.log("Login Response:", data);
console.log("Role:", data.role);
            if (data.token) {

    localStorage.setItem(
        "token",
        data.token
    );

    localStorage.setItem(
        "role",
        data.role
    );

    if (data.role === "ADMIN") {

        window.location.href =
            "/dashboard";

    } else if (data.role === "HR") {

        window.location.href =
            "/employees";

    } else if (data.role === "EMPLOYEE") {

        window.location.href =
            "/attendance";

    } else if (data.role === "MANAGER") {

        window.location.href =
            "/leave";

    } else {

        window.location.href =
            "/dashboard";
    }
} else {

                alert("Invalid Login");
            }

        } catch (error) {

            console.error(error);

            alert("Login Failed");
        }
    };

    return (

        <div
            className="
                flex
                justify-center
                items-center
                h-screen
                bg-slate-100
            "
        >

            <div
                className="
                    bg-white
                    p-8
                    rounded-xl
                    shadow-lg
                    w-80
                "
            >

                <h2
                    className="
                        text-3xl
                        font-bold
                        mb-6
                        text-center
                    "
                >
                    HRMS Login
                </h2>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                    className="
                        w-full
                        p-3
                        border
                        rounded
                        mb-4
                    "
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    className="
                        w-full
                        p-3
                        border
                        rounded
                        mb-4
                    "
                />

                <button
                    onClick={handleLogin}
                    className="
                        w-full
                        bg-blue-600
                        text-white
                        p-3
                        rounded
                        hover:bg-blue-700
                    "
                >
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;