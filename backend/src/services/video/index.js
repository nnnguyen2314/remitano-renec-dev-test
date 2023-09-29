const { admin, db } = require('../../utils/firebase');
const { extractYoutubeVideoIdFromURL } = require('../../utils/common');
const {YOUTUBE_VIDEO_KEY, FETCH_VIDEO_INFO_API_URL} = require("../../misc/constants");
const axios = require("axios");

const getAllVideos = () => {
    return new Promise((resolve) => {
        db
            .collection('videos')
            .get()
            .then((res) => {
                if (res && res.size > 0) {
                    let videos = [];
                    res.forEach((doc) => {
                        let item = {
                            id: doc.id
                        };
                        videos.push({
                            ...item,
                            ...doc.data()
                        });

                    });
                    resolve({isError: false, data: videos});
                } else {
                    resolve({isError: false, data: []});
                }
            })
            .catch((error) => {
                resolve({isError: true, error: error.code});
            })
    });
};

const getVideoById = (vid) => {
    return new Promise((resolve) => {
        db
            .doc(`/videos/${vid}`)
            .get()
            .then((res) => {
                resolve({isError: true, data: res});
            })
            .catch((error) => {
                resolve({isError: true, error: error.code});
            });
    });
};

const addVideo = (video) => {
    return new Promise((resolve) => {
        db
            .collection('videos')
            .add(video)
            .then((doc) => {
                resolve({isError: false, message: "Video is shared successfully!"});
            })
            .catch((error) => {
                resolve({isError: true, error: error.code});
            });
    });
};

const fetchVideoInfoFromYoutube = (videoId) => {
    // const videoId = extractYoutubeVideoIdFromURL(url);
    const params = {
        id: videoId,
        key: YOUTUBE_VIDEO_KEY,
        part: 'snippet,contentDetails,statistics,status',
    };

    return new Promise((resolve) => {
        axios.get(FETCH_VIDEO_INFO_API_URL, {params})
            .then((res) => {
                resolve({isError: false, video: {id: videoId, info: res.data.items[0]}});
            })
            .catch((err) => {
                resolve({isError: true, error: err.message});
            })
    })
};

module.exports = { getAllVideos, getVideoById, addVideo, fetchVideoInfoFromYoutube };
