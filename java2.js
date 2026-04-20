const getAverage = grades => {
    let sum = 0;
    for(let i = 0; i < grades.length; i++){
        sum += grades[i]
    }
    return sum/grades.length
}

const getGrade = score => {
    score >= 100?  "A+":
    score >= 90? "A":
    score >= 80? "B":
    score >= 70? "C":
    score >= 60?  "D":
     "F";
}

const hasPassingGrade = score => {
    const grade = getGrade(score)
    return grade !== "F"
}
const studentMsg = (array, score) => {
  const avg = getAverage(array);
  const grade = getGrade(score);

  const result = hasPassingGrade(score)
    ? "You passed the course."
    : "You failed the course.";

  return `Class average: ${avg}. Your grade: ${grade}. ${result}`;
};
