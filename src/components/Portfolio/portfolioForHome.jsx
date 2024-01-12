export default function Profile({ repo }) {
     
    return (
      <>
        <div className="ms-2 me-auto">
          <h2 className="fw-bold mb-1">{repo.name}</h2>
          <h5 className="mb-1">{repo.owner.login}</h5>
          <a className="mb-1">{repo.html_url}</a>
        </div>
      </>
    );
  }