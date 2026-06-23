import { useEffect, useState } from "react";
import axios from "axios";

function Candidates() {

    const [candidates, setCandidates] = useState([]);

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        skills: "",
        resumeFileName: ""
    });

    const loadCandidates = async () => {

        try {

            const response = await axios.get(
                "http://localhost:8082/candidates"
            );

            setCandidates(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        loadCandidates();

    }, []);

    const addCandidate = async () => {

        try {

            await axios.post(
                "http://localhost:8082/candidates",
                form
            );

            setForm({
                name: "",
                email: "",
                phone: "",
                skills: "",
                resumeFileName: ""
            });

            loadCandidates();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <div className="p-6">

            <h1 className="text-3xl font-bold mb-5">
                Candidate Management
            </h1>

            <div className="mb-6">

                <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Skills"
                    value={form.skills}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            skills: e.target.value
                        })
                    }
                />

                <input
                    type="text"
                    placeholder="Resume File Name"
                    value={form.resumeFileName}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            resumeFileName:
                                e.target.value
                        })
                    }
                />

                <button
                    onClick={addCandidate}
                >
                    Add Candidate
                </button>

            </div>

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Skills</th>
                        <th>Resume</th>
                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>

                    {candidates.map(
                        (candidate) => (

                            <tr
                                key={
                                    candidate.id
                                }
                            >

                                <td>
                                    {candidate.id}
                                </td>

                                <td>
                                    {candidate.name}
                                </td>

                                <td>
                                    {candidate.email}
                                </td>

                                <td>
                                    {candidate.phone}
                                </td>

                                <td>
                                    {candidate.skills}
                                </td>

                                <td>
                                    {
                                        candidate.resumeFileName
                                    }
                                </td>

                                <td>

    <select
        value={candidate.status}
        onChange={async (e) => {

            await axios.put(
                `http://localhost:8082/candidates/${candidate.id}/status?status=${e.target.value}`
            );

            loadCandidates();
        }}
    >

        <option value="APPLIED">
            APPLIED
        </option>

        <option value="SHORTLISTED">
            SHORTLISTED
        </option>

        <option value="INTERVIEW_SCHEDULED">
            INTERVIEW
        </option>

        <option value="SELECTED">
            SELECTED
        </option>

        <option value="REJECTED">
            REJECTED
        </option>

    </select>

</td>

                            </tr>
                        )
                    )}

                </tbody>

            </table>
<a
 href={
  `http://localhost:8082/candidates/resume/${candidate.resumeFileName}`
 }
 target="_blank"
>
 Download Resume
</a>
        </div>
    );
}

export default Candidates;