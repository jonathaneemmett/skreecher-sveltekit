<script>
    import { page } from '$app/stores';

</script>

<h1>Hello, {$page?.data?.user?.handle}!</h1>

<style>
    h1 {
        color: #fff;
    }
</style>