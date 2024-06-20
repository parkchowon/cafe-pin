import { configureStore } from '@reduxjs/toolkit';
import arrangeOptionSlice from './slices/arrangeOptionSlice';
import cafeSearchTextSlice from './slices/cafeSearchTextSlice';
import hashtagSlice from './slices/hashtagSlice';
import isLoggedInSlice from './slices/isLoggedInSlice';
import mapSlice from './slices/mapSlice';

const store = configureStore({
  reducer: {
    hashtag: hashtagSlice,
    arrangeOption: arrangeOptionSlice,
    isLoggedIn: isLoggedInSlice,
    map: mapSlice,
    cafeSearchText: cafeSearchTextSlice
  }
});

export default store;
