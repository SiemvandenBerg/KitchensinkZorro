import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTreeViewModule } from 'ng-zorro-antd/tree-view';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzWaterMarkModule } from 'ng-zorro-antd/water-mark';


import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { AffixComponent } from './affix/affix.component';
import { AlertComponent } from './alert/alert.component';
import { AnchorComponent } from './anchor/anchor.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BackTopComponent } from './back-top/back-top.component';
import { BadgeComponent } from './badge/badge.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CardComponent } from './card/card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CascaderComponent } from './cascader/cascader.component';
import { CdkComponent } from './cdk/cdk.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CommentComponent } from './comment/comment.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import { DividerComponent } from './divider/divider.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EmptyComponent } from './empty/empty.component';
import { FormComponent } from './form/form.component';
import { GridComponent } from './grid/grid.component';
import { IconComponent } from './icon/icon.component';
import { ImageComponent } from './image/image.component';
import { InputComponent } from './input/input.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './list/list.component';
import { MentionComponent } from './mention/mention.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { ModalComponent } from './modal/modal.component';
import { NotificationComponent } from './notification/notification.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopConfirmComponent } from './pop-confirm/pop-confirm.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { RadioComponent } from './radio/radio.component';
import { RateComponent } from './rate/rate.component';
import { ResizableComponent } from './resizable/resizable.component';
import { ResultComponent } from './result/result.component';
import { SchematicsComponent } from './schematics/schematics.component';
import { SegmentedComponent } from './segmented/segmented.component';
import { SelectComponent } from './select/select.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { SliderComponent } from './slider/slider.component';
import { SpaceComponent } from './space/space.component';
import { SpinComponent } from './spin/spin.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StepsComponent } from './steps/steps.component';
import { SwitchComponent } from './switch/switch.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TagComponent } from './tag/tag.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TransferComponent } from './transfer/transfer.component';
import { TreeComponent } from './tree/tree.component';
import { TreeSelectComponent } from './tree-select/tree-select.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { TypographyComponent } from './typography/typography.component';
import { UploadComponent } from './upload/upload.component';
import { VersionComponent } from './version/version.component';
import { WaterMarkComponent } from './water-mark/water-mark.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AffixComponent,
    AlertComponent,
    AnchorComponent,
    AutoCompleteComponent,
    AvatarComponent,
    BackTopComponent,
    BadgeComponent,
    BreadcrumbComponent,
    CalendarComponent,
    CardComponent,
    CarouselComponent,
    CascaderComponent,
    CdkComponent,
    CheckboxComponent,
    CollapseComponent,
    CommentComponent,
    DatePickerComponent,
    DescriptionsComponent,
    DividerComponent,
    DrawerComponent,
    DropdownComponent,
    EmptyComponent,
    FormComponent,
    GridComponent,
    IconComponent,
    ImageComponent,
    InputComponent,
    InputNumberComponent,
    LayoutComponent,
    ListComponent,
    MentionComponent,
    MenuComponent,
    MessageComponent,
    ModalComponent,
    NotificationComponent,
    PageHeaderComponent,
    PaginationComponent,
    PopConfirmComponent,
    PopoverComponent,
    ProgressComponent,
    QrCodeComponent,
    RadioComponent,
    RateComponent,
    ResizableComponent,
    ResultComponent,
    SchematicsComponent,
    SegmentedComponent,
    SelectComponent,
    SkeletonComponent,
    SliderComponent,
    SpaceComponent,
    SpinComponent,
    StatisticsComponent,
    StepsComponent,
    SwitchComponent,
    TableComponent,
    TabsComponent,
    TagComponent,
    TimePickerComponent,
    TimelineComponent,
    TooltipComponent,
    TransferComponent,
    TreeComponent,
    TreeSelectComponent,
    TreeViewComponent,
    TypographyComponent,
    UploadComponent,
    VersionComponent,
    WaterMarkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NzAffixModule, 
    NzAlertModule, 
    NzAutocompleteModule,
    NzAnchorModule, 
    NzAvatarModule, 
    NzBackTopModule, 
    NzBadgeModule, 
    NzButtonModule, 
    NzBreadCrumbModule,
    NzCalendarModule, 
    NzCardModule, 
    NzCarouselModule, 
    NzCascaderModule, 
    NzCheckboxModule, 
    NzCollapseModule, 
    NzCommentModule, 
    NzDatePickerModule, 
    NzDescriptionsModule, 
    NzDividerModule, 
    NzDrawerModule, 
    NzEmptyModule, 
    NzFormModule,
    NzGridModule, 
    NzIconModule, 
    NzImageModule, 
    NzInputModule, 
    NzInputNumberModule, 
    NzLayoutModule, 
    NzListModule, 
    NzMentionModule, 
    NzMenuModule, 
    NzMessageModule, 
    NzModalModule, 
    NzNotificationModule, 
    NzPageHeaderModule, 
    NzPaginationModule, 
    NzPopoverModule, 
    NzProgressModule, 
    NzRadioModule, 
    NzRateModule, 
    NzResizableModule, 
    NzResultModule, 
    NzSegmentedModule, 
    NzSelectModule, 
    NzSkeletonModule, 
    NzSliderModule, 
    NzSpaceModule, 
    NzSpinModule, 
    NzStepsModule, 
    NzSwitchModule, 
    NzTableModule, 
    NzTabsModule, 
    NzTagModule, 
    NzTimelineModule, 
    NzTransferModule, 
    NzTreeModule, 
    NzTreeViewModule, 
    NzTypographyModule, 
    NzUploadModule, 
    NzWaterMarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }