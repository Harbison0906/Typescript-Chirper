import express from 'express';
import chirpsStore from '../chirpsstore';

let chirpsRouter = express.Router();

chirpsRouter.get('/:id?', (req, res) => {
  let id = req.params.id;

  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
});

chirpsRouter.post('/', (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

chirpsRouter.put('/:id', (req, res) => {
  let id = req.params.id;
  let chirp = req.body;

  if (id) {
    res.json(chirpsStore.UpdateChirp(id, chirp));
  } else {
    res.sendStatus(200);
  }
});

chirpsRouter.delete('/:id', (req, res) => {
  let id = req.params.id;

  if (id) {
    chirpsStore.DeleteChirp(id);
    res.send('Chirp Deleted!');
  }
});

export default chirpsRouter;