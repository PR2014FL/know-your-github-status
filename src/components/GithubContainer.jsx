import React from "react";
import { useFetch } from "../useFetch";

function GithubContainer({ username }) {
  const { loading, data, error } = useFetch(
    `https://api.github.com/users/${username}`
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  const display = data.login ? "flex" : "none";

  return (
    <div className="githubContainer" style={{ display: display }}>
      <div className="leftDiv">
        <h2>{data.login}</h2>
        <img className="avatar" src={data.avatar_url} alt={data.login} />
        {data.name && (
          <p>
            <span className="firstWord">Full Name:</span> {data.name}
          </p>
        )}
        {data.location ? (
          <p>
            <span className="firstWord">Location:</span> {data.location}
          </p>
        ) : (
          <p>No location entered</p>
        )}
        {data.hireable ? (
          <h2 style={{ color: "green", fontWeight: "700" }}>Open to Work</h2>
        ) : (
          <h2 style={{ color: "violet" }}>Gainfully Employed</h2>
        )}
      </div>
      <div className="rightDiv">
        <div className="topDiv">
          {data.bio ? (
            <p>
              <span className="firstWord">Bio:</span> {data.bio}
            </p>
          ) : (
            <h2>No bio information offered</h2>
          )}
          {data.email ? (
            <p>
              <span className="firstWord">Email:</span> {data.email}
            </p>
          ) : (
            <p>
              <span className="firstWord">Email:</span> Private
            </p>
          )}
        </div>
        <div className="bottomDiv">
          <div className="followersDiv">
            {data.followers ? (
            <h2>Followers {data.followers}</h2>
          ) : (
            <h2>0 Followers</h2>
          )}
            </div>
            <div className="followingDiv">

          {data.following ? (
            <h2>Following {data.following}</h2>
          ) : (
            <h2>Following 0</h2>
          )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default GithubContainer;
