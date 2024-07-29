<script>
    export let data;

    import {isLoggedIn} from "$lib/commonfuncs.js";
    import {username, email, active} from "$lib/stores.js";
    import {onMount} from "svelte";

    active.set('dashboard')
    username.set(data.username)
    email.set(data.email)

    let res;
    onMount(async () => {
        res = await isLoggedIn();
        console.log(res);
    })

</script>