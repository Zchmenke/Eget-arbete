

/*
function App() {
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=> {
    fetch("https://api.github.com/users/Zchmenke/repos")
    .then(res=>res.json())
    .then(data => {
        setRepos(data)
        setLoading(false)
    })
    .catch(err=> console.log(err))
  },[])

  if(loading){
    return <Spinner/>
  }

  return (
    <div>
        {repos.map(repo=>(
            <div key={repo.id}>{repo.name}</div>
        ))}
    </div>
  )
}

function Spinner(){
    return <div>Loading...</div>
}

const root = document.querySelector("portfolio")
ReactDOM.createRoot(root).render(<App/>)
*/

'use strict';

const e = React.createElement;

function App() {
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://api.github.com/users/Zchmenke/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return e('div', { className: 'spinner' },"Loading..."); 
  }

  return e(
    'div',
    null,
    repos.map(repo => (
      e(
        'div',
        { key: repo.id },
        e('h3', null, repo.name),      
        e('a', { href: repo.html_url }, repo.name)
      )
    ))
  );
}

const domContainer = document.querySelector('.portfolio');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));