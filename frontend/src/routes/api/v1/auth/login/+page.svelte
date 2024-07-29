<script>
    import {apiUrl} from "$lib/stores.js";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";

    let details = {
        email: '',
        password: ''
    }

    let emailError, passwordError, message;

    const createJWT = async () => {
        message = undefined;
        let url = $apiUrl + 'jwt/create/'

        let request = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(details)
        }

        let response = await fetch(url, request)
        if (response.ok) {
            let jwt = await response.json()
            localStorage.setItem('jwt', JSON.stringify(jwt))

            if (browser) {
                goto('/dashboard')
            }

            return
        }

        let js = await response.json()

        emailError = js.email
        if (!emailError) {
            details.email = ''
        }

        console.log(js)

        passwordError = js.password
        if (!passwordError) {
            details.password = ''
        }

        if (js.detail) {
            message = 'Either the Email or the Password is incorrect'
        }
    }
</script>

<div class="w-full h-[90%] flex items-center justify-center">
    <div class="flex flex-col justify-center items-center w-1/2 h-2/3 bg-white backdrop-blur-2xl bg-opacity-50 rounded-2xl drop-shadow-lg text-black px-20">
        <h2 class="text-4xl">Welcome Back!</h2>

        <div class="w-full mt-10 mb-5">
            <div class="font-semibold text-md w-full text-center text-red-700">{message || ''}</div>
            <div class="w-full text-sm flex items-center gap-x-1">
                <hr class="w-[10%] border-black">
                Email
                <hr class="w-full border-black">
            </div>
            <input type="text" bind:value={details.email} class={"bg-gray-300 w-full h-12 rounded-lg mb-1 px-4" + (emailError ? ' placeholder-red-400' : '')} placeholder={emailError || 'Email Address...'}>

            <div class="w-full text-sm flex items-center gap-x-1">
                <hr class="w-[10%] border-black">
                Password
                <hr class="w-full border-black">
            </div>
            <input type="password" bind:value={details.password} class={"bg-gray-300 w-full h-12 rounded-lg mb-3 px-4" + (passwordError ? ' placeholder-red-400' : '')} placeholder={passwordError || 'Password...'}>
        </div>

        <button class="w-full bg-teal-300 hover:bg-teal-400 h-12 text-xl rounded-lg" on:click={createJWT}>Login</button>
    </div>
</div>