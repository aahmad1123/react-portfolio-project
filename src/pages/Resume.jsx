import projImage from "../assets/resume.pdf"

function Resume(){
    return(
        <div>
            <ul><h2>Front End Skills</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>Handlebars.js</li>
                <li>React.jsx</li>
            </ul>
            <ul><h2>Back End Skills</h2>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Sequelize ORM</li>
                <li>MongoDB</li>
                <li>Mongoose ODM</li>
            </ul>
            <h3>Download my <a href={projImage} download>Resume</a></h3>
        </div>
    )
};

export default Resume;