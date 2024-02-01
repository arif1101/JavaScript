const school = 'Rajganj Degree School';
const subject = 'Chemistry';
const book = 'chemistry';

console.log("main form : ",school);
console.log("upper case : ",school.toUpperCase());
console.log("lower case : ",school.toLowerCase());

if(subject.toUpperCase()===book.toUpperCase()){
    console.log('I am reading book. eibar sob fatai felbo');
}
else{
    console.log('hudai hudai prista ultai ar vat khawar jonno')
}

// string slicing

console.log("---- string slicing --------")

const address = 'Jessore';
const part = address.slice(2,5);
console.log("slicing word : ",part);

console.log("------- string split ----------")
const sentence = 'I am from jessore. my name is arif';
console.log(sentence.split(' '));

// string reverse

console.log('------ string reverse -------');
const sentenceRev= 'arif love zakiya';
for (const letter of sentenceRev){
    console.log(letter);
}

let reverse= '';
console.log('-------- string reverse --------');
for (const letter of sentenceRev){
    reverse = letter + reverse;
}
console.log(reverse);


