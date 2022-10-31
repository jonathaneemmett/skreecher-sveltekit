<script>
    import { page } from '$app/stores';
    import Modal from './Modal.svelte';
    import SkreechForm from '../content/Skreeches/SkreechForm.svelte';

    export let showModal = false;

    function handleHandleShowModal() {
        showModal = !showModal;
    }
</script>

<nav>
    <div class="nav-header">
        <div class="logo">
            <a href="/">S</a>
        </div>
    </div>
    <div class="nav-content">
        <ul>
            <li>
                <a href="/">
                    <img src="/40/home_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Home</span>
            </li>
            <li>
                <a href="/">
                    <img src="/40/tag_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Explore</span>
            </li>
            <li>
                <a href="/">
                    <img src="/40/notifications_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Notifications</span>
            </li>
            <li>
                <a href="/">
                    <img src="/40/mail_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Messages</span>
            </li>
            <li>
                <a href="/">
                    <img src="/40/bookmark_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Bookmarks</span>
            </li> 
            <li>
                <a href="/">
                    <img src="/40/list_alt_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Lists</span>
            </li>
            <li>
                <a href="/">
                    <img src="/40/person_FILL0_wght400_GRAD0_opsz40.svg" alt="">
                </a>
                <span>Profile</span>
            </li>
            <li>
                <a href="/">
                    <div class="circle">
                        <img src="/24/more_vert_FILL0_wght400_GRAD0_opsz24.svg" alt="">
                    </div>                    
                </a>
                <span>More</span>
            </li>
            <li>
                <button class="btn btn-primary btn-rounded" on:click={() => showModal = !showModal}>Skreech</button>
            </li> 
        </ul>
    </div>
    <div class="nav-footer">
        <form action="/logout" method="post">
            <button type="submit" class="logoutButton">
                <img src="/24/logout_FILL0_wght400_GRAD0_opsz24.svg" alt=""> 
            </button>
        </form> 
    </div>
</nav>
<Modal on:close={handleHandleShowModal} show={showModal}>
    <span slot="head">
        <h2>Add A Skreech</h2>
    </span>
    <span slot="body">
        <SkreechForm />
    </span>
</Modal>
<style>
    .nav-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        height: 10%;
    }

    .nav-content {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .nav-footer {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        padding: 1rem;
        height: 10%;
    }

    .logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 2rem 2rem 2rem;
    }

    .logo a {
        font-size: 3rem;
        color: rgba(129, 205, 198, 1);
        font-style: italic;
        font-family: 'Dancing Script', cursive;
        border-bottom: 1px solid rgba(129, 205, 198, 0.2);
    }

    nav {
        background: #2f2830;
        width: 100%;
        padding: 1rem 0;

        height: 100%;
    }

    ul {
        list-style: none;
        width: 300px;

    }

    li {
        margin: .5rem 1rem;
        display: flex;
        align-items: center;
        color: #fff;
        padding: 0.25rem;
    }

    span {
        font-size: 1.5rem;
    }

    a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 2rem;
        margin: 0 1.5rem 0 0 ;
        width: 2rem;
    }

    a:hover {
        color: rgba(129, 205, 198, 1);
    }

    form {
        display: block;
        width: 45px;
    }

    .logoutButton {
        background: none;
        border: none;
        color: #fff;
        cursor: pointer;
        font: inherit;
        padding: 0;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1.1rem
    }

    img {
        width: 2.25rem;

        filter: invert(96%) sepia(38%) saturate(26%) hue-rotate(10deg) brightness(109%) contrast(107%);
    }

    img:hover {
        filter: invert(94%) sepia(80%) saturate(388%) hue-rotate(93deg) brightness(84%) contrast(90%);
    }

    .logoutButton:hover {
        color: rgba(129, 205, 198, 1);
    }

    a .circle {
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(255, 255, 255, 1);
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 1px;
        color: #fff;
    }
</style>