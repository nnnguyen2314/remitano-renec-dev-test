const extractYoutubeVideoIdFromURL = url => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
};
module.exports = {
  extractYoutubeVideoIdFromURL
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHRyYWN0WW91dHViZVZpZGVvSWRGcm9tVVJMIiwidXJsIiwicmVnRXhwIiwibWF0Y2giLCJsZW5ndGgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL2NvbW1vbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHRyYWN0WW91dHViZVZpZGVvSWRGcm9tVVJMID0gKHVybCkgPT4ge1xuICAgIGNvbnN0IHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiMmP10qKS4qLztcbiAgICBjb25zdCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2hbN10ubGVuZ3RoID09PSAxMSkgPyBtYXRjaFs3XSA6IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7ZXh0cmFjdFlvdXR1YmVWaWRlb0lkRnJvbVVSTH07Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSw0QkFBNEIsR0FBSUMsR0FBRyxJQUFLO0VBQzFDLE1BQU1DLE1BQU0sR0FBRywyRUFBMkU7RUFDMUYsTUFBTUMsS0FBSyxHQUFHRixHQUFHLENBQUNFLEtBQUssQ0FBQ0QsTUFBTSxDQUFDO0VBQy9CLE9BQVFDLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEtBQUssRUFBRSxHQUFJRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztBQUMvRCxDQUFDO0FBRURFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQUNOO0FBQTRCLENBQUMifQ==