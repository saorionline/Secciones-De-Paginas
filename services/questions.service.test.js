// questions.service.test.js

const QuestionService = require('./questions.service');

describe('QuestionService', () => {
  let questionService;

  const testData = {
    existingQuestionId: 2, // ID of a question that exists
    questionToDeleteId: 3,  // ID of a question to be deleted
  };

  beforeEach(() => {
    questionService = new QuestionService();
  });

  describe('delete method', () => {
    it('should delete a question by ID and return updated questions', (done) => {
    const expectedId = 2;

    questionService.delete(expectedId)
      .then(() => {
        const updatedQuestions = questionService.find();
        expect(updatedQuestions.find (question => question.id == expectedId)).toBeFalsy();
        done();
      })
      .catch(error => {
        expect(error).toBeFalsy(); // Expect no errors during deletion
        done(); // Call done() even on error
      });
    });
  });
});
