# Secciones-De-Paginas
Desarrollando mi App desde el Back-End Server

# Basic exercises

Get the array, and organize it in compartiments

# Delete the first item in the array

My information is stored locally, so my exercise is to see how to delete or modify the array.

# Put and Patch 

Other potential ways to adapt my code to achieve update-like behavior:

1. Updating the entire question (similar to PUT):

Find the question to update based on its ID.
Create a new object with the updated properties.
Use the index of the found question to replace the existing element in the array with the new object.

```javascript
router.put('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { title, text, completed } = req.body; // Assuming request body has updated data

  const questionIndex = questions_library.findIndex(question => question.id === parseInt(id));

  if (questionIndex === -1) {
    return res.status(404).json({ message: 'Question not found' });
  }

  const updatedQuestion = { id, title, text, completed }; // Create a new object with updates

  questions_library[questionIndex] = updatedQuestion; // Replace the element at the index

  res.json({ message: 'Question updated successfully', updatedQuestion });
});


```
2. Updating specific properties of a question (similar to PATCH):

Find the question to update based on its ID.
Use spread syntax (...) to create a copy of the existing question object.
Update the desired properties directly on the copied object.
Replace the existing element in the array with the modified object.

```javascript
router.patch('/questions/:id', (req, res) => {
  const { id } = req.params;
  const { title, text, completed } = req.body; // Assuming request body has partial updates

  const questionIndex = questions_library.findIndex(question => question.id === parseInt(id));

  if (questionIndex === -1) {
    return res.status(404).json({ message: 'Question not found' });
  }

  const existingQuestion = questions_library[questionIndex];
  const updatedQuestion = { ...existingQuestion, ...req.body }; // Merge existing and updated data

  questions_library[questionIndex] = updatedQuestion;

  res.json({ message: 'Question updated successfully', updatedQuestion });
});

```
Explanation:

This approach finds the question index similar to the previous example.
It then uses spread syntax (...) to create a copy of the existing question object (existingQuestion).
It then spreads the request body (req.body) containing the partial updates onto the copied object, effectively merging the existing and updated data into a new object (updatedQuestion).
Finally, it replaces the element at the index with the modified object.
Important Note:

Remember that these methods directly modify the questions_library array. If you want to avoid altering the original data, consider creating a copy of the entire array before making updates.

# Second Part 

Tutorial script
```javascript
router.get('/:id',async(req,res)=>{
  const{id}=req.params;
  const product=await service.findOne(id);
  res.json(product);});
  
router.post('/',async(req,res)=>{
  const body=req.body;
  const newProduct=await service.create(body);
  res.status(201).json(newProduct);});
  
router.patch('/:id',async(req,res)=>{
  try{
  const{id}=req.params;
  const body=req.body;
  const product=await service.update(id,body);
  res.json(product);
  }
  catch(error){
    res.status(404).json({
      message:error.message
      });
      }
      });

router.delete('/:id', async(req,res)=>{
  const{id}=req.params;
  const rta=await service.delete(id);
  res.json(rta);
  });
  
  module.exports=router;

```
