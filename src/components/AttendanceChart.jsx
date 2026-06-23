import { useEffect, useState } from "react";
import axios from "axios";

function AttendanceCalendar() {

    const [attendance, setAttendance] =
        useState([]);

    useEffect(() => {

        loadAttendance();

    }, []);

    const loadAttendance = async () => {

        try {

            const response =
                await axios.get(
                    "https://nexushr-backend-1.onrender.com/attendance/calendar/1"
                );

            setAttendance(
                response.data
            );

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Attendance Calendar
            </h1>

            <table
                className="
                    table-auto
                    border
                    w-full
                "
            >

                <thead>

                    <tr>

                        <th>Date</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        attendance.map(
                            item => (

                                <tr
                                    key={item.id}
                                >

                                    <td>
                                        {item.date}
                                    </td>

                                    <td>

                                        {
                                            item.status ===
                                            "PRESENT"

                                                ? "✅ Present"

                                                : item.status ===
                                                  "ABSENT"

                                                ? "❌ Absent"

                                                : "🟡 Leave"
                                        }

                                    </td>

                                </tr>
                            )
                        )
                    }

                </tbody>

            </table>

        </div>
    );
}

export default AttendanceCalendar;