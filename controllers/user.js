

module.exports = {
    getUserList: function (req, res, next) {
        var users = [
            {name: 'zhangsan'},
            {name: 'lisi'},
        ];
        res.send(users);
    }
};