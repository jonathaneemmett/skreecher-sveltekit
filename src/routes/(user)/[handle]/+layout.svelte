<script>
	import Navbar from "../../../components/layout/Navbar.svelte";

</script>

<header>
    <Navbar />
</header>
<main class="content">
    <slot />
</main>

<style>
    main {
        height: 100vh;
        background: #2f2830;
        display: flex;
    }
</style>