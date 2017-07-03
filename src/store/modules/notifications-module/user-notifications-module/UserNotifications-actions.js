/**
 * Created by Alexandru Ionut Budisteanu - SkyHub on 7/3/2017.
 * (C) BIT TECHNOLOGIES
 */

import FetchService from 'services/communication/FetchService';

export default{

    USER_NOTIFICATIONS_MARK_READ: async ({state, commit}, {notificationId, markRead, markAll})=> {

        if (markAll){
            for (let i=0; i<state.notifications.length; i++) {
                commit('SET_USER_NOTIFICATION_AS_MARKED',{notificationId: notificationId, markedValue:markAll});
            }
        } else {
            commit('SET_USER_NOTIFICATION_AS_MARKED',{notificationId: notificationId, markedValue:markAll});
        }
        FetchService.sendRequestGetData('notifications/mark-notification-shown', {notificationId: notificationId, markAll:markAll, markValue: markRead });

    },

    USER_NOTIFICATIONS_MARK_SHOWN: async ({state, commit}, {notificationId})=> {

        //console.log('##############, USER_NOTIFICATION_NOTIFICATION_SHOWN', notificationId);

        FetchService.sendRequestGetData('notifications/mark-notification-shown', {notificationId: notificationId});
        commit('SET_USER_NOTIFICATION_AS_SHOWN', {notificationId: notificationId, shown: true});

    },

    USER_NOTIFICATIONS_RESET_UNREAD_COUNTER: async ({state, commit}, {notificationId})=> {

        FetchService.sendRequestGetData('notifications/reset-notification-unread-counter', {});
        //commit('SET_USER_NOTIFICATION_RESET_UNREAD_COUNTER', {});

    },

}