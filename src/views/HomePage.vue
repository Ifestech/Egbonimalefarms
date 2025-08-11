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
               <router-link to="/Team"><button class="bg-green-700 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">View our Team</button></router-link>
              </div>
        </div>
  </section>
<section id="products" class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-bold text-green-800 mb-8">Our Products</h2>
    <p class="text-gray-600 max-w-2xl mx-auto mb-12">
      At Egbonimale Farms, we produce fresh and high-quality agricultural products directly from our farm to your table.
    </p>

    <div class="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      <!-- Product 1 -->
      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
        <video controls autoplay muted loop class="rounded-lg mb-4 h-40 w-full object-containc:\Users\USER\Desktop\updating\0809(1)\0809(1).mp4">
          <source src="@/assets/video/williams.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 class="text-xl font-semibold text-green-700">Yam</h3>
        <p class="text-gray-600 text-sm mt-2">Healthy and tasty Yams</p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/palmoil1.jpg" alt="">
        <h3 class="text-xl font-semibold text-green-700"> Palm oil</h3>
        <p class="text-gray-600 text-sm mt-2">Well processed and packed palm oil.</p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/garri.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Garri</h3>
        <p class="text-gray-600 text-sm mt-2">Neatly processed garri .</p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/karnel2.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Palm Seedlings</h3>
        <p class="text-gray-600 text-sm mt-2">Healthy palm seedlings for transplanting.</p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/karnel1.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Palm kernel</h3>
        <p class="text-gray-600 text-sm mt-2">neatly stored palm kernel.</p>
      </div>

       <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/wateryam.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Water Yam</h3>
        <p class="text-gray-600 text-sm mt-2">Low suger</p>
      </div>

      <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/melonseed.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Melon seed</h3>
        <p class="text-gray-600 text-sm mt-2">Healthy melon seed for Soup and vegetable oil</p>
      </div>

         <div class="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
           <img src="../assets/image/uju.png" alt="">
        <h3 class="text-xl font-semibold text-green-700">Uju leaf</h3>
        <p class="text-gray-600 text-sm mt-2">Healthy vegetables.</p>
      </div>
    </div>


    <router-link to="/#contact">
      <div class="flex justify-center mt-10">
      <button class="bg-green-700 hover:bg-blue-700 outline-none px-12 py-4 rounded-full mt-3 text-white text-xl font-medium">Contact US</button>
    </div> 
    </router-link>
  </div>
</section>

<section>
  <div class="flex  flex-col justify-center  text-center  mb-5">
    <h3 class="font-bold text-1xl text-green-700">Farm Moments</h3>
     <p class="font-bold  text-black leading-5">Capturing the hard work, <br> dedication, and beauty of our farm.</p> 
  </div>

  <div class="flex flex-col md:flex-row md:p-5 gap-4 justify-center items-center mb-10">
    <video controls autoplay muted loop  class="w-[380px] h-[380px] object-cover rounded-4xl" >
      <source src="@/assets/video/williams.mp4" type="video/mp4" />
       Your browser does not support the video tag.
    </video>

    <img src="/src/assets/image/will2.jpg" alt="photo" class="w-[380px] h-[380px] object-cover rounded-4xl">
    <img src="/src/assets/image/ray.jpg" alt="photo" class="w-[380px] h-[380px] object-cover rounded-4xl">
    <img src="/src/assets/image/manager.jpg" alt="photo" class="w-[380px] h-[380px] object-cover rounded-4xl">
  </div>

  <div class="flex justify-center item-center mb-20">
      <router-link to="/gallary">
     <button class="bg-green-700 text-white font-bold px-10 py-3 rounded-lg hover:bg-yellow-800 transition">
      View More
      </button>
    </router-link>
  </div>
</section>

<section id="contact">
    <footer class="bg-green-900 text-white py-10">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    
    <!-- About Section -->
    <div>
      <img src="../assets/image/FARMLOGO.png " alt="" width="100">
      <h3 class="text-xl font-bold mb-4">Bamidele Egbonimale Agro Farms</h3>
      <p class="text-sm leading-relaxed">
        Dedicated to sustainable farming, producing the best palm oil, cassava, and crops while supporting our community.
      </p>
    </div>

    <!-- Contact Section -->
    <div>
      <h3 class="text-xl font-bold mb-4">Contact Us</h3>
      <ul class="space-y-2 text-sm">
      <li><a href="https://wa.me/2349017245986?text=Hello Egbonimale Farms%20I%27m%20interested%20in%20your%20farm%20products"
       target="_blank" class="text-red-500 font-extrabold hover:underline">Chat with us on WhatsApp</a></li>
        <li>📍 11, Benin-Agbor Road Igbogiri Edo State.</li>
        <li>📞 +234 9017245986</li>
        <li>✉️ philipegbonimale@gmail.com"</li>
      </ul>
    </div>

  </div>

  <!-- Bottom Bar -->
  <div class="border-t border-green-700 mt-8 pt-4 text-center text-sm">
    © 2025 Bamidele Egbonimale Agro Farms . All rights reserved.
  </div>
</footer>
</section>
</template>

<script setup>

</script>

 