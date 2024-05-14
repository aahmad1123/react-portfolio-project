import ProjectCard from "../components/ProjectCard";
import projImage from "../assets/project-1-screenshot.jpg"
import projImage2 from "../assets/project-2-screenshot.jpg"
import projImage3 from "../assets/project-3-screenshot.jpg"
import projImage4 from "../assets/project-4-screenshot.jpg"
import projImage5 from "../assets/project-1-screenshot.jpg"
import projImage6 from "../assets/project-6-screenshot.jpg"


function Portfolio(){
    const projects = [
        {
            title: "Project 1",
            description: "AFI Top 100 Search Engine",
            image: projImage,
            github: "https://github.com/lowerym/movie-search-engine",
            url: "https://lowerym.github.io/movie-search-engine/"
        },
        {
            title: "Project 2",
            description: "Custom Workout Playlist Website",
            image: projImage2,
            github: "https://github.com/hanahanj/Project-2",
            url: "https://project-2-js1l.onrender.com"
        },
        {
            title: "Project 3",
            description: "Weather Forecast Site",
            image: projImage3,
            github: "https://github.com/aahmad1123/weather-app-project",
            url: "https://aahmad1123.github.io/weather-app-project/"
        },
        {
            title: "Project 4",
            description: "Note Taking Website",
            image: projImage4,
            github: "https://github.com/aahmad1123/Note-taker-project",
            url: "https://note-taker-project.onrender.com/"
        },
        {
            title: "Project 5",
            description: "hey2",
            image: "howdy2",
            github: "hey2",
            url: "www.wikipedia.com"
        },
        {
            title: "Project 6",
            description: "Password Generator",
            image: projImage6,
            github: "https://github.com/aahmad1123/Password-generator-project",
            url: "https://aahmad1123.github.io/Password-generator-project/"
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