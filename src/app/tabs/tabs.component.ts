import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
 activeTabs: string = "Home";

@ViewChild('homeContent', { static: true }) homeContent!: TemplateRef<any>;
@ViewChild('profileContent', { static: true }) profileContent!: TemplateRef<any>;
@ViewChild('settingsContent', { static: true }) settingsContent!: TemplateRef<any>;
activeTemplate!: TemplateRef<any>;

ngOnInit() {
  this.setTabs(this.activeTabs);
}

setTabs(tab: string) {
  this.activeTabs = tab;
  switch (tab) {
    case 'Home':
      this.activeTemplate = this.homeContent;
      break;
    case 'Profile':
      this.activeTemplate = this.profileContent;
      break;
    case 'Settings':
      this.activeTemplate = this.settingsContent;
      break;
  }
}
}
