import { useState } from "react";

import Sidebar from "../components/SidebarSelector";

function Recruitment() {

    const [candidateName, setCandidateName] =
        useState("");

    const [position, setPosition] =
        useState("");

    const [candidateList, setCandidateList] =
        useState([]);

    // ADD CANDIDATE
    const addCandidate = () => {

        const newCandidate = {

            id: candidateList.length + 1,

            candidateName,

            position,

            status: "Interview Pending"
        };

        setCandidateList([
            ...candidateList,
            newCandidate
        ]);

        setCandidateName("");

        setPosition("");

        alert("Candidate Added");
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

                <h1>Recruitment Module</h1>

                {/* FORM */}

                <div
                    style={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "10px",
                        marginTop: "20px",
                        marginBottom: "30px"
                    }}
                >

                    <h3>Add Candidate</h3>

                    <input
                        type="text"
                        placeholder="Candidate Name"
                        value={candidateName}
                        onChange={(e) =>
                            setCandidateName(
                                e.target.value
                            )
                        }
                        style={{
                            padding: "10px",
                            marginRight: "10px"
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Position Applied"
                        value={position}
                        onChange={(e) =>
                            setPosition(
                                e.target.value
                            )
                        }
                        style={{
                            padding: "10px",
                            marginRight: "10px"
                        }}
                    />

                    <button
                        onClick={addCandidate}
                        style={{
                            padding: "10px",
                            background: "blue",
                            color: "white",
                            border: "none"
                        }}
                    >
                        Add
                    </button>

                </div>

                {/* TABLE */}

                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        background: "white"
                    }}
                >

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Candidate Name</th>

                            <th>Position</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            candidateList.map(
                                (candidate) => (

                                <tr
                                    key={candidate.id}
                                >

                                    <td>
                                        {candidate.id}
                                    </td>

                                    <td>
                                        {
                                            candidate.candidateName
                                        }
                                    </td>

                                    <td>
                                        {
                                            candidate.position
                                        }
                                    </td>

                                    <td>
                                        {
                                            candidate.status
                                        }
                                    </td>

                                </tr>
                            ))
                        }

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default Recruitment;