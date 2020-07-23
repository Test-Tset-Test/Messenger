import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../servises/user.service';
import {UserModal} from '../../models/user.modal';
import {element} from 'protractor';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @Input()
  public test: any;

  public sadw = '<h3>sadwaws</h3>';
  public name = '';

  private destroy$ = new Subject<void>();
  public user: UserModal;

  constructor(
    private router: Router,
    private userService: UserService,
    ) {
  }

  ngOnInit(): void {
    this.userService.getUserList2().pipe(takeUntil(this.destroy$)).subscribe(response => {
    });
  }

  message() {
    console.log('asdwadw');
    this.router.navigate([`/chat-page`]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
