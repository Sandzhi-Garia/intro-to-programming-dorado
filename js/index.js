let today = new Date();
let thisYear = today.getFullYear();
let footer =  document.querySelector('footer')
let copyright = document.createElement('p')
footer.appendChild(copyright);

skills = ["HTML", "CSS", "JavaScript", "FL Studio 20"]
skillsSelection = document.getElementById('Skills')
skillsList = skillsSelection.querySelector('ul')
for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}

let messageForm = document.querySelector('Leave_a_message') ;
messageForm = document.addEventListener("submit", sendEmail);
function sendEmail(event){
    event.preventDefault();
    let fullname = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    console.log(fullname);
    console.log(email);
    console.log(message);
    let messageSection = document.getElementById('Message')
    let messageList = messageSection.querySelector('ul')
    let newMessage = document.createElement('li')
    newMessage.innerHTML = '<a href="mailto:'+email+'">'+fullname+'</a> wrote: '+message+' ' 

    let removeButton = document.createElement('button')
    removeButton.innerHTML = 'Remove';
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
        let entry = removeButton.parentNode;
        entry.remove();
     });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    document.getElementById('messageForm').reset();
}

// let githubRequest = new XMLHttpRequest();

// githubRequest.addEventListener("load", function() {
//     let repositories = JSON.parse(this.responseText)
//     console.log(repositories)
//     let projectSection = document.querySelector('#Projects')
//     let projectList = document.querySelector('#project_list')

//     for(i =0; i< repositories.length; i++){
//         let project = document.createElement('li')
//         project.innerText = repositories[i].name
//         project.innerHTML = '<a class="link link--no-color" href = "'+repositories[i].html_url+'" >'+repositories[i].name+'</a>'
//         projectList.appendChild(project)
//         console.log(repositories[i].name)
//     }
//     projectSection.appendChild(projectList)
// })
// githubRequest.open("GET", "https://api.github.com/users/Sandzhi-Garia/repos", true);
// githubRequest.send();

fetch('https://api.github.com/users/Sandzhi-Garia/repos', {
  method: 'GET'})
  .then((response) => {
    return response.json();})
  .then(repositories => {console.log(repositories)    
    let projectSection = document.querySelector('#Projects')
    let projectList = document.querySelector('#project_list')

  for(i =0; i< repositories.length; i++){
      let project = document.createElement('li')
      project.innerText = repositories[i].name
      project.innerHTML = '<a class="link link--no-color" href = "'+repositories[i].html_url+'" >'+repositories[i].name+'</a>'
      projectList.appendChild(project)
      console.log(repositories[i].name)
  }
  projectSection.appendChild(projectList)})  