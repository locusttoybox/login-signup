import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: userSlice,
  },
});
