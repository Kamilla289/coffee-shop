<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <title-header classItem="title-big" :title="title[0].text" />
      </div>
    </div>
    <section class="contacts">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
            <div class="title mt-5">Tell us about your tastes</div>
            <img class="beanslogo mt-5" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />

            <form action="#" class="mt-5" @submit.prevent="submitForm">
              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="name-input" class="mb-0">
                    Name
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.name.$model" type="text" class="form-control" id="name-input" />
                  <span v-for="error in v$.name.$errors" :key="error.$uid"> {{ error.$message }} </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="email-input" class="mb-0">
                    E-mail
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.email.$model" type="email" class="form-control" id="email-input" />
                  <span v-for="error in v$.email.$errors" :key="error.$uid"> {{ error.$message }} </span>
                </div>
              </div>

              <div class="form-group row">
                <div class="col col-12 col-sm-3 d-flex align-items-start">
                  <label for="phone-input" class="mb-0"> Phone </label>
                </div>
                <div class="col col-12 col-sm-9">
                  <input v-model="v$.phone.$model" type="tel" class="form-control" id="phone-input" />
                  <span v-for="error in v$.phone.$errors" :key="error.$uid"> {{ error.$message }} </span>
                </div>
              </div>

              <div class="form-group row textarea">
                <div class="col col-12 d-flex justify-content-start">
                  <label for="pmessage" class="mb-3 mt-3 text-center">
                    Your message
                    <span style="color: red">*</span>
                  </label>
                </div>
                <div class="col col-12">
                  <textarea v-model="v$.message.$model" class="form-control" name="message" id="message" rows="5"
                    placeholder="Leave your comments here"></textarea>
                  <span v-for="error in v$.message.$errors" :key="error.$uid"> {{ error.$message }} </span>
                </div>
              </div>
              <div class="form-group row">
                <div class="col d-flex justify-content-start">
                  <label for="agree-checkbox" class="mb-0">
                    <input v-model="v$.agree.$model" type="checkbox" id="agree-checkbox" class="mr-2" />
                    Согласен с договором оферты
                    <span style="color: red">*</span>
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <button class="btn btn-outline-dark send-btn">Send us</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import { useVuelidate } from '@vuelidate/core';
import { required, email, maxLength } from '@vuelidate/validators';
import { helpers } from '@vuelidate/validators';
import { minLength } from "../validators/minLength";

export default {
  components: {
    NavBarComponent,
    TitleHeader
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      agree: false,
      title: [
        {
          id: 0,
          text: "Contact us",
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();
      if (!isFormCorrect) return;
      console.log({
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        agree: this.agree,
      })
    }
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      phone: {},
      message: { required, maxLength: maxLength(100), minLength: helpers.withMessage('Минимальная длина 5 символов', minLength) },
      agree: { required }
    }
  }
};
</script>