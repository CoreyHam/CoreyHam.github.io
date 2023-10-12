import React from 'react';

// bronze(beginner), silver(basic), gold(average), platinum(comfortable), diamond(master)

const skillsData = [
    { id: 1, name: 'JavaScript', proficiency: 'Advanced' },
    { id: 2, name: 'React', proficiency: 'Advanced' },
    { id: 3, name: 'Node.js', proficiency: 'Intermediate' },
    { id: 4, name: 'Python', proficiency: 'Intermediate' },
    // ... add more skills as needed
];

const SkillItem = ({ skill }) => (
    <div className="skill-item">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-proficiency">{skill.proficiency}</span>
    </div>
);

const Skills = () => (
    <section className="skills-section">
        <h2 className='text-4xl font-semibold'>Skills</h2>
        <div className="skills-list">
            {skillsData.map(skill => (
                <SkillItem key={skill.id} skill={skill} />
            ))}
        </div>
    </section>
);

export default Skills;

