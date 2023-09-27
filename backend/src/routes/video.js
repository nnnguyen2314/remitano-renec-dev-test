const express = require("express");
const { admin, db } = require('../utils/firebase');
const { getAllVideos, addVideo, fetchVideoInfoFromYoutube} = require('../services/video');

const fetchVideos = (request, response, next) => {
    getAllVideos()
        .then((data) => {
            return response.json(data);
        })
        .catch((err) => {
            return response.status(500).json({ error: err});
        });
};

const postVideo = (request, response, next) => {
    addVideo(request.body)
        .then((data) => {
            return response.status(200).json(data);
        })
        .catch((err) => {
            return response.status(500).json({ error: err});
        });
};

const fetchVideoInfo = (request, response, next) => {
    const videoUrl = request.params.videoUrl;
    fetchVideoInfoFromYoutube(videoUrl)
        .then((data) => {
            return response.status(200).json(data);
        })
        .catch((err) => {
            return response.status(500).json({ error: err});
        });
};

module.exports = { fetchVideos, postVideo, fetchVideoInfo };
