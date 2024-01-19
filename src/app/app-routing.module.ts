import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
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
import { GridComponent } from './grid/grid.component';
import { IconComponent } from './icon/icon.component';
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


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  { path: 'button', component: ButtonComponent },
  { path: 'affix', component: AffixComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'anchor', component: AnchorComponent },
  { path: 'auto-complete', component: AutoCompleteComponent },
  { path: 'avatar', component: AvatarComponent },
  { path: 'back-top', component: BackTopComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'card', component: CardComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'cascader', component: CascaderComponent },
  { path: 'cdk', component: CdkComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'collapse', component: CollapseComponent },
  { path: 'comment', component: CommentComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'descriptions', component: DescriptionsComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'empty', component: EmptyComponent },
  { path: 'form', component: FormComponent },
  { path: 'grid', component: GridComponent },
  { path: 'icon', component: IconComponent },
  { path: 'input', component: InputComponent },
  { path: 'input-number', component: InputNumberComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'list', component: ListComponent },
  { path: 'mention', component: MentionComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'message', component: MessageComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'page-header', component: PageHeaderComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'pop-confirm', component: PopConfirmComponent },
  { path: 'popover', component: PopoverComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'rate', component: RateComponent },
  { path: 'resizable', component: ResizableComponent },
  { path: 'result', component: ResultComponent },
  { path: 'schematics', component: SchematicsComponent },
  { path: 'segmented', component: SegmentedComponent },
  { path: 'select', component: SelectComponent },
  { path: 'skeleton', component: SkeletonComponent },
  { path: 'slider', component: SliderComponent },
  { path: 'space', component: SpaceComponent },
  { path: 'spin', component: SpinComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'table', component: TableComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tag', component: TagComponent },
  { path: 'time-picker', component: TimePickerComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'tree-select', component: TreeSelectComponent },
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
