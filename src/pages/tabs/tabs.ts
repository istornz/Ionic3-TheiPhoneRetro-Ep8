import { Component } from '@angular/core';

import { NativeStoragePage } from '../native-storage/native-storage';
import { SQLitePage } from '../sqlite/sqlite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NativeStoragePage;
  tab2Root = SQLitePage;

  constructor() {

  }
}
