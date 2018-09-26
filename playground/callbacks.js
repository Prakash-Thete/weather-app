var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Prakash"
    };
    callback(user);
};

getUser(31, (user) => {
    console.log('user ::', user);
});