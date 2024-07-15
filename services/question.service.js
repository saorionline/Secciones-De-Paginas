
class QuestionService {
        constructor() {
          this.questions = [
                {id: 1, title: 'Health and Wellness', text:"Physical and Mental Well-being", completed: true},
                {id: 2, title: 'Popular Health', text:"Weight Loss", completed: false},
                {id: 3, title: 'Nutrition', text:"Healthy eating habits, meal plans, and recipes", completed: false},
                {id: 4, title: 'Physical Exercise', text:"Types, workout routines, and fitness tips", completed: false},
                {id: 5, title: 'Mental Health', text:"Managing stress, and improving mental well-being", completed: false},
                {id: 6, title: 'Sleep Well', text:"Improve sleep habits", completed: false}
            ];
        }
    find() {
        return this.questions;
    }
    findOne(id) {
        return this.questions.find( question => question.id === parseInt(id, 10));
    }
    update(id, updates) {}
}
      
const questionService = new QuestionService();
console.log ({ QuestionService, questionService });

module.exports = QuestionService;