var utils = require('shipit-utils');

module.exports = shipit => {

    utils.registerTask(shipit, 'start_service', start_service_task);

    // task functions
    function start_service_task() {
        shipit.config = shipit.config || {}; // 读取配置
        var cmd = 'cd /home/fdliu/server/gruntDemo/current;' +
            'npm install --production;' +
            'npm start';
        return shipit.remote(cmd);
    }
};