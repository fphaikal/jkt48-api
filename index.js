const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const roomRouter = require('./routes/roomRoute');
const liveRouter = require('./routes/liveRoute');
const missionRouter = require('./routes/missionRoute');
const newsRouter = require('./routes/newsRoute')
const scheduleRouter  = require('./routes/schedulesRoute')
const tiktokRouter =require('./routes/tiktokRoute')
const logLiveRouter = require('./routes/logLiveRoute');
const MemberRouter = require('./routes/MemberRoute');
const twitterRouter = require('./routes/twitterRoute');
const igRouter = require('./routes/igRoute');

const app = express();
const PORT = 8000;

app.use(cors())
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send({
        message: 'API JKT48',
        author: 'https://github.com/fphaikal',
    })
});

app.use('/api/rooms', roomRouter);
app.use('/api/lives', liveRouter);
app.use('/api/missions', missionRouter);
app.use('/api/news', newsRouter);
app.use('/api/schedule', scheduleRouter);
app.use('/api/tiktok', tiktokRouter);
app.use('/api/recent', logLiveRouter);
app.use('/api/member', MemberRouter);
app.use('/api/twitter', twitterRouter);
app.use('/api/ig', igRouter);

