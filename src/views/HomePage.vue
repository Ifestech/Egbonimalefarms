<template>
   <section id="home" class="min-h-[35rem] bg-cover bg-no-repeat bg-[url('@/assets/image/palm-tree1.jpg')] flex w-full">
        <div class="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-16 py-10 bg-black/40">

        <!-- Image first on mobile, second on desktop -->
        <div class="w-full flex justify-center mt-6 md:mt-0 order-1 md:order-2">
            <img src="../assets/image/image.png" alt="farm graphic" class="max-w-md w-full rounded-xl shadow-lg " />
        </div>

        <!-- Text second on mobile, first on desktop -->
        <div class="w-full flex items-center flex-col mt-9 md:items-start text-center md:text-left gap-5 order-2 md:order-1">
            <h1 class="font-bold text-4xl text-yellow-600">Bamidele Egbonimale Agro <br /> and Farms Limited</h1>
            <p class="font-bold text-2xl text-yellow-500">Harvesting Quality. Nourishing Lives.</p>
            <button class="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition duration-300">
            <a href="#products">Explore Our Products</a>
            </button>
        </div>
        </div>
   </section>
                      <!-- about-section -->
   <section id="about" class="py-16 bg-white">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
         <!-- Image -->
            <div class="w-full md:w-1/2">
                <img src="@/assets/image/palm-tree1.jpg" alt="Our Farm" class="rounded-lg shadow-lg w-full" />
            </div>

            <!-- Text -->
            <div class="w-full md:w-1/2 space-y-5 text-center md:text-left">
                <h2 class="text-4xl font-bold text-green-800">About Us</h2>
                <p class="text-gray-700 text-lg">
                <strong class="text-green-600">Bamidele Egbonimale Agro and Farms Limited</strong> is a proudly Nigerian agricultural business rooted in tradition and driven by innovation,
                Located in <strong class="text-green-600"> Igbogiri Edo state</strong>.
                Our farm specializes in producing Organic and  high-quality <strong class="text-green-600"> Palm oil, Yams, Cassava,Melon</strong> palm oil, yams, cassava, and other essential crops that feed communities and power local economies.
                </p>
                <p class="text-gray-600">
                From years of hardwork and consistency , we have grown into a trusted name in agriculture by staying committed to sustainable farming, good agriculture practices, and community empowerment.
                We believe that agriculture is important to the nation — and we are commited to feeding the nation .
                </p>
                <p class="text-gray-600 italic">
                "Harvesting Quality. Nourishing Lives." 
                </p>
                <button class="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
                <a href="#products">Explore Our Products</a>
                </button>
            </div>
        </div>

        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 pt-7 mt-10">
           <div class="w-full md:w-1/2">
             <img src="../assets/image/yam1.jpg" alt=""  class="rounded-lg shadow-lg w-full">
           </div>
            <div class="w-full md:w-1/2 space-y-5 text-center md:text-left" >
                <h2 class="text-4xl font-bold text-green-800">Our History</h2>
                <p class="text-gray-600">Our farm’s story began over 45 years ago with a single vision. In a local community called <strong class="text-green-700">Igbogiri in Edo state.</strong> 
                    What started as a small family farm has grown  into a thriving agricultural business and today employs over 50 workers, </p>

                <p class="text-gray-600">Through dedication, good farming practices, and help of God, we have become a trusted name in palm oil, Yam , Cassava etc production, 
                    serving communities near and far. Every Products from our farm, carries the taste of Nature, hard work, and a commitment to excellence.</p>

              <div>
                <h2 class="text-2xl font-bold text-green-800">Our Mission</h2>
                <p class="text-gray-600"><strong>"Our mission is to feed the nation and ensure food for all."</strong></p>
              </div>

              <div>
                <h2 class="text-2xl font-bold text-green-800" >Our Vission</h2>
                <p class="text-gray-600">"To be a leading provider of quality farm produce, driving food security and sustainability."</p>
              </div>
               <router-link to="/Team"><button class="bg-blue-600 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">View our Team</button></router-link>
              </div>
        </div>
  </section>
</template>

<script setup>

</script>

 