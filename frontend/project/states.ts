import { AuthorizationStatus } from '@/const/common';
import { User } from '@/models';

export const useAuthToken = () => useState(() => '');

export const useAuthStatus = () => useState(() => AuthorizationStatus.UNKNOWN);

export const useUser = () => useState(() => ({}));
