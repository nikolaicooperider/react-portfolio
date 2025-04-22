import React, { useEffect, useState } from 'react';
import './Projects.css';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/nikolaicooperider/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects from this Semester</h2>
      {loading ? (
        <p>Loading repositories...</p>
      ) : (
        <div className="repo-grid">
          {repos.map((repo) => (
            <div className="repo-card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description || 'Click Below to View on GitHub.'}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
