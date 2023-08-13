const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(navItemHighlight);

function navItemHighlight(item) {
  item.addEventListener("click", (e) => {
    navItems.forEach((item) => {
      item.classList.remove("after:bg-slate-300");
    });
    e.target.classList.add("after:bg-slate-300");
  });
}

// --------------------------[]-------------------------- //

const NOW = document.querySelector("#main > #now");
const YouTube = document.querySelector("#main > #youtube");
const Links = document.querySelector("#main > #links");

Links.innerHTML += Link(
  "twitch.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);

Links.innerHTML += Link(
  "Twitter.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "ThePrimeTime.png",
  "ThePrimeTime",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "youtube.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "youtube.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "reddit.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "spotify.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Links.innerHTML += Link(
  "linkedin.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
