import { EventEmitter, Injectable } from '@angular/core';
import { Article } from '../article/article.model';
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
      "The new event Of Drink A-Dreaming is about to begin! Luka from Mondstadt is inviting people to take part in Bartender Academy Week. He says that those whose customers walk away satisfied will receive impressive rewards..."
    ),
    new Article(
      "",
      "events",
      "March 27, 2022",
      {thumbnail:"pai.jpg", portrait: ''},
      "Genshin Impact EP - A Scenery of Skylight and Serenity",
      "#",
      "The sakura petals scatter as they caress the earth, and dreams are renewed by transcending eternity. When the Narukami's musings finally bear fruit, the storm will give way to a serene skylight."
    ),
    new Article(
      "",
      "events",
      "March 30, 2022",
      {"thumbnail":"art1.jpg", portrait: ''},
      "Genshin Impact EP - The Iridescent Waves",
      "#",
      "Clouds move across the sea, riding the wind of distant mountains, reflected in a mirror of water. Waves in the heart, floating in the iridescent sky, silent as the moon of the quiet night."    
    ),
    new Article(
      "",
      "events",
      "April 10, 2022",
      {"thumbnail":"art2.jpg", portrait: ''},
      "Paimon's Sneak Peek at Version 2.5 New Events - Phase II",
      "#",
      "In Version 2.5, there will be many new events available, let's take a look~"
    ),
    new Article(
      "",
      "events",
      "April 12, 2022",
      {"thumbnail":"weapon.jpg", portrait: ''},
      "Event Wish Epitome Invocation - Boosted Drop Rate for Engulfing Lightning (Polearm) and Everlasting Moonglow (Catalyst)!",
      "#",
      "Travelers, stock up on weapons and characters in Epitome Invocation to make your party stronger in combat!"
    ),
    new Article(
      "klee",
      "character",
      "April 12, 2022",
      {"thumbnail":"Klee_Thumb.png","portrait": "kleePortrait.webp"},        
      "Klee - Da-Da Da!",
      "../view/KleePage.html",
      "The daughter of the intrepid and often quite destructive adventurer Alice, Klee takes after her mother in many ways, much to the dismay of the Knights of Favonius whom she has been entrusted to."    
    ),
    new Article(
      "ayaka",
      "character",
      "April 12, 2022",
      {"thumbnail":"Ayaka_Thumb.png","portrait": "ayakaPortrait.webp"},
      "Kamisato Ayaka - The Homeward Heron",
      "../view/AyakaPage.html",
      "She is the oldest daughter of the Kamisato Clan and younger sister of Kamisato Ayato. Being beautiful, elegant, and graceful, the common folk have nothing to bad-mouth Ayaka about. <br><br> Because of her social status as the eldest daughter of the Kamisato Clan of the Yashiro Commission and as the Shirasagi Himegimi, Ayaka is seen as a model of perfection."
    
    ),
    new Article(
      "kazuha",
      "character",
      "April 12, 2022",
      {"thumbnail":"Kazuha_Thumb.png","portrait": "kazuhaPortrait.webp"},        
      "Kaedehara Kazuha: Moonlit Breeze",
      "../view/KazuhaPage.html",
      "A wandering samurai of the once-famed Kaedehara Clan, Kazuha is a temporary crewmember of The Crux."
    ),
    new Article(
      "albedo",
      "character",
      "April 12, 2022",
      {"thumbnail":"Albedo_Thumb.png","portrait": "albedoPortrait.webp"},
      "Albedo - Still Life and Creation",
      "../view/AlbedoPage.html",
      "A synthetic human made by the alchemist Rhinedottir, the mysterious Albedo is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.<br><br> Through a recommendation from the adventurer Alice, with Sucrose as his assistant, he holds an infinite desire to learn about the world of Teyvat, carefully studying every object around him."    
    ),
    new Article(
      "teyvat",
      "info",
      "April 12, 2022",
      {"thumbnail":"Teyvat_Thumb.webp","portrait": "Teyvat_Thumb.webp"},
      "Adventures in Teyvat",
      "../view/TeyvatPage.html",
      "Teyvat is the continent that serves as the primary region of Genshin Impact. <br><br>You have arrived in Teyvat — a fantasy world where the seven elements flow and converge.<br><br>In the distant past, the Archons granted mortals unique elemental abilities. With the help of such powers, people formed a bountiful homeland out of the wilderness.<br><br>However, 500 years ago, the collapse of an ancient civilization turned the universe upside down... Though the calamity the world suffered has ceased, peace has yet to be restored."
    )
  ]
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
}
