---
title: Northwoods
type: game
start: 2024
end: 2025
summary: A open-world survival game set in the Mt. St. Helens region. Scavenge for resources, build shelter, and survive the wilderness. Built in Unity for our 2025 state competition.
tags: [Unity, "C#"]
poster: /images/northwoods/NorthwoodsPoster.png
video: /videos/Northwoods_Trailer_Condensed_Compressed.mp4
trailer: https://www.youtube.com/watch?v=d67YrHbhKMY
links:
  - label: View official page
    url: https://tms.ogpc.info/Games/Details/1b7379ac-c1a0-42f4-8198-cd94d069b991
  - label: View trailer
    url: https://www.youtube.com/watch?v=d67YrHbhKMY
  - label: View source
    url: https://github.com/fractalogpc/astoria
featured: true
---

## Overview

![Oregon Game Project Challenge](/images/general/OGPCLogo.png "small")

*Northwoods* was created for the [Oregon Game Project Challenge (OGPC)](/topics/ogpc/), Oregon's statewide game development competition. Unlike most game jams, OGPC runs over the course of roughly nine months and is judged by a panel of industry professionals across multiple disciplines.

I worked on this project with my team [Fractal Development](/topics/fractal-dev/). This was our final year competing together, as the rest of our teammates were graduating, and we treated this project as the final a culmination of everything we had learned in previous competitions.

The theme for this year was *Extreme Weather*. Unlike other jams, OGPC tends to emphasize more general themes that allow for broad interpretation.

## Planning

![Northwoods planning in Miro](/images/northwoods/NorthwoodsMiroPlanning.png "large")

As with our other projects, we began planning in [Miro](https://miro.com), quickly pitching ideas and not being afraid to throw them out. Our early ideas included flying drones through tornadoes, sailing across tsunamis, and parkouring through storm-ravaged cities at night.

Because this competition was much longer than typical game jams, we had the opportunity to prototype multiple ideas before settling on one. After several rounds of iteration, we landed on an open-world survival game set in a wilderness environment affected by extreme weather.

In the previous year's competition, we attempted a fully open-world procedurally generated game and ultimately ran out of time. Going into Northwoods, we made a conscious decision to revisit the open-world concept but cut procedural generation in favor of a handcrafted environment.

We chose to set the game in the Mt. Saint Helens region, imagining an alternate history where the mountain never erupted. Instead, it became the source of strange anomalies where violent weather patterns and hostile creatures transformed the surrounding wilderness.

## Development

![Northwoods environment](/images/northwoods/NorthwoodsWorld.png "large")

World building began early and remained a major focus throughout development. While my teammates focused on terrain and environmental design using [QuadSpinner Gaea](https://quadspinner.com/), I primarily worked on gameplay systems and player interaction.

![Player controller and traversal](/images/northwoods/NorthwoodsPlayerController.png "medium")

I worked on the player controller and core systems, ensuring that we could easily add and iterate on features as our game grew. Because the player controller is how players interact with the world, it was crucial to get this right early on so we could run playtests and get feedback.

![Building system](/images/northwoods/NorthwoodsBuilding.png "large")

The primary system I worked on was the building mechanic. We wanted players to construct shelters to survive severe weather, using materials gathered from the environment and defeated enemies. This system went through many iterations over the course of development.

The final design allows players to place predefined structural tiles such as square or triangular foundations, walls, and sloped roofs—that snap together intuitively. Each placed object is registered in a data structure that tracks connections between pieces. This enabled simulated structural stability, where destroying one component can cause dependent structures to collapse naturally.

Then, the player can edit these tiles to replace them with objects of similar shape but different functionality such as windows, doors, or roof tiles. This allows for creative freedom while ensuring that construction remains manageable and grounded.

## Results

![OGPC awards](/images/northwoods/NorthwoodsAwards.png "medium")

Northwoods was extremely well received. The game won **Best in Show**, awarded by the judging panel, and was also voted **Players' Choice** by other competitors and spectators.

For me, this project represents how much our team grew over the three years we made games together. It was an opportunity to try out our ideas we've had for years and apply everything we'd learned to make something we were proud of.
