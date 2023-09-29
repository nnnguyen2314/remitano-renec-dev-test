import CustomAxios from '../../core/middlewares/customAxios';
import {AUTH_API_URL, AUTH_CHECK_API_URL, USER_PROFILE_API_URL} from "@modules/user/misc/constants";

export default {
    doAuth: (data: any) => CustomAxios.post(AUTH_API_URL, data),
    doAuthCheck: () => CustomAxios.post(AUTH_CHECK_API_URL, {}),
    fetchProfile: () => CustomAxios.get(USER_PROFILE_API_URL),
}
