<script lang="ts">

    import ode1 from '../img/ode1.jpg';
    import code2 from '../img/code2.jpg';

    function openBookStore() {
        location.href = 'https://github.com/polina193535/Online-Book-Store';
    }

    function openFSA() {
        location.href = 'https://github.com/polina193535/FSA-to-RegExp-Translator';
    }
</script>

<section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
        <div class="about-containers">
            <div class="details-container color-container">
                <div class="article-container">
                    <img src={ode1} alt="project 1" class="project-img">
                </div>
                <h2 class="experience-sub-title project-title">Online Book Store</h2>
                <div class="bth-container">
                    <button class="btn btn-color-2 project-btn" on:click={openBookStore}>
                        Github
                    </button>
                </div>
            </div>
            <div class="details-container color-container">
                <div class="article-container">
                    <img src={code2} alt="project 2" class="project-img">
                </div>
                <h2 class="experience-sub-title project-title">FSA to RegExp</h2>
                <div class="bth-container">
                    <button class="btn btn-color-2 project-btn" on:click={openFSA}>
                        Github
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
   

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

p {
    color: rgb(85, 85, 85);
}

section {
    padding-top: 4vh;
    height: 96vh;
    margin: 0 10rem;
    box-sizing: border-box;
    min-height: fit-content;
}

.about-containers {
    gap: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
}



.section__text__p1 {
    text-align: center;
}

.section__text__p1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.about-containers {
    display: flex;
}


.details-container {
    padding: 1.5rem;
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
}

p {
    color: rgb(85, 85, 85);
}

.title {
    font-size: 3rem;
    text-align: center;

}


.btn {
    font-weight: 600;
    transition: all 300ms ease;
    padding: 1rem;
    border-radius: 2rem;
}


.btn-color-2 {
    border: rgb(53, 53, 53) 0.1rem solid;

}

.btn-color-2:hover{
   cursor: pointer;
}

.btn-color-2:hover{
   background: rgb(53, 53, 53);
   color: white;
}




.btn-color-2 {
    background: none;
}

.btn-color-2:hover {
    border: rgb(255, 255, 255) 0.1rem solid;
}



#projects {
    position: relative;
}



.color-container {
    border-color: rgb(163, 163, 163);
    background: rgb(250, 250, 250);

}

.project-img {
    border-radius: 2rem;
    width: 90%;
    height: 90%;
}


.project-title {
    margin: 1rem;
    color: black;
}

.project-btn {
    color: black;
    border-color: rgb(163, 163, 163);
}

.btn-color-2 {
    border: rgb(53, 53, 53) 0.1rem solid;
}


</style>
