import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AddadminComponent } from '../addadmin/addadmin.component';
import { AdminComponent } from '../admin/admin.component';
import { AlladsComponent } from '../allads/allads.component';
import { ApproveadsComponent } from '../approveads/approveads.component';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { ClientComponent } from '../client/client.component';
import { ContactComponent } from '../contact/contact.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditadComponent } from '../editad/editad.component';
import { ExpiredadsComponent } from '../expiredads/expiredads.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { MyadsComponent } from '../myads/myads.component';
import { NewaddComponent } from '../newadd/newadd.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ResetpasswordComponent } from '../resetpassword/resetpassword.component';
import { TermsComponent } from '../terms/terms.component';
import { UpdateprofileComponent } from '../updateprofile/updateprofile.component';
import { ViewadComponent } from '../viewad/viewad.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faqs', component: FaqsComponent },
    { path: 'myads', component: MyadsComponent },
    { path: 'newadd', component: NewaddComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'editad/:id', component: EditadComponent },
    { path: 'delete', component: DeleteComponent },
    { path: 'allads', component: AlladsComponent },
    { path: 'forgotpassword', component: ForgotpasswordComponent },
    { path: 'approveads', component: ApproveadsComponent },
    { path: 'updateprofile', component: UpdateprofileComponent },
    { path: 'expiredads', component: ExpiredadsComponent },
    { path: 'viewad/:id', component: ViewadComponent },
    { path: 'addadmin', component: AddadminComponent },
    { path: 'resetpassword', component: ResetpasswordComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];