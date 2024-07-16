
class SurveyService {
        constructor() {
          this.surveys = [];
          this.generate();
        }
generate() {
    const surveyData = [
      { id: 1, title: 'Health and Wellness', text: "Physical and Mental Well-being", completed: true },
      { id: 2, title: 'Popular Health', text: "Weight Loss", completed: false },
      { id: 3, title: 'Nutrition', text: "Healthy eating habits, meal plans, and recipes", completed: false },
      { id: 4, title: 'Physical Exercise', text: "Types, workout routines, and fitness tips", completed: false },
      { id: 5, title: 'Mental Health', text: "Managing stress, and improving mental well-being", completed: false },
      { id: 6, title: 'Sleep Well', text: "Improve sleep habits", completed: false },
    ];    
    this.surveys.push(...surveyData);
}
find(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(this.surveys);},5000
      );
      }
    )
  }

async findOne(id) {
        return this.surveys.find( question => question.id === id);
    }
async update(id, updates) {
    const index = this.surveys.findIndex ( question => question.id === id);
    if ( index === -1 ) {
        throw new Error('Q not found');
    }
    const survey = this.surveys[ index ];
    this.surveys[ index ] = {...survey, ...updates};
    return this.surveys[index];
}
async delete(id) {
        const index = this.surveys.findIndex ( question => question.id === id);
        if( index === -1 ) {
            throw new Error ('Question not found');
        }
        this.surveys.splice(index, 1);
        return { id }
    }
}
      
const surveyService = new SurveyService();
console.log (surveyService.surveys);

module.exports = SurveyService;