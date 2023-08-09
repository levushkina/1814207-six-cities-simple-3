import { defineStore } from 'pinia';
import { BACKEND_URL, APIRoute } from '@/const/routes';
import { AuthorizationStatus } from '@/const/common';
import { UserState, User } from '@/models';

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    authorizationStatus: AuthorizationStatus.UNKNOWN,
    user: {
      token: '',
      email: '',
      name: '',
      avatarPath: '',
      isPro: true
    }
  }),
  actions: {
    setUser(status: string, user?: User) {
      this.authorizationStatus = status;
      this.user = user || null;
    }
  }
});