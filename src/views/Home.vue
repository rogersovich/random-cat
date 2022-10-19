<template>
  <div class="tw-min-h-screen fcc">
    <div class="tw-text-center tw-mx-12 md:tw-mx-0 tw-py-6">
      <div class="fcc">
        <img :src="require('@/assets/cat.png')" />
      </div>
      <br />
      <div class="tw-font-bold tw-text-4xl md:tw-text-5xl">
        <span v-if="!isGet"> Cat For Today </span>
        <span v-else> Congratulations </span>
      </div>
      <br />
      <div class="tw-text-base tw-text-slate-700">
        <span v-if="!isGet">
          I know your today so boring and tired, just click button below and you
          can get Cat
        </span>
        <span v-else> You got Cat for today </span>
        <div>
          i made this for <b>Sheila Putri Cullina</b> <span class="tw-text-red-500">❤</span>
        </div>
      </div>
      <br />
      <br v-if="!isGet" />
      <div class="fcc" v-if="isGet">
        <n-image
          v-if="image !== '' && !isLoading"
          width="250"
          style="max-height: 250px"
          :src="image"
          object-fit="cover"
          lazy
        >
          <template #placeholder>
            <div
              style="
                width: 200px;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #8882;
              "
            >
              Loading
            </div>
          </template>
        </n-image>
      </div>
      <br v-if="isGet" />
      <Btn
        :text-color="'#000'"
        :bg-color="'#FFD43D'"
        width="350"
        class="tw-py-3 tw-text-base tw-font-medium"
        @click="getRandomImage"
      >
        Get Random Cat
      </Btn>
    </div>
  </div>
</template>

<script setup>
import Btn from "../components/Btn.vue";
import { ref } from "vue";
import { fetchRandomCat } from "@/services/random.js";

const isGet = ref(false);
const image = ref("");
const isLoading = ref(false);
const getRandomImage = async () => {
  isGet.value = true;
  isLoading.value = true;
  image.value = "";
  await fetchRandomCat().then((res) => {
    isLoading.value = false;
    const { data } = res;
    image.value = data.file;
  });
};
</script>

<style lang="scss" scoped></style>
