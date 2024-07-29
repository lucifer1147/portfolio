<script>
    import {isLoggedIn} from "$lib/commonfuncs.js";
    import {goto} from "$app/navigation";
    import {browser} from "$app/environment";

    if (browser)
    isLoggedIn().then((v) => {
        if (!v) goto('/')
    })


</script>
<slot />