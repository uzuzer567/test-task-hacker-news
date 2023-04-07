import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesListItemComponent } from './modules/stories/stories-list-item/stories-list-item.component';
import { StoriesListComponent } from './modules/stories/stories-list/stories-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { UrlPipe } from './core/pipes/url.pipe';
import { TimePipe } from './core/pipes/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoriesListItemComponent,
    StoriesListComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    UrlPipe,
    TimePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
