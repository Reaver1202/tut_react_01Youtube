import React from 'react';

// anstatt props, nun video => ist direkt die Property von props "video"
const VideoListItem = ({video, onVideoSelect}) => {
  // * anstatt props oben und dem folgenden, kann oben auch direkt die Property genannt werden, die in Props enthalten ist
  //const video = props.video;
  const imgUrl = video.snippet.thumbnails.default.url;

  // classNames sind vom eingebettetn Bootstrap Framework
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
