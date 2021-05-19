import React from 'react'

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="videoplayer" src={videoSrc} frameborder="0" ></iframe>
            </div>
            <div>{video.snippet.title}</div>
            <div className="ui segment">
                <h4 classNameui header>{video.snippet.title}</h4> 
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
}

export default VideoDetail;