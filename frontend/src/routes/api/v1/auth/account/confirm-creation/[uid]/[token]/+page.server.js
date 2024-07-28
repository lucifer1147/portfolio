/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    if (params) {
        return params;
    }
}