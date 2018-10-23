import usersSaga from './users/sagas';

export default function * rootSaga() {
    yield [
        usersSaga()
    ]
}