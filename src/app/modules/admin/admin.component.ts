import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  menuOptions: any;

  constructor() {
    this.menuOptions = [
      {
        title: 'Inicio',
        url: './home',
      },
      {
        title: 'Mi perfil',
        //allowedRoles: [ENUM_ROL.ADMIN],
        options: [
          {
            title: 'Cambiar contraseña',
            url: './profile/update-password',
          },
          {
            title: 'Otra opcion',
            url: './profile/update-password',
          }
        ]
      },
      {
        title: 'Otro menu',
        options: [
          {
            title: 'hijo 1',
            options: [
              {
                title: 'hijo 1 - 1',
                url: './profile/update-password',
              },
              {
                title: 'hijo 1 - 2',
                url: './profile/update-password',
              },
              {
                title: 'hijo 1 - 3',
                options: [
                  {
                    title: 'hijo 1 - 3 - 1',
                    url: './profile/update-password',
                  },
                  {
                    title: 'hijo 1 - 3 - 2',
                    url: './profile/update-password',
                  },
                ]
              }
            ]
          }
        ]
      },
    ];
  }

  onSignOut(): void {}
}
