import { addList, addStatistics, playVideo } from '../store/videoSlice';

export const loadList = () => (dispatch: any) => {
  fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCjW7Z9isPMHVEIZ7cp5Hn7vZj6aeWbuOw&channelId=UCP_IYZTiqbmUqmI3KXHIEoQ&part=snippet,id&order=date&maxResults=20')
    .then(res => res.json())
    .then(res => dispatch(addList({ list: res.items })))
}

export const loadStatistics = (id: string) => (dispatch: any) => {
  console.log('loading statistics')
  fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyCjW7Z9isPMHVEIZ7cp5Hn7vZj6aeWbuOw`)
    .then(res => res.json())
    .then(res => {
      dispatch(addStatistics({
        statistics: {
          commentCount: res.items[0].statistics.commentCount,
          favoriteCount: res.items[0].statistics.favoriteCount,
          likeCount: res.items[0].statistics.likeCount,
          viewCount: res.items[0].statistics.viewCount,
        }
      }))
    })
}

export const loadFullInfo = (id: string) => (dispatch: any) => {
  fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyCjW7Z9isPMHVEIZ7cp5Hn7vZj6aeWbuOw&part=snippet,contentDetails,statistics,status`)
    .then(res => res.json())
    .then(res => {
      dispatch(addStatistics({
        statistics: {
          commentCount: res.items[0].statistics.commentCount,
          likeCount: res.items[0].statistics.likeCount,
          viewCount: res.items[0].statistics.viewCount,
          favoriteCount: res.items[0].statistics.favoriteCount,
        }
      }));
      dispatch(playVideo({
        video: {
          id: res.items[0].id,
          title: res.items[0].snippet.title,
          description: res.items[0].snippet.description,
          thumbnail: res.items[0].snippet.thumbnails.default.url,
        }
      }))
    })
}
