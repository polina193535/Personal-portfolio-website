<script lang="ts">
  import medal from '../img/medal.png';
  import education from '../img/education.png';
  import me from '../img/photo_5422364068121008391_y.jpg';


  let experience = '0+ years\nFrontend Development';
  let educationInfo = 'Secondary general\neducation';
  let aboutText = `I am a first year student of Innopolis University. Field of study: Information
    systems engineering. I am 19 years old. All my life I lived in Vladimir, and now I am in Innopolis. 
    I have already learned several programming languages and now I am immersing myself in the world of front-end development.`;
 
</script>

<section id="about">
  <p class="section__text__p1">Get To Know More</p>
  <h1 class="title">About Me</h1>
  <div class="section-container">
    <div class="section__pic-container">
      <img src={me} alt="About" style="border-radius: 5%;" class="about-pic">
    </div>
    <div class="about-details-container">
      <div class="about-containers">
        <div class="details-container">
          <img src={medal} alt="Experience icon" class="icon">
          <h3>Experience</h3>
          <p>{experience}</p>
        </div>
        <div class="details-container">
          <img src={education} alt="Education icon" class="icon">
          <h3>Education</h3>
          <p>{educationInfo}</p>
        </div>
      </div>
      <div class="text-container">
        <p>{aboutText}</p>
      </div>
    </div>
  </div>

</section>



<style>

.icon {
    cursor: pointer;
    height: 2rem;
}

#about {
    position: relative;
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

.about-details-container {
    justify-content: center;
    flex-direction: column;
}

.section__text__p1 {
    text-align: center;
}

.section__text__p1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.about-containers, 
.about-details-container {
    display: flex;
}

.about-pic {
    border-radius: 2rem;
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

.section-container {
    gap: 4rem;
    height: 80%;
}

.section__pic-container {
    height: 400px;
    width: 400px;
    margin: auto 0;
}

p {
    color: rgb(85, 85, 85);
}

.title {
    font-size: 3rem;
    text-align: center;

}

.section-container {
    display: flex;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}



.section__pic-container {
    display: flex;
    height: 400px;
    width: 400px;
    margin: auto 0;
}


</style>