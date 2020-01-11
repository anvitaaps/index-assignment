import { Injectable } from '@angular/core';
import { IndexedDBAngular } from 'indexeddb-angular';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class IndexeddbService {

  private db = new IndexedDBAngular('myDb', 1);
  private UnreadCountSource = new BehaviorSubject('');
  currentUnreadCount = this.UnreadCountSource.asObservable();

  private InboxSource = new BehaviorSubject('');
  currentInbox = this.InboxSource.asObservable();

  private SentSource = new BehaviorSubject('');
  currentSent = this.SentSource.asObservable();

  selectedMails:any[] = [];
  
  constructor(private matsnackbar: MatSnackBar) { 
    this.db.createStore(1, this.createCollections);
  }

  UpdateUnreadCount(count) {
    this.UnreadCountSource.next(count);
  }

  UpdateInbox(mail) {
    this.InboxSource.next(mail);
  }

  getInboxMails(mails) {
    this.UpdateInbox(mails);
  }

  UpdateSent(mail) {
    this.SentSource.next(mail);
  }

  getSentMails(mails) {
    this.UpdateSent(mails);
  }

  getUnreadCount(mails) {
    let count = 0;
    mails.map((mail) => {
      if (mail.read == 'false')
        count++;

        this.UpdateUnreadCount(count);
    })
  }

  createCollections(db) {
    db['currentTarget'].result.createObjectStore('users', {autoIncrement:true});
    db['currentTarget'].result.createObjectStore('mails', {autoIncrement:true});
    // objectstore.createIndex('number', 'number', {unique: false});
  }

  testService(){
    this.db.createStore(1, this.createCollections);
    
    return this.db;
  }

  addEntry(collectionName,data) {
    let added = false;      
      this.db.add(collectionName, data).then(() => {
        // Do something after the value was added
        console.log(collectionName,' Added');
        // this.getData(collectionName);
        added = true;
      }, (error) => {
        console.log(error);
      });
  return added;
    
  }

  //checks the login credentials with the users in indexedDB
  checkUserExists(data) {
    this.db.getAll('users').then((users) => {
      console.log(users, data);
      const user = users.find(user => ((user.email == data.email) && (user.password == data.password)))
      console.log(user);
      if (user)
        localStorage.setItem('current_user', user.email)
      // return index > -1 ? true: false
    }, (error) => {
        console.log(error);
    })
  }

  //checks the inbox mails
  checkMails() {
    console.log('check inbox')
    // localStorage.setItem("current_inbox", '');
    let inbox_mails = [];
    this.db.openCursor('mails', (evt) => {
      var cursor = evt.target['result'];
      if(cursor) {
          console.log('inbox: ',cursor, cursor.value.to, localStorage.getItem('current_user'));
          if (cursor.value.to == localStorage.getItem('current_user') || cursor.value.cc == localStorage.getItem('current_user')) {
            cursor.value.selected = false;
            cursor.value.id = cursor.key;
            inbox_mails.push(cursor.value);
          }
          cursor.continue();
      } else {
          console.log('inbox mail: ', inbox_mails, localStorage.getItem('current_user'));
          inbox_mails.sort(this.compare)
          //localStorage.setItem("current_inbox", JSON.stringify(inbox_mails));
          console.log('Entries all displayed.');
          this.getUnreadCount(inbox_mails);
          this.getInboxMails(inbox_mails);
      }
    })
  }

  //function used to sort latest mail on the top
  compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const timeA = a.time;
  const timeB = b.time;

  let comparison = 0;
  if (timeA > timeB) {
    comparison = -1;
  } else if (timeA < timeB) {
    comparison = 1;
  }
  return comparison;
}
  
  //updates the background color of mat list item and set read mail to true
  updateMail(data) {
    if (data) {
      console.log('update mail', data)
        data.read = true;
        this.db.update('mails', data, data.id).then(() => {
        }, (error) => {
            console.log(error);
        });
    }
  }

  //user sent mail
  sentMails() {
    console.log('check sent', localStorage.getItem('current_user'))
    // localStorage.setItem("current_inbox", '');
    let sent_mails = [];
    this.db.openCursor('mails', (evt) => {
      var cursor = evt.target['result'];
      if(cursor) {
          console.log(cursor);
          if (cursor.value.from == localStorage.getItem('current_user')) {
            cursor.value.read = true;
            sent_mails.push(cursor.value);
          }
          cursor.continue();
      } else {
          console.log('sent mail: ', sent_mails, sent_mails.sort(this.compare));
          sent_mails.sort(this.compare)
          //localStorage.setItem("current_inbox", JSON.stringify(inbox_mails));
          console.log('Entries all displayed.');
          // this.getUnreadCount(inbox_mails);
          this.getSentMails(sent_mails);
      }
    })
  }

  deleteMail() {
    this.selectedMails.map( mail => {
      this.db.delete('mails', mail.id).then(evt => {
        console.log(evt);
        this.checkMails();
        this.matsnackbar.open('Mail deleted!', '', {
          duration: 2000
      });
      }), (error) => {
        console.log(error)
      }
    })
  }

}
