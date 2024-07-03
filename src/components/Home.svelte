<script lang="ts">  
  import Projects from './Projects.svelte';
  import Header from './Header.svelte';
  import About from './About.svelte';
  import Experience from './Experience.svelte';
  import Contact from './Contact.svelte';
  import Footer from './Footer.svelte';
  import about from '../img/photo_5422819102726151849_x.jpg';
</script>


<body>
  <Header/>
    <section id="profile">
        <div class="section__pic-container">
            <img src={about}
                alt="" style="border-radius: 50%;">
        </div>
        <div class="section__text">
            <p class="section__text__p1">Hello, I'm</p>
            <h1 class="title">Polina Kostikova </h1>
            <p class="section__text__p2">Innopolis University Student</p>
        </div>
    </section>

  <About/>

  <Experience/>

  <Projects/>

  <Contact/>

  <Footer/>

    
</body>

<style>

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}



#profile {
    display: flex;
    justify-content: center;
    gap: 5rem;
    height: 80vh;
}

.section__pic-container {
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 0;
}

.section__text {
    align-self: center;
    text-align: center;
}

.section__text p {
    font-weight: 600;
}

.section__text__p1 {
    text-align: center;
}

.section__text__p1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.title {
    font-size: 3rem;
    text-align: center;

}

</style>
