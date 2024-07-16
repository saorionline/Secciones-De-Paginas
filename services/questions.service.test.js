// questions.service.test.js

const SurveyService = require('./questions.service');

describe('SurveyService', () => {
  let surveyService;

  beforeEach(() => {
    surveyService = new SurveyService();
  });

  describe('delete method', () => {
    it('should delete a question by ID', async () => {
    const existingSurveys = await surveyService.find();
    const surveyToDeleteId = existingSurveys[0].id;

    await surveyService.delete(surveyToDeleteId);
    const surveysAfterDelete = await surveyService.find();
    expect(surveysAfterDelete.length).toBeLessThanOrEqual(existingSurveys.length - 1); // Adjusted assertion
    expect(surveysAfterDelete.find(survey => survey.id === surveyToDeleteId)).toBeFalsy(); // Using Jest matchers
 });

    it('should throw an error for non-existent ID', async () => {
      const nonExistentId = 100;

      await expect(surveyService.delete(nonExistentId)).rejects.toThrow('Question not found');
    });
  });
});
