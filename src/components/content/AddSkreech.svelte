<script>
    import { page } from '$app/stores';
</script>

<div class="skreech-main">
    <div class="skreech-content">
        <input type="text" placeholder='Skreech it!' multiline="true">
    </div>
    <div class="skreech-footer">
        <div><!-- <div>Future icons section</div> --></div>
        <button class="btn btn-primary btn-rounded btn-skreetch">Skreech</button>
    </div>
</div>

<style>
    .skreech-main {
        color: #fff;
        width: 100%;
    }
    .skreech-content {
        width: 100%;
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .skreech-footer {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        height: 10%;
    }


    input {
        width: 100%;
        height: 100%;
        border: none;
        border-bottom: 1px solid rgba(129, 205, 198, 0.2);
        background: rgba(0, 0, 0, 1);
        color: rgba(129, 205, 198, 1);
        font-size: 1.5rem;
        padding: 0.5rem;
        height: 100px;
        width: 100%;
    }

    
    
</style>