import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IState, IStatistics, IVideo } from '../interfaces/store';

export const videoSlice = createSlice({
  name: 'videoSlice',
  initialState: {
    userToken: '',
    current: {
      video: {
        id: '',
        description: '',
        thumbnail: '',
        title: '',
      },
      statistics: {
        commentCount: '',
        favoriteCount: '',
        likeCount: '',
        viewCount: '',
      }
    },
    list: []
  } as IState,
  reducers: {
    addUser(state, action: PayloadAction<{ token: string }>) {
      state.userToken = action.payload.token
    },
    addList(state, action: PayloadAction<{ list: any[] }>) {
      state.list = action.payload.list
    },
    playVideo(state, action: PayloadAction<{ video: IVideo }>) {
      state.current.video = action.payload.video
    },
    addStatistics(state, action: PayloadAction<{ statistics: IStatistics }>) {
      state.current.statistics = action.payload.statistics
    },
    clearInfo(state) {
      state.current = {
        video: {
          id: '',
          description: '',
          thumbnail: '',
          title: '',
        },
        statistics: {
          commentCount: '',
          favoriteCount: '',
          likeCount: '',
          viewCount: '',
        }
      }
    }
  }
})

export const {
  addUser,
  addList,
  playVideo,
  addStatistics,
  clearInfo,
} = videoSlice.actions
