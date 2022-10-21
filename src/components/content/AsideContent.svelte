<script>
    //Components
    import Card from '../layout/Card.svelte';
	import Search from '../layout/Search.svelte';

    
    let year = new Date().getFullYear();

</script>

<div style="width: 100%">
    <div class="aside-header">
        <Search />
    </div>
    <div class="aside-content">
        <Card>
            <h2>Whats Happening?</h2>
        </Card>
        <Card>
            <h2>Who To Follow</h2>
        </Card>
    </div>
    <div class="aside-footer">
        <div class="footer-nav">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
            <a href="/">Ads info</a>
            <a href="/">More</a>
        </div>
        <div class="footer-copy">
            <p>© {year} Skreecher, Inc.</p>
        </div>
    </div>
</div>

<style>
    .aside-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        height: 10%;
    }

    .aside-content {
        width: 100%;
        height: 80%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .aside-footer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 1rem;
        height: 10%;
    }

    .footer-nav {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
       
    }

    .footer-nav a {
        margin-right: 1rem;
        color: #fff;
        text-decoration: none;
        font-size: .8rem;
        font-weight: 600;
    }

    .footer-copy {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
        color: #fff;
        font-size: .9rem;
        font-weight: 600;
    }

    h2 {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
    }

    
</style>