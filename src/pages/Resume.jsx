import projImage from "../assets/project-1-screenshot.jpg"

function Resume(){
    return(
        <div>
            <h2>This is the Resume page</h2>
            <h3>Download my <a href={projImage} download>Resume</a></h3>
        </div>
    )
};

export default Resume;