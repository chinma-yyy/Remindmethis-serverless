
const reminderSet=(date)=>{
    const messages=[
        "I will remind you read this tweet around "+date,
        "I have recieved your reminder I'll remind you at "+date,
        "I have to remind you at "+date+" right?"
    ]
    const message=messages[Math.floor(Math.random() * 2)];
    console.log(message);
    return message;
}
const reminderSend=()=>{
    const messages=[
        "Hey, here is your tweet you had to read!!βοΈ ",
        "Make sure to read this tweet as I have marked it as read for youπ",
        "I know you are busy but take some time to read this tweet you asked me to remind ofπ",
        "Here is your reminder to read this tweet π",
        "β°β°β° Reminder to read this tweet β°β°β°",
        "Don't forget to read this tweet π"
    ]
    const message=messages[Math.floor(Math.random() * 5)];
    console.log(message);
    return message;
}

const saved=()=>{
    const messages=[
        "I have saved your tweet ;)",
        "Your tweet has been saved.",
        "Oh!! I have saved this IMP tweet for youπ",
        "I am here for you. I have saved itβ"
    ]
    const message=messages[Math.floor(Math.random() * 3)];
    console.log(message);
    return message;

}

const connected=()=>{
    const messages=[
        "Already connected? How IDK?π€£π€£",
        "Maybe my server is faster than Twitter'sπ. You are already connected to me.",
        "Kitne baar connect karega",
        "Oh I already have your data π€·ββοΈ"
    ]
    const message=messages[Math.floor(Math.random() * 3)];
    console.log(message);
    return message;
}

module.exports={
    saved,
    connected,
    reminderSend,
    reminderSet
}