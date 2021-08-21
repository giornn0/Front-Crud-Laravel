import { Component, OnInit, OnDestroy } from '@angular/core';
    import { Subscription } from 'rxjs';
import { AlertsService } from 'src/app/core/services/alerts/alerts.service';

    @Component({
        selector: 'alert',
        templateUrl: 'alerts.component.html',
        styleUrls: ['./alerts.component.css']
    })

    export class AlertsComponent implements OnInit, OnDestroy {
        private subscription: Subscription = new Subscription
        message: any = ''

        constructor(private alertsService : AlertsService) { }

        ngOnInit() {
            this.subscription = this.alertsService.getMessage().subscribe(message => { 
                this.message = message; 
            });
        }

        ngOnDestroy() {
            this.alertsService.destroyAlert()
        }
    }