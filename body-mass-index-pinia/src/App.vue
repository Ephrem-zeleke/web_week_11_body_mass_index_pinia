<script setup>

// code will be here
// we have to import the store
import { useBmiStore } from "./stores/bmiStore.js";

// app.vue is the container for the components and import the body mass index form
import BodyMassIndexForm from "./components/BodyMassIndexForm.vue";

// we have to access the store
const bmiStore = useBmiStore();


</script>

<template>
  <!--  html files will be here -->
  <div id="app">
    <h1>Body mass index calculator </h1>
    <BodyMassIndexForm/>
    <div v-if="bmiStore.bmi">
      <h2>Your BMI:</h2>
      <p>{{ bmiStore.bmi }}</p>

    </div>

  </div>

</template>


<style scoped>
#app {
  border: 3px solid #99b2e6;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
  text-align: center;
  background-color: #f9f9f9;
}
h2{
  text-align: center;
}
p{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}




</style>
