import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { BackgroundImageDirective } from './custom-directives/background-image.directive';
import { NavigationService } from './custom-service/navigation.service';
import { FooterComponent } from './footer/footer.component';
import { StaticMessageService } from './custom-service/static-message.service';
import { HomeComponent } from './home/home.component';
import { HotNewsComponent } from './home/hot-news/hot-news.component';
import { ArticleService } from './custom-service/article.service';
import { LoadingComponent } from './loading/loading.component';
import { NationBannerComponent } from './home/nation-banner/nation-banner.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    BackgroundImageDirective,
    FooterComponent,
    HomeComponent,
    HotNewsComponent,
    LoadingComponent,
    NationBannerComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NavigationService,
    StaticMessageService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
