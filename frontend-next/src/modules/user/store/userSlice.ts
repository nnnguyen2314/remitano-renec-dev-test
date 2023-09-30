import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import api from "@modules/user/misc/api";
import {LocalStorage} from "@modules/core/misc/helpers/local-storage.helper";
import {get} from "lodash";

export interface AuthState {
    currentUser: any;
    accessToken: String;
    isAuthenticated: Boolean;
    loading: Boolean;
    message: String;
};

export const stateKey = 'user';

const initialState = {
    currentUser: LocalStorage.getUserProfile(),
    accessToken: LocalStorage.getAccessToken() || '',
    isAuthenticated: LocalStorage.isAuthenticated(),
    loading: false,
    message: ''
};

export const doAuth = createAsyncThunk(
    'USER/DO_AUTHENTICATE',
    async (data: any) => {
        return await api.doAuth(data);
    });

export const fetchProfile = createAsyncThunk('USER/FETCH_PROFILE', async () => {
    return await api.fetchProfile();
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state: AuthState) => {
            state.currentUser = undefined;
            state.message = 'Logout Successfully!';
            state.isAuthenticated = false;
            state.accessToken = '';
            LocalStorage.revokeAuthentication();
        },
        setAccessToken: (state: AuthState, action: any) => {
            const { token } = action?.payload?.data;
            state.isAuthenticated = !!token;
            state.accessToken = token;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(doAuth.pending, (state: AuthState, action: any):void => {state.loading = true})
            .addCase(doAuth.fulfilled, (state: AuthState, action):void => {
                const authData = action?.payload?.data;
                state.isAuthenticated = !!authData.token;
                state.accessToken = authData.token || '';
                state.loading = false;
                state.message = 'Success';
                LocalStorage.setAuthentication(authData.token);
            })
            .addCase(doAuth.rejected, (state: AuthState, action: any):void => {
                state.loading = false;
                state.isAuthenticated = false;
                state.message = action?.payload?.error || '';
            })
            .addCase(fetchProfile.pending, (state: AuthState, action: any) => {state.loading = true})
            .addCase(fetchProfile.fulfilled, (state: AuthState, action) => {
                state.loading = false;
                const profileData = action?.payload?.data;
                state.currentUser = profileData.user || {};
                state.message = 'Request Successfully!';
                LocalStorage.setUserProfile(state.currentUser);
            })
            .addCase(fetchProfile.rejected, (state: AuthState, action: any) => {
                state.loading = false;
                state.message = action?.payload?.error || 'Request Failed';
            })
    }
});

export const getUserState = (state: AuthState) => {
    const userProfileState = get(state, stateKey, initialState);
    const currentUser = get(userProfileState, 'currentUser', initialState.currentUser);
    const accessToken = get(userProfileState, 'accessToken', initialState.accessToken);
    const isAuthenticated = get(userProfileState, 'isAuthenticated', initialState.isAuthenticated);
    const loading = get(userProfileState, 'loading', initialState.loading);
    const message = get(userProfileState, 'message', initialState.message);

    return {
        currentUser,
        accessToken,
        isAuthenticated,
        loading,
        message
    };
};

export default userSlice.reducer;
export const { logout } = userSlice.actions
