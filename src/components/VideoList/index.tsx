import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from '../../interfaces/store';
import { loadList } from '../../api/requests';

import './style.scss';
import { VideoListItem } from '../VideoListItem';

export const VideoList: FC = () => {
  const { list } = useSelector((state: IState) => state);
  const dispatch = useDispatch();

  useEffect(() => {

    if (!list.length) {
      dispatch(loadList());
    }
  }, [ list, dispatch ])

  return (
    <div className='list__container'>
      <ul className='list'>
        {list.map(item => (
          <VideoListItem key={item.id.videoId} item={item} />
        ))}
      </ul>
    </div>
  )
}
