// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit);

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