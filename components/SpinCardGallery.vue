<template>
  <Transition name="fade">
    <div class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]" @click.self="close">
      <div class="relative max-w-full max-h-full w-full h-full flex items-center justify-center p-4 md:p-8">

        <Transition name="spin-image" mode="out-in">
          <img v-if="currentImageUrl" :key="currentIndex" :src="currentImageUrl"
            class="block max-w-full max-h-full object-contain transition duration-500 ease-in-out" />
        </Transition>

        <button @click.stop="prevImage"
          class="h-8 w-8 flex flex-row items-center justify-center absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white z-10 transition"
          aria-label="Previous image">
          <Icon name="heroicons:chevron-left" class="h-6 w-6" />
        </button>
        <button @click.stop="nextImage"
          class="h-8 w-8 flex flex-row items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white z-10 transition"
          aria-label="Next image">
          <Icon name="heroicons:chevron-right" class="h-6 w-6" />
        </button>

        <button @click.stop="close"
          class="h-8 w-8 flex flex-row items-center justify-center absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-40 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white z-10 transition">
          <Icon name="heroicons:x-mark" class="h-5 w-5" />
        </button>

        <div v-if="images.length > 1"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm md:text-base z-10">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>

      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const emit = defineEmits(['close']);

const props = defineProps({
  images: {
    type: Array,
    default: () => [],
    required: true
  },
  initialIndex: {
    type: Number,
    default: 0,
  },
});

const currentIndex = ref(props.initialIndex);

// Computed property for the current image URL
const currentImageUrl = computed(() => {
  if (props.images && props.images.length > 0) {
    // Assuming images array can contain strings (URLs) or objects like { url: '...', alt: '...' }
    const imageData = props.images[currentIndex.value];
    return typeof imageData === 'string' ? imageData : imageData?.url;
  }
  return null; // Return null if no image exists at the index
});


// --- Methods ---
function open(index = props.initialIndex) {
  if (props.images.length === 0) {
    return;
  }
  currentIndex.value = index;
  // Optional: Prevent body scroll when open
  document.body.style.overflow = 'hidden';
}

function close() {
  emit('close')
  document.body.style.overflow = '';
}

function nextImage() {
  if (props.images.length <= 1) return;
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prevImage() {
  if (props.images.length <= 1) return;
  currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
}

// --- Keyboard Navigation ---
function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      prevImage();
      break;
    case 'Escape':
      close();
      break;
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  // Ensure scroll is restored if component unmounts while open
  document.body.style.overflow = '';
});


// Expose methods to the parent component via template ref
defineExpose({
  open,
  close,
  nextImage,
  prevImage
});
</script>

<style scoped>
/* --- Overlay Transition (Fade) --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.spin-image-enter-active {
  transition: all 0.2s ease-out;
  /* delay: 0.15s; /* Optional: delay the incoming image slightly */
}

.spin-image-leave-active {
  transition: all 0.1s ease-in;
  /* position: absolute; /* Helps with positioning if needed, but mode="out-in" handles much */
}

.spin-image-enter-from {
  opacity: 0;
  transform: scale(0.9) rotateZ(-5deg);
  /* Start slightly smaller and rotated */
}

.spin-image-leave-to {
  opacity: 0;
  transform: scale(0.9) rotateZ(5deg);
  /* Fade and rotate slightly as it leaves */
}


.spin-image-enter-to,
.spin-image-leave-from {
  opacity: 1;
  transform: scale(1) rotateZ(0deg);
}
</style>