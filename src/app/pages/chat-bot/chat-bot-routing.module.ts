import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatBotComponent } from './chat-bot.component';

const routes: Routes = [
  {path:'',component:ChatBotComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatBotRoutingModule { }
