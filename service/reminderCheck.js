const Tweet = require('../models/tweet');
const mongoose = require('mongoose');
const DM = require('../Controllers/sendDMcontroller');
const message = require('../Controllers/messageController');

const { reminderSend } = require('../Controllers/messageController');



exports.checkReminder = async () => {
    console.log("Loop?");
    mongoose.set('strictQuery', true);
    const connect = await mongoose.connect(process.env.MONGODB_URL).then(result => {
        console.log("Connected to db in cron");
    });
    const d = new Date();
    const now = Date.parse(d);
    const remind = Tweet.find({ remindFlag: true }).then(tweets => {
        console.log("tweets: "+tweets);
        for (i = 0; i < tweets.length; i++) {
            const comp = Date.parse(tweets[i].remindTime);
            if (d > comp) {
                DM.sendDM(tweets[i].tweetURL, tweets[i].userId);
                DM.sendDM(reminderSend(), tweets[i].userId);
                Tweet.updateOne({ userId: tweets[i].userId, remindTime: tweets[i].remindTime }, { remindFlag: false }).then(result => {
                    // console.log(result);
                    console.log("Updated");
                })
            }
        }
    });
    console.log(".");


}