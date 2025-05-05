<template>
  <section id="influencers" class="pt-14 pb-12 md:pt-24 md:pb-20 bg-black">
    <div class="container mx-auto py-8 max-w-5xl">
      <div class="mb-6">
        <h1 class="text-3xl font-bold mb-2 text-primary">合作藝人</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center cursor-pointer" v-for="influencer of influencers"
          @click="() => {
            navigateTo(`/influencers/`)
          }">
          <img :src="influencer.images[0]" :alt="influencer.name"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary" />
          <h3 class="text-lg text-white font-bold mb-1">{{ influencer.name }}</h3>
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
</template>
<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted, ref, watch } from "vue";
import type { Influencer } from "~/types/influencer";

export default defineComponent({
  components: {},
  props: {
  },
  setup(props) {
    definePageMeta({
      layout: 'official-layout',
    });
    const route = useRoute()
    const loading = ref<boolean>(true)
    const client = useGCCClient()
    const influencers = ref<Influencer[]>([])

    onMounted(() => {
      loading.value = true
      client.getInfluencers()
        .then((resp) => {
          influencers.value = resp.data!
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
        influencers,
      }
    );
  },
});
</script>
