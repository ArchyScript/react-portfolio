<template>
  <div class="wrapper">
    <div class="form-wrapper relative top-8 bg-white shadow-2xl p-8 lg:p-12">
      <div
        class="text-right absolute top-0 right-0 font-semibold"
        @click="close"
      >
        <!-- <button class="p-3">
          &times;
        </button> -->
        <span
          class="fa fa-times text-gray-700 font-semibold cursor-pointer text-lg sm:xl lg:text-3xl py-4 px-6 rounded-full"
        ></span>
      </div>

      <div class="facilitator grid grid-cols-2 gap-10 mt-8">
        <div class="col-span-2 md:col-span-1">
          <img
            :src="image || blankImage"
            alt=""
            class="facilitator-img rounded-lg shadow-lg"
          />
        </div>

        <div
          class="facilitator-bio col-span-2 md:col-span-1 text-lg lg:text-xl"
        >
          <div class="mb-3 sm:mb-6">
            <h4 class="text-xl sm:text-2xl font-semibold mb-1 text-primary">
              {{ name }}
            </h4>
            <span class="text-sm font-normal text-gray-500">
              Facilitator
            </span>
          </div>

          <p
            class="text-sm sm:text-lg lg:text-xl font-normal text-netrepreneur-dark"
          >
            {{ name }} is {{ passion }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator'
import CustomVueBase from '../CustomVueBase.vue'

@Component
export default class FacilitatorDetails extends CustomVueBase {
  @Prop() image!: string
  @Prop() name!: string
  @Prop() passion!: string

  get blankImage() {
    return this.$blankProfilePic
  }

  mounted() {
    // this.fields.amount = this.amount_in_dollars * this.convertion_rate || 0
  }

  // loadUserDetails() {
  //   const data = localStorage.getItem('program-payment-info')

  //   if (!data) {
  //     return
  //   }

  //   const parsed = JSON.parse(data) as PaystackPaymentArguments

  //   // use already saved details
  //   this.fields.email = parsed.email
  //   this.fields.firstname = parsed.firstname
  //   this.fields.lastname = parsed.lastname
  //   this.fields.phone = parsed.phone
  // }

  saveUserDataLocally() {
    // const fields = Object.assign({}, { ...this.fields })
    // localStorage.setItem('program-payment-info', JSON.stringify(fields))
  }

  // proceedToPayment(data: PaystackPaymentArguments) {
  //   payWithPaystack(data, this.handleSuccess, this.handleClose)
  // }

  handleClose() {
    console.log('payment modal closed')
    this.$toast.error(
      'Sorry, your payment was not concluded,. Please reach out to the team if you have any isssues',
    )
  }

  close() {
    return this.$emit('closeFacilitatorModal')
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.form-wrapper {
  min-height: 200px;
  margin: 80px auto;

  width: 90%;
  max-width: 900px;
  transition: transform 0.7s;
  // overflow: scroll;
  // -ms-overflow-style: none; /* IE and Edge */
  // scrollbar-width: none; /* Firefox */
}

.facilitator-img {
  height: 450px;

  // @media (max-width: 1200px) {
  //   height: 600px;
  // }

  @media (max-width: 767px) {
    height: 320px;
  }
}

.facilitator-bio {
  animation-name: text-animation;
  animation-duration: 4s;
}
@keyframes text-animation {
  from {
    scale: 0.4;
  }
  to {
    scale: 1;
  }
}
</style>
