---
title: Nocte
type: game
start: 2023
end: 2024
summary: A open-world procedurally generated roguelike where you explore a vast world. Built in Unity for our 2024 state competition.
tags: [Unity, "C#"]
poster: /images/nocte/NoctePoster.png
video: /videos/Nocte_Trailer_Condensed_Compressed.mp4
trailer: https://www.youtube.com/watch?v=iuVu_se6i7w
links:
  - label: View official page
    url: https://tms.ogpc.info/Games/Details/cd7fde0e-bea4-4f2e-9692-9df177798a7a
  - label: View trailer
    url: https://www.youtube.com/watch?v=iuVu_se6i7w
  - label: View source
    url: https://github.com/DoomKitty87/nocte-game
featured: true
---

## Overview

![Oregon Game Project Challenge](/images/general/OGPCLogo.png "small")

*Nocte* was created for the [Oregon Game Project Challenge (OGPC)](/topics/ogpc/), Oregon's statewide game development competition. The competition spans several months and is judged by industry professionals across design, art, and technical execution.

I worked on this project with my team [Fractal Development](/topics/fractal-dev/). Coming off previous successes, we were ambitious and chose to pursue a technically complex idea centered around procedural generation.

The theme for this year was *Cycles*. We interpreted this as a narrative and mechanical loop: repeatedly launching down to a hostile planet, dying, upgrading yourself, and trying again.

## Planning

![Nocte planning in Miro](/images/nocte/NocteMiroPlanning.png "medium")

Early planning focused on building a large, procedurally generated world designed for exploration. Our goal was a roguelike experience where each run felt different, but still supported meaningful progression and storytelling.

In hindsight, we were overconfident in our ability to deliver such a broad scope within the competition timeline. We underestimated how much additional complexity procedural generation introduces, especially when layered with narrative systems, upgrades, and progression.

Despite this, we committed to the idea and focused on building flexible systems that could adapt to dynamically generated content.

## Development

![Procedurally generated world](/images/nocte/NocteWorld.png "medium")

A significant portion of development was spent on procedural generation and ensuring that gameplay systems could function reliably in an unpredictable environment. This required careful separation between authored content and generated structure.

![Player controller](/images/nocte/NoctePlayerController.png "medium")

I worked primarily on the player controller and the upgrade system. The upgrade system allowed players to permanently improve their abilities between runs, reinforcing the core cycle of failure, learning, and progression.

![Upgrade system](/images/nocte/NocteUpgrades.png "medium")

Because the world layout was not fixed, upgrades and progression systems had to be resilient to changing environments, which influenced how abilities were designed and balanced.

![Visual effects](/images/nocte/NocteVFX.png "medium")

I also created visual effects to support combat, traversal, and environmental feedback, helping players read moment-to-moment gameplay despite the procedural nature of the world.

![Story and dialogue](/images/nocte/NocteDialogue.png "small")

In parallel with system development, we invested heavily in narrative. We wrote extensive story content and recorded voice acting to give context and emotional weight to the repeated cycle of descent and death.

## Results

![OGPC Best Game Design award](/images/nocte/NocteFinalImage.png "medium")

While Nocte ultimately fell short of our original scope, it was an invaluable learning experience. The project revealed the real cost of procedural systems and reinforced the importance of scope control.

The game received the **Best Game Design** award, largely due to its narrative depth and thematic cohesion. For our team, Nocte became a turning point—directly influencing how we approached scope, iteration, and technical ambition in later projects.
