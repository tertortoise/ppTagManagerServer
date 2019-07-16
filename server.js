const express = require('express');

const app = express();
const PORT = '3001';
const postEntry = require('./controllers/postEntry');
const updateEntry = require('./controllers/updateEntry');
const findEntriesAll = require('./controllers/findEntriesAll');
const findTagsAll = require('./controllers/findTagsAll');
const deleteEntry = require('./controllers/deleteEntry');
const updateTag = require('./controllers/updateTag');
const deleteTag = require('./controllers/deleteTag');
const postTag = require('./controllers/postTag');

app
  .use(express.json())
  .use(express.static('build'))
  .get('/api/entriesAll', findEntriesAll)
  .get('/api/tagsAll', findTagsAll)
  .post('/api/postEntry', postEntry)
  .post('/api/updateEntry', updateEntry)
  .post('/api/updateTag', updateTag)
  .post('/api/postTag', postTag)
  .post('/api/deleteTag', deleteTag)
  .delete('/api/deleteEntry/:id', deleteEntry)
  .get('/*', (r) => r.res.sendFile('build/index.html', { root: '.' }))
  .use((r) => {
    r.res.status(404).end('Still not here, sorry!');
  })
  .use((e, r, res, n) => res.status(500).end(`Error: ${e}`));

app.listen(process.env.PORT || PORT, () => console.log('Server is up on 3001'));
