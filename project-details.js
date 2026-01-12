// Detailed project information
// Add full descriptions, links, screenshots, and technologies for each project
const projectDetails = {
    "sheep": {
        title: "On the Lamb!",
        content: `
            <img src="images/sheep/SheepPoster.png" alt="Poster for On the Lamb!" class="blog-image full">
            
            <p>
                <a href="https://fractaldev.itch.io/on-the-lamb" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=kN98JuUSIng" target="_blank" class="project-button secondary">View trailer</a>
            </p>
            
            <h2>Overview</h2>
            <img src="images/sheep/GMTKLogo.png" alt="GMTK Game Jam 2025" class="blog-image small">
            <p>We made this game for the <a href="https://itch.io/jam/gmtk-2025" target="_blank">2025 GMTK Game Jam</a>, a game making competition hosted by the Youtuber <a href=https://www.youtube.com/channel/UCqJ-Xo29CKyLTjn6z2XwYAw" target="_blank">Game Maker's Toolkit</a>. The GMTK Game Jam is an annual game making marathon, where individuals and teams try to make a game that fits a theme, in only 4 days.</p>
            <p>The theme for the 2025 competition was <i>Loop</i>. Competitors are able to use pre-existing code or assets, but shouldn't make stuff ahead of time specifically for this competition.</p>
                        
            <h2>Planning</h2>
            <img src="images/sheep/SheepMiroPlanning.png" alt="Planning inside Miro" class="blog-image large">
            <p>Our first step to making games is loading into a  <a href="https://miro.com" target="_blank">Miro board</a> and writing down literally every idea we have. In a competition this short, the planning phase is extremely important and will determine what the game will become. For a normal competition this process can take weeks of prototyping and iteration, however during this game we quickly simply didn't have the time.</p>
            <img src="images/sheep/SheepMiroProsCons.png" alt="Pros and cons list" class="blog-image medium">
            <p>This competition's theme was Loop. We had ideas that included a donut factory game, throwing boomerangs to block out the sun, making a time loop game where the world resets, and other questionable ideas, however we decided on a game where you have to lasso (loop) sheep and capture them into pens.</p>
                        
            <h2>Development</h2>
            <p>Now that we had an idea, production was full steam ahead. We use the <a href="https://unity.com/" target="_blank">Unity Engine</a> for our game engine of choice. I started working on the lasso mechanic which allows the player to capture sheep. This included both the mechanics of throwing the lasso and calculating which sheep were in the loop, and the visuals of the lasso itself.</p>
            <img src="images/sheep/SheepLasso.png" alt="Lasso mechanic" class="blog-image medium">
            <p>At the same time, my teammates were working on building the world. We used assets from <a href="https://www.animpic.studio/" target="_blank">Animpic Studio</a> for trees, tools, and the barn, and created a custom ground shader. Our vision for this game was a fun-low poly environment where we could add whatever different systems or machines we wanted.</p>
            <img src="images/sheep/SheepGuidebook.png" alt="Guidebook map" class="blog-image large">
            <p>With the lasso and the world in place, we were able to have some fun. The main gameplay loop is collecting sheep and bringing them back to your pens, then using the wool from your sheep to unlock and upgrade machines around your barn. In addition to increasing pen sizes, you can locate rare sheep types, switch between colors of wool, and clone sheep. With enough wool, you're able to construct a rocket ship and escape from the cthulhu monster in your back yard.</p>
            <img src="images/sheep/SheepCloner.png" alt="Sheep cloner machine" class="blog-image medium">
            <p>Yes, you read that right. As a final twist, we added a cthulhu monster that requires you to feed it sheep to keep it at bay. Every night you have a quota of sheep you need to feed it, or else it will destroy your barn and end the game. This gives the player agency and requires them to make choices between feeding the cthulhu and using wool to upgrade the farm.</p>
            <img src="images/sheep/SheepMonster.png" alt="Cthulhu monster" class="blog-image large">

            <h2>Results</h2>
            <p>In the end, we were able to complete and submit the game just before the deadline. We were extremely happy with how it turned out, especially considering the short time frame. The game was well received, and out of nearly 10,000 entries we placed in the top 4%. Overall, it was a fantastic experience and we learned a lot about rapid game development and teamwork.</p>
        `,
    },
    "northwoods": {
        title: "Northwoods",
        content: `
            <img src="images/northwoods/NorthwoodsPoster.png" alt="Northwoods poster" class="blog-image">

            <p>
                <a href="https://tms.ogpc.info/Games/Details/1b7379ac-c1a0-42f4-8198-cd94d069b991" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=d67YrHbhKMY" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/fractalogpc/astoria" target="_blank" class="project-button secondary">View source</a>
            </p>

            <p>This page is under construction. Check back soon for a full post mortem on the development of Northwoods!</p>
        `
    },
    "heavyville": {
        title: "Heavyville",
        content: `
            <img src="images/heavyville/HeavyvillePoster.png" alt="Heavyville poster" class="blog-image">

            <p>
                <a href="https://fractaldev.itch.io/heavyville" target="_blank" class="project-button">View official page</a>
            </p>

            <p>This page is under construction. Check back soon for a full post mortem on the development of Heavyville!</p>
        `
    },
    "nocte": {
        title: "Nocte",
        content: `
            <img src="images/nocte/NoctePoster.png" alt="Nocte poster" class="blog-image">

            <p>
                <a href="https://tms.ogpc.info/Games/Details/cd7fde0e-bea4-4f2e-9692-9df177798a7a" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=iuVu_se6i7w" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/DoomKitty87/nocte-game" target="_blank" class="project-button secondary">View source</a>
            </p>

            <p>This page is under construction. Check back soon for a full post mortem on the development of Nocte!</p>
        `
    },
    "symbiont": {
        title: "Symbiont",
        content: `
            <img src="images/symbiont/SymbiontPoster.png" alt="Symbiont poster" class="blog-image">
            <p>
                <a href="https://tms.ogpc.info/Games/Details/d188f6c3-fb44-4d45-859c-2b3abd0a0ab2" target="_blank" class="project-button">View official page</a>
                <a href="https://www.youtube.com/watch?v=veMg_MTGvXw" target="_blank" class="project-button secondary">View trailer</a>
                <a href="https://github.com/DoomKitty87/symbiont-ogpc" target="_blank" class="project-button secondary">View source</a>
            </p>

            <p>This page is under construction. Check back soon for a full post mortem on the development of Symbiont!</p>
        `
    },
};