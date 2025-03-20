<template>
  <section id="home" class="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-black text-white">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <Icon name="gcc:gcc-text" size="24" />
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">看見好文化，發揮好創意
          </h1>
          <p class="text-xl text-gray-300 mb-8">
            文創無界限，營造跨界共利生態圈，攜手古德文創共創多贏未來！
          </p>
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact"
              class="bg-primary hover:bg-[#e6ca4c] text-black font-medium py-3 px-6 rounded-lg transition text-center">
              聯絡我們
            </a>
            <a href="#services"
              class="border border-primary text-primary hover:bg-primary hover:text-black font-medium py-3 px-6 rounded-lg transition text-center">
              服務內容
            </a>
          </div>
        </div>
        <div class="md:w-1/2 flex items-center justify-center">
          <img src="/pages/gcc.jpeg" alt="Event" class="rounded-lg shadow-xl max-w-[400px] h-auto" />
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

  <section id="events" class="py-16 px-4 bg-primary">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">焦點盛事</h2>
        <p class="text-xl text-gray-800 max-w-3xl mx-auto">
          探索我們引以為傲的文化經典與卓越體驗精選
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="/pages/gcc.jpeg" alt="Art Festival" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <Icon name="solar:calendar-line-duotone" class="h-5 w-5 text-black mr-2" />
              <span class="text-gray-500 text-sm">6月15-18, 2023</span>
            </div>
            <h3 class="text-xl font-bold text-black mb-2">光影迷宮特展</h3>
            <p class="text-gray-600 mb-4">
              用光影組成的迷宮，你敢不敢跨越那道牆壁？
            </p>
            <div class="flex items-center text-black font-medium">
              <span>詳情介紹</span>
              <Icon name="lsicon:right-outline" class="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="/pages/gcc.jpeg" alt="Art Festival" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <Icon name="solar:calendar-line-duotone" class="h-5 w-5 text-black mr-2" />
              <span class="text-gray-500 text-sm">12月5-7, 2024</span>
            </div>
            <h3 class="text-xl font-bold text-black mb-2">周Ｏ倫下水道演唱會</h3>
            <p class="text-gray-600 mb-4">
              傳奇巨星周Ｏ倫十年一聚，下水道收音不好，就算是一生一次也絕對不要嘗試。
            </p>
            <div class="flex items-center text-black font-medium">
              <span>詳情介紹</span>
              <Icon name="lsicon:right-outline" class="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg overflow-hidden shadow-md">
          <img src="/pages/gcc.jpeg" alt="Art Festival" class="w-full h-48 object-cover" />
          <div class="p-6">
            <div class="flex items-center mb-2">
              <Icon name="solar:calendar-line-duotone" class="h-5 w-5 text-black mr-2" />
              <span class="text-gray-500 text-sm">八月 10-20, 2023</span>
            </div>
            <h3 class="text-xl font-bold text-black mb-2">江西男鐵籠挑戰賽</h3>
            <p class="text-gray-600 mb-4">
              我們重金從遙遠國度請來的知名摔角手江西男，這次開放一般民眾挑戰他的頭銜--江西之王。
            </p>
            <div class="flex items-center text-black font-medium">
              <span>詳情介紹</span>
              <Icon name="lsicon:right-outline" class="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="influencers" class="py-16 bg-black text-white px-4">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">合作網紅</h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          我們與文化領域的關鍵影響力者攜手合作，為您的訊息賦能擴聲，深化品牌影響並拓展多元受眾觸及。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-gray-900 p-6 rounded-lg shadow-md text-center" v-for="i of 4">
          <img src="/pages/motherofd.jpeg" alt="Influencer 1"
            class="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary" />
          <h3 class="text-lg font-bold mb-1">丹妮莉絲·坦格利安</h3>
          <p class="text-primary mb-3">不焚者、彌林女王、安達爾人和先民的女王、七國統治者與全境守護者、草原上的卡麗熙、打碎鐐銬者以及龍之母</p>
          <p class="text-gray-400 text-sm mb-4">500K+ Followers</p>
          <div class="flex justify-center space-x-3">
            <Icon name="mdi:instagram" class="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
            <Icon name="mdi:youtube" class="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16 px-4 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">要不要聽聽看我們客戶在說什麼</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          聽聽與我們合作過的組織和品牌怎麼說。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="flex items-center mb-6">
            <div class="text-primary">
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">
            "與古德文創合作是我們年度聲優展的關鍵轉折點。他們在活動策劃與影響者拓展上的專業能力，成功讓參與人數翻倍。"
          </p>
          <div class="flex items-center">
            <img src="/pages/motherofd.jpeg" alt="Client" class="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
            <div>
              <h4 class="font-bold">石內埔</h4>
              <p class="text-gray-400 text-sm">執行總監, 特務機構</p>
            </div>
          </div>
        </div>

        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="flex items-center mb-6">
            <div class="text-primary">
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">
            "古德文創團隊擁有令人驚嘆的影響力人脈網絡，這些夥伴真正關心文化發展。他們協助我們建立了與觀眾深度共鳴的真誠合作關係。"
          </p>
          <div class="flex items-center">
            <img src="/pages/motherofd.jpeg" alt="Client" class="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
            <div>
              <h4 class="font-bold">麥米奈</h4>
              <p class="text-gray-400 text-sm">教授, 霍格華滋</p>
            </div>
          </div>
        </div>

        <div class="bg-black p-8 rounded-lg shadow-md text-white">
          <div class="flex items-center mb-6">
            <div class="text-primary">
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
              <Icon name="ic:round-star" class="h-5 w-5 inline-block" />
            </div>
          </div>
          <p class="text-gray-300 mb-6 italic">
            "從概念構思到實際執行，古德文創打造了一場超越期待的卓越文化展覽。他們對細節的執著與創意手法，成就了無可取代的差異化成果。"
          </p>
          <div class="flex items-center">
            <img src="/pages/motherofd.jpeg" alt="Client" class="w-12 h-12 rounded-full mr-4 border-2 border-primary" />
            <div>
              <h4 class="font-bold">格海河</h4>
              <p class="text-gray-400 text-sm">飼育員, 魔獸爭霸講師</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-16 bg-primary px-4">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-black mb-4">保持聯絡</h2>
        <p class="text-xl text-gray-800 max-w-3xl mx-auto">
          準備好打造一場令人難忘的文化體驗了嗎？請聯繫我們，一起討論您的專案。
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <form class="space-y-6">
            <div>
              <label for="name" class="block text-black mb-2 font-medium">稱呼</label>
              <input type="text" id="name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your name" />
            </div>
            <div>
              <label for="email" class="block text-black mb-2 font-medium">Email</label>
              <input type="email" id="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="Your email" />
            </div>
            <div>
              <label for="subject" class="block text-black mb-2 font-medium">主題</label>
              <input type="text" id="subject"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="主題" />
            </div>
            <div>
              <label for="message" class="block text-black mb-2 font-medium">內容</label>
              <textarea id="message" rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="您想講的話"></textarea>
            </div>
            <button type="submit"
              class="bg-black hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-lg transition w-full">
              送出
            </button>
          </form>
        </div>

        <div>
          <div class="bg-black p-8 rounded-lg shadow-md h-full text-white">
            <h3 class="text-2xl font-bold mb-6">聯絡資訊</h3>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-primary p-3 rounded-full mr-4">
                  <MapPinIcon class="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">地址</h4>
                  <p class="text-gray-300">臺北市信義區松仁路221巷45號116樓</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary p-3 rounded-full mr-4">
                  <PhoneIcon class="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">電話</h4>
                  <p class="text-gray-300">0911-0010002</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary p-3 rounded-full mr-4">
                  <MailIcon class="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">Email</h4>
                  <p class="text-gray-300">info@gcc.com</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-primary p-3 rounded-full mr-4">
                  <ClockIcon class="h-6 w-6 text-black" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">上班時間</h4>
                  <p class="text-gray-300">週一 - 週五: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h4 class="font-bold mb-3">Follow Us</h4>
              <div class="flex space-x-4">
                <a href="#" class="bg-gray-800 hover:bg-primary p-3 rounded-full transition">
                  <Icon name="mdi:instagram" class="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
                </a>
                <a href="#" class="bg-gray-800 hover:bg-primary p-3 rounded-full transition">
                  <Icon name="mdi:youtube" class="h-5 w-5 text-gray-400 hover:text-primary cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { buildDefineComponentSetup } from "~/utils/internal";
import { defineComponent, onMounted, ref, watch } from "vue";


export default defineComponent({
  components: {},
  props: {
  },
  setup(props) {
    definePageMeta({
      layout: 'official-layout',
    });
    return buildDefineComponentSetup(
      {
        data: {},
        methods: {},
        stores: {},
      },
      {}
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