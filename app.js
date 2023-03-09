
 // title and educations.
const education = document.querySelector("h2.education")
const edu1 = document.querySelector("li.edu1")
const edu2 = document.querySelector("li.edu2")
const edu3 = document.querySelector("li.edu3")


// title and workplaces.
const workTitle = document.querySelector("h2.workTitle")
const work1 = document.querySelector("li.work1")
const work2 = document.querySelector("li.work2")
const work3 = document.querySelector("li.work3")
const work4 = document.querySelector("li.work4")

//function to print my CV to site.
const printResume = () => {

    fetch('/cv.json')
     .then(res=>res.json())
     .then (response=> {

        // edu
        education.innerText=response.experience.title;
        edu1.innerText=response.experience.estet;
        edu2.innerText=response.experience.folkis;
        edu3.innerText=response.experience.bth;
       // work
        workTitle.innerText=response.experience.workTitle;
        work1.innerText=response.experience.demo;
        work2.innerText=response.experience.kosmo;
        work3.innerText=response.experience.derome;
    })
}
// call function
printResume()



