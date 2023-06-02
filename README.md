![GA Logo](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/469f976e-1432-11e5-8199-6ac91363302b.png) 


## Listen up | Music Library

##Deployment Link
# https://musicdiscoverylibrary.netlify.app

#Timeline 
1 Week Project - Solo

## Project Brief 

- Build a React application ** that consumes a public API.
- Consume a public API based on what you want your project to be
- Include wireframes - that you designed before building the app on Excalidraw.
- The app should include a router - with several "pages".
- Have semantically clean code 

## Project Overview

 We were asked to build a multi-page front-end React App using one or multiple APIs for this project. My interest in music led me to build a Music Library using Shazam's API. My app contains a HomePage where users can search for any song using the search engine. On submission, the data is run and displays a list of potential songs that has a similar song title. Once the user identifies which song they are interested in and makes their selection, a second page appears giving them all the necessary information on that specific song such as the artist, song details, and lyrics. 

## Tech Stack

## Front End
HTML
CSS
JavaScript
React


## API Resource
https://rapidapi.com/apidojo/api/shazam



## Code Installation
Clone or download the repo
Install dependencies in the terminal with the command: npm i
Start the server with the terminal command: npm start


## Sketching & Planning

My main focus when sketching my app was creating a clear picture of all the different routes I needed and where to get my data from. I wanted a simple and clean design to showcase the search bar and create a user-friendly app. 

![excalidraw](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-20%20at%2013.52.50.png)

![excalidraw](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-20%20at%2013.54.09.png)

## Project Screenshots
![Project Homepage](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-19%20at%2012.40.08.png)

![Project](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-19%20at%2012.47.46.png)



## Roadmap - Music Discovery

After completing my mockup, the first step was to figure out how I can incorporate a search bar that filters through my music API and return back similar song titles. To do so the first step was to identify what the user was typing with the OnChange function and use that to set the SearchData state. Once that was done, I could get the data from the API and search which titles were similar to what was recorded by the user in the searchData state.

```React

const onChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(searchData);
    const { data } = await axios.get(
      `${API_URL}/search?term=${searchData.title}`,
      {
        headers: {
          "X-RapidAPI-Key": API_KEY,
        },
      }
    );
    setFoundSongs(data.tracks.hits);
  };
  ```
Afterward, I was able to target each song id to display their individual info by fetching the get-details Music API and get back the song’s artist, lyrics, images and year of launch. 

```React
 useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${API_URL}/songs/get-details?key=${key}`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
          },
        }
      );
      console.log(songDetails);
      setSongDetails(data);
    };
    fetchData();
  }, []);
 ```
 As an added page, I wanted to recreate a Top 10  UK Chart List. To do so, I needed to make sure that I targeted the correct country and so after taking a closer look to the api, i was able to fetch the data using the API and including a limit of 10 songs: ${API_URL}/charts/track?locale=en-GB&startFrom=0&pageSize=10.
Through that I was then able to display the content and map through each chart list songs

```React
<div className="charts-page">
      <h1>Top 10 Chart List</h1>
      <ul className="charts-container">
        {chartResult.map((chart, idx) => (
          <li key={idx} className="charts-list">
            <img className="charts-img" src={chart.share.image} />
            <p className="charts-item">{chart.title}</p>
            <p className="charts-item">{chart.subtitle}</p>
          </li>
        ))}
        ;
      </ul>
    </div>
 ```
 ## Wins & Challenges
This was quite challenging due to how the API was structured. I needed to figure out how to get back the song lyrics without having it appear as a full paragraph text, I needed to target the correct array and map through the text itself to create a line-by-line format. 

```React
<section className="song-right-container">
       {songDetails.sections[1].text.map((line, idx) => {
         return (
           <p className="lyrics" key={idx}>
             {line}
           </p>
         );
       })}
     </section>
```
An added feature that I was pleased to incorporate was the UK Top 10 Chart List. 
The challenge for this was understanding how to target the data in my API and knowing what data to fetch. Once I figured that out, it was mostly displaying what I wanted to get from it in the return statement.

```React
const [chartResult, setChartResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${API_URL}/charts/track?locale=en-GB&startFrom=0&pageSize=10`,
        {
          headers: {
            "X-RapidAPI-Key": API_KEY,
          },
        }
      );
      console.log(data.tracks);
      setChartResult(data.tracks);
    };
    fetchData();
  }, []);
```
##Key Learnings
This project allowed me to practice and improve my knowledge of JavaScript. I was able to have a true understanding of what’s possible and test what I have learned so far. Project Management was very important to have a clear picture of what I needed to accomplish and how to get there. I’ve seen how impactful organization and project preparation can be when getting started on a project.

##Future Improvement
With more time, I would love to add a feature to record raw data and search based on voice recognition. I would also refine my design and add more information when researching a particular song. Artists would have their page where details and their songs would be featured for users to view. 

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karina-savoie-21b40621a/)


