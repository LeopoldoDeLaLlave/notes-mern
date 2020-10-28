const notesCtrl = {};

notesCtrl.getNotes = (req, res)=>res.send('GET - Notes route');
notesCtrl.createNote =(req, res) => res.send('POST - Notes route');
notesCtrl.getNote =(req, res) => res.send('GET id - Notes route');
notesCtrl.updateNote =(req, res) => res.send('Put - Notes route');
notesCtrl.deleteNote =(req, res) => res.send('Delete - Notes route');

module.exports = notesCtrl;