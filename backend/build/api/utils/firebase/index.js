const firebase = require("firebase");
const admin = require('firebase-admin');
const {
  firebaseCredentials,
  firestoreConfigs
} = require("./config");
firebase.initializeApp(firestoreConfigs);
admin.initializeApp({
  credential: admin.credential.cert(firebaseCredentials),
  databaseURL: 'https://remitano-renec-dev-test.firebaseio.com'
});
const db = admin.firestore();
module.exports = {
  firebase,
  admin,
  db
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaXJlYmFzZSIsInJlcXVpcmUiLCJhZG1pbiIsImZpcmViYXNlQ3JlZGVudGlhbHMiLCJmaXJlc3RvcmVDb25maWdzIiwiaW5pdGlhbGl6ZUFwcCIsImNyZWRlbnRpYWwiLCJjZXJ0IiwiZGF0YWJhc2VVUkwiLCJkYiIsImZpcmVzdG9yZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdXRpbHMvZmlyZWJhc2UvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwiZmlyZWJhc2VcIik7XG5jb25zdCBhZG1pbiA9IHJlcXVpcmUoJ2ZpcmViYXNlLWFkbWluJyk7XG5jb25zdCB7ZmlyZWJhc2VDcmVkZW50aWFscywgZmlyZXN0b3JlQ29uZmlnc30gPSByZXF1aXJlKFwiLi9jb25maWdcIik7XG5cbmZpcmViYXNlLmluaXRpYWxpemVBcHAoZmlyZXN0b3JlQ29uZmlncyk7XG5hZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoZmlyZWJhc2VDcmVkZW50aWFscyksXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL3JlbWl0YW5vLXJlbmVjLWRldi10ZXN0LmZpcmViYXNlaW8uY29tJyxcbn0pO1xuXG5jb25zdCBkYiA9IGFkbWluLmZpcmVzdG9yZSgpO1xubW9kdWxlLmV4cG9ydHMgPSB7ZmlyZWJhc2UsIGFkbWluLCBkYn07XG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3BDLE1BQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBQ3ZDLE1BQU07RUFBQ0UsbUJBQW1CO0VBQUVDO0FBQWdCLENBQUMsR0FBR0gsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVuRUQsUUFBUSxDQUFDSyxhQUFhLENBQUNELGdCQUFnQixDQUFDO0FBQ3hDRixLQUFLLENBQUNHLGFBQWEsQ0FBQztFQUNoQkMsVUFBVSxFQUFFSixLQUFLLENBQUNJLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDSixtQkFBbUIsQ0FBQztFQUN0REssV0FBVyxFQUFFO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU1DLEVBQUUsR0FBR1AsS0FBSyxDQUFDUSxTQUFTLENBQUMsQ0FBQztBQUM1QkMsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFBQ1osUUFBUTtFQUFFRSxLQUFLO0VBQUVPO0FBQUUsQ0FBQyJ9