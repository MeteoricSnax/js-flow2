var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:oR2AaDXZwp8JP1B1@cluster0-crynu.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true })
    .then((con) => {
        console.log("connected to mongo")
        testAddUser();
    })
    .catch(err => console.log("something went wrong in connection"));

const disconnect = () => mongoose.disconnect(() => console.log("Disconnected"))
setTimeout(disconnect, 20000);

var userSchema = new mongoose.Schema({
    userName: String,
    email: { type: String, unique: true },
    modified: { type: Date, default: Date.now }
});
// Build the User model
var User = mongoose.model('User', userSchema);

async function addUser(userName, email) {
    var user = new User({ userName, email })
    await user.save();
}

async function testAddUser() {
    try {
        await User.deleteMany({});
        await addUser("aaaaa", "a@asdf.dk");
        await addUser("bbbbb", "b@asdf.dk");
        await addUser("ccccc", "c@asdf.dk");
        await addUser("ddddd", "d@asdf.dk");
        await addUser("eeeee", "e@asdf.dk");
        console.log("Users added to db");
    } catch (err) {
        console.log("Error in add Users : " + err);
    }
}

async function findUser(fields, projection){
    return await User.find({userName: /Wonnegut/i},{userName: 1,_id:0})
    .sort({userName: -1})

};

async function editUser(){

};