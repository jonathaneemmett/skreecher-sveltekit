<script>
    import { page } from '$app/stores';
    import { skreeches } from '$root/store';

    // Components
	import AddSkreech from '../../../components/content/AddSkreech.svelte';
	import SkreechItem from '../../../components/content/SkreechItem.svelte';

    function handleLike(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].likes++;     
    }

    function handleReskreech(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].reSkreeches++; 
    }

    function handleReply(e) {
        let skreech = e.detail;
        let index = $skreeches.findIndex(s => s._id === skreech._id);
        $skreeches[index].replies++;     
    }
</script>

<div>
    <h1>Home</h1>
    <AddSkreech />
    {#each $skreeches as skreech}
        <SkreechItem {skreech} on:like={handleLike} on:reply={handleReply} on:reSkreech={handleReskreech} />
    {/each}
</div>

<style>
    h1 {
        color: #fff;
    }

    div {
        width: 100%;
    }
</style>