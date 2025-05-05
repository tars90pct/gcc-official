<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-black text-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h1 class="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">看見好文化，發揮好創意
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            文創無界限，營造跨界共利生態圈，攜手古德文創共創多贏未來！
          </p>
          <!-- <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact"
              class="bg-primary hover:bg-[#e6ca4c] text-black font-medium py-3 px-6 rounded-lg transition text-center">
              聯絡我們
            </a>
            <a href="#services"
              class="border border-primary text-primary hover:bg-primary hover:text-black font-medium py-3 px-6 rounded-lg transition text-center">
              服務內容
            </a>
          </div> -->
        </div>
        <div class="md:w-1/2 flex items-center justify-center">
          <img src="/pages/logotext_y.gif" alt="Event" class="rounded-lg shadow-xl max-w-[400px] h-auto" />
        </div>
      </div>
    </div>
  </section>

  <section id="events" class="py-16 px-4 bg-primary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">焦點盛事</h2>
        <p class="text-xl text-gray-800 max-w-3xl mx-auto">
          探索我們引以為傲的文化經典與卓越體驗精選
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div @click="() => {
          navigateTo(`/news/${news.id}`)
        }"
          class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col h-[480px] max-h-[480px] min-h-[480px] cursor-pointer"
          v-for="news of newsList" :key="news.id">
          <img :src="news.images?.[0] || '/gcc-official/pages/logo.png'" :alt="news.title"
            class="w-full h-48 object-cover" />
          <div class="p-6 flex flex-col flex-1">
            <div class="flex items-center mb-2">
              <Icon name="solar:calendar-line-duotone" class="h-5 w-5 text-black mr-2" />
              <span class="text-gray-500 text-sm">{{ news.updatedAt }}</span>
            </div>
            <h3 class="text-xl font-bold text-black mb-2">{{ news.title }}</h3>
            <div class="flex-1">
              <p class="text-gray-600 whitespace-pre-line line-clamp-4">
                {{ news.trimDescription() }}
              </p>
            </div>
            <div class="flex items-center text-black font-medium bg-white">
              <span>詳情介紹</span>
              <Icon name="lsicon:right-outline" class="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <Pagination :page-query="newsPageQuery" @update:page="(page) => {
          newsPageQuery.page = page;
          methods.fetchNews()
        }" :key="newsPageQuery.page" />
      </div>
    </div>
  </section>

  <section id="influencers" class="py-16 bg-black text-white px-4">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">合作藝人</h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          我們與文化領域的關鍵影響力者攜手合作，為您的訊息賦能擴聲，深化品牌影響並拓展多元受眾觸及。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center cursor-pointer"
          v-for="influencer of influencerList" @click="() => {
            navigateTo(`/influencers/`)
          }">
          <img :src="influencer.images[0]" :alt="influencer.name"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary" />
          <h3 class="text-lg font-bold mb-1">{{ influencer.name }}</h3>
          <p class="text-primary mb-3">{{ influencer.description }}</p>
          <div class="flex justify-center space-x-3">
            <a v-if="influencer.fb" :href="influencer.fb" target="_blank"
              class="text-gray-400 hover:text-primary transition">
              <Icon name="mdi:facebook" class="h-5 w-5" />
            </a>
            <a v-if="influencer.ig" :href="influencer.ig" target="_blank"
              class="text-gray-400 hover:text-primary transition">
              <icon name="mdi:instagram" class="h-5 w-5" />
            </a>
            <a v-if="influencer.youtube" :href="influencer.youtube" target="_blank"
              class="text-gray-400 hover:text-primary transition">
              <icon name="mdi:youtube" class="h-5 w-5" />
            </a>
            <a v-if="influencer.twitch" :href="influencer.twitch" target="_blank"
              class="text-gray-400 hover:text-primary transition">
              <icon name="mdi:twitch" class="h-5 w-5" />
            </a>
            <a v-if="influencer.x" :href="influencer.x" target="_blank"
              class="text-gray-400 hover:text-primary transition">
              <icon name="pajamas:twitter" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-16 bg-white px-4">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">服務項目</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          我們專精於透過活動策劃與意見領袖協作，打造令人難忘的文化體驗。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Icon name="material-symbols:event-outline" class="h-8 w-8 text-black" />
          </div>
          <h3 class="text-2xl font-bold mb-4">文創演出 </h3>
          <p class="text-gray-300 mb-4">
            跨海共創日台藝文盛典，從線上直播到實體見面會，專業團隊打造沉浸式文化體驗
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>特邀日本聲優、歌手跨海來台</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>文化祭典策劃：動漫主題展 / 傳統工藝博覽會</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>實體見面會 × 線上直播演出雙軌並行</span>
            </li>
          </ul>
        </div>

        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Icon name="mdi:share-variant-outline" class="h-8 w-8 text-black" />
          </div>
          <h3 class="text-2xl font-bold mb-4">網紅推廣</h3>
          <p class="text-gray-300 mb-4">
            「文化聲量加乘引擎」──精準對接藝文領域影響力人物，為品牌與活動創造倍增效應
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>精準鎖定意見領袖並建立深度合作生態圈</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>客制化行銷活動策略與執行方案</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>成效報告與數據追蹤</span>
            </li>
          </ul>
        </div>

        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="bg-primary p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
            <Icon name="mdi:account-tie-outline" class="h-8 w-8 text-black" />
          </div>
          <h3 class="text-2xl font-bold mb-4">維運顧問</h3>
          <p class="text-gray-300 mb-4">
            KOL及演藝工作者提供品牌社群經營、媒體策略整合、公關形象塑造等全方位營運規劃，並搭配長期性的維運輔導服務。
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>品牌社群深度經營</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>媒體曝光精準佈局</span>
            </li>
            <li class="flex items-start">
              <Icon name="lets-icons:check-fill" class="h-5 w-5 text-primary mr-2 mt-1" />
              <span>形象危機預防系統</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useGCCClient } from "#imports";
import type { News } from "~/types/news";
import { PageQuery } from "../types/clients";
import type { Influencer } from "~/types/influencer";


export default defineComponent({
  components: {},
  props: {
  },
  setup(props) {
    definePageMeta({
      layout: 'official-layout',
    });
    const client = useGCCClient()
    const newsList = ref<News[]>([])
    const newsPageQuery = reactive<PageQuery>(PageQuery.of({}))
    const fetchNews = () => {
      client.getNewsList(newsPageQuery.page).then((resp) => {
        newsList.value = resp.data
        newsPageQuery.total = resp.count
      });
    }
    const influencerList = ref<Influencer[]>([])
    const influencerPageQuery = reactive<PageQuery>(PageQuery.of({}))
    const fetchInfluencer = () => {
      client.getInfluencerList(influencerPageQuery.page).then((resp) => {
        influencerList.value = resp.data
        influencerPageQuery.total = resp.count
      });
    }
    onMounted(() => {
      fetchNews()
      fetchInfluencer()
    })

    return buildDefineComponentSetup(
      {
        data: {},
        methods: { fetchNews, fetchInfluencer },
        stores: {},
      },
      {
        newsList,
        newsPageQuery,
        influencerList,
        influencerPageQuery,
      }
    );
  },
});
</script>

<style>
/* Additional custom styles can be added here */
html {
  scroll-behavior: smooth;
}
</style>