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

searchField.addEventListener("keydown", () => {
});

allEpisodes.forEach((item) => {
  episodeTab = allEpisodesDiv.appendChild(document.createElement("section"));
  episodeName = episodeTab.appendChild(document.createElement("h1"));
  episodeThumbnail = episodeTab.appendChild(document.createElement("img"));
  episodeSummary = episodeTab.appendChild(document.createElement("p"));
  episodeTab.className = "episodeTab";
  episodeName.className = "episodeName";
  episodeThumbnail.className = "episodeThumbnail";
  episodeSummary.className = "episodeSummary";
  episodeName.innerText = `${item.name} - S${("0" + item.season).slice(-2)}E${(
    "0" + item.number
  ).slice(-2)}`;
  episodeThumbnail.src = item.image.medium;
  episodeSummary.innerHTML = item.summary;
});
