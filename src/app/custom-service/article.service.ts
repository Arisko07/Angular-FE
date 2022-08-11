import { Injectable } from '@angular/core';
import { HotNews } from '../home/hot-news.model';
import { NationBanner } from '../home/nation-banner.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
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
  constructor() { }

  getHowNews(){
    return this.hotNews;
  }
  getNationBanner(){
    return this.nationBanner;
  }
}
