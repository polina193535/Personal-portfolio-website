<script lang="ts">
    import router from 'page';
    import { Router, Route } from 'svelte-routing';

    import Home from "./Home.svelte";

    import Comic from './Comic.svelte';

    const home = (event: MouseEvent) => {
        router("/Home")
    }
    const comic = (event: MouseEvent) => {
        router("/Comic")
    }


</script>

<nav id="desktop-nav">
        <div class="logo">Personal portfolio website</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
                <li>
                    <button class="button" on:click={comic}> XKCD Comic</button>
                </li>
            </ul>
        </div>
 </nav>     



<style>

nav, 
.nav-links {
    display: flex;
}

nav {
    justify-content: space-around;
    align-items: center;
    height: 17vh;
}

.nav-links {
    gap: 2rem;
    list-style: none;
    font-size: 1.5rem;
}

a {
    color: black;
    text-decoration: none;
    text-decoration-color: white;
    transition: all 300ms ease;
}

a:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);

}

.logo {
    font-size: 2rem;
}

.logo:hover {
    cursor: default;
}



</style>