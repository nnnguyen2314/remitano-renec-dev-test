const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authAPIRouters = require('./routes/auth');
const videoAPIRouters = require('./routes/video');
const authRoute = express.Router();
const videoRoute = express.Router();
global.__basedir = __dirname;
const port = process.env.PORT || 3100;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
authRoute.post('/api/checkAuth', authAPIRouters.doAuthCheck);
authRoute.post('/api/auth', authAPIRouters.doAuth);
authRoute.get('/api/profile', authAPIRouters.doAuthCheck, authAPIRouters.fetchProfile);
videoRoute.get('/api/videos', videoAPIRouters.fetchVideos);
videoRoute.get('/api/videoInfo/:videoUrl', videoAPIRouters.fetchVideoInfo);
videoRoute.post('/api/video', authAPIRouters.doAuthCheck, videoAPIRouters.postVideo);
app.use(authRoute);
app.use(videoRoute);
app.listen(port, () => console.log(`Listening on port ${port}`));
module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJjb3JzIiwiYXV0aEFQSVJvdXRlcnMiLCJ2aWRlb0FQSVJvdXRlcnMiLCJhdXRoUm91dGUiLCJSb3V0ZXIiLCJ2aWRlb1JvdXRlIiwiZ2xvYmFsIiwiX19iYXNlZGlyIiwiX19kaXJuYW1lIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiYXBwIiwidXNlIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInBvc3QiLCJkb0F1dGhDaGVjayIsImRvQXV0aCIsImdldCIsImZldGNoUHJvZmlsZSIsImZldGNoVmlkZW9zIiwiZmV0Y2hWaWRlb0luZm8iLCJwb3N0VmlkZW8iLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xuY29uc3QgYXV0aEFQSVJvdXRlcnMgPSByZXF1aXJlKCcuL3JvdXRlcy9hdXRoJyk7XG5jb25zdCB2aWRlb0FQSVJvdXRlcnMgPSByZXF1aXJlKCcuL3JvdXRlcy92aWRlbycpO1xuXG5jb25zdCBhdXRoUm91dGUgPSBleHByZXNzLlJvdXRlcigpO1xuY29uc3QgdmlkZW9Sb3V0ZSA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbmdsb2JhbC5fX2Jhc2VkaXIgPSBfX2Rpcm5hbWU7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMTAwO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKGNvcnMoKSk7XG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xuXG5hdXRoUm91dGUucG9zdCgnL2FwaS9jaGVja0F1dGgnLCBhdXRoQVBJUm91dGVycy5kb0F1dGhDaGVjayk7XG5hdXRoUm91dGUucG9zdCgnL2FwaS9hdXRoJywgYXV0aEFQSVJvdXRlcnMuZG9BdXRoKTtcbmF1dGhSb3V0ZS5nZXQoJy9hcGkvcHJvZmlsZScsIGF1dGhBUElSb3V0ZXJzLmRvQXV0aENoZWNrLCBhdXRoQVBJUm91dGVycy5mZXRjaFByb2ZpbGUpO1xuXG52aWRlb1JvdXRlLmdldCgnL2FwaS92aWRlb3MnLCB2aWRlb0FQSVJvdXRlcnMuZmV0Y2hWaWRlb3MpO1xudmlkZW9Sb3V0ZS5nZXQoJy9hcGkvdmlkZW9JbmZvLzp2aWRlb1VybCcsIHZpZGVvQVBJUm91dGVycy5mZXRjaFZpZGVvSW5mbyk7XG52aWRlb1JvdXRlLnBvc3QoJy9hcGkvdmlkZW8nLCBhdXRoQVBJUm91dGVycy5kb0F1dGhDaGVjaywgdmlkZW9BUElSb3V0ZXJzLnBvc3RWaWRlbyk7XG5cbmFwcC51c2UoYXV0aFJvdXRlKTtcbmFwcC51c2UodmlkZW9Sb3V0ZSk7XG5cbmFwcC5saXN0ZW4ocG9ydCwgKCkgPT4gY29uc29sZS5sb2coYExpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBhcHA7XG4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNsQyxNQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxhQUFhLENBQUM7QUFDekMsTUFBTUUsSUFBSSxHQUFHRixPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzVCLE1BQU1HLGNBQWMsR0FBR0gsT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUMvQyxNQUFNSSxlQUFlLEdBQUdKLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztBQUVqRCxNQUFNSyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ08sTUFBTSxDQUFDLENBQUM7QUFDbEMsTUFBTUMsVUFBVSxHQUFHUixPQUFPLENBQUNPLE1BQU0sQ0FBQyxDQUFDO0FBRW5DRSxNQUFNLENBQUNDLFNBQVMsR0FBR0MsU0FBUztBQUM1QixNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLElBQUksSUFBSTtBQUVyQyxNQUFNQyxHQUFHLEdBQUdoQixPQUFPLENBQUMsQ0FBQztBQUNyQmdCLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDZCxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ2ZhLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDZixVQUFVLENBQUNnQixJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQzFCRixHQUFHLENBQUNDLEdBQUcsQ0FBQ2YsVUFBVSxDQUFDaUIsVUFBVSxDQUFDO0VBQUVDLFFBQVEsRUFBRTtBQUFLLENBQUMsQ0FBQyxDQUFDO0FBRWxEZCxTQUFTLENBQUNlLElBQUksQ0FBQyxnQkFBZ0IsRUFBRWpCLGNBQWMsQ0FBQ2tCLFdBQVcsQ0FBQztBQUM1RGhCLFNBQVMsQ0FBQ2UsSUFBSSxDQUFDLFdBQVcsRUFBRWpCLGNBQWMsQ0FBQ21CLE1BQU0sQ0FBQztBQUNsRGpCLFNBQVMsQ0FBQ2tCLEdBQUcsQ0FBQyxjQUFjLEVBQUVwQixjQUFjLENBQUNrQixXQUFXLEVBQUVsQixjQUFjLENBQUNxQixZQUFZLENBQUM7QUFFdEZqQixVQUFVLENBQUNnQixHQUFHLENBQUMsYUFBYSxFQUFFbkIsZUFBZSxDQUFDcUIsV0FBVyxDQUFDO0FBQzFEbEIsVUFBVSxDQUFDZ0IsR0FBRyxDQUFDLDBCQUEwQixFQUFFbkIsZUFBZSxDQUFDc0IsY0FBYyxDQUFDO0FBQzFFbkIsVUFBVSxDQUFDYSxJQUFJLENBQUMsWUFBWSxFQUFFakIsY0FBYyxDQUFDa0IsV0FBVyxFQUFFakIsZUFBZSxDQUFDdUIsU0FBUyxDQUFDO0FBRXBGWixHQUFHLENBQUNDLEdBQUcsQ0FBQ1gsU0FBUyxDQUFDO0FBQ2xCVSxHQUFHLENBQUNDLEdBQUcsQ0FBQ1QsVUFBVSxDQUFDO0FBRW5CUSxHQUFHLENBQUNhLE1BQU0sQ0FBQ2pCLElBQUksRUFBRSxNQUFNa0IsT0FBTyxDQUFDQyxHQUFHLENBQUUscUJBQW9CbkIsSUFBSyxFQUFDLENBQUMsQ0FBQztBQUdoRW9CLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHakIsR0FBRyJ9