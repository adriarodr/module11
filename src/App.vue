<template>
  <div id="app" class="container">
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

<style>
body {
  background-color: #d6edd6;
}

.container {
  background-color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  width: 65%;
  max-width: 850px;
  margin: 3.125rem auto;
  padding: 3.25rem 4rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

button {
  margin-top: 1.25rem;
  padding: 0.625rem 1.25rem;
  font-size: 1rem;
  background-color: #3a3d5c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
}

button:hover {
  background-color: #151621;
  color: #ffffff;
  transition: background-color 0.5s ease;
}

.author {
  font-style: italic;
  color: #545454;
  margin-top: 0.313rem;
}
</style>
