let today = new Date();
let thisYear = today.getFullYear();
let footer =  document.querySelector('footer')
let copyright = document.createElement('p')
footer.appendChild(copyright);

skills = ["Working with HTML and CSS", "Working with JavaScript", "Understanding debugging"]
skillsSelection = document.getElementById('Skills')
skillsList = skillsSelection.querySelector('ul')
for (let i = 0; i< skills.length; i++){
    let skill = document.createElement('li')
    skill.innerHTML = skills[i]
    skillsList.appendChild(skill)
}


let messageForm = document.querySelector('leave_message') ;
messageForm = document.addEventListener("submit", sendEmail);
function sendEmail(event){
    event.preventDefault();
    let fullname = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;
    console.log(fullname);
    console.log(email);
    console.log(message);
    let messageSection = document.getElementById('messages')
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