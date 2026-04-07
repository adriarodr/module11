<template>
  <div class="contact">
    <h1>Contact Me</h1>
    <p class="greeting">Hello, I'm Adrian Rodriguez.</p>
    <p>Feel free to contact me with any questions at my email:</p>
    <a href="mailto:arodriguez28@my.waketech.edu" class="email">
      arodriguez28@my.waketech.edu
    </a>
    <GoBack />
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";

export default {
  components: { GoBack },
};
</script>
