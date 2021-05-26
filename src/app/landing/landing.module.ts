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
import {ReactiveFormsModule} from '@angular/forms';
import {SafeHtmlModule} from '../pipes/safeHtml.pipe';
import {MarkedPipe} from '../pipes/markdown.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {OwlNativeDateTimeModule} from 'ng-pick-datetime';
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import {AlertModule} from '../parts/alert/alert.service';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

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
    MarkedPipe,
  ],
  exports: [
    MapComponent,
    HowToRentComponent,
    BookCottageComponent,
    RentCottagesComponent
  ],
    imports: [
        RouterModule.forChild([{path: '', component: LandingComponent}]),
        CommonModule,
        CarouselModule,
        ReactiveFormsModule,
        SafeHtmlModule,
        NgxMaskModule.forRoot(options),
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        AlertModule,

    ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'ru'},
  ]
})
export class LandingModule { }
