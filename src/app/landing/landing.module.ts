import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { LeisureComponent } from './leisure/leisure.component';
import { GallaryComponent } from './gallary/gallary.component';
import { CottageDescriptionComponent } from './cottage-description/cottage-description.component';
import { HowToRentComponent } from './how-to-rent/how-to-rent.component';
import { BookCottageComponent } from './book-cottage/book-cottage.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {RouterModule} from '@angular/router';
import { RentCottagesComponent } from './rent-cottages/rent-cottages.component';
import {CottageCardComponent} from './rent-cottages/cottage-card/cottage-card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    BannerComponent,
    WhatWeOfferComponent,
    LeisureComponent,
    GallaryComponent,
    CottageCardComponent,
    CottageDescriptionComponent,
    HowToRentComponent,
    BookCottageComponent,
    MapComponent,
    FooterComponent,
    ReviewsComponent,
    RentCottagesComponent,
  ],
  exports: [
    MapComponent,
    HowToRentComponent,
    BookCottageComponent,
    RentCottagesComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: LandingComponent }]),
    CommonModule,
    CarouselModule
  ]
})
export class LandingModule { }
