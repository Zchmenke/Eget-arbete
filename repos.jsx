

// creating a element called "fetchContent"
const fetchContent = React.createElement;

// created a component/function that uses the Github API to fetch certain repositories.

// the uses one prop called "onButtonClick"
function App({onButtonClick}) {
  const [repos, setRepos] = React.useState([]);   // declaring a array that will hold repo fetched repositories.
  const [loading, setLoading] = React.useState(true); // tells me when the repositories are being loaded, initially set to true

  React.useEffect(() => { // fetches data from API
    fetch('https://api.github.com/users/Zchmenke/repos')  // -||-
      .then(response => response.json()) // then converts the data to a .json file. 
      .then(data => {    // filters the fetched data and keeps the repos bellow based on their repo names (using the .includes function)                                                                      
        setRepos(data.filter(repo=>['Eget-arbete','Threading-test','Labb-4-Database-EF','Labb-4-Collections'].includes(repo.name)));
        setLoading(false); // when its done fetching and rendering the data, sets "setLoading" to false
      })
      .catch(error => console.error(error));
  }, []);

  if (loading) {  // if "loading" is true: then render the text" "Loading..."
    return fetchContent('div', { className: 'spinner' },"Loading..."); 
  }

  return fetchContent( // returns a html element
    'div',
    null,
    repos.map(repo => ( // foreach element held in the array a 'div' is created and  will hold the child elements bellow
      fetchContent(
        'div',
        { key: repo.id },
        fetchContent('h3', null, repo.description),      // rep description
        fetchContent('a', { href: repo.html_url,target:'blank'},"Link"), // a link to the rep with a :target:'blank' so it will open in a new tab
        fetchContent('button', { onClick: () => onButtonClick(repo.name),className:'button'},'') // a button that is clickable to render a modal that holds info aboutthe project

        
      )
    ))
  );
}
// references the element stated in the .getElemendById fucntion
const btn1Element = document.getElementById("btn1Modal")
const btn2Element = document.getElementById("btn2Modal")
const btn3Element = document.getElementById("btn3Modal")
const btn4Element = document.getElementById("btn4Modal")

// if statement to handle what function to run on the button clicks.
function handleButtonClick(repoName) { // the value of repoName is being passed from the onClick to the onButtonClick and then in turn is passed to the handleButtonClick fuction
  console.log(`Button clicked for ${repoName}`);
  if(repoName==="Eget-arbete"){ // if repoName (repo.name) is the same value and value type as  the string typed in the if statement then run the desired function
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
// function that renders textcontent into a modal and makes it visible. 
function btn1(){  
  var btn1Content = document.getElementById("btn1Content"); // references the specified div in the modal.
  btn1Content.textContent = "A simple Resumé webiste i built with HTML,Js And CSS"; // sets the textContent in the div to this.
  btn1Element.style.visibility = "visible"; // makes the modal visible.
  closeBtnModal1 = () =>{ // function to clse the modal (or rather hides the modal)
    const modal = document.getElementById("btn1Modal"); // references the specific modal.
    modal.style.visibility ="hidden"; // makes the modal hidden.
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