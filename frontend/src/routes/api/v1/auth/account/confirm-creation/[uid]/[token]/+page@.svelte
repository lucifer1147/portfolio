<script>
    import {onMount} from "svelte";

    export let data;
    import {apiUrl} from "$lib/stores.js";

    let uid = data.uid
    let token = data.token

    let url = $apiUrl + 'users/activation/'
    let message = "Activating Your Account..."

    const onLoadActivate = async () => {
        let body = {
            uid: uid,
            token: token
        }

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        })

        if (response.ok) {
            message = 'Account Activated!\nYou may now close this tab and login with your credentials.'
        } else {
            message = 'Some error occurred, please try contacting the site administrator.'
        }
    }
    onMount(() => onLoadActivate())
</script>

<div class="h-[90%] flex items-center justify-center">
    <div class="bg-teal-300 bg-opacity-40 h-1/3 w-1/3 rounded-2xl font-light flex items-center justify-center text-2xl p-10">
        {message}
    </div>
</div>

