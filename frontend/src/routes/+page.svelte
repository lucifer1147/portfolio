<script>
    import {active} from '$lib/stores.js';
    import {redirect} from "@sveltejs/kit";
    active.set('home')
</script>

<div class="flex justify-center items-center h-[90%]">
    <div class="flex flex-wrap items-center justify-center h-[90%] w-2/3">
        <div class="pl-20">
            <p class="text-[#909090] drop-shadow-lg text-md">I'm a</p>
            <h1 class="text-4xl mb-10 text-teal-500 drop-shadow-lg w-1/2">Full Stack Developer</h1>
            <p class="text-white font-semibold text-2xl shadow-amber-800 w-1/2">
                Welcome to my portfolio! I'm a full-stack developer specializing in Django (Python) and SvelteKit!
            </p>

            <div class="pt-32">
                <button class="bg-teal-400 text-xl px-6 py-3 rounded-l-lg w-1/4"><a href="/api/v1/auth/signup">Sign Up</a></button>
                <button class="bg-teal-400 text-xl px-6 py-3 rounded-r-lg w-1/4"><a href="/api/v1/auth/login">Login</a></button>
            </div>

            <div class="flex w-1/2 justify-center items-center text-[#909090]">
                <hr class="w-full">
                OR
                <hr class="w-full">
            </div>

            <div>
                <button class="bg-teal-900 text-xl text-gray-400 px-6 py-3 rounded-lg w-1/2">Continue as Guest</button>
            </div>
        </div>
    </div>

    <div class="pr-32">

    </div>
</div>
