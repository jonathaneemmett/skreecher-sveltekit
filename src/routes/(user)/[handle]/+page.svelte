<script>
    import { skreeches } from '$root/store';
    import { page } from '$app/stores';
    

    // Components
	import AddSkreech from '../../../components/content/AddSkreech.svelte';
	import SkreechItem from '../../../components/content/SkreechItem.svelte';

       
    function handleAddSkreech(e) {
        let skreechObj = {
            _id: $skreeches.length + 1,
            user: $page?.data?.user?.name,
            handle: $page?.data?.user?.handle,
            content: e.detail,
            likes: 0,
            replies: 0,
            reSkreeches: 0,
            time: new Date().toLocaleString()
        }

        skreeches.update(skreeches => [...skreeches, skreechObj].sort((a, b) => b._id - a._id));

    }

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
    <AddSkreech on:addSkreech={handleAddSkreech} />
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
        height: 100%;
        overflow-y: scroll;
    }

    div::-webkit-scrollbar {
                display: none;
            }
</style>