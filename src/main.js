// import the css styling (if there is some to be had)
import './assets/main.css'

// import `createApp` function
import { createApp } from 'vue'
// import the App <- THIS IS WHAT WE WRITE
import App from './App.vue'

// creating the new application instance
// in this case we pass a `component`, the root component of which
// everything else in the app is a child
const app = createApp(App);

// calling mount() method, allowing the application instance to render everything
// '#app' is a `container argument`
// which can either be an actual DOM element or a selector string
app.mount('#app')

// the content of app's root component is rendered inside the container element
// the container element itself is not considered part of the app

// .mount() should always be called after app configurations, asset registrations
// its return value is the root component instance
// instead of the application instance

// then we just need
/*

<div id="app">
    <button @click="count++">{{ count }}</button>
</div>

*/