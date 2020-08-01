import {takeLatest, put, call, all} from "redux-saga/effects";
import ShopActionTypes from "./shop-types";
import { firestore, convertSnapshotToMap } from "../../firebase/firebase.util";
import { fetchCollectionSuccess,fetchCollectionFailure } from "./shop-actions";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertSnapshotToMap,snapshot);
        yield put(fetchCollectionSuccess(collectionMap));
    } catch(error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    )
}

export function* shopSaga() {
    yield all([call(fetchCollectionsStart)]);
}