---
title: Heavyville
type: game
start: 2024-08
summary: A simple physics puzzle game where you weight your client's items. Built in Unity in 4 days for the GMTK 2024 game jam.
tags: [Unity, "C#"]
poster: /images/heavyville/HeavyvillePoster.png
video: /videos/Heavyville_Trailer_Compressed.mp4
links:
  - label: View official page
    url: https://fractaldev.itch.io/heavyville
featured: true
---

## Overview

![GMTK Game Jam](/images/general/GMTKLogo.png "small")

This game was made for the [2024 GMTK Game Jam](/topics/gmtk/), a game making competition hosted by the Youtuber [Game Maker's Toolkit](https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw). The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in only 4 days.

This was the first time I competed in the GMTK Game Jam, and also the first time my team worked within such a short development window.

The theme for this year was *Built to Scale*. Competitors are able to use pre-existing code or assets, but shouldn't make stuff ahead of time specifically for this competition.

## Planning

![Heavyville planning in Miro](/images/heavyville/HeavyvilleMiro.png "large")

We began planning by rapidly brainstorming interpretations of the theme. We had ideas of characters that could grow and shrink, managing ants to build structures, or even running a website with increasing amount of traffic over time.

We ultimately chose a 2D game about weighing objects on a scale. This was a bit of a risk, none of us had made a 2D game before and we would be learning new things, however the reduced visual complexity allowed us to focus on core systems and moment-to-moment gameplay.

## Development

![Scale mechanic](/images/heavyville/HeavyvilleGameplay.png "medium")

I served as the lead programmer on Heavyville and implemented the majority of the game's systems. I built the scale, including simulating the physics. During development, we ran into an interesting problem where players didn't understand what a scale should do, especially with being able to slide the scale horizontally, so we took steps to simplifying the scaling process.

![Character items planning](/images/heavyville/HeavyvilleMiroObjects.png "large")

I also designed an object-driven system that allowed us to easily add new items, characters, dialogue, and daily progression. This structure made it possible to expand content quickly during the jam without rewriting core logic.

![Shop menu](/images/heavyville/HeavyvilleShop.png "medium")

Because this was our first 2D project, we spent time figuring out how to navigate the UI and interactions to ensuring players could clearly understand cause-and-effect when placing objects on the scale.

## Results

Despite the challenges of the short timeline and unfamiliar format, we successfully completed and submitted the game before the deadline.

Out of more than 7,500 entries, Heavyville placed in the **top 7%**. For me, this project was valuable as an introduction to building games in such a short amount of time and set the foundation for future competitions and more ambitious projects.
