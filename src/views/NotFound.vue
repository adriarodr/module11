<template>
  <div class="not-found">
    <h1>Not Found</h1>
    <p>
      Sorry, we couldn't find that page. Try going to
      <router-link :to="{ name: 'random.quotes' }">Random Quotes</router-link>
    </p>
  </div>
</template>
