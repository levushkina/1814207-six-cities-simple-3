<template>
  <section class="login">
    <h1 class="login__title">Sign in</h1>
    <form
      class="login__form form"
      action="#"
    >
      <FormInput
        labelText="E-mail"
        :modelValue="formData.email"
        type="email"
        placeholder="Email"
        @update:modelValue="formData.email = $event"
      ></FormInput>
      <FormInput
        labelText="Password"
        :modelValue="formData.password"
        type="password"
        placeholder="Password"
        @update:modelValue="formData.password = $event"
      ></FormInput>
      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>
      <button
        class="login__submit form__submit button"
        type="button"
        @click.stop="handleSubmit"
      >
        Sign in
      </button>
    </form>
  </section>
</template>
<script setup lang="ts">
import { BACKEND_URL, APIRoute } from '@/const/routes';
import { AuthorizationStatus } from '@/const/common';
import { useUserStore } from '@/stores/useUserStore';
import { User } from '@/models';
import nuxtStorage from 'nuxt-storage';
import { useAuthToken, useAuthStatus, useUser } from '@/states';

definePageMeta({
  layout: 'users'
});

const store = useUserStore();

const formData = reactive({
  email: '',
  password: ''
});

const errorMessage = ref('');

const handleSubmit = async () => {
  const { data, error } = await useFetch(`${BACKEND_URL}${APIRoute.LOGIN}`, {
    method: 'POST',
    body: formData
  });

  store.setUser(error ? AuthorizationStatus.NO_AUTH : AuthorizationStatus.AUTH, data.value as User);
  
  if (error.value) {
    errorMessage.value = error.value.data.error;
    return;
  }
  const status = useAuthStatus();
  const token = useAuthToken();
  const user = useUser();
  user.value = data.value as User;
  token.value = (data.value as User).token;
  errorMessage.value = '';
  status.value = AuthorizationStatus.AUTH;
  nuxtStorage.localStorage.setData('6c-token', token.value);
  navigateTo('/');
}
</script>
  