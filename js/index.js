let today = new Date();
let thisYear = today.getFullYear();
let footer =  document.querySelector('footer')
let copyright = document.createElement('p')
copyright.innerHTML="Sandzhi-Garia Ochirov " + thisYear;
footer.appendChild(copyright);

skills = ["Working with HTML and CSS", "Working with JavaScript", "Understanding debugging"]
skillsSelection = document.getElementById('skills')
skillsList = skillsSelection.querySelector('ul')
for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}