
const checkAnswersButton = document.getElementById("check-answers-btn");
const answerChoices = document.getElementsByClassName("choice");
const answers = document.getElementsByClassName("answer");
const totalNumberOfQuestions = answers.length;
let = numberOfQuestionsAnsweredCorrectly = 0;
let = numberOfQuestionsAnsweredWrong = 0;

const checkAnswers = () => {
	for (let i = 0; i < answers.length; i++) {
		if (answers[i].checked == true) {
			answers[i].nextElementSibling.classList.add("green");
			numberOfQuestionsAnsweredCorrectly++;
		} else {
			answers[i].nextElementSibling.classList.add("red");
			numberOfQuestionsAnsweredWrong++;
		}
	}
	displayGrade();
}

const displayGrade = () => {
	document.getElementById("answered-correctly-counter").innerHTML = `<strong>${numberOfQuestionsAnsweredCorrectly}</strong> questions answered correctly.`;
	document.getElementById("answered-wrong-counter").innerHTML = `<strong>${numberOfQuestionsAnsweredWrong}</strong> questions answered incorrectly.`;
	
	let grade = (numberOfQuestionsAnsweredCorrectly / totalNumberOfQuestions) * 100;
	let gradeRounded = Math.round(grade);
	
	document.getElementById("grade").innerHTML = `You scored a <strong>${gradeRounded}</strong>%.`;
}

checkAnswersButton.addEventListener("click", checkAnswers);


