<script>
    import { page } from "$app/stores"

    const currentYear = new Date().getFullYear();
</script>

<header>
    <ul>
        <li><a href="./" class="title">메아리<sup>포트폴리오</sup></a></li>
        <ul class="rightMenu" role="navigation">
            <li><a href="https://twitter.com/paperbox_update" target="_blank" rel="noreferrer">Twitter</a></li>
            <li><a href="https://github.com/lego37yoon/" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
    </ul>
</header>

<slot></slot>

<footer>
    <hr>
    <p>&copy; {currentYear} 종이상자. Made with &lt;3 and Svelte. <a href="{$page.url.origin}/oss">OSS Notice</a></p>
</footer>

<style>
    :global(body) {
        background: #EDF3F7;
    }

    :global(.svelte-main) {
        background: white;
        margin: 1rem;
        border-radius: 10px;
    }

    @media screen and (max-width: 768px) {
        :global(.svelte-main) {
            margin: 0.5rem;
        }
    }


    /* 헤더 부분 UI CSS */
    header {
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        font-weight: lighter;
        color: rgb(128, 169, 216);
        font-size: 1.5rem;
        height: 4rem;
        border-bottom: solid 2px rgb(128, 169, 216);
        margin-left: 1rem;
        margin-right: 1rem;
    }

    header ul {
        list-style: none;
        display: inline;
        padding: 0;
    }

    header li {
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        font-weight: lighter;
        color: rgb(128, 169, 216);
    }

    .title {
        margin: 1.5rem 1rem 0.5rem 1rem;
        font-weight: 600;
        float: left;
        color: rgb(128, 169, 216);
    }
    .title {
        text-decoration: none;
    }
    .title:visited {
        color: rgb(128, 169, 216);
    }
    .rightMenu {
        padding: 1.5rem 1rem 0.5rem 1rem;
        display: inline;
        float: right;
    }
    .rightMenu li {
        display: inline;
        font-size: 1.0em;
    }

    .rightMenu a {
        color: rgb(128, 169, 216);
        text-decoration: none;
    }

    .rightMenu mwc-icon-button-toggle {
        margin-top: -0.5rem;
        margin-bottom: -0.5rem;
    }

    /* 푸터 부분 CSS */
    footer p {
        padding: 0 1rem 0.5rem 1rem;
        color: rgb(128, 169, 216);
        margin-top: 0.5rem;
    }

    footer p a {
        display: inline-block;
    }

    footer hr {
        border: rgb(128, 169, 216) 1px solid;
        margin: 0 1rem 0 1rem;
    }
</style>