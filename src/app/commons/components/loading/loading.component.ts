import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CgLoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;
  private subscription: Subscription;

  constructor(private readonly loadingService: CgLoadingService) {
    this.subscription = new Subscription()
  }

  ngOnInit(): void {
    this.subscription = this.loadingService.isLoading$.subscribe(res => { this.isLoading = res; console.log(res) });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
