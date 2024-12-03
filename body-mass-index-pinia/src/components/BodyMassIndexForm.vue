<script setup>

// code will be here
// import the ref library from the vue
import { ref } from 'vue'
// also import the store from the store directory

import { useBmiStore } from "../stores/bmiStore.js";

const bmiStore = useBmiStore();

// let's create a variable for our input, and it will be a ref

const height = ref(0)
const weight = ref(0)

// create a function that handle the form submission
const calculateBMI = () =>{
  // it will get some data from the store and clear the form afterward
  bmiStore.setStats(height.value, weight.value)

  // clear the form
  height.value = null
  weight.value = null
}

</script>

<template>
<!--  html files will be here -->
<!--  let's copy some of the templates from the previous version of the app-->
  <div id="bmi-form">
    <h2>Enter your height and weight</h2>
<!--the input labeled with -->
    <div>
      <label for="user-height">Height in meter</label>
      <input v-model="height" id="user-height" type="number">
    </div>

    <div>
      <label for="user-weight">Weight in kilogram</label>
      <input v-model="weight" id="user-weight" type="number">
    </div>
    <br>

    <div>
      <!--      add an event when the calculate button clicked and we use the v-on, it will send the data to the parent app-->
      <button v-on:click="calculateBMI">Calculate</button>
    </div>
  </div>

</template>

<style scoped>

/* copy the style from the previous version for this component*/
#bmi-form {
  border: 3px solid red;
  padding: 15px;
  border-radius: 8px;
  max-width: 300px;
  margin: auto;
  background-color: #fff8f8;
}
button {
  background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>