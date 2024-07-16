
class QuestionService {
        constructor() {
          this.questions = [];
          this.generate();
        }
generate() {
    const questionData = [
      { id: 1, title: 'Health and Wellness', text: "Physical and Mental Well-being", completed: true },
      { id: 2, title: 'Popular Health', text: "Weight Loss", completed: false },
      { id: 3, title: 'Nutrition', text: "Healthy eating habits, meal plans, and recipes", completed: false },
      { id: 4, title: 'Physical Exercise', text: "Types, workout routines, and fitness tips", completed: false },
      { id: 5, title: 'Mental Health', text: "Managing stress, and improving mental well-being", completed: false },
      { id: 6, title: 'Sleep Well', text: "Improve sleep habits", completed: false },
    ];    
    this.questions.push(...questionData);
}
find(){
  return this.questions;
  }

async findOne(id) {
        return this.questions.find( question => question.id === parseInt(id, 10));
    }
async update(id, updates) {
    const index = this.surveys.findIndex ( question => question.id === id);
    if ( index === -1 ) {
        throw new Error('Q not found');
    }
    const question = this.questions[ index ];
    this.questions[ index ] = {...question, ...updates};
    return this.questions[index];
}
async delete(id) {
        const index = this.questions.findIndex ( question => question.id === id);
        if( index === -1 ) {
            throw new Error ('Question not found');
        }
        this.questions.splice(index, 1);
        return { id }
    }
}
      
const questionService = new QuestionService();
const questionWithId2 = questionService.findOne(2);

if (questionWithId2) {
  console.log("Found question:", questionWithId2);
} else {
  console.log("Question with ID 2 not found.");
}

questionService.delete(2)
  .then(() => {
    const updatedQuestions = questionService.find();
    console.log(updatedQuestions);
  })
  .catch(error => {
    console.error('Error deleting question:', error);
  });
  
module.exports = QuestionService;