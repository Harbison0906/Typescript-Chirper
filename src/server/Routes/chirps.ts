import * as express from 'express';
import chirpsStore from '../chirpsstore';

let router = express.Router();

router.get('/:id?', (req, res) => {
  let id = req.params.id;
  
  const chirps = Object.keys(this.state.chirps).map(key => {
    return {
         id: key,
         user: this.state.chirps[key].user,
         text: this.state.chirps[key].text
    }
});

chirps.pop();

  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
});

router.post('/', (req, res) => {
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let chirp = req.body;

  if (id) {
    res.json(chirpsStore.UpdateChirp(id, chirp));
  } else {
    res.sendStatus(200);
  }
});

router.delete('/:id', (req, res) => {
  let id = req.params.id;

  if (id) {
    chirpsStore.DeleteChirp(id);
    res.send('Chirp Deleted!');
  }
});

export default router;