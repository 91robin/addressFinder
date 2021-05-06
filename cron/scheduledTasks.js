
const Cron = require('node-cron');
const Tasks = {
};
if (process.env.NODE_APP_INSTANCE == '0') {
    Cron.schedule('0 0 6 * * 0', () => {
        //Run batch process to correct the address periodically
    });
}
