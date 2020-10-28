const usersCtrl = {};

usersCtrl.getUsers = (req, res)=>res.send('GET - Users route');
usersCtrl.createUser =(req, res) => res.send('POST - Users route');
usersCtrl.getUser =(req, res) => res.send('GET id - Users route');
usersCtrl.updateUser =(req, res) => res.send('Put - Users route');
usersCtrl.deleteUser =(req, res) => res.send('Delete - Users route');

module.exports = usersCtrl;