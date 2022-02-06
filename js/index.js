let marks = 0;
let correctAnswer = {
    question1: "A",
    question2: "B",
    question3: "D",
    question4: "C",
    question5: "B"
};

let userForm = document.querySelector("#quizboard");
userForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    let userData = new FormData(userForm);
    dataLogic(userData);
})

dataLogic = (userData) => {
    let answer1 = userData.get('question1');
    let answer2 = userData.get('question2');
    let answer3 = userData.get('question3');
    let answer4 = userData.get('question4');
    let answer5 = userData.get('question5');

    if (answer1 === correctAnswer['question1']){
        marks = marks += 20;
    }
    if ( answer2 === correctAnswer['question2']){
        marks +=20;
    }
    if ( answer3 === correctAnswer['question3']){
        marks +=20;
    }
    if ( answer4 === correctAnswer['question4']){
        marks +=20;
    }
    if ( answer5 === correctAnswer['question5']){
        marks +=20;
    }

    if(marks > 60){
        var remarks = 'Congratulations! You scored ' + marks + " marks! You did an excellent job!"
    }
    else if(marks == 60){
        var remarks = 'Congratulations! You scored ' + marks + " marks! You did a fairly outstanding job!"
    }
    else{
        var remarks = 'You scored ' + marks + " marks! It looks like you missed some concepts. Please revisit the course materials then retake the quiz."
    }

    //output display set to a class on the document

    let userPerformance = document.querySelector('#feedback');
    userPerformance.textContent = remarks;
    userForm.style.display = 'none';


}
