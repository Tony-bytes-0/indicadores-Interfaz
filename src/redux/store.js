import { configureStore } from '@reduxjs/toolkit'
import activeGraphs from './graphState/activeGraphs'

export default configureStore({
  reducer: {
    activeGraphs: activeGraphs
  },
})