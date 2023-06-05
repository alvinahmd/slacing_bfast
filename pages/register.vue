<template>
  <div>
    <div>
      <div class="z-0 flex w-full h-56 bg-blue-800 border place-content-center rounded-b-3xl">
        <img src="/logo1.png" alt="" class="w-84 h-32 mt-8 rounded-b-3xl">
      </div>
    </div>
    <section class="relative text-neutral-darkness body-font">
      <div class="container relative z-10 px-2 md:px-8 pt-32 mx-auto -top-60 md:-top-44 lg:px-4">
        <div class="flex flex-col w-full p-4 mx-auto mt-10 bg-white shadow-xl rounded-lg border-r-1 border-l-1 border-neutral-light md:p-8 lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
          <form class="w-full">
            <div class="relative mb-4">
              <div for="fullname" class="label">
                Nama Lengkap
              </div>
              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Masukan nama lengkap anda"
                class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2"
              > <!---->
            </div>
            <div class="relative mb-4">
              <div for="email" class="label">
                Email
              </div>
              <input
                id="email"
                type="email"
                placeholder="Masukan email aktif anda"
                name="email"
                class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2"
              > <!---->
            </div>
            <div class="relative mb-4">
              <div for="username" class="label">
                Username
              </div>
              <input
                id="username"
                type="username"
                placeholder="Masukan username"
                name="username"
                class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2"
              > <!---->
            </div>
            <div class="relative mb-4">
              <div for="password" class="label">
                Password
              </div>
              <input
                id="password"
                type="password"
                placeholder="Masukan Password"
                name="password"
                class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2"
              > <!---->
            </div>
            <div class="relative mb-4">
              <div for="repassword" class="label">
                Re-Password
              </div>
              <input
                id="repassword"
                placeholder="Masukan Re-Password"
                type="password"
                name="repassword"
                class="w-full px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2"
              > <!---->
            </div>
            <button
              type="submit"
              class="px-2 w-full py-2 uppercase font-semibold text-white transition duration-500 ease-in-out transform bg-blue-900 rounded-lg hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
            >
              Daftar
            </button>
          </form>
          <div class="mt-3 flex justify-center">
            <div class="text-neutral-dark mr-1">
              Anda Sudah Memiliki Akun?
            </div>
            <a href="/login" class="text-primary font-semibold ml-1">Log In</a>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full p-4 mx-auto md:p-8">
      <p class="mx-auto text-center text-blue-400">
        @2021 B-Fast. PT BP Batam. All Right Reserved
      </p>
    </div>
  </div>
</template>
