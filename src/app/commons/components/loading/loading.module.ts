import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { CgLoadingService } from './services/loading.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, ProgressSpinnerModule],
  exports: [LoadingComponent],
  providers: [CgLoadingService]
})
export class CgLoadingModule { }
