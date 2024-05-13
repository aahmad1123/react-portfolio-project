
function ProjectCard(props){
    return(
        <div>
           <div className="card" style={{width: "18rem"}}>
           <img src={props.image} className="card-img-top" alt={props.title}/>
           <div className="card-body">
           <h5 className="card-title">{props.title}</h5>
           <p className="card-text">{props.description}</p>
           <a href={props.github} className="btn btn-primary">Github</a>
           <a href={props.url} className="btn btn-primary">Go to App</a>
  </div>
</div>
        </div>
    )
};

export default ProjectCard;