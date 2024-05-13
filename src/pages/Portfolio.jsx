import ProjectCard from "../components/ProjectCard";
import projImage from "../assets/project-1-screenshot.jpg"


function Portfolio(){
    const projects = [
        {
            title: "Project 1",
            description: "hey",
            image: projImage,
            github: "hey",
            url: "www.wikipedia.com"
        },
        {
            title: "Project 2",
            description: "hey2",
            image: "howdy2",
            github: "hey2",
            url: "www.wikipedia.com"
        },
    ]
    return(
        <div>
            <h2>This is the Portfolio page</h2>
            <div className="card-flex">
            {projects.map (project => {
                return (
                    <div> 
                        <ProjectCard 
                        title = {project.title}
                        descripton = {project.description}
                        image = {project.image}
                        github = {project.github}
                        url = {project.url}
                        />


                    </div>
                )
            })}
            </div>
        </div>
    )
};

export default Portfolio;