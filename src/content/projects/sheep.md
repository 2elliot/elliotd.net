---
title: On the Lamb!
type: game
start: 2025-08
summary: A game where you lasso sheep and then feed them to the cthulhu in your backyard. Built in Unity in 4 days for the GMTK 2025 game jam.
tags: [Unity, "C#"]
poster: /images/sheep/SheepPoster.png
video: /videos/Sheep_Trailer_Compressed.mp4
trailer: https://www.youtube.com/watch?v=kN98JuUSIng
links:
  - label: View official page
    url: https://fractaldev.itch.io/on-the-lamb
  - label: View trailer
    url: https://www.youtube.com/watch?v=kN98JuUSIng
featured: true
---

## Overview

![GMTK Game Jam 2025](/images/general/GMTKLogo.png "small")

This game was made for the [2025 GMTK Game Jam](/topics/gmtk/), a game making competition hosted by the Youtuber [Game Maker's Toolkit](https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw). The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in only 4 days.

This year I competed with my team [Fractal Development](/topics/fractal-dev/). We have competed in several game jams together, including previous GMTK jams, and state competitions.

The theme for the 2025 competition was *Loop*. Competitors are able to use pre-existing code or assets, but shouldn't make stuff ahead of time specifically for this competition.

## Planning

![Planning inside Miro](/images/sheep/SheepMiroPlanning.png "large")

Our first step to making games is loading into a [Miro board](https://miro.com) and writing down literally every idea we have. In a competition this short, the planning phase is extremely important and will determine what the game will become. For a normal competition this process can take weeks of prototyping and iteration, however during this game we quickly simply didn't have the time.

![Pros and cons list](/images/sheep/SheepMiroProsCons.png "medium")

This competition's theme was Loop. We had ideas that included a donut factory game, throwing boomerangs to block out the sun, making a time loop game where the world resets, and other questionable ideas, however we decided on a game where you have to lasso (loop) sheep and capture them into pens.

## Development

Now that we had an idea, production was full steam ahead. We use the [Unity Engine](https://unity.com/) for our game engine of choice. I started working on the lasso mechanic which allows the player to capture sheep. This included both the mechanics of throwing the lasso and calculating which sheep were in the loop, and the visuals of the lasso itself.

![Lasso mechanic](/images/sheep/SheepLasso.png "medium")

At the same time, my teammates were working on building the world. We used assets from [Animpic Studio](https://www.animpic.studio/) for trees, tools, and the barn, and created a custom ground shader. Our vision for this game was a fun-low poly environment where we could add whatever different systems or machines we wanted.

![Guidebook map](/images/sheep/SheepGuidebook.png "large")

With the lasso and the world in place, we were able to have some fun. The main gameplay loop is collecting sheep and bringing them back to your pens, then using the wool from your sheep to unlock and upgrade machines around your barn. In addition to increasing pen sizes, you can locate rare sheep types, switch between colors of wool, and clone sheep. With enough wool, you're able to construct a rocket ship and escape from the cthulhu monster in your back yard.

![Sheep cloner machine](/images/sheep/SheepCloner.png "medium")

Yes, you read that right. As a final twist, we added a cthulhu monster that requires you to feed it sheep to keep it at bay. Every night you have a quota of sheep you need to feed it, or else it will destroy your barn and end the game. This gives the player agency and requires them to make choices between feeding the cthulhu and using wool to upgrade the farm.

![Cthulhu monster](/images/sheep/SheepMonster.png "large")

## Results

In the end, we were able to complete and submit the game just before the deadline. We were extremely happy with how it turned out, especially considering the short time frame. The game was well received, and out of nearly 10,000 entries we placed in the **top 4%**. Overall, it was a fantastic experience and we learned a lot about rapid game development and teamwork.
