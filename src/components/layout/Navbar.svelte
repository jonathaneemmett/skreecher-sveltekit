<script>
    import { page } from '$app/stores';
    
</script>

<nav>
    <div class="logo">
        <a href="/">S</a>
    </div>
    <ul>
        <li><a href="/settings">
            <img src="/settings_FILL0_wght400_GRAD0_opsz20.svg" alt="">
        </a></li>
        <li>
            <form action="/logout" method="post">
                <button type="submit">
                    <img src="/logout_FILL0_wght400_GRAD0_opsz20.svg" alt="">
                </button>
            </form> 
        </li>    
    </ul>
</nav>

<style>
    .logo a {
        font-size: 3rem;
        color: rgba(129, 205, 198, 1);
        font-style: italic;
        font-family: 'Dancing Script', cursive;
    }

    nav {
        background: #2f2830;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 2rem;
        border-bottom: 1px solid rgba(129, 205, 198, 0.2);
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1.1rem
    }

    a:hover {
        color: rgba(129, 205, 198, 1);
    }

    form {
        display: block;
        width: 45px;
    }

    button {
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
        filter: invert(96%) sepia(38%) saturate(26%) hue-rotate(10deg) brightness(109%) contrast(107%);
    }

    img:hover {
        filter: invert(94%) sepia(80%) saturate(388%) hue-rotate(93deg) brightness(84%) contrast(90%);
    }

    button:hover {
        color: rgba(129, 205, 198, 1);
    }
</style>