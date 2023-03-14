
//'use strict';

const fetchContent = React.createElement;

function App() {
  const [repos, setRepos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://api.github.com/users/Zchmenke/repos')
      .then(response => response.json())
      .then(data => {
        setRepos(data.filter(repo=>['Eget-arbete','Threading-test','Labb-4-Database-EF','Labb-4-Collections'].includes(repo.name)));
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {
    return fetchContent('div', { className: 'spinner' },"Loading..."); 
  }

  return fetchContent(
    'div',
    null,
    repos.map(repo => (
      fetchContent(
        'div',
        { key: repo.id },
        fetchContent('h3', null, repo.name),      
        fetchContent('a', { href: repo.html_url }, repo.name)
        
      )
    ))
  );
}

const domContainer = document.querySelector('.portfolio');
const root = ReactDOM.createRoot(domContainer);
root.render(fetchContent(App));