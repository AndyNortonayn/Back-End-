const cron = require('node-cron');
const PostController = require('../controller/PostController')

create = cron.schedule('* * * * *', () => {
    PostController.create()
})
exports.func = create;