<script>
    import "../app.css";
    import {active} from "$lib/stores.js";
</script>

<div class="w-full font-roboto text-white bg-gradient-to-r h-full font-extrabold flex-wrap"
     style="background-image: radial-gradient(circle at center left, rgb(22 78 99) 0%, rgb(2 6 23) 50%)">
    <nav class="flex items-center h-[10%] backdrop-blur-2xl w-full pb-10 px-20 bg-neutral-900 bg-opacity-50 pt-10">
        <h2 class="text-2xl w-[10%]">A Portfolio</h2>

        <div class="w-[80%] flex items-center justify-evenly h-full text-neutral-700">
            <a class={($active == 'home' ? "text-teal-500" : "")} href="/">Home</a>
            <a class={($active == 'about' ? "text-teal-500" : "")} href="/about">About Me</a>
            <a class={($active == 'projs' ? "text-teal-500" : "")} href="/projs">My Projects</a>
            <a class={($active == 'contact' ? "text-teal-500" : "")} href="/contact">Contact Me</a>
        </div>

        <button class="w-[10%] bg-teal-400 drop-shadow-lg rounded-xl h-[40px] border-2 border-cyan-900">Subscribe
        </button>
    </nav>

    <slot/>
</div>