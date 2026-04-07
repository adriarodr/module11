<template>
  <div class="quotes">
    <h1>Random Quote Generator</h1>

    <!-- Display the quote or a loading message -->
    <p v-if="loading">Loading...</p>

    <p v-else>"{{ quote }}"</p>
    <p class="author">— {{ author }}</p>

    <!-- The button that triggers the API call -->
    <button @click="getQuote">Get New Quote</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      quote: "", // stores the quote text
      author: "", // stores the author text
      loading: false, // tracks loading status
    };
  },

  methods: {
    async getQuote() {
      this.loading = true;

      try {
        // Send a GET request to the Quotable API
        const response = await axios.get(
          "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
          {
            headers: {
              "x-rapidapi-host": "quotes15.p.rapidapi.com",
              "x-rapidapi-key":
                "0f17a7d196mshd569c26d85858c6p1f24fajsnb44ff3f8b66c",
            },
          }
        );

        // Update the quote with the response data
        this.quote = response.data.content;
        this.author = response.data.originator.name;
      } catch (error) {
        console.error("Error fetching quote:", error);
        this.quote = "Oops! Something went wrong.";
        this.author = "";
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // Load a random quote when the app first starts
    this.getQuote();
  },
};
</script>
