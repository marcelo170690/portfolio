<template>
  <div class="div__references my-2 clearfix">
    <div v-if="ctrlReferences" class="btn-group float-right" @mouseleave="ctrlReferences=false">
      <a href="https://www.linkedin.com/in/marcelo-choque-pacheco-7binary" target="_blank" class="btn btn-info">
        <img src="https://imgurl.me/images/2020/05/19/linkedin4d8cb6e334f0d82f.png" alt="linkedin">
      </a>
      <a href="https://github.com/marcelo170690" target="_blank" class="btn btn-info">
        <img src="https://imgurl.me/images/2020/05/19/github72d0db54fac6309b.png" alt="github">
      </a>
      <a href="" class="btn btn-info">
        <img src="https://imgurl.me/images/2020/05/19/facebook0ad4907261fba833.png" alt="facebook">
      </a>
      <a href="" class="btn btn-info">
        <img src="https://imgurl.me/images/2020/05/19/youtube7d576abe84ee8ec8.png" alt="youtube">
      </a>
    </div>
    <button v-if="!ctrlReferences" class="btn float-right btn-success" @mousemove="ctrlReferences=true">
      <img src="/img/contact-36.png" alt="">
    </button>
    <div v-if="ctrlContacts" class="btn-group" @mouseleave="ctrlContacts=false">
      <button class="btn btn-info disabled">
        <img src="/img/email.svg" alt="">
        marcelo@team7binary.com
      </button>
      <button class="btn btn-info disabled">
        <img src="/img/phone.svg" alt="">
        77562023
      </button>
    </div>
    <button v-if="!ctrlContacts" class="btn btn-primary float-left" @mousemove="ctrlContacts=true">
      <img src="/img/user.svg" alt="">
    </button>
  </div>
</template>

<script>
  export default {
    name: "References",
    data(){
      return {
        ctrlReferences: false,
        ctrlContacts: false
      }
    }
  }
</script>

<style scoped>
  .div__references{
    position: relative;
    opacity: 0.8;
  }
  .btn>img{
    fill: blue;
  }
</style>
