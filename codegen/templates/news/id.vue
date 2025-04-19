<template>
  <section id="events" class="pt-14 pb-12 md:pt-24 md:pb-20 px-4 bg-primary">
    <div class="container mx-auto px-4 py-8 max-w-5xl">
      <!-- News Header -->
      <div class="mb-6">
        <p class="text-sm">更新時間: {{ news.updatedAt }}</p>
        <h1 class="text-3xl font-bold mb-2">{{ news.title }}</h1>
      </div>

      <div v-if="news.images.length > 0" class="relative mb-8 mx-auto cursor-pointer  hover:opacity-90"
        @click="openCardGallery = true">
        <!-- <img v-if="news.images?.[0]" :alt="news.title ? `Image for ${news.title}` : 'News image'" accessibility
          class="block max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" styling :src="news.images[0]" /> -->
        <div class="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition duration-300 z-40">
          <div class="flex items-center justify-center h-full">
            <Icon name="heroicons:magnifying-glass" class="h-12 w-12 text-white" />
          </div>
        </div>
        <SpinCardGallery :images="news.images" v-if="news.images.length > 0 && openCardGallery"
          @close="openCardGallery = false" />
      </div>

      <!-- News Description -->
      <div class="mb-8 bg-white rounded-lg shadow-md p-6 article-container">
        <div class="prose prose-lg max-w-none">
          <div v-html="formattedArticle"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted, ref, watch } from "vue";
import type { NuxtError } from "#app";
import { News } from "~/types/news";

export default defineComponent({
  components: {},
  props: {
    error: {
      type: Object as () => NuxtError,
      default: () => {
        return {
          statusCode: 404,
        };
      },
    },
  },
  setup(props) {
    definePageMeta({
      layout: 'official-layout',
    });
    const route = useRoute()
    const loading = ref<boolean>(true)
    const news = ref<News>(News.of({
      "title": "我們重金從遙遠國度請來的知名摔角手江西男",
      "description": "# 作為安全長，我很榮幸能與世界一流的安全領導者合作，共同應對不斷變化的威脅和監管環境。\n\n透過在世界經濟論壇達佛斯會議、RSA 大會和 Black Hat 等論壇中進行的深入交流，對於處理當今網路安全需求時面臨的共同挑戰，\n## 我獲得了一些有用的見解：複雜性：複雜性已成為安全性的敵人。\n團隊正艱難應對技術堆疊碎片化、多雲端環境和安全人才持續短缺的挑戰。態勢感知能力有限，全然不同的系統增加了營運開銷，現代化轉換變得令人望而生畏。人工智慧：AI 既帶來了機遇，也帶來了風險。組織正爭相利用 AI，卻並未來得及對員工進行訓練以應對 AI 帶來的獨特風險。安全團隊需要保護 AI 模型，以保護敏感性資料並支援營運穩定性，而預算和資源卻十分有限。安全盲點：攻擊面持續擴大。隨著遠端工作、雲端遷移和數位轉換的加速，安全團隊很難在日益分散的環境中保持可見度。這種擴展產生了盲點，老練的威脅執行者會迅速對其加以利用。受信任的廠商：供應鏈安全事件逐年增加。近期備受關注的事件充分表明了第三方元件中的漏洞如何對整個數位生態系統產生影響。安全團隊必須考慮遠超其直接邊界的風險，並延伸到其技術堆疊中的每一個相依性。偵測速度：偵測環境中威脅行為者所需的時間仍然太長。儘管企業對監控和偵測技術進行了持續投資，但攻擊者的平均停留時間仍然超過產業目標。老練的攻擊者能夠在網路中長時間運作而不被發現，這讓網路安全領導者感到沮喪。安全性社群的明確共識是，疊加單點解決方案的傳統做法難以為繼。安全性主管需要一個整合式平台，能夠在降低複雜性的同時提供全面保護和可見性。這正是我在近兩年前加入 Cloudflare 的初衷——幫助建構面向當今及未來威脅情勢的創新解決方案，而非針對五年前的安全格局。",
      "updatedAt": "2021-02-01",
      "images": [
        "/news/images/7zbjmb7zbjmb7zbj.jpeg",
        "/news/images/ms41hwms41hwms41.jpeg",
        "/news/images/the-fool.jpg"
      ]
    }))
    const openCardGallery = ref<boolean>(false)

    const formattedArticle = computed(() => {
      // Split by double newlines to identify paragraphs
      const paragraphs = news.value.description.split(/\n+/);

      // Convert paragraphs to HTML
      return paragraphs
        .map(paragraph => {
          if (paragraph.startsWith('# ')) {
            return `<h2 class="text-2xl font-bold my-4">${paragraph.substring(2)}</h2>`;
          } else if (paragraph.startsWith('## ')) {
            return `<h3 class="text-xl font-bold my-3">${paragraph.substring(3)}</h3>`;
          }
          // Regular paragraph
          return `<p class="mb-4">${paragraph}</p>`;
        })
        .join('');
    });

    onMounted(() => {
    })
    return buildDefineComponentSetup(
      {
        data: {},
        methods: {},
        stores: {},
      },
      {
        loading,
        news,
        formattedArticle,
        openCardGallery
      }
    );
  },
});
</script>
