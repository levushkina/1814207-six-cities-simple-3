<template>
  <div class="page page--gray page--login">
    <Header></Header>
    <main class="page__main page__main--login">
      <div class="page__login-container container">
        <NuxtPage />
        <section class="locations locations--login locations--current">
          <div class="locations__item">
            <NuxtLink to="/" class="locations__item-link">
              <span>Amsterdam</span>
            </NuxtLink>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
<script setup>
</script>