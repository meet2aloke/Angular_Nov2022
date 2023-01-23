import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CenterComponent } from './components/center/center.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { LoginComponent } from './components/login/login.component';
import { PlayersComponent } from './components/players/players.component';
import { DefaultsComponent } from './components/defaults/defaults.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeComponent } from './components/employee/employee.component';
import { NumberonlyDirective } from './custom-directives/numberonly.directive';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { ValidemailDirective } from './custom-directives/validemail.directive';
import { TextinputDirective } from './custom-directives/textinput.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingWordPipe } from './custom-pipes/remaining-word.pipe';
import { RemainingCharPipe } from './custom-pipes/remaining-char.pipe';
import { OrdinalPipe } from './custom-pipes/ordinal.pipe';
import { NamePrefixPipe } from './custom-pipes/name-prefix.pipe';
import { SearchPipe } from './custom-pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './custom-pipes/truncate.pipe';
import { MyFilterPipe } from './custom-pipes/my-filter.pipe';
import { MySortPipe } from './custom-pipes/my-sort.pipe';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerModalComponent } from './components/player-modal/player-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    CenterComponent,
    DatabindingComponent,
    FooterComponent,
    LoginComponent,
    PlayersComponent,
    DefaultsComponent,
    DirectivesComponent,
    ProductsComponent,
    UsersComponent,
    EmployeeComponent,
    NumberonlyDirective,
    HighlightDirective,
    ValidemailDirective,
    TextinputDirective,
    PipesComponent,
    RemainingWordPipe,
    RemainingCharPipe,
    OrdinalPipe,
    NamePrefixPipe,
    SearchPipe,
    TruncatePipe,
    MyFilterPipe,
    MySortPipe,
    CategoriesComponent,
    CategoryComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    PlayerListComponent,
    PlayerCardComponent,
    PlayerModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
