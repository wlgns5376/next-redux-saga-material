import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './saga';


export const initializeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga)
    }

    store.runSagaTask();

    return store;
}