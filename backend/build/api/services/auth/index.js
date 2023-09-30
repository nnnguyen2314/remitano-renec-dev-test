const firebase = require('firebase');
const {
  admin,
  db
} = require('../../utils/firebase');
const checkAuth = async token => {
  return new Promise(resolve => {
    admin.auth().verifyIdToken(token).then(decodedToken => {
      return admin.auth().getUser(decodedToken.uid);
    }).then(user => {
      resolve({
        isError: false,
        user: user
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.code
      });
    });
  });
};
const doLogin = async (email, password) => {
  return new Promise(resolve => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
      console.log(data);
      return data.user.getIdToken();
    }).then(token => {
      resolve({
        isError: false,
        token
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.code
      });
    });
  });
};
const doSignUp = async (email, password) => {
  let userId, token;
  return new Promise(resolve => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    }).then(idtoken => {
      token = idtoken;
      const userCredentials = {
        email: email,
        createdAt: new Date().toISOString(),
        userId
      };
      return db.doc(`/users/${userId}`).set(userCredentials);
    }).then(() => {
      resolve({
        isError: false,
        token
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.code
      });
    });
  });
};
const doFetchProfile = async uid => {
  return new Promise(resolve => {
    admin.auth().getUser(uid).then(userRecord => {
      resolve({
        isError: false,
        user: userRecord
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.code
      });
    });
  });
};
const checkUserExistByEmail = async email => {
  return new Promise(resolve => {
    admin.auth().getUserByEmail(email).then(user => {
      resolve({
        isError: false,
        doesExist: true,
        user
      });
    }).catch(err => {
      resolve({
        isError: true,
        error: err.code
      });
    });
  });
};
module.exports = {
  checkAuth,
  checkUserExistByEmail,
  doLogin,
  doSignUp,
  doFetchProfile
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlYmFzZSIsInJlcXVpcmUiLCJhZG1pbiIsImRiIiwiY2hlY2tBdXRoIiwidG9rZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsImF1dGgiLCJ2ZXJpZnlJZFRva2VuIiwidGhlbiIsImRlY29kZWRUb2tlbiIsImdldFVzZXIiLCJ1aWQiLCJ1c2VyIiwiaXNFcnJvciIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjb2RlIiwiZG9Mb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0SWRUb2tlbiIsImRvU2lnblVwIiwidXNlcklkIiwiY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiaWR0b2tlbiIsInVzZXJDcmVkZW50aWFscyIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsImRvYyIsInNldCIsImRvRmV0Y2hQcm9maWxlIiwidXNlclJlY29yZCIsImNoZWNrVXNlckV4aXN0QnlFbWFpbCIsImdldFVzZXJCeUVtYWlsIiwiZG9lc0V4aXN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zZXJ2aWNlcy9hdXRoL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZpcmViYXNlID0gcmVxdWlyZSgnZmlyZWJhc2UnKTtcbmNvbnN0IHsgYWRtaW4sIGRiIH0gPSByZXF1aXJlKCcuLi8uLi91dGlscy9maXJlYmFzZScpO1xuXG5jb25zdCBjaGVja0F1dGggPSBhc3luYyAodG9rZW4pID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgYWRtaW5cbiAgICAgICAgICAgIC5hdXRoKClcbiAgICAgICAgICAgIC52ZXJpZnlJZFRva2VuKHRva2VuKVxuICAgICAgICAgICAgLnRoZW4oKGRlY29kZWRUb2tlbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhZG1pbi5hdXRoKCkuZ2V0VXNlcihkZWNvZGVkVG9rZW4udWlkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IGZhbHNlLCB1c2VyOiB1c2VyfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpc0Vycm9yOiB0cnVlLCBlcnJvcjogZXJyLmNvZGV9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmNvbnN0IGRvTG9naW4gPSBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGZpcmViYXNlXG4gICAgICAgICAgICAuYXV0aCgpXG4gICAgICAgICAgICAuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS51c2VyLmdldElkVG9rZW4oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpc0Vycm9yOiBmYWxzZSwgdG9rZW59KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoeyBpc0Vycm9yOiB0cnVlLCBlcnJvcjogZXJyLmNvZGUgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5jb25zdCBkb1NpZ25VcCA9IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcbiAgICBsZXQgdXNlcklkLCB0b2tlbjtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgIC5hdXRoKClcbiAgICAgICAgICAgIC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBkYXRhLnVzZXIudWlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnVzZXIuZ2V0SWRUb2tlbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChpZHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSBpZHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGJcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhgL3VzZXJzLyR7dXNlcklkfWApXG4gICAgICAgICAgICAgICAgICAgIC5zZXQodXNlckNyZWRlbnRpYWxzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIHJlc29sdmUoe2lzRXJyb3I6IGZhbHNlLCB0b2tlbn0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGlzRXJyb3I6IHRydWUsIGVycm9yOiBlcnIuY29kZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmNvbnN0IGRvRmV0Y2hQcm9maWxlID0gYXN5bmMgKHVpZCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBhZG1pblxuICAgICAgICAgICAgLmF1dGgoKVxuICAgICAgICAgICAgLmdldFVzZXIodWlkKVxuICAgICAgICAgICAgLnRoZW4oKHVzZXJSZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtpc0Vycm9yOiBmYWxzZSwgdXNlcjogdXNlclJlY29yZH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGlzRXJyb3I6IHRydWUsIGVycm9yOiBlcnIuY29kZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgY2hlY2tVc2VyRXhpc3RCeUVtYWlsID0gYXN5bmMgKGVtYWlsKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGFkbWluLmF1dGgoKS5nZXRVc2VyQnlFbWFpbChlbWFpbClcbiAgICAgICAgICAgIC50aGVuKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7IGlzRXJyb3I6IGZhbHNlLCBkb2VzRXhpc3Q6IHRydWUsIHVzZXIgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHsgaXNFcnJvcjogdHJ1ZSwgZXJyb3I6IGVyci5jb2RlIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtjaGVja0F1dGgsIGNoZWNrVXNlckV4aXN0QnlFbWFpbCwgZG9Mb2dpbiwgZG9TaWduVXAsIGRvRmV0Y2hQcm9maWxlfTtcbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3BDLE1BQU07RUFBRUMsS0FBSztFQUFFQztB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