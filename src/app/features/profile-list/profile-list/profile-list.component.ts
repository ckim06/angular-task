import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/reducers';
import { profileListActions } from '@store/actions';
import { getProfileList } from '@store/selectors';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.less']
})
export class ProfileListComponent implements OnInit {
  users$ = this.store.select(getProfileList);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(profileListActions.initProfileList());
  }

  getDetails(uuid:string){
    console.log(uuid);
  }
}
