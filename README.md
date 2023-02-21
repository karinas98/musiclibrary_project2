
![GA Logo](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/469f976e-1432-11e5-8199-6ac91363302b.png) 





## Listen up | Music Library

https://resplendent-lebkuchen-0fb2ca.netlify.app
## Project Overview

 For this project, we were asked to build a multi-page front-end React App using one or multiple API's. My interest in music led me to building an Music Library uing Shazam's API. My app contains a HomePage where users can search for any song using the search engine. On submit, the data is run and displays a list of potential songs that has a similar song title. Once the user identifies which song they are interested in and makes his selection, a second page appears giving them all the necessary information on that specific song. The artist, song details and lyrics. 
## Tech Used

HTML | CSS | JavaScript | React



## API Resource

https://rapidapi.com/apidojo/api/shazam
## Code Installation

Clone or download the repo
Install dependencies in terminal with command: npm i Start server with terminal command: npm start
## Project Brief 

- Build a React application ** that consumes a public API.
- Consume a public API based on what you want your project to be
- Include wireframes - that you designed before building the app on excalidraw.
- The app should include a router - with several "pages".
- Have semantically clean code 
## Sketching & Prototyping

My main focus when sketching my app was crreating a clear picture of all the different route that I needed and where to get my data from. I wanted a simple and clean design to showcase the search bar and create an app that was user friendly. 

![excalidraw](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-20%20at%2013.52.50.png)

![excalidraw](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-20%20at%2013.54.09.png)

## Project Screenshots
![Project Homepage](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-19%20at%2012.40.08.png)

![Project](https://raw.githubusercontent.com/karinas98/MusicLibraryProject/main/Screenshot%202023-02-19%20at%2012.47.46.png)








## Featured Code - Music Discovery

```React

//Search in input field a Song and run it through the music API on onSubmit

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


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)]()

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/karina-savoie-21b40621a/)


