import React, { useState } from "react";
import "./AddExperience.css";

const AddExperience = () => {
    const [experienceList, setExperienceList] = useState([]);
    const [experience, setExperience] = useState({
        title: "",
        company: "",
        duration: "",
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleAddExperience = () => {
        if (experience.title && experience.company && experience.duration && experience.description) {
            setExperienceList([...experienceList, experience]);
            setExperience({ title: "", company: "", duration: "", description: "" });
        } else {
            alert("Please fill all fields.");
        }
    };

    return (
        <div className="experience-container">
            <h1>Add Your Experience</h1>
            <div className="form-container">
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    value={experience.title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={experience.company}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="duration"
                    placeholder="Duration (e.g., Jan 2020 - Dec 2021)"
                    value={experience.duration}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Describe your role and responsibilities"
                    value={experience.description}
                    onChange={handleChange}
                ></textarea>
                <button onClick={handleAddExperience}>Add Experience</button>
            </div>
            <div className="experience-list">
                <h2>Your Experiences</h2>
                {experienceList.length > 0 ? (
                    <ul>
                        {experienceList.map((exp, index) => (
                            <li key={index} className="experience-item">
                                <h3>{exp.title}</h3>
                                <p><strong>Company:</strong> {exp.company}</p>
                                <p><strong>Duration:</strong> {exp.duration}</p>
                                <p>{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No experiences added yet.</p>
                )}
            </div>
        </div>
    );
};

export default AddExperience;
