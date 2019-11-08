const getRandomInclusive = (min,max)=>
Math.floor(Math.random() *(max-min+1))+min;

const randomTestScores = Array.from({length:50},() =>
 getRandomInclusive(50,100)
);

//console.log(randomTestScores);

/**
 * TODO filter out all scores below threshold
 * get the average
 * get letter grades for the score
 * tally the results
 */

 function filterScores(score,threshold = 60)
 {
     if(score < threshold){
         return score;
     }
 }

 function assignLetterGrade(score) {
     if(score >= 90) {
         return 'A';
     }
     if(score >= 80) {
        return 'B';
    }
    if(score >= 70) {
        return 'C';
    }
      return 'F';
 }

 //console.log(assignLetterGrade(77));

 function curveScore(score,additionalPoints = 10)
 {
    return score + additionalPoints;

 }

 function transformScores(scores,transformer)
 {
   console.log(`Transformer function is: ${transformer.toString()}`);
   return scores.map(score => transformer(score));
 }
/**
 * Use reduce to sum up scores
 * @param {Array} scores
 * @return results
 */
function getAvg(scores){
    return scores.reduce((total,score)=>(total += score))/scores.length;
}

function tallyLetterGrades(scores){
 return transformScores(randomTestScores,assignLetterGrade).reduce(
     (tally,letterGrade)=> {
 //console.log("tally is: ",tally);
 if(letterGrade in tally){
   tally[letterGrade] += 1;
 }else{
    tally[letterGrade] = 1;
 }

 return tally;
 },
{}
);
}
 //console.log(transformScores(randomTestScores,filterScores));
 const results = transformScores(randomTestScores,filterScores).filter(
     score => score
 );
 const results2 = transformScores(randomTestScores,curveScore).filter(
    score => score
);
const results3 = transformScores(randomTestScores,assignLetterGrade).filter(
    score => score
);
const results4 = getAvg(randomTestScores);
const results5 = tallyLetterGrades(randomTestScores);
 console.log(`Results: ${results}`);
 console.log(`Results2: ${results2}`);
 console.log(`Results3: ${results3}`);
 console.log(`Results4: ${results4}`);
 console.log(`Results5: ${results5}`);
