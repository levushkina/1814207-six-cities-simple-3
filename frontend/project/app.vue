<template>
  <div>
    <div style="display: none">
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewbox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewbox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewbox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
    </div>
    <NuxtLayout>
      some page content
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import nuxtStorage from 'nuxt-storage';
import { useAuthToken, useAuthStatus, useUser } from '@/states';
import { AuthorizationStatus } from '@/const/common';
import { BACKEND_URL, APIRoute } from '@/const/routes';
import { User } from '@/models';

const token = useAuthToken();
const status = useAuthStatus();
const user = useUser();

if (status.value === AuthorizationStatus.UNKNOWN) {
  if (token.value.length || nuxtStorage.localStorage.getData('6c-token')) {
    const { data, error } = await useFetch(`${BACKEND_URL}${APIRoute.LOGIN}`, {
      headers: {
        Authorization:`Bearer ${token}`,
      },
    });

    if(error.value) {
      status.value = AuthorizationStatus.NO_AUTH;
    } else {
      user.value = data.value as User;
      status.value = AuthorizationStatus.AUTH;
    }
  } else {
    status.value = AuthorizationStatus.NO_AUTH;
  }
}


</script>
