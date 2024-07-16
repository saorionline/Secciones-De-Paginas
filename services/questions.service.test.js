// questions.service.test.js

const QuestionService = require('./questions.service');

describe('QuestionService', () => {
  let service;

  beforeEach(() => {
    service = new QuestionService();
  });

  describe('delete', () => {
    it('should delete a question by ID', async () => {
      const idToDelete = 2; // Choose an existing question ID

      const deletedQuestion = service.delete(idToDelete);
      expect(deletedQuestion).toEqual({ id: idToDelete });

      const remainingQuestions = service.find();
      expect(remainingQuestions.length).toBe(service.questions.length - 1); // One less question
      expect(remainingQuestions.find(q => q.id === idToDelete)).toBeFalsy(); // Question not found
    });

    it('should throw an error for non-existent ID', async () => {
      const nonExistentId = 10;

      expect(() => service.delete(nonExistentId)).toThrowError('Question not found');
    });
  });
});
