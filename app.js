
 // title and educations.
const education = document.querySelector("h2.education")
let edu1 = document.querySelector("li.edu1")
let edu2 = document.querySelector("li.edu2")
let edu3 = document.querySelector("li.edu3")


// title and workplaces.
const workTitle = document.querySelector("h2.workTitle")
let work1 = document.querySelector("li.work1")
let work2 = document.querySelector("li.work2")
let work3 = document.querySelector("li.work3")
let work4 = document.querySelector("li.work4")

//function to print my CV to site.
const printResume = () => {

    fetch('/cv.json')
     .then(res=>res.json())
     .then (response=> {

        // edu
        education.innerText=response.education[0].title;
        edu1.innerText=response.education[1].school;
        edu2.innerText=response.education[2].school;
        edu3.innerText=response.education[3].university;
       // work
        workTitle.innerText=response.workExperience[0].title;
        work1.innerText=response.workExperience[1].employer1;
        work2.innerText=response.workExperience[2].employer2;
        work3.innerText=response.workExperience[3].employer3;      
    })
}
//call function to print resume
printResume()




// -------easter egg one------------


    function easterEgg1() {
      document.body.style.backgroundImage = 'url("ainsley.jpg")';
    }
  

    //--------easter egg two--------

    let keyHistory = [];

    const handleKey = (evt) => {
      keyHistory.push(evt.key);
      console.log(keyHistory);
      let keyString = keyHistory.join("");
      if (keyString.includes("boi")) {   
       
        window.open(            
            "https://www.youtube.com/embed/EtCulrPSb3k?autoplay=1"           
        )
        keyHistory = []; 

        const modal = document.getElementById("easterPop");
        modal.style.display = "block";
        modal.style.visibility ="visible";
      }
      if (keyHistory.length > 3){
        keyHistory=[];
      }
    };
    
    document.querySelector("body").addEventListener("keydown", handleKey);

closeModal = () =>{
    const modal = document.getElementById("easterPop");
    modal.style.visibility ="hidden";
}

