function Random(num) {
    return Math.floor(Math.random()*num);
}

const Word = {
    weather: ['sunny', 'rainy', 'windy', 'snowy'],
    fortuneOutput: ['terrible suck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    activity: ['going out and eat', 'meeting freinds', 'doing exercises', 'relax from work']
}

let sentence = [];

for(let i in Word) {
    let index = Random(Word[i].length);
    switch(i) {
        case 'weather' :
            sentence.push(`Today is ${Word[i][index]}.`);
            break;
        case 'fortuneOutput' :
            sentence.push(`Fortune channel told me that I am having a ${Word[i][index]} today.`);
            break;
        case 'activity' :
            sentence.push(`My plan is ${Word[i][index]}.`);
            break;
        default:
            sentence.push('There is not enough info.');
    }
}

function format(wis) {
    const arrange = sentence.join('\n');
    console.log(arrange);
}

format(sentence);