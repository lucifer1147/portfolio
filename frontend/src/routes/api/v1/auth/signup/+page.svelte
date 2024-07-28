<script>
    import img from '$lib/images/6dd4114810b815580ff0e3ac19c04fa0.jpg'
    import {apiUrl} from "$lib/stores.js";

    const onSubmit = () => {
        let url = $apiUrl + "auth/"
    }

    let details = {
        email: "",
        username: "",
        password: ""
    }
</script>

<div class="flex items-center justify-center h-[90%] w-full">
    <div class="h-2/3 w-2/3 backdrop-blur-2xl bg-opacity-50 bg-teal-300 rounded-2xl flex items-center justify-center gap-32">
        <div class="w-[50%] h-full rounded-l-2xl"
             style="background: url('{img}') center">
            <div class="h-full w-full bg-gradient-to-b from-teal-500 to-[rgba(20 184 166 / 0.2)] flex flex-col items-center justify-center text-4xl py-10 rounded-l-2xl">
                SIGN UP!
            </div>
        </div>
        <div class="w-[50%]">
            <input type="text" class="h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900 mb-1" placeholder="Email Address..." bind:value={details.email} />
            <input type="text" class="h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900 mb-1" placeholder="Username..." bind:value={details.username} />
            <input type="password" class="h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900 mb-1" placeholder="Password..." bind:value={details.password} />

            <br>
            <button class="w-2/3 h-12 mb-3 mt-1 bg-gray-800 rounded-lg" on:click={onSubmit()}>Sign Up</button>

            <div class="flex w-2/3 items-center">
                <hr class="w-full"><p class="text-xs">OR</p><hr class="w-full">
            </div>

            <button class="w-2/3 h-12 mb-1 mt-3 bg-white rounded-lg text-black">Signup with Google</button>
            <br>
            <button class="w-2/3 h-12 mb-1.5 bg-slate-800 rounded-lg">Signup with GitHub</button>
        </div>
    </div>
</div>