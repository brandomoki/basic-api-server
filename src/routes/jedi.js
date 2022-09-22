'use strict';

const router = express.Router();
const express = require('express');
const { Jedi } = require('../models/index');

router.get('/jedi', getJedi);

async function getJedi(request, response, next) {
  try {
    let results = await Jedi.find();
    response.status(200).send(results);

  } catch (error) {
    next(error);
  }
}

router.post('/jedi', postJedi);

async function postJedi(request, response, next) {
  console.log(request.body);
  try {
    const newJedi = await Jedi.create(request.body);
    response.status(201).send(newJedi);

  } catch (error) {
    next(error);
  }
}

router.delete('/jedi/:jediId', deleteJedi);

async function deleteJedi(request, response, next) {
  const id = request.params.jediId;
  console.log(id);
  try {
    await Jedi.findByIdAndDelete(id);
    response.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}

router.put('/jedi/:jediId', putJedi);

async function putJedi(request, response, next){
  let id = request.params.jediId;
  try {
    let data = request.body;

    const updateJedi = await Jedi.findByIdAndUpdate(id, data, { new: true, overwrite: true });
    response.status(201).send(updateJedi);

  } catch (error) {
    next(error);

  }
}

module.exports = router;
