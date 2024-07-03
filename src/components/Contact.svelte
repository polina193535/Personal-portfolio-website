<script lang="ts">
    import telegram from '../img/telegram.png'
    import pochta from '../img/pochta.png'
    import vk from '../img/vkc.png'
    import github from '../img/115899926.png'
</script>


<section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
            
            <div class="contact-info-container">
                 <a href="mailto:kostikova658@gmail.com" target="_blank" rel="noreferrer">
                    <img src={pochta} class="icon contact-icon" alt="Telegram" />
                </a>
                <p><a href="mailto:kostikova658@gmail.com">kostikova658@gmail.com</a></p>
            </div>

            <div class="contact-info-container">
                <a href="https://t.me/Polinnna555" target="_blank" rel="noreferrer">
                    <img src={telegram} class="icontg" alt="Telegram" />
                </a>
            </div>


            <div class="contact-info-container">
                <a href="https://vk.com/id504012444" target="_blank" rel="noreferrer">
                    <img src={vk} class="iconvk" alt="VK" />
                </a>
            </div>

            <div class="contact-info-container">
                <a href="https://github.com/polina193535" target="_blank" rel="noreferrer">
                    <img src={github} class="icongit" alt="Github" />
                </a>
            </div>
        </div>
    </section>

<style>
.icon {
    cursor: pointer;
    height: 2rem;
}

p {
    color: rgb(85, 85, 85);
}

.title {
    font-size: 3rem;
    text-align: center;

}

.section__text__p1 {
    text-align: center;
}

.section__text__p1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

* {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
}

a {
    color: black;
    text-decoration: none;
    transition: all 300ms ease;
    text-decoration-color: white;
}

a:hover {
    color: grey;
    text-decoration: underline;
    text-underline-offset: 0.5rem;
    text-decoration-color: rgb(181, 181, 181);

}


#contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
}

.contact-info-upper-container {
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    background: (250, 250, 250);
    margin: 2rem auto;
    padding: 0.5rem;

}

.contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center ;
    gap: 0.5rem;
    margin: 1rem;
}

.contact-info-container p {
    font-size: larger;
}
.contact-icon {
    cursor: default;
    height: 2rem;
}

.iconvk {
    cursor: default;
    height: 4rem;
}
.icontg {
    cursor: default;
    height: 3.6rem;
}

.icongit{
    cursor: default;
    height: 3.8rem;
}



</style>