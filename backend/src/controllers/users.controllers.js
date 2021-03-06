const usersCtrl = {};

const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};


usersCtrl.createUser = async(req, res) => {
    const { userName } = req.body;
    const newUser = new User({
        userName
    });
    await newUser.save();
    res.json({ "message": "saved" })
};


usersCtrl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user)
};


usersCtrl.updateUser = async (req, res) =>{
    const{userName} = req.body;
    await User.findOneAndUpdate(req.params.id, {
        userName
    });
    res.json({"message":"update"});
};


usersCtrl.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({"message":"deleted"})
};

module.exports = usersCtrl;