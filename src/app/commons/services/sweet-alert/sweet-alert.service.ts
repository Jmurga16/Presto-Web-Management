import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { CgSweetAlertModule } from './sweet-alert.module';

@Injectable({
  providedIn: CgSweetAlertModule,
})
export class CgSweetAlertService {
  iconColor!: string;

  showAlertLoading(title = 'Cargando ...'): void {
    Swal.fire({
      title,
      allowEscapeKey: false,
      allowOutsideClick: false,
      heightAuto: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  closeAlertLoading(): void {
    Swal.close();
  }

  showMessage(icon: SweetAlertIcon, title: string, html: string | undefined = undefined, timer: number | undefined = undefined): void {
    if (icon == 'success') {
      this.iconColor = '#80D2CE';
    } else if (icon == 'error') {
      this.iconColor = '#E64442';
    }

    setTimeout(() => {
      Swal.fire({
        title,
        html,
        icon,
        iconColor: this.iconColor,
        showConfirmButton: false,
        timer,
        heightAuto: false,
      });
    });
  }
}
