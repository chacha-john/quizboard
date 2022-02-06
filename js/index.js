// function saveAnswers(){
//     // alert('ala!')
//     var count = 0;
//     var answer1 = document.qboard.question1.value;
//     var answer2 = document.qboard.question2.value;
//     var answer3 = document.qboard.question3.value;
//     var answer4 = document.qboard.question4.value;
//     var answer5 = document.qboard.question5.value;
//     var answer6 = document.qboard.question6.value;
//     if(answer1 =="A"){
//         count += 10
//         document.write(count)
//         }
// }


correctAnswer = {
    question1: "A",
    
}

let userForm = document.getElementById("quizboard");
userForm.addEventListener('submit', ()=> {
    let userData = new FormData(userForm);
    let secondName = userData.get("question1")

    if (secondName === correctAnswer["question1"]){
        alert("ala!");
    }

})
