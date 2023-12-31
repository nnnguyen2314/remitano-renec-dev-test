const express = require("express");
const {
  admin,
  db
} = require('../utils/firebase');
const {
  getAllVideos,
  addVideo,
  fetchVideoInfoFromYoutube
} = require('../services/video');
const fetchVideos = (request, response, next) => {
  getAllVideos().then(data => {
    return response.status(200).json(data);
  }).catch(err => {
    return response.status(500).json({
      error: err
    });
  });
};
const postVideo = (request, response, next) => {
  addVideo(request.body).then(data => {
    return response.status(200).json(data);
  }).catch(err => {
    return response.status(500).json({
      error: err
    });
  });
};
const fetchVideoInfo = (request, response, next) => {
  const videoId = request.params.Id;
  fetchVideoInfoFromYoutube(videoId).then(data => {
    return response.status(200).json(data);
  }).catch(err => {
    return response.status(500).json({
      error: err
    });
  });
};
module.exports = {
  fetchVideos,
  postVideo,
  fetchVideoInfo
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFkbWluIiwiZGIiLCJnZXRBbGxWaWRlb3MiLCJhZGRWaWRlbyIsImZldGNoVmlkZW9JbmZvRnJvbVlvdXR1YmUiLCJmZXRjaFZpZGVvcyIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm5leHQiLCJ0aGVuIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJjYXRjaCIsImVyciIsImVycm9yIiwicG9zdFZpZGVvIiwiYm9keSIsImZldGNoVmlkZW9JbmZvIiwidmlkZW9JZCIsInBhcmFtcyIsIklkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvdmlkZW8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuY29uc3QgeyBhZG1pbiwgZGIgfSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZpcmViYXNlJyk7XG5jb25zdCB7IGdldEFsbFZpZGVvcywgYWRkVmlkZW8sIGZldGNoVmlkZW9JbmZvRnJvbVlvdXR1YmUgfSA9IHJlcXVpcmUoJy4uL3NlcnZpY2VzL3ZpZGVvJyk7XG5cbmNvbnN0IGZldGNoVmlkZW9zID0gKHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gICAgZ2V0QWxsVmlkZW9zKClcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyfSk7XG4gICAgICAgIH0pO1xufTtcblxuY29uc3QgcG9zdFZpZGVvID0gKHJlcXVlc3QsIHJlc3BvbnNlLCBuZXh0KSA9PiB7XG4gICAgYWRkVmlkZW8ocmVxdWVzdC5ib2R5KVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJ9KTtcbiAgICAgICAgfSk7XG59O1xuXG5jb25zdCBmZXRjaFZpZGVvSW5mbyA9IChyZXF1ZXN0LCByZXNwb25zZSwgbmV4dCkgPT4ge1xuICAgIGNvbnN0IHZpZGVvSWQgPSByZXF1ZXN0LnBhcmFtcy5JZDtcbiAgICBmZXRjaFZpZGVvSW5mb0Zyb21Zb3V0dWJlKHZpZGVvSWQpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycn0pO1xuICAgICAgICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geyBmZXRjaFZpZGVvcywgcG9zdFZpZGVvLCBmZXRjaFZpZGVvSW5mbyB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQyxTQUFTLENBQUM7QUFDbEMsTUFBTTtFQUFFQyxLQUFLO0VBQUVDO0FBQUcsQ0FBQyxHQUFHRixPQUFPLENBQUMsbUJBQW1CLENBQUM7QUFDbEQsTUFBTTtFQUFFRyxZQUFZO0VBQUVDLFFBQVE7RUFBRUM7QUFBMEIsQ0FBQyxHQUFHTCxPQUFPLENBQUMsbUJBQW1CLENBQUM7QUFFMUYsTUFBTU0sV0FBVyxHQUFHQSxDQUFDQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxLQUFLO0VBQzdDTixZQUFZLENBQUMsQ0FBQyxDQUNUTyxJQUFJLENBQUVDLElBQUksSUFBSztJQUNaLE9BQU9ILFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLElBQUksQ0FBQztFQUMxQyxDQUFDLENBQUMsQ0FDREcsS0FBSyxDQUFFQyxHQUFHLElBQUs7SUFDWixPQUFPUCxRQUFRLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO01BQUVHLEtBQUssRUFBRUQ7SUFBRyxDQUFDLENBQUM7RUFDbkQsQ0FBQyxDQUFDO0FBQ1YsQ0FBQztBQUVELE1BQU1FLFNBQVMsR0FBR0EsQ0FBQ1YsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLElBQUksS0FBSztFQUMzQ0wsUUFBUSxDQUFDRyxPQUFPLENBQUNXLElBQUksQ0FBQyxDQUNqQlIsSUFBSSxDQUFFQyxJQUFJLElBQUs7SUFDWixPQUFPSCxRQUFRLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUM7RUFDMUMsQ0FBQyxDQUFDLENBQ0RHLEtBQUssQ0FBRUMsR0FBRyxJQUFLO0lBQ1osT0FBT1AsUUFBUSxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztNQUFFRyxLQUFLLEVBQUVEO0lBQUcsQ0FBQyxDQUFDO0VBQ25ELENBQUMsQ0FBQztBQUNWLENBQUM7QUFFRCxNQUFNSSxjQUFjLEdBQUdBLENBQUNaLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLEtBQUs7RUFDaEQsTUFBTVcsT0FBTyxHQUFHYixPQUFPLENBQUNjLE1BQU0sQ0FBQ0MsRUFBRTtFQUNqQ2pCLHlCQUF5QixDQUFDZSxPQUFPLENBQUMsQ0FDN0JWLElBQUksQ0FBRUMsSUFBSSxJQUFLO0lBQ1osT0FBT0gsUUFBUSxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDO0VBQzFDLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUVDLEdBQUcsSUFBSztJQUNaLE9BQU9QLFFBQVEsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7TUFBRUcsS0FBSyxFQUFFRDtJQUFHLENBQUMsQ0FBQztFQUNuRCxDQUFDLENBQUM7QUFDVixDQUFDO0FBRURRLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQUVsQixXQUFXO0VBQUVXLFNBQVM7RUFBRUU7QUFBZSxDQUFDIn0=