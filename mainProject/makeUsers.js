var connect = require("./dbConnect");
connect(require("./settings").DEV_DB_URI);

var User = require("./models/user.js");
var LocationBlog = require("./models/locationBlog.js");
var Position = require("./models/position.js");

function positionCreator(lon, lat, userId, dateInFuture) {
    var posDetail = { user: userId, loc: { coordinates: [lon, lat] } }
    if (dateInFuture) {
        posDetail.created = "2022-09-25T20:40:21.899Z"
    }
    return posDetail;
}

async function makeData() {
    console.log("Making users")
    try {
        var userInfos = [{
            firstName: "a", lastName: "A", userName: "a", password: "a", email: "a@a.dk",
            job: [{ type: "t1", company: "company1", companyUrl: "url" }
                , { type: "t2", company: "company2", companyUrl: "url" }]
        },
        {
            firstName: "b", lastName: "b", userName: "b", password: "b", email: "b@b.dk",
            job: [{ type: "t1", company: "company1", companyUrl: "url" }
                , { type: "t2", company: "company2", companyUrl: "url" }]
        },
        {
            firstName: "c", lastName: "C", userName: "C", password: "c", email: "c@c.dk",
            job: [{ type: "t1", company: "company1", companyUrl: "url" }
                , { type: "t2", company: "company2", companyUrl: "url" }]
        }
        ];

        await User.deleteMany({});
        await Position.deleteMany({});
        await LocationBlog.deleteMany({})

        var users = await User.insertMany(userInfos);
        
        var positions = [positionCreator(10, 11, users[0]._id), positionCreator(11, 12, users[1]._id, true)]
        
        await Position.insertMany(positions);

        var blogs = [{ info: "Cool Place", pos: { longitude: 26, latitude: 57 }, author: users[0]._id }]
        
        await LocationBlog.insertMany(blogs);

    } catch (err) {
        console.log(err);
    }
}

makeData();
