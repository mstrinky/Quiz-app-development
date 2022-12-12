const continueButton = document.getElementById("continue").addEventListener('click',function(){
    window.location.href='page3.html';
   
})
function showQuestions(index){
    const questionText = document.querySelectorJ('.text1');
    let questionTag = "<span>" + question[1].question + "</span>";
    questionText.innerHTML = questionTag;
}
showQuestions()