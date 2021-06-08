import { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IVideoItemProps } from '../../interfaces/store';
import { playVideo } from '../../store/videoSlice';

export const VideoListItem: FC<IVideoItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const clickHandler = useCallback(() => {
    dispatch(playVideo({ video: {
      title: item.snippet.title,
      description: item.snippet.description,
      id: item.id.videoId,
      thumbnail: item.snippet.thumbnails.default.url
    }}));
    history.push(`/video-page/${item.id.videoId}`);
  }, [ dispatch, item, history ])

  return (
    <li className='list__item' onClick={clickHandler}>
      <img className='list__image' src={item.snippet.thumbnails.default.url} alt='video preview'/>
      <p className='list__title'>{item.snippet.title}</p>
    </li>
  )
}
