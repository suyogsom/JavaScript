
let myGrade = function(markesObtained, totalMarks) {
    return gradAssigner(markesObtained, totalMarks);
};

let gradAssigner = function(markesObtained, totalMarks) {
    
    if(totalMarks >= markesObtained) {
        let average = (markesObtained/totalMarks) * 100;
        let grade = ``;
        if(average >= 90) grade = `A`;
        else if(average < 90 && average > 80) grade = `B`;
        else if(average <= 80 && average > 70) grade = `C`;
        else if(average <= 70 && average > 60) grade = `D`;
        else grade = `failed`;

        console.log(`Your grade is ${grade}`); 
    } else {
        console.log(`Obtained markes ${markesObtained} are more than total marks ${totalMarks}`);
    } 
};

let student1 = myGrade(202,200);
