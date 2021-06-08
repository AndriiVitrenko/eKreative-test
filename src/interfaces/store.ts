export interface IStatistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IVideo {
  title: string;
  description: string;
  thumbnail: string;
  id: string;
}

export interface IState {
  userToken: string;
  current: {
    video: IVideo;
    statistics: IStatistics;
  };
  list: any[]
}

export interface IVideoItemProps {
  item: any
}

export interface IParams {
  id: string
}
