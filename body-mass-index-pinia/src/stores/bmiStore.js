// this is our store that store our data and components can access to get data
//let's start by importing some libraries and define our store
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBmiStore = defineStore('bmiStore', ()=>{

    // the store will have the ref data for the inputs and also do some computed and pass those data to the parent

    const height = ref(0)
    const weight = ref(0)

    // the store also do the maths for the calculated bmi and display in the main app

    const bmi = computed(() =>{
        if(height.value >0){
            return (weight.value/(height.value* height.value)).toFixed(2)
        }
    })
    // also update the height and weight

    const setStats = (newHeight, newWeight) => {
        height.value = newHeight
        weight.value = newWeight
    }

    return {
        // return ref data
        height,
        weight,


        // return function
        bmi,
        setStats

    }

})