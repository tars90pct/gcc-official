<template>
  <div class="min-h-screen bg-white font-sans">
    <!-- Navigation -->
    <nav class="bg-black px-4 py-4 fixed w-full z-10">
      <div class="container mx-auto flex justify-between items-center">
        <a href="/">
          <div class="flex items-center space-x-2 cursor-pointer">
            <div class="text-primary text-xl">古德文創</div>
          </div>
        </a>
        <div class="hidden md:flex space-x-8">
          <a href="#events" class="text-white hover:text-primary transition">新聞</a>
          <a href="#influencers" class="text-white hover:text-primary transition">合作藝人</a>
          <a href="#services" class="text-white hover:text-primary transition">服務項目</a>
          <a href="#contact" class="text-white hover:text-primary transition">聯絡我們</a>
        </div>
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-white">
            <Icon name="material-symbols-light:menu-rounded" v-if="!mobileMenuOpen" class="h-6 w-6" />
            <Icon name="material-symbols-light:close-rounded" v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-black absolute w-full left-0 px-4 py-2 shadow-md">
        <div class="flex flex-col space-y-3 py-3">
          <a href="/#services" @click="mobileMenuOpen = false" class="text-white hover:text-primary transition">服務項目</a>
          <a href="/#events" @click="mobileMenuOpen = false" class="text-white hover:text-primary transition">活動</a>
          <a href="/#influencers" @click="mobileMenuOpen = false"
            class="text-white hover:text-primary transition">合作藝人</a>
          <a href="/#contact" @click="mobileMenuOpen = false" class="text-white hover:text-primary transition">聯絡我們</a>
        </div>
      </div>
    </nav>
    <slot />
    <!-- Footer -->
    <footer class="bg-black text-white py-12 px-4">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center gap-2">
              <Icon name="gcc:gcc" size="36" />
              <h2 class="text-primary font-semibold text-4xl">古德文創</h2>
            </div>
            <p class="text-gray-400 mb-6">
              看見好文化，發揮好創意
            </p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-primary transition">
                <Icon name="mdi:facebook" class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition">
                <icon name="mdi:instagram" class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition">
                <icon name="mdi:youtube" class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition">
                <icon name="mdi:twitch" class="h-5 w-5" />
              </a>
              <a href="#" class="text-gray-400 hover:text-primary transition">
                <icon name="pajamas:twitter" class="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>

          </div>
          <div>
            <h4 class="font-bold text-primary mb-4">快速連結</h4>
            <ul class="space-y-2">
              <li><a href="/#events" class="text-gray-400 hover:text-white transition">新聞</a></li>
              <li><a href="/#influencers" class="text-gray-400 hover:text-white transition">合作藝人</a></li>
              <li><a href="/#services" class="text-gray-400 hover:text-white transition">服務項目</a></li>
              <li><a href="/#contact" class="text-gray-400 hover:text-white transition">聯絡我們</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-primary mb-4">服務項目</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition">活動策畫</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">KOL行銷</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">文化策展</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">社群凝聚</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition">品牌合作</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center">
          <p class="text-gray-400">
            © 2025 GCC古德文創. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted, ref, watch } from "vue";

export default defineComponent({
  components: {},
  props: {

  },
  setup(props) {
    const mobileMenuOpen = ref(false)
    onMounted(() => {
    });
    return buildDefineComponentSetup(
      {
        data: {},
        methods: {},
        stores: {},
      },
      {
        mobileMenuOpen,
      }
    );
  },
});
</script>
