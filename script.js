let allEpisodes = getAllEpisodes();
let documentElement = document.getElementById("root");
let episodeTab,
  episodeName,
  episodeThumbnail,
  episodeSummary,
  searchField,
  allEpisodesDiv;

searchField = documentElement.appendChild(document.createElement("input"));
searchField.id = "searchField";
allEpisodesDiv = documentElement.appendChild(document.createElement("div"));
allEpisodesDiv.className = "allEpisodesDiv";

<<<<<<< HEAD
fetch("https://api.tvmaze.com/shows/82/episodes")
.then(function (response) {
return response.json();
})
.then(function (data) {
allEpisodes = data;
makePageForEpisodes(allEpisodes);
console.log(allEpisodes);
})
.catch((error) => {
});

=======
// fetch("https://api.tvmaze.com/shows/82/episodes")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     allEpisodes = data;
//     makePageForEpisodes(allEpisodes);
//     console.log(allEpisodes);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//searchField.addEventListener("keydown", () => {});
>>>>>>> refs/remotes/origin/master
function makePageForEpisodes(episode) {
  episode.forEach((item) => {
    episodeTab = allEpisodesDiv.appendChild(document.createElement("section"));
    episodeName = episodeTab.appendChild(document.createElement("h1"));
    episodeThumbnail = episodeTab.appendChild(document.createElement("img"));
    episodeSummary = episodeTab.appendChild(document.createElement("p"));
    episodeTab.className = "episodeTab";
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
  const input = document.getElementById("searchField");
  input.addEventListener("input", (event) => {
    let searchTerm = event.target.value.toLowerCase();

    let filteredEpisodes = episode.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.summary.toLowerCase().includes(searchTerm)
      );
    });
    allEpisodesDiv.innerHTML = "";
    console.log(allEpisodesDiv);
<<<<<<< HEAD
=======
    //numberOfShows.innerText = `Displaying ${filteredEpisodes.length}/$(episode.length)`;
>>>>>>> refs/remotes/origin/master
    makePageForEpisodes(filteredEpisodes);
  });
};
searchEpisodes(allEpisodes);
