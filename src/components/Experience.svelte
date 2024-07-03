<script lang="ts">

  import galochka from '../img/galochka.png';

  export let frontendExperience = [
    { technology: 'HTML', level: 'Intermediate' },
    { technology: 'CSS', level: 'Intermediate' },
    { technology: 'JavaScript', level: 'Basic' },
    { technology: 'TypeScript', level: 'Basic' }
  ];

  export let backendExperience = [
    { technology: 'Java', level: 'Intermediate' },
    { technology: 'C++', level: 'Intermediate' },
    { technology: 'Python', level: 'Intermediate' },
    { technology: 'C', level: 'Intermediate' }
  ];


</script>

<section id="experience">
  <p class="section__text__p1">Explore My</p>
  <h1 class="title">Experience</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container">
        <h2 class="experience-sub-title">Frontend Development</h2>
        <div class="article-container">
          {#each frontendExperience as item}
            <article>
              <img src={galochka} alt="Experience icon" class="icon">
              <div>
                <h3>{item.technology}</h3>
                <p>{item.level}</p>
              </div>
            </article>
          {/each}
        </div>
      </div>
      <div class="details-container">
        <h2 class="experience-sub-title">Backend Development</h2>
        <div class="article-container">
          {#each backendExperience as item}
            <article>
              <img src={galochka} alt="Experience icon" class="icon">
              <div>
                <h3>{item.technology}</h3>
                <p>{item.level}</p>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>






<style>

.icon {
    cursor: pointer;
    height: 2rem;
}


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


#experience {
    position: relative;
}

.experience-sub-title{
    color: rgb(85, 85, 85);
    font-weight: 600;
    font-size: 1.75rem;
    margin-bottom: 2rem ;
}

.experience-details-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row ;
    gap: 2.5rem;
    justify-content: space-around;
}

article {
    display: flex;
    width: 10rem;
    justify-content: space-around;
    gap: 0.5rem;
}

article .icon {
    cursor: default;
}


</style>