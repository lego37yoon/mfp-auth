<script>
    /** @type {import('./$types').PageData} */
    export let data;

    
</script>

<svelte:head>
    <title>블로그 목록 | 메아리 for 포트폴리오</title>
</svelte:head>

<main>
    <h1>소유 중인 <span class="tistory">TISTORY</span> 블로그 목록</h1>
    <p>현재 계정에 연결된 티스토리 블로그는 다음과 같습니다. 연결할 블로그를 선택해주시면 설정 가이드를 표시해드립니다.</p>
    <section id="select-blog-section">
        <form id="select-blog" method="GET">
            {#each data.blogs as blog}
            <label>
                <input type="radio" name="blog" value="{blog.name}">
                <img src={blog.profileThumbnailImageUrl}>
                <p class="title">{blog.title}</p>
                <p>
                    {blog.secondaryUrl === "" ? blog.url : blog.secondaryUrl} | 
                    {blog.nickname} | 
                    {blog.default === "Y" ? "기본 블로그" : "블로그"} {blog.role} |
                    글 {blog.statistics.post}개 댓글 {blog.statistics.comment}개 방명록 {blog.statistics.guestbook}개
                </p>
            </label>                
            {/each}
            <button type="submit">확인 →</button>
        </form>
    </section>
</main>

<style>
    .tistory {
        color: #ff5544;
    }

    h1, p {
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        color: rgb(128, 169, 216);
    }

    h1 {
        font-weight: 400;
    }

    p {
        font-weight: 500;
    }

    main {
        text-align: center;
        word-break: keep-all;
        padding: 0.5em;
    }

    #select-blog-section {
        display: flex;
        justify-content: center;
    }

    label {
        display: block;
        padding: 0.5em;
        border-radius: 5px;
    }

    label p {
        display: inline-block;
        margin-left: 4em
    }

    label img {
        height: 3em;
        width: 3em;
        background-color: aliceblue;
        border: 2px solid aliceblue;
        overflow: hidden;
        border-radius: 50%;
        object-fit: cover;
        position: fixed;
        display: inline-block;
    }

    label:hover {
        background: #e4e4e4;
    }

    button {
        background: white;
        color: rgb(128, 169, 216);
        font-family: 'SUIT Variable', 'Noto Sans CJK KR Light', sans-serif;
        font-size: 1em;
        font-weight: 500;
        border: rgb(128, 169, 216) 2px solid;
        border-radius: 5px;

        padding: 0.5em 1em 0.5em 1em;
        margin: 1em 0 1em 0;
    }

    button:hover {
        background:rgb(128, 169, 216);
        color: #535353;
    }

    section button:focus-visible {
        outline: solid 2px #414141;
    }
</style>

