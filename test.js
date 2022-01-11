const answers = ['全くない','少しある','ときどきにある','よくある','いつもある']

const quiz = [
    {
        question:'特に理由もなくどれほど疲れを感じましたか',
        answer:answers,
    }, {
        question:'神経過敏に感じましたか',
        answer:answers,
    }, {
        question:'どうしても落ち着けないくらいに神経過敏に感じましたか',
        answer:answers,
    }, {
        question:'絶望的だと感じましたか',
        answer:answers,
    }, {
        question:'そわそわ、落ち着かなくなりましたか',
        answer:answers,
    }, {
        question:'じっと座っていられないほど落ち着かなく感じましたか',
        answer:answers,
    }, {
        question:'ゆううつに感じましたか',
        answer:answers,
    }, {
        question:'気分が沈み込んで、何が起きても気が腫れないように感じましたか',
        answer:answers,
    }, {
        question:'何をするのも苦労だと感じましたか',
        answer:answers,
    }, {
        question:'自分は価値のない人間だと感じましたか',
        answer:answers,
    }
];

const $button = document.getElementsByTagName('button')
const quizLength = quiz.length;
let quizIndex = 0;
const answersLength = answers.length;
let answersIndex = 0;
const buttonLength = $button.length;
let score=0;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex=0;
    //let buttonLength = $button.length;    
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].answer[0] === e.target.textContent){
        score+=1;
    } else if(quiz[quizIndex].answer[1] === e.target.textContent){
        score+=2;
    } else if(quiz[quizIndex].answer[2] === e.target.textContent){
        score+=3;
    } else if(quiz[quizIndex].answer[3] === e.target.textContent){
        score+=4;
    } else if(quiz[quizIndex].answer[4] === e.target.textContent){
        score+=5;
    }

    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        if(score <=19){
            window.alert('採点終了!' + ' あなたの得点は' + score + 'です'+'\n'+'あなたの精神状態は良好である可能性が高いです');
        } else if(score <= 24){
            window.alert('採点終了!' + ' あなたの得点は' + score + 'です'+'\n'+'あなたはあ軽度の精神障害を持っている可能性が高いです');
        } else if(score <= 29){
            window.alert('採点終了!' + ' あなたの得点は' + score + 'です'+'\n'+'あなたは中程度の精神障害を持っている可能性が高いです');
        } else if(score <= 50){
            window.alert('採点終了!' + ' あなたの得点は' + score + 'です'+'\n'+'あなたは重度の精神障害を持っている可能性が高いです');
        }
    }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}

//ら心理状態がどれくらい悪いのかの目安が決まっているので、10の質問を合計することにより、自分の心理状態を把握することができる。
//•10 - 19 良好である可能性が高い
//•20 - 24 軽度の精神障害を持っている可能性が高い
//•25 - 29  中程度の精神障害を持っている可能性が高い
//•30 - 50  重度の精神障害を持っている可能性が高い


