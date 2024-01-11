import { useState, useEffect } from 'react';
import API from '../utils/api'
import { Link } from 'react-router-dom';

export default function HomePage() {

  const [repos, setRepos] = useState([]);
  const fetchData = async () => {
    const { data } = await API.getRepository();

    setRepos(data);
  };
  useEffect(() => {
    fetchData();
  }, []);


    return (
        <div className="container pt-4">
          <ul className="list-group list-group">
          {repos.map((repo) => (
          <ListItem key={repo.id}>
            <Profile user={repo} />
            <Link
              to={`/profile/${repo.id}`}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}

          </ul>
        </div>
      );
    }