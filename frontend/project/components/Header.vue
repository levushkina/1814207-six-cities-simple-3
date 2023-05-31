<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__left">
          <NuxtLink to="/" class="header__logo-link header__logo-link--active">
            <img
              class="header__logo"
              src="../assets/img/logo.svg"
              alt="6 cities logo"
              width="81"
              height="41"
            >  
          </NuxtLink>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item user">
              <NuxtLink
                to="/favorites"
                class="header__nav-link header__nav-link--profile"
              >
                <div class="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span class="header__user-name user__name">Oliver.conner@gmail.com</span>
              </NuxtLink>
            </li>
            <li class="header__nav-item">
              <NuxtLink
                to="/signIn"
                class="header__nav-link"
              >
                <span class="header__signout">Sign out</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

</script>