import React from 'react';

export function Skills() {
    return (
        <>
            <h1>Skills</h1>
            <div className='skills'>
                <button style={{ backgroundColor: 'grey', border: '1px solid #ccc', borderRadius: '50%', width: '100px', height: '100px' }}>HTML</button>
                <button style={{ backgroundColor: 'grey', border: '1px solid #ccc', borderRadius: '50%', width: '100px', height: '100px' }}>CSS</button>
                <button style={{ backgroundColor: 'grey', border: '1px solid #ccc', borderRadius: '50%', width: '100px', height: '100px' }}>JS</button>
                <button style={{ backgroundColor: 'grey', border: '1px solid #ccc', borderRadius: '50%', width: '100px', height: '100px' }}>REACT</button>
                {/* repeating code
                    maybe use CSS to fix this, and maybe map the skills */}
            </div>
        </>
    );
}
export default Skills;