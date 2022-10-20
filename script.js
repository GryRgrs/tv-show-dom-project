let allEpisodes = getAllEpisodes();
let documentElement = document.getElementById("root");

let searchField = document.querySelector("input");


fetch("https://api.tvmaze.com/shows/82/episodes")
.then(function (response) {
return response.json();
})
.then(function (data) {
allEpisodes = data;
makePageForEpisodes(allEpisodes);
})
.catch((error) => {
});


function makePageForEpisodes(episode) {
  episode.forEach((item) => {
    let episodesContainer = document.createElement("section");
    episodesContainer.className = "episode-container"
    documentElement.appendChild(episodesContainer);
    let episodeName = document.createElement("h1");
    episodesContainer.appendChild(episodeName);
    let episodeThumbnail = document.createElement("img");
    episodesContainer.appendChild(episodeThumbnail);
    let episodeSummary = document.createElement("p");
    episodesContainer.appendChild(episodeSummary);
    episodeName.className = "episodeName";
    episodeThumbnail.className = "episodeThumbnail";
    episodeSummary.className = "episodeSummary";
    episodeName.innerText = `${item.name} - S${("0" + item.season).slice(
      -2
    )}E${("0" + item.number).slice(-2)}`;
    episodeThumbnail.src = item.image.medium;
    episodeSummary.innerHTML = item.summary;
    });
  }

  makePageForEpisodes(allEpisodes);

const searchEpisodes = (episode) => {
  searchField.addEventListener("input", (event) => {
  let searchTerm = event.target.value.toLowerCase();
console.log(searchTerm)
let filteredEpisodes = episode.filter((item) => {
    return (
    item.name.toLowerCase().includes(searchTerm) ||
    item.summary.toLowerCase().includes(searchTerm)
    );
    });
    
documentElement.innerHTML = "";
    let numberOfShows.innerText = `Displaying ${filteredEpisodes.length}/$(episode.length)`;
    makePageForEpisodes(filteredEpisodes);
  });
};

searchEpisodes(allEpisodes);
