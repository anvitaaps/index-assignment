import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Mail } from '../mail.model';
import { IndexeddbService } from 'app/main/indexeddb.service';

// import { Mail } from 'app/main/apps/mail/mail.model';
// import { MailService } from 'app/main/apps/mail/mail.service';

@Component({
    selector   : 'mail-list-item',
    templateUrl: './mail-list-item.component.html',
    styleUrls  : ['./mail-list-item.component.scss']
})
export class MailListItemComponent implements OnInit, OnDestroy
{
    @Input() mail: Mail;
    labels: any[];

    @HostBinding('class.selected')
    selected: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {MailService} _mailService
     */
    constructor(
        private indexDB: IndexeddbService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the initial values
        this.mail = new Mail(this.mail);

        // Subscribe to update on selected mail change
        // this._mailService.onSelectedMailsChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(selectedMails => {
        //         this.selected = false;

        //         if ( selectedMails.length > 0 )
        //         {
        //             for ( const mail of selectedMails )
        //             {
        //                 if ( mail.id === this.mail.id )
        //                 {
        //                     this.selected = true;
        //                     break;
        //                 }
        //             }
        //         }
        //     });

        // Subscribe to update on label change
        // this._mailService.onLabelsChanged
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe(labels => {
        //         this.labels = labels;
        //     });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On selected change
     */
    onSelectedChange(): void
    {
        // this.mail.selected = !this.mail.selected;
        console.log((this.indexDB.selectedMails.indexOf(this.mail)));
        if (this.mail.selected == true && this.indexDB.selectedMails.indexOf(this.mail)<0)
        this.indexDB.selectedMails.push(this.mail)
        // this._mailService.toggleSelectedMail(this.mail.id);
    }

}
