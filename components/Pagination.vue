<template>
  <div class="flex flex-row justify-center items-center gap-6">
    <button class="flex flex-col items-center" v-if="currentPage - 1 >= 1"
      @click="() => { methods.goto(currentPage - 1) }">
      <Icon name="heroicons:chevron-left" class="h-6 w-6" />
    </button>
    <button class="flex flex-col items-center">
      <div class="bg-black text-white p-2 rounded hover:bg-black/80">{{ currentPage }}</div>
    </button>
    <button class="flex flex-col items-center" @click="() => { methods.goto(currentPage + 1) }"
      v-if="currentPage + 1 <= $props.pageQuery.total">
      <Icon name="heroicons:chevron-right" class="h-6 w-6" />
    </button>
  </div>
</template>
<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted } from "vue";
import type { PageQuery } from "~/types/clients";
import { Icon } from "#components";

export default defineComponent({
  components: {},
  props: {
    pageQuery: {
      type: Object as () => PageQuery,
      required: true
    },
  },
  emits: ['update:page'],
  setup(props, context) {
    onMounted(() => {
    });
    const currentPage = ref<number>(props.pageQuery.page)
    const goto = (page: number) => {
      context.emit('update:page', page)
    }
    return buildDefineComponentSetup(
      {
        data: {

        },
        methods: {
          goto
        },
        stores: {},
      },
      {
        currentPage,
      }
    );
  },
});
</script>
