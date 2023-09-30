const {
  admin,
  db
} = require('../../utils/firebase');
const {
  extractYoutubeVideoIdFromURL
} = require('../../utils/common');
const {
  YOUTUBE_VIDEO_KEY,
  FETCH_VIDEO_INFO_API_URL
} = require("../../misc/constants");
const axios = require("axios");
const getAllVideos = () => {
  return new Promise(resolve => {
    db.collection('videos').get().then(res => {
      if (res && res.size > 0) {
        let videos = [];
        res.forEach(doc => {
          let item = {
            id: doc.id
          };
          videos.push({
            ...item,
            ...doc.data()
          });
        });
        resolve({
          isError: false,
          data: videos
        });
      } else {
        resolve({
          isError: false,
          data: []
        });
      }
    }).catch(error => {
      resolve({
        isError: true,
        error: error.code
      });
    });
  });
};
const getVideoById = vid => {
  return new Promise(resolve => {
    db.doc(`/videos/${vid}`).get().then(res => {
      resolve({
        isError: true,
        data: res
      });
    }).catch(error => {
      resolve({
        isError: true,
        error: error.code
      });
    });
  });
};
const addVideo = video => {
  return new Promise(resolve => {
    db.collection('videos').add(video).then(doc => {
      resolve({
        isError: false,
        message: "Video is shared successfully!"
      });
    }).catch(error => {
      resolve({
        isError: true,
        error: error.code
      });
    });
  });
};
const fetchVideoInfoFromYoutube = videoId => {
  // const videoId = extractYoutubeVideoIdFromURL(url);
  const params = {
    id: videoId,
    key: YOUTUBE_VIDEO_KEY,
    part: 'snippet,contentDetails,statistics,status'
  };
  return new Promise(resolve => {
    axios.get(FETCH_VIDEO_INFO_API_URL, {
      params
    }).then(res => {
      resolve({
        isError: false,
        video: {
          id: videoId,
          info: res.data.items[0]
        }
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.message
      });
    });
  });
};
module.exports = {
  getAllVideos,
  getVideoById,
  addVideo,
  fetchVideoInfoFromYoutube
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhZG1pbiIsImRiIiwicmVxdWlyZSIsImV4dHJhY3RZb3V0dWJlVmlkZW9JZEZyb21VUkwiLCJZT1VUVUJFX1ZJREVPX0tFWSIsIkZFVENIX1ZJREVPX0lORk9fQVBJX1VSTCIsImF4aW9zIiwiZ2V0QWxsVmlkZW9zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInJlcyIsInNpemUiLCJ2aWRlb3MiLCJmb3JFYWNoIiwiZG9jIiwiaXRlbSIsImlkIiwicHVzaCIsImRhdGEiLCJpc0Vycm9yIiwiY2F0Y2giLCJlcnJvciIsImNvZGUiLCJnZXRWaWRlb0J5SWQiLCJ2aWQiLCJhZGRWaWRlbyIsInZpZGVvIiwiYWRkIiwibWVzc2FnZSIsImZldGNoVmlkZW9JbmZvRnJvbVlvdXR1YmUiLCJ2aWRlb0lkIiwicGFyYW1zIiwia2V5IiwicGFydCIsImluZm8iLCJpdGVtcyIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2VydmljZXMvdmlkZW8vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBhZG1pbiwgZGIgfSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2ZpcmViYXNlJyk7XG5jb25zdCB7IGV4dHJhY3RZb3V0dWJlVmlkZW9JZEZyb21VUkwgfSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NvbW1vbicpO1xuY29uc3Qge1lPVVRVQkVfVklERU9fS0VZLCBGRVRDSF9WSURFT19JTkZPX0FQSV9VUkx9ID0gcmVxdWlyZShcIi4uLy4uL21pc2MvY29uc3RhbnRzXCIpO1xuY29uc3QgYXhpb3MgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cbmNvbnN0IGdldEFsbFZpZGVvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZGJcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKCd2aWRlb3MnKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZpZGVvcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXMuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW9zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IGZhbHNlLCBkYXRhOiB2aWRlb3N9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtpc0Vycm9yOiBmYWxzZSwgZGF0YTogW119KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IHRydWUsIGVycm9yOiBlcnJvci5jb2RlfSk7XG4gICAgICAgICAgICB9KVxuICAgIH0pO1xufTtcblxuY29uc3QgZ2V0VmlkZW9CeUlkID0gKHZpZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBkYlxuICAgICAgICAgICAgLmRvYyhgL3ZpZGVvcy8ke3ZpZH1gKVxuICAgICAgICAgICAgLmdldCgpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7aXNFcnJvcjogdHJ1ZSwgZGF0YTogcmVzfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IHRydWUsIGVycm9yOiBlcnJvci5jb2RlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGFkZFZpZGVvID0gKHZpZGVvKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGRiXG4gICAgICAgICAgICAuY29sbGVjdGlvbigndmlkZW9zJylcbiAgICAgICAgICAgIC5hZGQodmlkZW8pXG4gICAgICAgICAgICAudGhlbigoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7aXNFcnJvcjogZmFsc2UsIG1lc3NhZ2U6IFwiVmlkZW8gaXMgc2hhcmVkIHN1Y2Nlc3NmdWxseSFcIn0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpc0Vycm9yOiB0cnVlLCBlcnJvcjogZXJyb3IuY29kZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmZXRjaFZpZGVvSW5mb0Zyb21Zb3V0dWJlID0gKHZpZGVvSWQpID0+IHtcbiAgICAvLyBjb25zdCB2aWRlb0lkID0gZXh0cmFjdFlvdXR1YmVWaWRlb0lkRnJvbVVSTCh1cmwpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgaWQ6IHZpZGVvSWQsXG4gICAgICAgIGtleTogWU9VVFVCRV9WSURFT19LRVksXG4gICAgICAgIHBhcnQ6ICdzbmlwcGV0LGNvbnRlbnREZXRhaWxzLHN0YXRpc3RpY3Msc3RhdHVzJyxcbiAgICB9O1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldChGRVRDSF9WSURFT19JTkZPX0FQSV9VUkwsIHtwYXJhbXN9KVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IGZhbHNlLCB2aWRlbzoge2lkOiB2aWRlb0lkLCBpbmZvOiByZXMuZGF0YS5pdGVtc1swXX19KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IHRydWUsIGVycm9yOiBlcnIubWVzc2FnZX0pO1xuICAgICAgICAgICAgfSlcbiAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGdldEFsbFZpZGVvcywgZ2V0VmlkZW9CeUlkLCBhZGRWaWRlbywgZmV0Y2hWaWRlb0luZm9Gcm9tWW91dHViZSB9O1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNO0VBQUVBLEtBQUs7RUFBRUM7QUFBRyxDQUFDLEdBQUdDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztBQUNyRCxNQUFNO0VBQUVDO0FBQTZCLENBQUMsR0FBR0QsT0FBTyxDQUFDLG9CQUFvQixDQUFDO0FBQ3RFLE1BQU07RUFBQ0UsaUJBQWlCO0VBQUVDO0FBQXdCLENBQUMsR0FBR0gsT0FBTyxDQUFDLHNCQUFzQixDQUFDO0FBQ3JGLE1BQU1JLEtBQUssR0FBR0osT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUU5QixNQUFNSyxZQUFZLEdBQUdBLENBQUEsS0FBTTtFQUN2QixPQUFPLElBQUlDLE9BQU8sQ0FBRUMsT0FBTyxJQUFLO0lBQzVCUixFQUFFLENBQ0dTLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FDcEJDLEdBQUcsQ0FBQyxDQUFDLENBQ0xDLElBQUksQ0FBRUMsR0FBRyxJQUFLO01BQ1gsSUFBSUEsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDckIsSUFBSUMsTUFBTSxH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