import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import monitorReducersEnhancer from './monitorReducer'
import loggerMiddleware from './logger'

import listReducer from './listReducer'

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: listReducer,
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [monitorReducersEnhancer]
    })

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./listReducer', () => store.replaceReducer(listReducer))
    }

    return store
}