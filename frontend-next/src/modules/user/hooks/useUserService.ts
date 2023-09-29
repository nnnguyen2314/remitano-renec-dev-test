import {useAppDispatch, useAppSelector} from "@modules/core/hooks";
import {shallowEqual} from "react-redux";
import {useCallback} from "react";
import {logout, doAuth, fetchProfile, getUserState} from "@modules/user/store/userSlice";

const useUserService = () => {
    const dispatch = useAppDispatch();
    const selector = {userState: useAppSelector(getUserState, shallowEqual)};

    const handleDoAuth = useCallback((data: any) => {
        return dispatch(doAuth(data));
    }, []);

    const handleFetchProfile = useCallback(() => {
        return dispatch(fetchProfile());
    }, []);

    const handleDoLogout = useCallback(() => {
        dispatch(logout());
    }, [])

    return {
        selector,
        handleDoAuth,
        handleFetchProfile,
        handleDoLogout
    }
};

export default useUserService;