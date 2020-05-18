import Vue from 'vue'

Vue.component('navbar-component', require('./components/NavbarComponent').default)

Vue.component('projects', require('./components/Projects').default)
Vue.component('project-component', require('./components/ProjectComponent').default)

Vue.component('references', require('./components/References').default)

Vue.component('about-me', require('./components/AboutMe').default)

Vue.component('footer-component', require('./components/FooterComponent').default)
