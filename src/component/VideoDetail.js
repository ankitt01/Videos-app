import React from 'react'

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div>{video.snippet.title}</div>
            <div className="ui segment">
                <h4 classNameui header>{video.snippet.title}</h4> 
                <p>{video.snippet.description}</p>
            </div>
        </div>
        );
}

export default VideoDetail;