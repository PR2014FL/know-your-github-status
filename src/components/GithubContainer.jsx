import React from 'react'
import { useFetch } from '../useFetch'

function GithubContainer({login}) {
    const { loading, data, error } = useFetch(
        `https://api.github.com/users/${login}`
      );
      if (loading) return <h1>Loading...</h1>;
      if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
      return (
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <img src={data.avatar_url} alt={data.login} />
          <h1>{data.login}</h1>
          {data.name && <p>Full Name: {data.name}</p>}
          {data.location ? <p>Location: {data.location}</p> : <p>You have no location</p> }
          {data.bio ? <p>Bio: {data.bio}</p> : <p>You have no bio info</p>}
          {data.email ? <p>Email: {data.email}</p> : <p>You have no email</p>}
          {data.followers ? <p>You have {data.followers} followers!</p> : <p>You have no followers!</p>}
          {data.hireable ? <p>Your profile is set to HIREABLE.</p> : <p>Your profile is NOT set to HIREABLE.</p>}
        </div>
      );
    }


export default GithubContainer