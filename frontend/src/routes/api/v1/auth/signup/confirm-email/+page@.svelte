<script>
    import img from "$lib/images/6dd4114810b815580ff0e3ac19c04fa0.jpg";
    import {apiUrl} from "$lib/stores.js";

    let resendBox = false;

    let email = '';
    let message;
    let emailError;

    const toggleResendBox = (val, v = undefined) => {
        if (v !== undefined && Array.from(v.target.classList).includes('ins')) {
            return;
        }

        message = undefined
        emailError = undefined
        email = '';

        resendBox = val;
    }

    const resendLink = async () => {
        let url = $apiUrl + 'users/resend_activation/'
        let body = {
            email: email
        }

        let request = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        let response = await fetch(url, request)

        if (response.ok) {
            message = 'Email Sent! Check Your inbox.'
            emailError = undefined
        } else {
            emailError = await response.json()
            emailError = emailError.email[0]
            email = '';
        }
    }
</script>

<div class="flex items-center justify-center h-[90%] w-full">
    <div class={"flex justify-center transition-all duration-700 h-full w-full bg-black absolute -translate-y-10 " + (resendBox ? "z-10 bg-opacity-60" : "-z-10 bg-opacity-0")}
         on:click={(v)=>{toggleResendBox(false, v)}}>
        <div class={"ins fixed transition-all bg-white h-1/2 w-1/2 rounded-2xl flex flex-col text-black translate-y-1/2 justify-center items-center " + (resendBox ? "z-20 bg-opacity-100 opacity-100" : "-z-20 bg-opacity-0 opacity-0")}>
            {#if !message}
                <h2 class="ins text-4xl">Enter Your Email:</h2> <br>
                <input type="text" bind:value={email} placeholder={emailError || 'Enter your email address'} class={"ins bg-gray-300 h-10 w-1/2 rounded-md px-4" + (emailError ? ' placeholder-red-400': '')}> <br>
                <button class="ins transition-colors bg-teal-300 w-1/3 py-2 rounded-full hover:bg-teal-400" on:click={resendLink}>Resend
                    Link
                </button>
            {:else}
                <p class="ins text-lg text-black">{message}</p>
            {/if}
        </div>
    </div>
    <div class="flex items-center justify-center h-full w-full">
        <div class="h-2/3 w-2/3 backdrop-blur-2xl bg-opacity-50 bg-teal-300 rounded-2xl flex items-center justify-center gap-32">
            <div class="w-[50%] h-full rounded-l-2xl"
                 style="background: url('{img}') center">
                <div class="h-full w-full bg-gradient-to-b from-teal-500 to-[rgba(20 184 166 / 0.2)] flex flex-col items-center justify-center text-4xl py-10 rounded-l-2xl">
                    SIGN UP!
                </div>
            </div>
            <div class="w-[50%] text-center pr-32 text-2xl">
                Thank You for signing up! <br>
                Check Your email to confirm your account.

                <br>
                <button on:click={() => {toggleResendBox(true)}}
                        class="transition-colors text-sm text-blue-600 mt-8 underline hover:text-indigo-600">Resend
                    Activation Link
                </button>
            </div>
        </div>
    </div>
</div>