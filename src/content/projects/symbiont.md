---
title: Symbiont
type: game
start: 2022
end: 2023
summary: An on-rails shooter where you teleport between enemies and cameras and fight your way through randomized rooms. Built in Unity for our 2023 state competition.
tags: [Unity, "C#"]
poster: /images/symbiont/SymbiontPoster.png
video: /videos/Symbiont_Trailer_Condensed_Compressed.mp4
trailer: https://www.youtube.com/watch?v=veMg_MTGvXw
links:
  - label: View official page
    url: https://tms.ogpc.info/Games/Details/d188f6c3-fb44-4d45-859c-2b3abd0a0ab2
  - label: View trailer
    url: https://www.youtube.com/watch?v=veMg_MTGvXw
  - label: View source
    url: https://github.com/DoomKitty87/symbiont-ogpc
featured: true
---

## Overview

![Oregon Game Project Challenge](/images/general/OGPCLogo.png "small")

Symbiont was our team [Fractal Development](/topics/fractal-dev/)'s first game, and beyond some simple class projects, was the first game that any of our members had worked on. We made this game using [Unity](https://unity.com/) for the [Oregon Game Project Challenge (OGPC)](/topics/ogpc/), a competition for making games against other Oregon high school teams.

This year we started quite a bit late compared to the start date for the competition, leaving us with only three months to work instead of the designated nine. With this being our first project, a lot of our time was spent learning tools and building workflows instead of actual game development.

All game jam competitions like this have a theme, and this year it was *Breaking Conventions*.

## Planning

![Early Symbiont planning](/images/symbiont/SymbiontPlanning.png "medium")

Earlier in the year our teacher challenged us to make a game using only three buttons, and we decided to try to make a shooter game. How do you make a shooter game with only three buttons? You take away movement. For that project we made an on-rails shooter similar to the zombie-shooting games you can play at the arcade. (Could anyone actually beat those games with one life?)

This idea fit quite well into the *Breaking Conventions* theme but we decided to add one more mechanic: teleporting. All enemies would move on a designated path through rooms and you would be able to teleport between them, taking control and then shooting your previous host. Hence Symbiont.

An issue we didn't solve during planning was how to actually beat this game. What's the goal? It can't be to get to a location as you could just teleport around and never shoot, and in an open map it'd be dangerously easy to get stuck with nothing to teleport to. We'd tackle this issue later in development.

## Development

![Symbiont modeling](/images/symbiont/SymbiontModeling.png "medium")

This project was spent mostly figuring out the engine and our workflow. We spent time building input systems (pre-new input system), figuring out particles, lighting, and modeling.

![UI mockup/testing](/images/symbiont/SymbiontTesting.png "medium")

The core mechanic of teleporting between enemies didn't turn out to be very difficult, however the previous issue of what beating the game looks like turned out to be much more difficult. We decided to build individual 'rooms' with preset entries and exits and then stitch them together, only allowing the player to move to the next room when all of the enemies in the room have been defeated. This required us to create static cameras that you can teleport to in case of getting stuck.

![Seamless portals](/images/symbiont/SymbiontPortal.png "medium")

Instead of physically 'stitching' these rooms together in space, we placed each room far apart from each other and faked the room transitions by creating portals and rendering two cameras with a little shader trickery. This was made significantly easier because the player never actually crossed through the portal, instead they teleported from one room to the next.

## Results

![Symbiont gameplay](/images/symbiont/SymbiontGameplay.png "medium")

After pulling together a final build and scrapping a few mechanics I didn't mention here, we managed to present a workable demo and win **Best in Programming**.

Symbiont, while not a very fun game to play, was our first game as a team and it will hold a special place in my portfolio. It does what it set out to do, and I hope it broke a convention or two. The build at the top of this page on the Official Page mostly works, excuse the lack of tutorial and keybinds.
