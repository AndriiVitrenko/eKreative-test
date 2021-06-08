import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState, IParams } from '../../interfaces/store';
import { loadStatistics, loadFullInfo } from '../../api/requests';

import './style.scss';

export const VideoPage: FC = () => {
  const { current } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  const { id }: IParams = useParams();

  useEffect(() => {
    if (current.video.id === id) {
      dispatch(loadStatistics(current.video.id))
    } else {
      dispatch(loadFullInfo(id))
    }
  }, [])

  return (
    <div className='video__container'>
      <div className="video__player">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>
      <div className="video__details">
        <h4 className='video__title'>Title: {current.video.title}</h4>
        <p>Description: {current.video.description}</p>
        <p>Thumbnail: <img src={current.video.thumbnail} alt=""/></p>
        <div>Statistics: <ul>
          <li>viewCount: {current.statistics.viewCount}</li>
          <li>likeCount: {current.statistics.likeCount}</li>
          <li>favoriteCount: {current.statistics.favoriteCount}</li>
          <li>commentCount: {current.statistics.commentCount}</li>
        </ul></div>
      </div>
    </div>
  )
}
