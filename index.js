
const checkAnswersButton = document.getElementById("check-answers-btn");
const answers = document.getElementsByClassName("answer");
const totalNumberOfQuestions = answers.length;
let numberOfQuestionsAnsweredCorrectly = 0;
let numberOfQuestionsAnsweredWrong = 0;
let totalNumberOfQuestionsAnswered = 0;
const radioButtons = document.getElementsByClassName("radio");
const totalNumberOfRadioButtons = radioButtons.length;
const errorMessage = document.getElementsByClassName("error-message")[0];

/* Check if all the questions have been answered. If so, check answers. */
const checkIfAllQuestionsHaveBeenAnswered = () => {
	for (let i = 0; i < totalNumberOfRadioButtons; i++) {
		if (radioButtons[i].checked) {
			totalNumberOfQuestionsAnswered++;
		}
	}
	if (totalNumberOfQuestionsAnswered < totalNumberOfQuestions) {
		displayErrorMessage();
	} else {
		checkAnswers();
	}
}

/* Display error message */
const displayErrorMessage = () => {
	errorMessage.classList.add("display-error-message");
	
	setTimeout(() => {
		errorMessage.classList.remove("display-error-message");
	}, 2500);
}

/* Check all of the answers and mark them correct/incorrect. */
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

/* Display the user's grade. */
const displayGrade = () => {
	checkAnswersButton.disabled = true;

	document.getElementById("answered-correctly-counter").innerHTML = `<strong>${numberOfQuestionsAnsweredCorrectly}</strong> questions answered correctly.`;
	document.getElementById("answered-wrong-counter").innerHTML = `<strong>${numberOfQuestionsAnsweredWrong}</strong> questions answered incorrectly.`;
	
	let grade = (numberOfQuestionsAnsweredCorrectly / totalNumberOfQuestions) * 100;
	let gradeRounded = Math.round(grade);
	
	document.getElementById("grade").innerHTML = `You scored a <strong>${gradeRounded}</strong>%.`;
}

/* "Check Answers" button */
checkAnswersButton.addEventListener("click", checkIfAllQuestionsHaveBeenAnswered);
