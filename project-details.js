const projectDetails = {
    "sheep": {
        title: "On the Lamb!",
        content: `
            <img src="images/sheep/SheepPoster-small.webp" data-full-src="images/sheep/SheepPoster.png" alt="Poster for On the Lamb!" class="blog-image full">
            
            <p>
                <a href="https://fractaldev.itch.io/on-the-lamb" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=kN98JuUSIng" target="_blank" class="project-button secondary">View trailer</a>
            </p>
            
            <h2>Overview</h2>
            <img src="images/general/GMTKLogo-small.webp" data-full-src="images/general/GMTKLogo.png" alt="GMTK Game Jam 2025" class="blog-image small">
            <p>This game was made for the <a href="topic.html?id=gmtk" class="topic-link">2025 GMTK Game Jam</a>, a game making competition hosted by the Youtuber <a href=https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw" target="_blank">Game Maker's Toolkit</a>. The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in only 4 days.</p>
            <p>This year I competed with my team <a href="topic.html?id=fractal-dev" class="topic-link">Fractal Development</a>. We have competed in several game jams together, including previous GMTK jams, and state competitions.</p>
            <p>The theme for the 2025 competition was <i>Loop</i>. Competitors are able to use pre-existing code or assets, but shouldn't make stuff ahead of time specifically for this competition.</p>
                        
            <h2>Planning</h2>
            <img src="images/sheep/SheepMiroPlanning-small.webp" data-full-src="images/sheep/SheepMiroPlanning.png" alt="Planning inside Miro" class="blog-image large">
            <p>Our first step to making games is loading into a  <a href="https://miro.com" target="_blank">Miro board</a> and writing down literally every idea we have. In a competition this short, the planning phase is extremely important and will determine what the game will become. For a normal competition this process can take weeks of prototyping and iteration, however during this game we quickly simply didn't have the time.</p>
            <img src="images/sheep/SheepMiroProsCons-small.webp" data-full-src="images/sheep/SheepMiroProsCons.png" alt="Pros and cons list" class="blog-image medium">
            <p>This competition's theme was Loop. We had ideas that included a donut factory game, throwing boomerangs to block out the sun, making a time loop game where the world resets, and other questionable ideas, however we decided on a game where you have to lasso (loop) sheep and capture them into pens.</p>
                        
            <h2>Development</h2>
            <p>Now that we had an idea, production was full steam ahead. We use the <a href="https://unity.com/" target="_blank">Unity Engine</a> for our game engine of choice. I started working on the lasso mechanic which allows the player to capture sheep. This included both the mechanics of throwing the lasso and calculating which sheep were in the loop, and the visuals of the lasso itself.</p>
            <img src="images/sheep/SheepLasso-small.webp" data-full-src="images/sheep/SheepLasso.png" alt="Lasso mechanic" class="blog-image medium">
            <p>At the same time, my teammates were working on building the world. We used assets from <a href="https://www.animpic.studio/" target="_blank">Animpic Studio</a> for trees, tools, and the barn, and created a custom ground shader. Our vision for this game was a fun-low poly environment where we could add whatever different systems or machines we wanted.</p>
            <img src="images/sheep/SheepGuidebook-small.webp" data-full-src="images/sheep/SheepGuidebook.png" alt="Guidebook map" class="blog-image large">
            <p>With the lasso and the world in place, we were able to have some fun. The main gameplay loop is collecting sheep and bringing them back to your pens, then using the wool from your sheep to unlock and upgrade machines around your barn. In addition to increasing pen sizes, you can locate rare sheep types, switch between colors of wool, and clone sheep. With enough wool, you're able to construct a rocket ship and escape from the cthulhu monster in your back yard.</p>
            <img src="images/sheep/SheepCloner-small.webp" data-full-src="images/sheep/SheepCloner.png" alt="Sheep cloner machine" class="blog-image medium">
            <p>Yes, you read that right. As a final twist, we added a cthulhu monster that requires you to feed it sheep to keep it at bay. Every night you have a quota of sheep you need to feed it, or else it will destroy your barn and end the game. This gives the player agency and requires them to make choices between feeding the cthulhu and using wool to upgrade the farm.</p>
            <img src="images/sheep/SheepMonster-small.webp" data-full-src="images/sheep/SheepMonster.png" alt="Cthulhu monster" class="blog-image large">

            <h2>Results</h2>
            <p>In the end, we were able to complete and submit the game just before the deadline. We were extremely happy with how it turned out, especially considering the short time frame. The game was well received, and out of nearly 10,000 entries we placed in the <b>top 4%</b>. Overall, it was a fantastic experience and we learned a lot about rapid game development and teamwork.</p>

            <button class="project-button secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Return to top of page</button>
        `,
    },
    "northwoods": {
        title: "Northwoods",
        content: `
            <img src="images/northwoods/NorthwoodsPoster-small.webp" data-full-src="images/northwoods/NorthwoodsPoster.png" alt="Northwoods poster" class="blog-image full">

            <p>
                <a href="https://tms.ogpc.info/Games/Details/1b7379ac-c1a0-42f4-8198-cd94d069b991" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=d67YrHbhKMY" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/fractalogpc/astoria" target="_blank" class="project-button secondary">View source</a>
            </p>

            <h2>Overview</h2>
            <img src="images/general/OGPCLogo-small.webp" data-full-src="images/general/OGPCLogo.png" alt="Oregon Game Project Challenge" class="blog-image small">
            <p><i>Northwoods</i> was created for the <a href="topic.html?id=ogpc" class="topic-link">Oregon Game Project Challenge (OGPC)</a>, Oregon's statewide game development competition. Unlike most game jams, OGPC runs over the course of roughly nine months and is judged by a panel of industry professionals across multiple disciplines.</p>
            <p>I worked on this project with my team <a href="topic.html?id=fractal-dev" class="topic-link">Fractal Development</a>. This was our final year competing together, as the rest of our teammates were graduating, and we treated this project as the final a culmination of everything we had learned in previous competitions.</p>
            <p>The theme for this year was <i>Extreme Weather</i>. Unlike other jams, OGPC tends to emphasize more general themes that allow for broad interpretation.</p>

            <h2>Planning</h2>
            <img src="images/northwoods/NorthwoodsMiroPlanning-small.webp" data-full-src="images/northwoods/NorthwoodsMiroPlanning.png" alt="Northwoods planning in Miro" class="blog-image large">
            <p>As with our other projects, we began planning in <a href="https://miro.com" target="_blank">Miro</a>, quickly pitching ideas and not being afraid to throw them out. Our early ideas  included flying drones through tornadoes, sailing across tsunamis, and parkouring through storm-ravaged cities at night.</p>
            <p>Because this competition was much longer than typical game jams, we had the opportunity to prototype multiple ideas before settling on one. After several rounds of iteration, we landed on an open-world survival game set in a wilderness environment affected by extreme weather.</p>
            <p>In the previous year's competition, we attempted a fully open-world procedurally generated game and ultimately ran out of time. Going into Northwoods, we made a conscious decision to revisit the open-world concept but cut procedural generation in favor of a handcrafted environment.</p>
            <p>We chose to set the game in the Mt. Saint Helens region, imagining an alternate history where the mountain never erupted. Instead, it became the source of strange anomalies where violent weather patterns and hostile creatures transformed the surrounding wilderness.</p>

            <h2>Development</h2>
            <img src="images/northwoods/NorthwoodsWorld-small.webp" data-full-src="images/northwoods/NorthwoodsWorld.png" alt="Northwoods environment" class="blog-image large">
            <p>World building began early and remained a major focus throughout development. While my teammates focused on terrain and environmental design using <a href="https://quadspinner.com/" target="_blank">QuadSpinner Gaea</a>, I primarily worked on gameplay systems and player interaction.</p>

            <img src="images/northwoods/NorthwoodsPlayerController-small.webp" data-full-src="images/northwoods/NorthwoodsPlayerController.png" alt="Player controller and traversal" class="blog-image medium">
            <p>I worked on the player controller and core systems, ensuring that we could easily add and iterate on features as our game grew. Because the player controller is how players interact with the world, it was crucial to get this right early on so we could run playtests and get feedback.</p>

            <img src="images/northwoods/NorthwoodsBuilding-small.webp" data-full-src="images/northwoods/NorthwoodsBuilding.png" alt="Building system" class="blog-image large">
            <p>The primary system I worked on was the building mechanic. We wanted players to construct shelters to survive severe weather, using materials gathered from the environment and defeated enemies. This system went through many iterations over the course of development.</p>
            <p>The final design allows players to place predefined structural tiles such as square or triangular foundations, walls, and sloped roofs—that snap together intuitively. Each placed object is registered in a data structure that tracks connections between pieces. This enabled simulated structural stability, where destroying one component can cause dependent structures to collapse naturally.</p>
            <p>Then, the player can edit these tiles to replace them with objects of similar shape but different functionality such as windows, doors, or roof tiles. This allows for creative freedom while ensuring that construction remains manageable and grounded.</p>

            <h2>Results</h2>
            <img src="images/northwoods/NorthwoodsAwards-small.webp" data-full-src="images/northwoods/NorthwoodsAwards.png" alt="OGPC awards" class="blog-image medium">
            <p>Northwoods was extremely well received. The game won <b>Best in Show</b>, awarded by the judging panel, and was also voted <b>Players' Choice</b> by other competitors and spectators.</p>
            <p>For me, this project represents how much our team grew over the three years we made games together. It was an opportunity to try out our ideas we've had for years and apply everything we'd learned to make something we were proud of.</p>

            <button class="project-button secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Return to top of page</button>
        `
    },
    "heavyville": {
        title: "Heavyville",
        content: `
            <img src="images/heavyville/HeavyvillePoster-small.webp" data-full-src="images/heavyville/HeavyvillePoster.png" alt="Heavyville poster" class="blog-image">

            <p>
                <a href="https://fractaldev.itch.io/heavyville" target="_blank" class="project-button">View official page</a>
            </p>

            <h2>Overview</h2>
            <img src="images/general/GMTKLogo-small.webp" data-full-src="images/general/GMTKLogo.png" alt="GMTK Game Jam" class="blog-image small">
            <p>This game was made for the <a href="topic.html?id=gmtk" class="topic-link">2024 GMTK Game Jam</a>, a game making competition hosted by the Youtuber <a href=https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw" target="_blank">Game Maker's Toolkit</a>. The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in only 4 days.</p>
            <p>This was the first time I competed in the GMTK Game Jam, and also the first time my team worked within such a short development window.</p>
            <p>The theme for this year was <i>Built to Scale</i>. Competitors are able to use pre-existing code or assets, but shouldn't make stuff ahead of time specifically for this competition.</p>

            <h2>Planning</h2>
            <img src="images/heavyville/HeavyvilleMiro-small.webp" data-full-src="images/heavyville/HeavyvilleMiro.png" alt="Heavyville planning in Miro" class="blog-image large">
            <p>We began planning by rapidly brainstorming interpretations of the theme. We had ideas of characters that could grow and shrink, managing ants to build structures, or even running a website with increasing amount of traffic over time.</p>
            <p>We ultimately chose a 2D game about weighing objects on a scale. This was a bit of a risk, none of us had made a 2D game before and we would be learning new things, however the reduced visual complexity allowed us to focus on core systems and moment-to-moment gameplay.</p>

            <h2>Development</h2>
            <img src="images/heavyville/HeavyvilleGameplay-small.webp" data-full-src="images/heavyville/HeavyvilleGameplay.png" alt="Scale mechanic" class="blog-image medium">
            <p>I served as the lead programmer on Heavyville and implemented the majority of the game's systems. I built the scale, including simulating the physics. During development, we ran into an interesting problem where players didn't understand what a scale should do, especially with being able to slide the scale horizontally, so we took steps to simplifying the scaling process.</p>

            <img src="images/heavyville/HeavyvilleMiroObjects-small.webp" data-full-src="images/heavyville/HeavyvilleMiroObjects.png" alt="Character items planning" class="blog-image large">
            <p>I also designed an object-driven system that allowed us to easily add new items, characters, dialogue, and daily progression. This structure made it possible to expand content quickly during the jam without rewriting core logic.</p>

            <img src="images/heavyville/HeavyvilleShop-small.webp" data-full-src="images/heavyville/HeavyvilleShop.png" alt="Shop menu" class="blog-image medium">
            <p>Because this was our first 2D project, we spent time figuring out how to navigate the UI and interactions to ensuring players could clearly understand cause-and-effect when placing objects on the scale.</p>

            <h2>Results</h2>
            <p>Despite the challenges of the short timeline and unfamiliar format, we successfully completed and submitted the game before the deadline.</p>
            <p>Out of more than 7,500 entries, Heavyville placed in the <b>top 7%</b>. For me, this project was valuable as an introduction to building games in such a short amount of time and set the foundation for future competitions and more ambitious projects.</p>
        
            <button class="project-button secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Return to top of page</button>
        `
    },
    "nocte": {
        title: "Nocte",
        content: `
            <img src="images/nocte/NoctePoster-small.webp" data-full-src="images/nocte/NoctePoster.png" alt="Nocte poster" class="blog-image">

            <p>
                <a href="https://tms.ogpc.info/Games/Details/cd7fde0e-bea4-4f2e-9692-9df177798a7a" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=iuVu_se6i7w" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/DoomKitty87/nocte-game" target="_blank" class="project-button secondary">View source</a>
            </p>

            <h2>Overview</h2>
            <img src="images/general/OGPCLogo-small.webp" data-full-src="images/general/OGPCLogo.png" alt="Oregon Game Project Challenge" class="blog-image small">
            <p><i>Nocte</i> was created for the <a href="topic.html?id=ogpc" class="topic-link">Oregon Game Project Challenge (OGPC)</a>, Oregon's statewide game development competition. The competition spans several months and is judged by industry professionals across design, art, and technical execution.</p>
            <p>I worked on this project with my team <a href="topic.html?id=fractal-dev" class="topic-link">Fractal Development</a>. Coming off previous successes, we were ambitious and chose to pursue a technically complex idea centered around procedural generation.</p>
            <p>The theme for this year was <i>Cycles</i>. We interpreted this as a narrative and mechanical loop: repeatedly launching down to a hostile planet, dying, upgrading yourself, and trying again.</p>

            <h2>Planning</h2>
            <img src="images/nocte/NocteMiroPlanning-small.webp" data-full-src="images/nocte/NocteMiroPlanning  .png" alt="Nocte planning in Miro" class="blog-image medium">
            <p>Early planning focused on building a large, procedurally generated world designed for exploration. Our goal was a roguelike experience where each run felt different, but still supported meaningful progression and storytelling.</p>
            <p>In hindsight, we were overconfident in our ability to deliver such a broad scope within the competition timeline. We underestimated how much additional complexity procedural generation introduces, especially when layered with narrative systems, upgrades, and progression.</p>
            <p>Despite this, we committed to the idea and focused on building flexible systems that could adapt to dynamically generated content.</p>

            <h2>Development</h2>
            <img src="images/nocte/NocteWorld-small.webp" data-full-src="images/nocte/NocteWorld.png" alt="Procedurally generated world" class="blog-image medium">
            <p>A significant portion of development was spent on procedural generation and ensuring that gameplay systems could function reliably in an unpredictable environment. This required careful separation between authored content and generated structure.</p>

            <img src="images/nocte/NoctePlayerController-small.webp" data-full-src="images/nocte/NoctePlayerController.png" alt="Player controller" class="blog-image medium">
            <p>I worked primarily on the player controller and the upgrade system. The upgrade system allowed players to permanently improve their abilities between runs, reinforcing the core cycle of failure, learning, and progression.</p>

            <img src="images/nocte/NocteUpgrades-small.webp" data-full-src="images/nocte/NocteUpgrades.png" alt="Upgrade system" class="blog-image medium">
            <p>Because the world layout was not fixed, upgrades and progression systems had to be resilient to changing environments, which influenced how abilities were designed and balanced.</p>

            <img src="images/nocte/NocteVFX-small.webp" data-full-src="images/nocte/NocteVFX.png" alt="Visual effects" class="blog-image medium">
            <p>I also created visual effects to support combat, traversal, and environmental feedback, helping players read moment-to-moment gameplay despite the procedural nature of the world.</p>

            <img src="images/nocte/NocteDialogue-small.webp" data-full-src="images/nocte/NocteDialogue.png" alt="Story and dialogue" class="blog-image small">
            <p>In parallel with system development, we invested heavily in narrative. We wrote extensive story content and recorded voice acting to give context and emotional weight to the repeated cycle of descent and death.</p>

            <h2>Results</h2>
            <img src="images/nocte/NocteFinalImage-small.webp" data-full-src="images/nocte/NocteFinalImage.png" alt="OGPC Best Game Design award" class="blog-image medium">
            <p>While Nocte ultimately fell short of our original scope, it was an invaluable learning experience. The project revealed the real cost of procedural systems and reinforced the importance of scope control.</p>
            <p>The game received the <b>Best Game Design</b> award, largely due to its narrative depth and thematic cohesion. For our team, Nocte became a turning point—directly influencing how we approached scope, iteration, and technical ambition in later projects.</p>
        
            <button class="project-button secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Return to top of page</button>
        `
    },
    "symbiont": {
        title: "Symbiont",
        content: `
            <img src="images/symbiont/SymbiontPoster-small.webp" data-full-src="images/symbiont/SymbiontPoster.png" alt="Symbiont poster" class="blog-image">
            <p>
                <a href="https://tms.ogpc.info/Games/Details/d188f6c3-fb44-4d45-859c-2b3abd0a0ab2" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=veMg_MTGvXw" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/DoomKitty87/symbiont-ogpc" target="_blank" class="project-button secondary">View source</a>
            </p>

            <h2>Overview</h2>
            <img src="images/general/OGPCLogo-small.webp" data-full-src="images/general/OGPCLogo.png" alt="Oregon Game Project Challenge" class="blog-image small">
            <p><i>Symbiont</i> was our team's first game project and our first entry into the <a href="topic.html?id=ogpc" class="topic-link">Oregon Game Project Challenge (OGPC)</a>. At the time, none of us had made a complete game before, and this project served as our introduction to game development as a whole.</p>
            <p>Unlike later years, we started the competition late and had only about three months to work instead of the usual nine. Much of that time was spent learning tools, workflows, and foundational skills rather than polishing content.</p>
            <p>The theme for this year was <i>Breaking Conventions</i>. We interpreted this as challenging traditional assumptions about familiar genres.</p>

            <h2>Planning</h2>
            <img src="images/symbiont/SymbiontPlanning-small.webp" data-full-src="images/symbiont/SymbiontPlanning.png" alt="Early Symbiont planning" class="blog-image medium">
            <p>The initial concept came from a challenge given by our computer science teacher: create a game that could be played using only three buttons. We wanted to push that constraint as far as possible.</p>
            <p>We decided to make an on-rails shooter without traditional movement. Instead of navigating freely through space, the player teleports between enemies, taking control of them and using their abilities to progress through a series of rooms.</p>
            <p>This approach allowed us to rethink the shooter genre while keeping input complexity extremely low.</p>

            <h2>Development</h2>
            <img src="images/symbiont/SymbiontModeling-small.webp" data-full-src="images/symbiont/SymbiontModeling.png" alt="Symbiont modeling" class="blog-image medium">
            <p>Because this was our first game, development focused heavily on fundamentals: input handling, basic combat logic, state management, and scene transitions. With such a limited control scheme, every system needed to be clear and intentional.</p>

            <img src="images/symbiont/SymbiontTesting-small.webp" data-full-src="images/symbiont/SymbiontTesting.png" alt="UI mockup/testing" class="blog-image medium">
            <p>The core mechanic—teleporting between enemies and taking them over—formed the backbone of the game. This allowed us to create variety without adding complex controls or player movement.</p>

            <img src="images/symbiont/SymbiontPortal-small.webp" data-full-src="images/symbiont/SymbiontPortal.png" alt="Seamless portals" class="blog-image medium">
            <p>Due to time constraints and our focus on learning, the game does not feature a full narrative. Instead, we concentrated on building a complete, functional gameplay loop that demonstrated strong technical execution.</p>

            <h2>Results</h2>
            <img src="images/symbiont/SymbiontGameplay-small.webp" data-full-src="images/symbiont/SymbiontGameplay.png" alt="Symbiont gameplay" class="blog-image medium">
            <p>Despite the limited development time and our lack of prior experience, Symbiont was awarded <b>Best in Programming</b> at the competition.</p>
            <p>At this stage, our team consisted of three programmers, and this project laid the foundation for everything that followed. Symbiont marked the start of our growth as developers and set the direction for future projects focused on strong systems and unconventional design.</p>
        
            <button class="project-button secondary" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">Return to top of page</button>
        `
    },
};