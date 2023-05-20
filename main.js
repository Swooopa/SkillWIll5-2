// 1.3 

// შექმენით კლასი ქვიზისთვის
class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentQuestionIndex = 0;
    }
  
    // გამოაქვეყნეთ შეკითხვა
    askQuestion() {
      const question = this.questions[this.currentQuestionIndex];
      const answer = prompt(question.text);
      this.checkAnswer(answer, question.correctAnswer);
    }
  
    // შეამოწმეთ პასუხი
    checkAnswer(answer, correctAnswer) {
      if (answer === correctAnswer) {
        alert('სწორი პასუხი!');
        this.score += 1;
      } else {
        alert('არასწორი პასუხი!');
      }
  
      this.currentQuestionIndex += 1;
  
      // შეამოწმეთ, თუ არჩეულია ყველა შეკითხვა
      if (this.currentQuestionIndex === this.questions.length) {
        this.showScore();
      } else {
        this.askQuestion();
      }
    }
  
    // გამოაქვეყნეთ ქულების რაოდენობა
    showScore() {
      alert(`თქვენ მოაგეს ${this.score} ქულა ${this.questions.length} შეკითხვაში.`);
    }
  }
  
  // შექმენით შეკითხვების მასივი
  const questions = [
    {
      text: 'რა არის 2 + 2?',
      correctAnswer: '4'
    },
    {
      text: 'რომელ წელს დაიწყო სამშობლო კონსტიტუცია?',
      correctAnswer: '1787'
    },
    {
      text: 'რა არის 7 * 8?',
      correctAnswer: '56'
    }

    

    
  ];
  
  // შექმენით ახალი ქვიზის ობიექტი
  const quiz = new Quiz(questions);
  
  // დაიწყეთ ქვიზი
  quiz.askQuestion();