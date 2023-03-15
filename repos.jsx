
//'use strict';

const fetchContent = React.createElement;

function App({onButtonClick}) {
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
        fetchContent('h3', null, repo.description),      
        fetchContent('a', { href: repo.html_url }, "Link"),
        fetchContent('button', { onClick: () => onButtonClick(repo.name),className:'button'},'')

        
      )
    ))
  );
}

const btn1Element = document.getElementById("btn1Modal")
const btn2Element = document.getElementById("btn2Modal")
const btn3Element = document.getElementById("btn3Modal")
const btn4Element =document.getElementById("btn4Modal")


function handleButtonClick(repoName) {
  console.log(`Button clicked for ${repoName}`);
  if(repoName==="Eget-arbete"){
    btn1()
  }
  else if(repoName==="Labb-4-Collections"){
    btn2()
  }
  else if(repoName==="Labb-4-Database-EF"){
    btn3()
  }
  else if(repoName==="Threading-test"){
    btn4()
  }
}

function btn1(){  
  var btn1Content = document.getElementById("btn1Content");
  btn1Content.textContent = "A simple Resumé webiste i built with HTML,Js And CSS";
  btn1Element.style.visibility = "visible";
  closeBtnModal1 = () =>{
    const modal = document.getElementById("btn1Modal");
    modal.style.visibility ="hidden";
  }
}
function btn2(){  
  var btn2Content = document.getElementById("btn2Content");
  btn2Content.textContent = "A Collections excercise";
  btn2Element.style.visibility = "visible";
  closeBtnModal2 = () =>{
    const modal = document.getElementById("btn2Modal");
    modal.style.visibility ="hidden";
  }
}
function btn3(){  
  var btn3Content = document.getElementById("btn3Content");
  btn3Content.textContent = "A Database project made with EF and SSMS";
  btn3Element.style.visibility = "visible";
  closeBtnModal3 = () =>{
    const modal = document.getElementById("btn3Modal");
    modal.style.visibility ="hidden";
  }
}
function btn4(){  
  var btn4Content = document.getElementById("btn4Content");
  btn4Content.textContent = "A simple Race-car game i made to try Threading.";
  btn4Element.style.visibility = "visible";
  closeBtnModal4 = () =>{
    const modal = document.getElementById("btn4Modal");
    modal.style.visibility ="hidden";
  }
}



















const domContainer = document.querySelector('.portfolio');
const root = ReactDOM.createRoot(domContainer);
root.render(fetchContent(App));
root.render(fetchContent(App, { onButtonClick: handleButtonClick }));