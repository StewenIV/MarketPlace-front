import { configureStore } from '@reduxjs/toolKit'

import reducers from './reducers'

const store = configureStore({ reducer: reducers })

export default store
