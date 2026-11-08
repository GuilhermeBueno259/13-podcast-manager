# Podcast Manager

### Description
A Netflix like app, where I can centralize diferent podcasts episodes organized by category

### Domain
Video Podcasts

### Features
- List the episodes by category
    - [health, fitness, mindset, comedy]
- Filter the episodes by Podcast name

### How

### Feature
List the episodes by category

#### How I'm going to implement:
I will return on an REST API the podcast name, the episode name, thumbnail, categories and link

[
    {
        "podcastName": "flow",
        "episode": "CBUM - Flow #319",
        "videoId": "qwerty",
        "cover": "https://i.ytimg.com/...",
        "link": "https://youtube.com/...",
        "categories": ["health", "sports", "bodybuilder"]
    },
    {
        "podcastName": "flow",
        "episode": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "asdfghj",
        "cover": "https://i.ytimg.com/...",
        "link": "https://youtube.com/...",
        "categories": ["sports", "race"]
    }
]
