<template>
    <div class="container mx-auto">
        <div class="w-36 h-36 mx-auto">
            <NuxtLink to="/"
                class="router-link-active router-link-exact-active text-xl font-extrabold font-Quick-starter uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-red-700"
                aria-current="page">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                            <path fill="#8A3FFC"
                                d="M49,-74.1C64.1,-66.6,77.3,-54,84.3,-38.5C91.2,-23.1,91.9,-4.9,87,10.8C82.1,26.5,71.5,39.7,59.1,47.6C46.6,55.5,32.2,58.2,18.4,61.7C4.6,65.3,-8.6,69.8,-19.1,66.2C-29.6,62.6,-37.4,50.9,-44,40C-50.5,29.1,-55.7,18.9,-57.9,8C-60.1,-3,-59.1,-14.8,-55.1,-25.8C-51.1,-36.8,-43.9,-47.1,-34.2,-57C-24.6,-67,-12.3,-76.6,2.3,-80.3C17,-83.9,33.9,-81.6,49,-74.1Z"
                                transform="translate(100 100)" />
                        </clipPath>
                    </defs>
                    <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                        xlink:href="@/assets/images/khanshifaul.webp" clip-path="url(#user-space)" />
                </svg>
            </NuxtLink>
        </div>

        <h1 class="text-4xl font-bold text-center">Administration Login</h1>
        <form class="max-w-md mx-auto mt-10 p-5 bg-gray-100 rounded shadow-lg">
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-6">
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="flex items-center justify-between">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign
                    In</button>
                <a href="#" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot
                    Password?</a>
            </div>
        </form>
    </div>
</template>