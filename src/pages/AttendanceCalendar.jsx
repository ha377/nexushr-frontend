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

        <div
            style={{
                padding: "20px"
            }}
        >

            <h1>
                Attendance Calendar
            </h1>

            <table
                border="1"
                cellPadding="10"
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
                                        {
                                            item.date
                                        }
                                    </td>

                                    <td>
                                        {
                                            item.status
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