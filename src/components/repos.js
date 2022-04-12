const Repos = (props) => {
    return (
      <>
        <div className="repos-wrapper">
          {props.repos.map(repo => (
            <div className="repo" key={repo.id}>
              <h2>{repo.name}</h2> <a href={repo.html_url} target="_blank">-View on GitHub</a>
              <p>{repo.description}</p>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Repos;
  