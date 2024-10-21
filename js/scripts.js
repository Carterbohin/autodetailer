const navElement = document.querySelector('#theNav');
const btnElement = document.querySelector('#theButton');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
});




import { reviews } from '../data/reviews.js'; // Adjust the path if needed
console.log(reviews);

const myTarget = document.querySelector("#cards");

for (let x = 0; x < reviews.length; x++) {
   
    //create a section
    const mySection = document.createElement('section');

    const myName = document.createElement('h2');
    myName.textContent = reviews[x].name//display names

    const myReview = document.createElement('p');
    mySection.textContent = reviews[x].text; // Changed 'text' to 'comment'
   

    const myRating = document.createElement('div')
 


for (let step = 0; step<reviews[x].stars; step ++) {
    const genIndicator = document.createElement('img')
    genIndicator.src = "./images/star-outline.svg"
    myRating.appendChild(genIndicator)
}

    //build the child elements
    mySection.appendChild(myName);
    mySection.appendChild(myRating);
    myTarget.appendChild(mySection);
}
