<script lang="ts">
interface ComicInfo {
  img: string;
  alt: string;
  safe_title: string;
  year: number;
  month: number;
}

import { formatDistanceToNow } from "date-fns";
import router from 'page'; 

(async function () {
  const id = await fetch(`https://fwd.innopolis.university/api/hw2?email=p.kostikova@innopolis.university`)
    .then(response => response.json());
  const info: ComicInfo = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`)
    .then(response => response.json());
  console.log(info);

  const comic = document.createElement("article");
  const img = document.createElement("img");
  img.src = info.img;
  img.alt = info.alt;
  comic.appendChild(img);

  const title = document.createElement("h2");
  title.style.textAlign = "center";
  title.textContent = info.safe_title;
  comic.appendChild(title);

  const date = new Date(info.year, info.month - 1);
  const time = document.createElement("time");

  const formattedDate = formatDistanceToNow(date, { addSuffix: true });
  time.appendChild(document.createTextNode(formattedDate));

  const published = document.createElement("div");
  published.textContent = "Published: ";
  published.style.textAlign = "center";
  published.appendChild(time.cloneNode(true));
  comic.appendChild(published);

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(comic);
})();

const backhome=(event : MouseEvent)=> {
    router("/")
}
</script>

<body> 
    <div id="comicDetails"></div>
    <div class="bth-container">
    <button class="btn btn-color-2 project-btn" on:click={backhome}> Back</button>
    </div>
    <main></main>
</body>
              
<style>
    main {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }   

        
    div {
        color: black;
        font-size: 1.5rem;
        font-family: "Poppins", sans-serif;
            
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


    </style>