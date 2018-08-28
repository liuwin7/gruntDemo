// shipitfile.js
var utils = require('shipit-utils');

module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit);
    require('./register_tasks')(shipit); // 注册Task

    // 监听发布任务完成，启动服务
    shipit.on('published', function () {
        shipit.start('start_service');
    });

    shipit.initConfig({
        default: {
            deployTo: '/home/fdliu/server/gruntDemo',
            repositoryUrl: 'https://github.com/liuwin7/gruntDemo.git',
        },
        staging: {
            servers: [
                'fdliu@104.225.148.76:29752', // server 1
            ],
        },
    })
};