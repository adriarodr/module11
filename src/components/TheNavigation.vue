<template>
  <nav id="nav">
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'random.quotes' }">Random Quotes</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </nav>
</template>
