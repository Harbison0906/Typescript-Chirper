import * as express from 'express';
import chirpsStore from '../chirpsstore';
import { number, string, any } from 'prop-types';

let router = express.Router();

router.get('/', (req, res, next) => {

  const data = chirpsStore.GetChirps();
  const chirps = Object.keys(data).map((key) => {
    return {
         id: key,
         user: data[key].user,
         text: data[key].text
    }
});

chirps.pop();

res.json(chirps);

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