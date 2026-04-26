const targetDiv = document.getElementById("feedback-examples");
const feedback = document.querySelector("#feedback-form");

feedback.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = document.querySelector("#date-input");
  const course = document.querySelector("#course-input");
  const amount = document.querySelector("#amount-input");
  const feedback = document.querySelector("#feedback-input");

  const feedbackCard = document.createElement("div");
  feedbackCard.classList.add("example");

  const info = document.createElement("div");
  info.classList.add("info");

  const pDate = document.createElement("p");
  const pDateInput = document.createElement("p");
  const pCourse = document.createElement("p");
  const pCourseInput = document.createElement("p");
  const pAmount = document.createElement("p");
  const pAmountInput = document.createElement("p");
  const pFeedback = document.createElement("p");

  const feedbackText = document.createElement("div");
  feedbackText.classList.add("feedback-text");

  const text = document.createElement("p");

  pDate.textContent = "Date:";
  pDateInput.textContent = date.value;
  pCourse.textContent = "Course:";
  pCourseInput.textContent = course.value;
  pAmount.textContent = "Came with:";
  pAmountInput.textContent = amount.value;
  pFeedback.textContent = "Feedback:";

  text.textContent = feedback.value;

  feedbackCard.append(info, feedbackText);

  info.append(
    pDate,
    pDateInput,
    pCourse,
    pCourseInput,
    pAmount,
    pAmountInput,
    pFeedback,
  );

  feedbackText.append(text);

  targetDiv.appendChild(feedbackCard);
});
