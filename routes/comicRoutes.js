const express = require('express');
const comicRouter = express.Router();
const ComicBook = require('../db/db');


//test route
comicRouter.get('/test', (req,res)=>{
  res.send('Comic Route Working')
});


//Create a comic book 
comicRouter.post('/', async (req,res)=>{

  const comicBookDetails = req.body;


  const newComicBook =  new ComicBook(comicBookDetails);

  await newComicBook.save();

  res.status(201).send('Comic Book Created')  
});

//Get all comic books
comicRouter.get('/', async (req,res)=>{

  const comicBooks = await ComicBook.find();

  res.status(200).json(comicBooks);
});


//Get a comic book by id
comicRouter.get('/:id', async (req,res)=>{

  const comicBook = await ComicBook.findById(req.params.id);

  res.status(200).json(comicBook);
});

//Update a comic book by id
comicRouter.put('/:id', async (req,res)=>{

  const comicBookDetails = req.body;

  await ComicBook.findByIdAndUpdate(req.params.id, comicBookDetails);

  res.status(200).send('Comic Book Updated');

});


//Delete a comic book by id
comicRouter.delete('/:id', async (req,res)=>{

  await ComicBook.findByIdAndDelete(req.params.id);

  res.status(200).send('Comic Book Deleted');

});


//Get all comic books by author
comicRouter.get('/author/:author', async (req,res)=>{

  const comicBooks = await ComicBook.find({authorName: req.params.author});

  res.status(200).json(comicBooks);
});







module.exports = comicRouter;