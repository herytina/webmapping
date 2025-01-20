import type { IUser } from '@/models/User';
import { AuthAPI } from '@/utils/api';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as IUser,
  }),
  getters: {
    getUser: (state: { user: IUser; }) => state.user
  },
  actions: {
    initStore() {
      this.user = {} as IUser;
    },

    async getCurrentUser() {
      try {
        const connectedUser = await AuthAPI.getCurrentUser();
        this.user = connectedUser.data?.data[0];
        return this.user;
      } catch (error) {
        console.log('🚀 ~ error:', error);
      }
    },
  },
  persist: true
});
