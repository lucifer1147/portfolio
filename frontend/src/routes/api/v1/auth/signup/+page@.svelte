<script>
    import img from '$lib/images/6dd4114810b815580ff0e3ac19c04fa0.jpg'
    import {apiUrl} from "$lib/stores.js";
    import {browser} from "$app/environment";
    import {goto} from "$app/navigation";

    let usernameError, emailError, passwordError;

    const onSubmit = async () => {
        let url = $apiUrl + "users/"

        let body = {
            email: details.email,
            username: details.username,
            password: details.password,
            re_password: details.password
        }

        usernameError = undefined
        emailError = undefined
        passwordError = undefined

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(body)
        })


        if (response.ok && browser) {
            await goto('/api/v1/auth/signup/confirm-email')
            return
        }

        let json = await response.json()

        if (json.username !== body.username && json.username !== undefined) {
            usernameError = json.username[0]
            details.username = ''
        }
        if (json.password !== body.password && json.password !== undefined) {
            passwordError = json.password[0]
            details.password = ''
        }
        if (json.email !== body.email && json.email !== undefined) {
            emailError = json.email[0]
            details.email = ''
        }

    }

    let details = {
        email: "",
        username: "",
        password: ""
    }
</script>

<div class="flex flex-col gap-y-4 items-center justify-center h-[90%] w-full flex-wrap">
    <div class="h-2/3 w-2/3 backdrop-blur-2xl bg-opacity-50 bg-teal-300 rounded-2xl flex items-center justify-center gap-32">
        <div class="w-[50%] h-full rounded-l-2xl"
             style="background: url('{img}') center">
            <div class="h-full w-full bg-gradient-to-b from-teal-500 to-[rgba(20 184 166 / 0.2)] flex flex-col items-center justify-center text-4xl py-10 rounded-l-2xl">
                SIGN UP!
            </div>
        </div>
        <div class="w-[50%]">
            <div class="w-2/3 flex items-center gap-1 text-xs">
                <hr class="w-2">
                Email
                <hr class="w-full">
            </div>
            <input type="text"
                   class={"h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900" + (emailError ? " placeholder-red-300" : "")}
                   placeholder={emailError || "Email Address..."} bind:value={details.email}/>
            <div class="w-2/3 flex items-center gap-1 text-xs">
                <hr class="w-2">
                Username
                <hr class="w-full">
            </div>
            <input type="text"
                   class={"h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900" + (usernameError ? " placeholder-red-300" : "")}
                   placeholder={usernameError || "Username..."} bind:value={details.username}/>
            <div class="w-2/3 flex items-center gap-1 text-xs">
                <hr class="w-2">
                Password
                <hr class="w-full">
            </div>
            <input type="password"
                   class={"h-12 rounded-lg w-2/3 px-3 text-lg text-slate-900 mb-1" + (passwordError ? " placeholder-red-300" : "")}
                   placeholder={passwordError || "Password..."} bind:value={details.password}/>

            <br>
            <button class="w-2/3 h-12 mb-3 mt-1 bg-gray-800 rounded-lg" on:click={onSubmit}>Sign Up</button>

            <div class="flex w-2/3 items-center">
                <hr class="w-full">
                <p class="text-xs">OR</p>
                <hr class="w-full">
            </div>

            <button class="w-2/3 h-12 mb-1 mt-3 bg-white rounded-lg text-black">Signup with Google</button>
            <br>
            <button class="w-2/3 h-12 mb-1.5 bg-slate-800 rounded-lg">Signup with GitHub</button>
        </div>
    </div>
    <p class="text-sm font-semibold w-full text-center">Already have an account? Login <a
            href="/api/v1/auth/login" class="text-blue-500 hover:text-indigo-500">here</a></p>
</div>