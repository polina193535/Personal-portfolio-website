interface ComicInfo {
  img: string;
  alt: string;
  safe_title: string;
  year: number;
  month: number;
}

import { formatDistanceToNow } from "date-fns";

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
  title.textContent = info.safe_title;
  comic.appendChild(title);

  const date = new Date(info.year, info.month - 1);
  const time = document.createElement("time");

  const formattedDate = formatDistanceToNow(date, { addSuffix: true });
  time.appendChild(document.createTextNode(formattedDate));

  const published = document.createElement("div");
  published.textContent = "Published: ";
  published.appendChild(time.cloneNode(true));
  comic.appendChild(published);

  const main = document.getElementsByTagName("main")[0];
  main.appendChild(comic);
})();