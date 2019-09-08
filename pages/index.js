import React from 'react'
import 'isomorphic-fetch'

export default () => <h1>Hello World</h1>

/* const Home = ({ repos }) => (
  <div>
    { repos.map(repo => (
      <a href={ repo.html_url }><p key={ repo.id }>{ repo.name }</p></a>
    )) }
  </div>
)

Home.getInitialProps = async () => {
  const response = await fetch('https://api.github.com/users/mihtoa/repos')
  const repos = await response.json()

  return { repos }
} 

export default Home */