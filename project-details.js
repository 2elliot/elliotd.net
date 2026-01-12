// Detailed project information
// Add full descriptions, links, screenshots, and technologies for each project
const projectDetails = {
    "sheep": {
        title: "On the Lamb!",
        content: `
            <img src="images/sheep/SheepPoster.png" alt="On the Lamb poster" class="blog-image full">
            
            <p>
                <a href="https://fractaldev.itch.io/on-the-lamb" target="_blank" class="project-button">View game page</a>
                <a href="https://www.youtube.com/watch?v=kN98JuUSIng" target="_blank" class="project-button secondary">View trailer</a>
            </p>
            
            <h2>Overview</h2>
            <p>This game was made for the <a href="https://itch.io/jam/gmtk-2025" target="_blank">2025 GMTK Game Jam</a>. This is a game competition where teams make a game in 4 days based on a given theme of <i>Loop</i>, and during the 2025 competition there more than 9,500 entries.</p>
            
            <img src="images/sheep/SheepMiroPlanning.png" alt="Planning" class="blog-image large">
            
            <h2>Our game</h2>
            <p>When we plan our games, we always start with .</p>
            
            <img src="images/sheep/SheepLasso.png" alt="Lassoing sheep" class="blog-image">
            
            <p>I also implemented the cloning mechanic which was central to the "scale" theme. Getting the physics to feel right was tricky but rewarding.</p>
            
            <img src="images/sheep/SheepCloner.png" alt="Cloning mechanic" class="blog-image">
            
            <h2>The Result</h2>
            <p>We managed to create a fully playable game in the time limit. The monster encounters were some of the most fun moments to develop.</p>
            
            <img src="images/sheep/SheepMonster.png" alt="Monster encounter" class="blog-image">

            <h2>Technologies</h2>
            <p class="tech-tags">
                <span class="tech-tag">Unity</span>
            </p>
        `,
    },
    "sheep-old": {
        title: "On the Lamb!",
        description: `
            <p> This is test text  </p>
        `,
        links: [
            { text: "View itch page", url: "https://fractaldev.itch.io/on-the-lamb", primary: true },
            { text: "View trailer", url: "https://www.youtube.com/watch?v=kN98JuUSIng", primary: false }
        ],
        screenshots: [
            "images/sheep/SheepPoster.png",
            "images/sheep/SheepGuidebook.png",
            "images/sheep/SheepLasso.png",
            "images/sheep/SheepCloner.png",
            "images/sheep/SheepMonster.png"
        ],
        technologies: ["Unity"]
    },
    "northwoods": {
        title: "Northwoods",
        description: `
            <p> This is test text  </p>
        `,
        links: [
            { text: "View official page", url: "https://tms.ogpc.info/Games/Details/1b7379ac-c1a0-42f4-8198-cd94d069b991", primary: true },
            { text: "View trailer", url: "https://www.youtube.com/watch?v=d67YrHbhKMY", primary: false },
            { text: "View source", url: "https://github.com/fractalogpc/astoria", primary: false }
        ],
        screenshots: [
            "images/northwoods/NorthwoodsPoster.png",
            "images/northwoods/NorthwoodsPostcard.png",
            "images/northwoods/NorthwoodsMenu.jpg",
            "images/northwoods/NorthwoodsTreeChopping.jpg",
            "images/northwoods/NorthwoodsWater.jpg"
        ],
        technologies: ["Unity"]
    },
    "heavyville": {
        title: "Heavyville",
        content: `
            <img src="images/heavyville/HeavyvillePoster.png" alt="Heavyville poster" class="blog-image">
        `,
    },
    "heavyville-old": {
        title: "Heavyville",
        description: `
            <p> This is test text  </p>
        `,
        links: [
            { text: "View official page", url: "https://fractaldev.itch.io/heavyville", primary: true },
        ],
        screenshots: [
            "images/heavyville/HeavyvillePoster.png",
            "images/heavyville/HeavyvilleGameplay.png",
            "images/heavyville/HeavyvilleShop.png"
        ],
        technologies: ["Unity"]
    },
    "nocte": {
        title: "Nocte",
        description: `
            <p> This is test text  </p>
        `,
        links: [
            { text: "View official page", url: "https://tms.ogpc.info/Games/Details/cd7fde0e-bea4-4f2e-9692-9df177798a7a", primary: true },
            { text: "View trailer", url: "https://www.youtube.com/watch?v=iuVu_se6i7w", primary: false },
            { text: "View source", url: "https://github.com/DoomKitty87/nocte-game", primary: false }
        ],
        screenshots: [
            "images/nocte/NoctePoster.png",
            "images/nocte/NocteHologram.png",
            "images/nocte/NocteSeaside.jpeg",
            "images/nocte/NocteConceptArt.jpg"
        ],
        technologies: ["Unity"]
    },
    "symbiont": {
        title: "Symbiont",
        description: `
            <p> This is test text  </p>
        `,
        links: [
            { text: "View official page", url: "https://tms.ogpc.info/Games/Details/d188f6c3-fb44-4d45-859c-2b3abd0a0ab2", primary: true },
            { text: "View trailer", url: "https://www.youtube.com/watch?v=veMg_MTGvXw", primary: false },
            { text: "View source", url: "https://github.com/DoomKitty87/symbiont-ogpc", primary: false }
        ],
        screenshots: [
            "images/symbiont/SymbiontPoster.png",
            "images/symbiont/SymbiontTesting.png",
            "images/symbiont/SymbiontModeling.png",
            "images/symbiont/SymbiontGameplay.png"
        ],
        technologies: ["Unity"]
    }
};