import React from 'react';
import { notification } from 'antd';
import {RootState} from "@modules/core/store";

const asyncActionMessages = ({ getState }: any) => {
    return (next: any) => {
        return (action: any) => {
            const { currentUser } = getState();
            const { type, meta, payload } = action;
            if (payload?.data?.isError) {
                notification.error({
                    message: payload?.data?.message || payload?.data?.error,
                    duration: 10,
                    className: 'notification-error'
                });
            }
            return next(action);
        };
    }
}

export default asyncActionMessages;