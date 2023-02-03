import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from 'primeng/calendar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { DatePipe } from '@angular/common';
import { FooterComponent } from './template/footer/footer.component';
import { LayoutComponent } from './template/layout/layout.component';
import { HeaderComponent } from './template/header/header.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SidePanelPipe } from './SidePanel.pipe';
import { SidepanelPipe } from './views/sidepanel.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProfileComponent } from './views/profile/profile.component';
import { PropertyComponent } from './views/property/property.component';
import { TabViewModule } from 'primeng/tabview';
import { SellPropertyComponent } from './views/sell-Property/sell-Property.component';
import { DataViewModule } from 'primeng/dataview';
import { DataViewComponent } from './views/DataView/DataView.component';
import { CarouselModule } from 'primeng/carousel';
import { UserCreationComponent } from './views/UserCreation/UserCreation.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ProductDescriptionComponent } from './views/productDescription/productDescription.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InboxComponent } from './views/Inbox/Inbox.component';
import { CategoryComponent } from './views/category/category.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    LoginComponent,
    SidePanelPipe,
    SidepanelPipe,
    ProfileComponent,
    DataViewComponent,
    PropertyComponent,
    SellPropertyComponent,
    UserCreationComponent,
    ProductDescriptionComponent,
    InboxComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ConfirmDialogModule,
    CheckboxModule,
    DataViewModule,
    ToastModule,
    CarouselModule,
    ModalModule.forRoot(),
    FormsModule,
    MultiSelectModule,
    DialogModule,
    CalendarModule,
    BrowserAnimationsModule,
    ToolbarModule,
    HttpClientModule,
    FontAwesomeModule,
    OverlayPanelModule,
    ReactiveFormsModule,
    TableModule,
    DropdownModule,
    TabViewModule,
    FileUploadModule,
  ],
  providers: [MessageService, DatePipe, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
