import {browser} from "$app/environment";
import {apiUrl} from "$lib/stores.js";

export const isLoggedIn = async () => {
    if (browser) {
        let jwt = JSON.parse(localStorage.getItem('jwt'))
        if (jwt && jwt.access && jwt.refresh) {
            let url;
            await apiUrl.subscribe((v) =>
                url = v + 'jwt/verify/'
            )

            let request = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({token: jwt.access})
            }

            let response = await fetch(url, request)
            return response.ok;
        }
    }
    return false
}

export const refreshJWT = async (refresh) => {
    let url;
    await apiUrl.subscribe((v) =>
        url = v + 'jwt/refresh/'
    )

    let request = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({refresh: refresh})
    }

    let response = await fetch(url, request)
    if (!response.ok) {
        return null;
    }

    let js = response.json()
    return js.access
}

export const verifyJWT = async (access) => {
    let url;
    await apiUrl.subscribe((v) =>
        url = v + 'jwt/verify/'
    )

    let request = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({token: access})
    }

    let response = await fetch(url, request)
    return response.ok;
}

export const getUserDetails = async (access) => {
    let url;
    await apiUrl.subscribe((v) =>
        url = v + 'users/me/'
    )

    let request = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': 'Bearer ' + access
        }
    }

    let response = await fetch(url, request)
    return response.json()
}

let triedRefreshing = false;
export const loadUserData = async () => {
    if (browser) {
        let jwt = JSON.parse(localStorage.getItem('jwt'))

        if (jwt !== null) {
            if (jwt.access&& jwt.refresh) {
                if (await verifyJWT(jwt.access)) {
                    return await getUserDetails(jwt.access);
                } else {
                    if (!triedRefreshing) {
                        triedRefreshing = true;
                        jwt.access = await refreshJWT(jwt.refresh)
                        localStorage.setItem('jwt', JSON.stringify(jwt))

                        await loadUserData()
                        return;
                    }
                    console.error('JWT is not verified')
                }
            }
        }

        return {
            username: 'Guest',
            email: '',
        }
    }
}