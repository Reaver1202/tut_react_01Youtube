import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // * map => JS built in for-loop => besser als for (i=0, i<4, i++)...
    // jeden ListItem soll einen key haben --> die Liste der YoutTubeVideos hat einen solchen Key pro video => etag
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoItems}
    </ul>
  );
};

export default VideoList;
