<template>
  <div class="about">
    <h1>About</h1>
    <p>
      Hello, I'm Adrian. Welcome to my small app that generates a random quote
      with the click of a button. The application uses a REST API called Quotes
      API to retrieve quotes, Vue to build the interface, and Vue Router for
      routing. I built this app to learn how to use Vue Router to create a
      single page application, and it has helped me better understand how to use
      Vue Router.
    </p>

    <GoBack />
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  components: { GoBack },
};
</script>
