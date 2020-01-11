import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Mail } from '../mail.model';
import { IndexeddbService } from 'app/main/indexeddb.service';

@Component({
    selector   : 'mail-list-item',
    templateUrl: './mail-list-item.component.html',
    styleUrls  : ['./mail-list-item.component.scss']
})
export class MailListItemComponent implements OnInit
{
    @Input() mail: Mail;
    labels: any[];

    @HostBinding('class.selected')
    selected: boolean;

    constructor(
        private indexDB: IndexeddbService
    )
    {
        
    }

    ngOnInit(): void
    {
        // Set the initial values
        this.mail = new Mail(this.mail);
    }

    onSelectedChange(): void
    {
        console.log((this.indexDB.selectedMails.indexOf(this.mail)));
        if (this.mail.selected == true && this.indexDB.selectedMails.indexOf(this.mail)<0)
        this.indexDB.selectedMails.push(this.mail)
    }

}
