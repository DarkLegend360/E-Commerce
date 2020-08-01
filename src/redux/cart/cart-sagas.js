import {all,takeLatest,call,put} from "redux-saga/effects";
import UserActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSucess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}

export function *cartSaga() {
    yield all([call(onSignOutSucess)]);
}