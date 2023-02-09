import { Component } from '@angular/core';

import { ModalService } from './_services';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    bodyText = 'This text can be updated in modal 1';

    constructor(protected modalService: ModalService) { }
}