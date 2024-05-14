import projImage from "../assets/resume.pdf"

function Resume(){
    return(
        <div>
            <h3>Download my <a href={projImage} download>Resume</a></h3>
        </div>
    )
};

export default Resume;