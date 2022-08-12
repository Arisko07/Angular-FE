import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../article/article.model';
import { Skill } from '../article/skill.model';
import { HotNews } from '../home/hot-news.model';
import { NationBanner } from '../home/nation-banner.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleFilter = new EventEmitter<string>();  
  private nationBanner: NationBanner[] = [
    new NationBanner(
      'Mondstadt',
      'mons.jpg',
      'jean.png'
    ),
    new NationBanner(
      'Liyue',
      'liyue.jpg',
      'xiao.png'
    ),
    new NationBanner(
      'Inazuma',
      'inazuma.jpg',
      'ayaka.png'
    )
  ]
  private hotNews: HotNews[] = [
    new HotNews(
      'Genshin Impact EP - The Iridescent Waves',
      'Clouds move across the sea, riding the wind of distant mountains, reflected in a mirror of water. Waves in the heart, floating in the iridescent sky, silent as the moon of the quiet night.',
      'art1.jpg',
      'Apr 14, 2022',
      'Info'      
    ),
    new HotNews(
      `Paimon's Sneak Peek at Version 2.5 New Events - Phase II`,
      `In Version 2.5, there will be many new events available, let's take a look~`,
      'art2.jpg',
      'Jan 29, 2022',
      'Info'
    ),
    new HotNews(
      `Event Wish "Drifting Luminescence" - Boosted Drop Rate for "Pearl of Wisdom" Sangonomiya Kokomi (Hydro)!`,
      `Travelers, stock up on weapons and characters in the event wish to make your party stronger in combat!`,
      'art3.jpg',
      'Feb 23, 2022',
      'Event'
    )
  ]
  private articles: Article[] = [
    new Article(
      '',
      "events",
      "March 22, 2022",
      {thumbnail:"drink.jpg", portrait: ''},
      "Of Drink A-Dreaming Gameplay Details",
      "#",
      '',
      "The new event Of Drink A-Dreaming is about to begin! Luka from Mondstadt is inviting people to take part in Bartender Academy Week. He says that those whose customers walk away satisfied will receive impressive rewards...",
      [new Skill('','','','')]
    ),
    new Article(
      "",
      "events",
      "March 27, 2022",
      {thumbnail:"pai.jpg", portrait: ''},
      "Genshin Impact EP - A Scenery of Skylight and Serenity",
      "#",
      '',
      "The sakura petals scatter as they caress the earth, and dreams are renewed by transcending eternity. When the Narukami's musings finally bear fruit, the storm will give way to a serene skylight.",
      [new Skill('','','','')]
    ),
    new Article(
      "",
      "events",
      "March 30, 2022",
      {"thumbnail":"art1.jpg", portrait: ''},
      "Genshin Impact EP - The Iridescent Waves",
      "#",
      '',
      "Clouds move across the sea, riding the wind of distant mountains, reflected in a mirror of water. Waves in the heart, floating in the iridescent sky, silent as the moon of the quiet night."    ,
      [new Skill('','','','')]
    ),
    new Article(
      "",
      "events",
      "April 10, 2022",
      {"thumbnail":"art2.jpg", portrait: ''},
      "Paimon's Sneak Peek at Version 2.5 New Events - Phase II",
      "#",
      '',
      "In Version 2.5, there will be many new events available, let's take a look~",
      [new Skill('','','','')]
    ),
    new Article(
      "",
      "events",
      "April 12, 2022",
      {"thumbnail":"weapon.jpg", portrait: ''},
      "Event Wish Epitome Invocation - Boosted Drop Rate for Engulfing Lightning (Polearm) and Everlasting Moonglow (Catalyst)!",
      "#",
      '',
      "Travelers, stock up on weapons and characters in Epitome Invocation to make your party stronger in combat!",
      [new Skill('','','','')]
    ),
    new Article(
      "klee",
      "character",
      "April 12, 2022",
      {"thumbnail":"Klee_Thumb.png","portrait": "kleePortrait.webp"},        
      "Klee - Da-Da Da!",
      "../view/KleePage.html",
      'https://www.youtube.com/embed/C_duDk5e8yU',
      "The daughter of the intrepid and often quite destructive adventurer Alice, Klee takes after her mother in many ways, much to the dismay of the Knights of Favonius whom she has been entrusted to.",
      [
        new Skill(
          "Catalyst_Pyro.webp",
          "Kaboom!",
          "Normal Attack",
          "<p><strong>Normal Attack</strong><br>Throws things that go boom when they hit things! Perform up to 3 explosive attacks, dealing AoE Pyro DMG.</p><p><strong>Charged Attack</strong><br> Consumes a certain amount of Stamina and deals AoE Pyro DMG to opponents after a short casting time.</p><p><strong>Plunging Attack</strong><br>Gathering the power of Pyro, Klee plunges towards the ground from mid-air, damaging all opponents in her path. Deals AoE Pyro DMG upon impact with the ground.</p>"
        ),
        new Skill(
          "Talent_Jumpy_Dumpty.webp",
          "Jumpy Dumpty",
          "Elemental Skill",
          "<p>Jumpy Dumpty is tons of boom-bang-fun!<br>When thrown, Jumpy Dumpty bounces thrice, igniting and dealing AoE Pyro DMG with every bounce.</p><p>On the third bounce, the bomb splits into many mines.<br>The mines will explode upon contact with opponents, or after a short period of time, dealing AoE Pyro DMG.</p>"
        ),
        new Skill(
          "Talent_Sparks_N_Splash.webp",
          "Sparks n Splash",
          "Elemental Burst",
          "<p>Klee's Blazing Delight! For the duration of this ability, continuously summons Sparks 'n' Splash to attack nearby opponents, dealing AoE Pyro DMG.</p>"
        )
      ]
    ),
    new Article(
      "ayaka",
      "character",
      "April 12, 2022",
      {"thumbnail":"Ayaka_Thumb.png","portrait": "ayakaPortrait.webp"},
      "Kamisato Ayaka - The Homeward Heron",
      "../view/AyakaPage.html",
      'https://www.youtube.com/embed/vsCO7C416bs',
      "She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. Being beautiful, elegant, and graceful, the common folk have nothing to bad-mouth Ayaka about. <br><br> Because of her social status as the eldest daughter of the Kamisato Clan of the Yashiro Commission and as the Shirasagi Himegimi, Ayaka is seen as a model of perfection.",
      [
        new Skill(
          "Sword_Cryo.webp",
          "Kamisato Art: Kabuki",
          "Normal Attack",
          `<p><strong>Normal Attack</strong><br>Perform up to 5 rapid strikes</p><p><strong>Charged Attack</strong><br> Consumes a certain amount of Stamina to unleash a flurry of sword ki</p><p><strong>Plunging Attack</strong><br>Plunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.</p>`
        ),
        new Skill(
          "Talent_Kamisato_Art_Hyouka.webp",
          "Kamisato Art: Hyouka",
          "Elemental Skill",
          "<p>Summons blooming ice to launch nearby opponents, dealing AoE Cryo DMG.</p><p>Clouds shroud the moonlit night. Longing descends like a fog, filling the one detained with wanderlust.</p>"
        ),
        new Skill(
          "Talent_Kamisato_Art_Soumetsu.webp",
          "Kamisato Art: Soumetsu",
          "Elemental Burst",
          "<p>Summons forth a snowstorm with flawless poise, unleashing a Frostflake Seki no To that moves forward continuously.</p>"
        )
      ]
    
    ),
    new Article(
      "kazuha",
      "character",
      "April 12, 2022",
      {"thumbnail":"Kazuha_Thumb.png","portrait": "kazuhaPortrait.webp"},        
      "Kaedehara Kazuha: Moonlit Breeze",
      "../view/KazuhaPage.html",
      'https://www.youtube.com/embed/ST5v7-C3iDk',
      "A wandering samurai of the once-famed Kaedehara Clan, Kazuha is a temporary crewmember of The Crux.",
      [
        new Skill(
          "Sword_Anemo.webp",
          "Garyuu Bladework",
          "Normal Attack",
          "<p><strong>Normal Attack</strong><br>Perform up to 5 rapid strikes</p><p><strong>Charged Attack</strong><br>Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p><p><strong>Plunging Attack</strong><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact. If this Plunging Attack is triggered by Chihayaburu, it will be converted to Plunging Attack: Midare Ranzan.</p><p><strong>Plunging Attack: Midare Ranzan</strong><br>When a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to Anemo DMG and will create a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents.</p>"
        ),
        new Skill(
          "Talent_Chihayaburu.webp",
          "Chihayaburu",
          "Elemental Skill",
          "<p>Unleashes a secret technique as fierce as the rushing wind that pulls objects and opponents towards Kazuha's current position before launching opponents within the AoE, dealing Anemo DMG and lifting Kazuha into the air on a rushing gust of wind.<br>Within 10s of remaining airborne after casting Chihayaburu, Kazuha can unleash a powerful Plunging Attack known as Midare Ranzan.</p>"
        ),
        new Skill(
          "Talent_Kazuha_Slash.webp",
          "Kazuha Slash",
          "Elemental Burst",
          "<p>The signature technique of Kazuha's self-styled bladework — a single slash that strikes with the force of the first winds of autumn, dealing AoE Anemo DMG.<br>The blade's passage will leave behind a field named Autumn Whirlwind that periodically deals AoE Anemo DMG to opponents within its range.</p>"
        )
      ]
    ),
    new Article(
      "albedo",
      "character",
      "April 12, 2022",
      {"thumbnail":"Albedo_Thumb.png","portrait": "albedoPortrait.webp"},
      "Albedo - Still Life and Creation",
      "../view/AlbedoPage.html",
      'https://www.youtube.com/embed/EgnqSKptayI',
      "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.<br><br> Through a recommendation from the adventurer Alice, with Sucrose as his assistant, he holds an infinite desire to learn about the world of Teyvat, carefully studying every object around him."    ,
      [
        new Skill(
          "Sword_Geo.webp",
          "Favonius Bladework - Weiss",
          "Normal Attack",
          "<p><strong>Normal Attack</strong><br>Perform up to 5 rapid strikes</p><p><strong>Charged Attack</strong><br>Consumes a certain amount of Stamina to unleash 2 rapid sword strikes.</p><p><strong>Plunging Attack</strong><br>Plunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.</p>"
        ),
       new Skill(
          "Talent_Abiogenesis_Solar_Isotoma.webp",
          "Abiogenesis: Solar Isotoma",
          "Elemental Skill",
          "<p>Albedo creates a Solar Isotoma using alchemy, which deals AoE Geo DMG on appearance.</p><p><strong>Solar Isotoma</strong><br>has the following properties:</p><ul><li>When opponents within the Solar Isotoma field take DMG, the Solar Isotoma will generate Transient Blossoms which deal AoE Geo DMG. DMG dealt scales off Albedo's DEF.</li><li>Transient Blossoms can only be generated once every 2s.</li><li>When a character is located at the locus of the Solar Isotoma, the Solar Isotoma will accumulate Geo power to form a crystallized platform that lifts the character up to a certain height. Only one crystallized platform can exist at a time.</li><li>Solar Isotoma is considered a Geo construct. Only one Solar Isotoma created by Albedo himself can exist at a time.</li></ul>"
        ),
      new Skill(
          "Talent_Rite_of_Progeniture_Tectonic_Tide.webp",
          "Rite of Progeniture: Tectonic Tide",
          "Elemental Burst",
          "<p>Under Albedo's command, Geo crystals surge and burst forth, dealing AoE Geo DMG in front of him.<br>If a Solar Isotoma created by Albedo himself is on the field, 7 Fatal Blossoms will be generated in the Solar Isotoma field, bursting violently into bloom and dealing AoE Geo DMG.</p>"
        )
      ]
    ),
    new Article(
      "teyvat",
      "info",
      "April 12, 2022",
      {"thumbnail":"Teyvat_Thumb.webp","portrait": "Teyvat_Thumb.webp"},
      "Adventures in Teyvat",
      "../view/TeyvatPage.html",
      'https://www.youtube.com/embed/1I5I_NoCDd8',
      "Teyvat is the continent that serves as the primary region of Genshin Impact. <br><br>You have arrived in Teyvat — a fantasy world where the seven elements flow and converge.<br><br>In the distant past, the Archons granted mortals unique elemental abilities. With the help of such powers, people formed a bountiful homeland out of the wilderness.<br><br>However, 500 years ago, the collapse of an ancient civilization turned the universe upside down... Though the calamity the world suffered has ceased, peace has yet to be restored.",
      [new Skill('','','','')]
    )
  ]
  private selectedArticle: Article = this.getArticles()[0];
  constructor() { }

  getHowNews(){
    return this.hotNews;
  }
  getNationBanner(){
    return this.nationBanner;
  }
  getArticles(){
    return this.articles;
  }
  setSelectedArticle(article: Article){
    this.selectedArticle = article;
  }
  getSelectedArticle(){
    return this.selectedArticle;
  }
}
