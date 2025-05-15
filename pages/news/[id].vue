<template>
  <section id="events" class="pt-14 pb-12 md:pt-24 md:pb-20 px-4 bg-primary">
    <div class="container mx-auto px-4 py-8 max-w-5xl">
      <!-- News Header -->
      <div class="mb-6">
        <p class="text-sm">更新時間: {{ news.updatedAt }}</p>
        <h1 class="text-3xl font-bold mb-2">{{ news.title }}</h1>
      </div>

      <div v-if="news.images.length > 0" class="relative mb-8 mx-auto cursor-pointer group"
        @click="openCardGallery = true">
        <div class="absolute inset-0 hover:bg-black hover:opacity-20">
          <div class="flex items-start justify-end w-full h-full p-4">
            <Icon name="heroicons:magnifying-glass" class="h-8 w-8 text-white" />
          </div>
        </div>
        <img v-if="news.images?.[0]" :alt="news.title ? `Image for ${news.title}` : 'News image'" accessibility
          class="block max-w-full h-auto mx-auto mb-8 rounded-lg shadow-md" styling :src="news.images[0]" />
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
    const newsId = Number.parseInt(route.params.id as string)
    if (Number.isNaN(newsId)) {
      navigateTo('/')
    }
    const client = useGCCClient()
    const news = ref<News>(News.of({}))
    const openCardGallery = ref<boolean>(false)
    let linkRegex = /\$A\{([^}]+)\}/g;

    const formattedArticle = computed(() => {
      // Split by double newlines to identify paragraphs
      const description = news.value.description.replace(linkRegex, (_: any, content: string) => {
        return `<a class="font-semibold text-blue-500" href="${content}">${content}</a>`;
      });
      const paragraphs = description.split(/\n+/);
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
      loading.value = true
      client.getNews(newsId)
        .then((resp) => {
          news.value = resp.data!
        })
        .catch(() => {
          navigateTo('/')
        })
        .finally(() => {
          loading.value = false
        })
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
