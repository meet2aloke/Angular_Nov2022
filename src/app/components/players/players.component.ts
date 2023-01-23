import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  @ViewChild('modalOpen') modalOpen: any; //document.querySelector in JavaScript
  showTable: Boolean;
  showCard: Boolean;
  btnList: string;
  btnCard: string;
  searchText: string;
  ind: number;
  selectedPlayer: any = '';
  modalData: any = {
    id: '', name: '', gender: '', email: '', city: '', tenure: '', runs: 0, salary: 0, profileImg: '', agreeTerm: false,
    header: 'Player Details', addBtn: false, updBtn: false, addUpdBtn: false, btnName: 'Update'
  };

  constructor() {
    console.log(`Players: constructor - Initialize static data`);
    this.showTable = false;
    this.showCard = true;
    this.btnList = 'btn-inactive';
    this.btnCard = 'btn-active';
    this.searchText = '';
    this.ind = 0;
  }
  
  ngOnChanges(){
    console.log(`Players: ngOnChanges`);    
  }

  ngOnInit(){
    console.log(`Players: ngOnInit - Use it to load data from API`);
  }
  
  ngDoCheck(){
    console.log(`Players: ngDoCheck`);
    if(this.showCard){
      this.btnList = 'btn-inactive';
      this.btnCard = 'btn-active';
    }
    else{
      this.btnList = 'btn-active p-0';
      this.btnCard = 'btn-inactive';
    }
  }
  ngAfterContentInit(){
    console.log(`Players: ngAfterContentInit`);
  }
  ngAfterContentChecked(){
    console.log(`Players: ngAfterContentChecked`);
  }
  ngAfterViewInit(){
    console.log(`Players: ngAfterViewInit - Use it for DOM manipulation`);
  }
  ngAfterViewChecked(){
    console.log(`Players: ngAfterViewChecked`);
  }

  ngOnDestroy(){
    console.log(`Players: ngOnDestroy`);
  }

  openModal() {
    this.modalOpen.nativeElement.click();
  }

  addPlayer() {
    this.modalData.header = 'Add Player';
    this.modalData.id = '';
    this.modalData.name = '';
    this.modalData.gender = '';
    this.modalData.salary = '';
    this.modalData.tenure = '';
    this.modalData.runs = 0;
    this.modalData.email = '';
    this.modalData.city = '';
    this.modalData.agreeTerm = '';
    this.modalData.addUpdBtn = true;
    this.modalData.btnName = 'Add';
    this.modalOpen.nativeElement.click();
  }
  viewPlayer(pid: any) {
    this.selectedPlayer = this.players.filter(e => e.id === pid);
    this.modalData.header = 'View Player';
    this.modalData.id = this.selectedPlayer[0].id;
    this.modalData.name = this.selectedPlayer[0].name;
    this.modalData.gender = this.selectedPlayer[0].gender;
    this.modalData.salary = this.selectedPlayer[0].salary;
    this.modalData.tenure = this.selectedPlayer[0].tenure;
    this.modalData.runs = this.selectedPlayer[0].runs;
    this.modalData.email = this.selectedPlayer[0].email;
    this.modalData.city = this.selectedPlayer[0].city;
    this.modalData.agreeTerm = this.selectedPlayer[0].agreeTerms;
    this.modalData.addUpdBtn = false;
    this.modalData.btnName = '---';
    this.modalOpen.nativeElement.click();
  }
  updatePlayer(pid: any) {
    this.selectedPlayer = this.players.filter(e => e.id === pid); //selected player
    this.modalData.header = 'Edit Player';
    this.modalData.id = this.selectedPlayer[0].id;
    this.modalData.name = this.selectedPlayer[0].name;
    this.modalData.gender = this.selectedPlayer[0].gender;
    this.modalData.salary = this.selectedPlayer[0].salary;
    this.modalData.tenure = this.selectedPlayer[0].tenure;
    this.modalData.runs = this.selectedPlayer[0].runs;
    this.modalData.email = this.selectedPlayer[0].email;
    this.modalData.city = this.selectedPlayer[0].city;
    this.modalData.agreeTerm = this.selectedPlayer[0].agreeTerms;
    this.modalData.addUpdBtn = true;
    this.modalData.btnName = 'Update';
    this.modalOpen.nativeElement.click();
  }
  deletePlayer(pid: any) {
    this.selectedPlayer = this.players.filter(e => e.id === pid);
    Swal.fire({
      title: `Are you sure to delete the player: ${this.selectedPlayer[0].name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ind = this.players.findIndex(x => x.id === pid); //get index
        this.players.splice(this.ind, 1); //delete using splice()
        // this.players = this.players.filter(e => e.id !== pid) //delete using filter
        Swal.fire('Deleted', `The player ${this.selectedPlayer[0].name} has been removed.`, 'success')
      }
      else if (result.isDenied) {
        Swal.fire('Delete cancelled', '', 'info')
      }
    })
  }
  addUpdPlayer(player: any) {
    this.ind = this.players.findIndex(x => x.id === player.id);
    if (this.ind >= 0) { //update if ID found
      this.players[this.ind].name = player.name;
      this.players[this.ind].gender = player.gender;
      this.players[this.ind].email = player.email;
      this.players[this.ind].city = player.city;
      this.players[this.ind].salary = player.salary;
      this.players[this.ind].tenure = player.tenure;
      this.players[this.ind].runs = player.runs;
      this.players[this.ind].agreeTerms = player.agreeTerm;
      Swal.fire('Great!', `The player ${player.name} has been updated`, 'success');
    }
    else { //Insert
      this.players.push(player);
      Swal.fire('Awesome!', `The new player ${player.name} has been added.`, 'success');
    }
  }

  players: any[] = [
    { id: 101, name: "Mansoor Ali Khan Pataudi", gender: 'M', email: "mansoor.ali.khan@email.com", city: "Bhopal, Madhya Pradesh", tenure: '1961-1975', runs: 0, salary: 320800, profileImg: "https://upload.wikimedia.org/wikipedia/en/8/83/Nawab_of_Pataudi_jnr_in_his_playing_days.png", agreeTerms: true },
    { id: 102, name: "Sunil Gavaskar", gender: 'M', email: "sunil.gavaskar@email.com", city: "Mumbai, Maharashtra", tenure: '1975–1985', runs: 3092, salary: 170750, profileImg: "assets/images/Sunny_Gavaskar.jpg", agreeTerms: true },
    { id: 103, name: "Kapil Dev", gender: 'M', email: "kapil.dev@email.com", city: "Chandigarh, Punjab", tenure: '1982–1992', runs: 3783, salary: 86000, profileImg: "assets/images/Kapil-Dev.PNG", agreeTerms: true },
    { id: 104, name: "Mohammad Azharuddin", gender: 'M', email: "mohammad.azharuddin@email.com", city: "Hyderabad, Andhra Pradesh", tenure: '1989–1999', runs: 12669, salary: 433060, profileImg: "assets/images/Mohammad-Azharuddin.jpg", agreeTerms: true },
    { id: 105, name: "Sachin Tendulkar", gender: 'M', email: "sachin.tendulkar@email.com", city: "Mumbai, Maharashtra", tenure: '1996–1999', runs: 18426, salary: 162700, profileImg: "assets/images/Sachin-Tendulkar.webp", agreeTerms: true },
    { id: 106, name: "Sourav Ganguly", gender: 'M', email: "sourav.ganguly@email.com", city: "Kolkata, West Bengal", tenure: '1999–2005', runs: 11363, salary: 372000, profileImg: "assets/images/Saurav-Ganguly.PNG", agreeTerms: true },
    { id: 107, name: "Rahul Dravid", gender: 'M', email: "rahul.dravid@email.com", city: "Indore, Madhya Pradesh", tenure: '2000–2007', runs: 10889, salary: 137500, profileImg: "assets/images/Rahul-Dravid.webp", agreeTerms: false },
    { id: 108, name: "Mahendra Singh Dhoni", gender: 'M', email: "mahendra.singh.dhoni@email.com", city: "Ranchi, Jharkhand", tenure: '2007–2018', runs: 10773, salary: 327900, profileImg: "assets/images/MS-Dhoni.JPG", agreeTerms: true },
    { id: 109, name: "Virat Kohli", gender: 'M', email: "virat.kohli@email.com", city: "New Delhi, Delhi", tenure: '2013–2021', runs: 12762, salary: 205500, profileImg: "assets/images/Virat-Kohli.webp", agreeTerms: true },
    { id: 110, name: "Rohit Sharma", gender: 'M', email: "rohit.sharma@email.com", city: "Nagpur, Maharashtra", tenure: '2017–present', runs: 9681, salary: 103600, profileImg: "assets/images/Rohit-Sharma.JPG", agreeTerms: true },
  ];
  trackByPlayer(player: any) {
    return player.id;
  }
}
