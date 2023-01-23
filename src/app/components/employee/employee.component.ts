import { Component, ViewChild } from '@angular/core';
import { Employee } from 'src/app/class/employee';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @ViewChild('closeModal') closeModal: any;
  @ViewChild('openModal') openModal: any;
  constructor(){}

  employees: any[] = [
    { id: 101, name: "Madeline Solis", gender: 'F', email: "madeline.solis@email.com", city: "New York", salary: 320800, profileImg: "",agreeTerms: true},
    { id: 102, name: "Yani Munoz", gender: 'F', email: "yani.munoz@email.com", city: "Washington DC", salary: 170750, profileImg: "",agreeTerms: true },
    { id: 103, name: "Rosalyn Andrews", gender: 'F', email: "rosalyn.andrews@email.com", city: "Virginia", salary: 86000, profileImg: "",agreeTerms: true },
    { id: 104, name: "Jeanette Mercado", gender: 'F', email: "jeanette.mercado@email.com", city: "San Diago", salary: 433060, profileImg: "",agreeTerms: true },
    { id: 105, name: "Yuk Chan", gender: 'M', email: "yuk.chan@email.com", city: "Atlanta", salary: 162700, profileImg: "",agreeTerms: true },
    { id: 106, name: "Anita Burch", gender: 'F', email: "anita.burch@email.com", city: "Salt Lake", salary: 372000, profileImg: "",agreeTerms: true },
    { id: 107, name: "Kerry Victor", gender: 'F', email: "kerry.victor@email.com", city: "Dallas", salary: 137500, profileImg: "",agreeTerms: false },
    { id: 108, name: "Diana Santanello", gender: 'F', email: "diana.santanello@email.com", city: "Phoenix", salary: 327900, profileImg: "",agreeTerms: true },
    { id: 109, name: "Juanita Sanchez", gender: 'F', email: "juanita.sanchez@email.com", city: "Kansas City", salary: 205500, profileImg: "",agreeTerms: true },
    { id: 110, name: "Robert Shiau", gender: 'M', email: "robert.shiau@email.com", city: "Minneapolis", salary: 103600, profileImg: "",agreeTerms: true },
  ];
  trackByEmp(emp: any) {
    return emp.id;
  }

  modalHeader: string = 'Add New Employee';
  addBtn: boolean = false;
  updBtn: boolean = false;
  searchText: string = '';

  empId: string = '';
  empName: string = '';
  empGender: string = '';
  empSal: string = '';
  empEmail: string = '';
  empCity: string = '';
  empAck: boolean = false;
  selectedEmp: any = '';
  ind: number = 0;

  createEmp() {
    this.modalHeader = 'Add Employee'; //modal header
    this.empId = '';
    this.empName = '';
    this.empGender = '';
    this.empSal = '';
    this.empEmail = '';
    this.empCity = '';
    this.empAck = false; //clear form
    this.addBtn = true; //make 'Add' button visible
    this.updBtn = false; //make 'Update' button hidden
    this.openModal.nativeElement.click(); //open modal
  }
  readEmp(empId: any) {
    this.modalHeader = 'Employee Details'; //modal header
    this.selectedEmp = this.employees.filter(e => e.id === empId); //selected employee
    this.empId = this.selectedEmp[0].id;
    this.empName = this.selectedEmp[0].name;
    this.empGender = this.selectedEmp[0].gender;
    this.empSal = this.selectedEmp[0].salary;
    this.empEmail = this.selectedEmp[0].email;
    this.empCity = this.selectedEmp[0].city;
    this.empAck = this.selectedEmp[0].agreeTerms; //load data for selected employee
    this.addBtn = false; //make 'Add' button hidden
    this.updBtn = false; //make 'Update' button hidden
    this.openModal.nativeElement.click(); //open modal
  }
  updateEmp(empId: any) {
    this.modalHeader = 'Edit Employee'; //modal header
    this.selectedEmp = this.employees.filter(e => e.id === empId); //selected employee
    this.empId = this.selectedEmp[0].id;
    this.empName = this.selectedEmp[0].name;
    this.empGender = this.selectedEmp[0].gender;
    this.empSal = this.selectedEmp[0].salary;
    this.empEmail = this.selectedEmp[0].email;
    this.empCity = this.selectedEmp[0].city;
    this.empAck = this.selectedEmp[0].agreeTerms; //load data for selected employee
    this.addBtn = false; //make 'Add' button hidden
    this.updBtn = true; //make 'Update' button visible
    this.openModal.nativeElement.click(); //open modal
  }
  deleteEmp(empId: any) {
    this.selectedEmp = this.employees.filter(e => e.id === empId);
    Swal.fire({
      title: `Are you sure to delete the employee: ${this.selectedEmp[0].name}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {        
        this.ind = this.employees.findIndex(x => x.id === empId); //get index
        this.employees.splice(this.ind, 1); //delete using splice()
        // this.employees = this.employees.filter(e => e.id !== empId) //delete using filter
        Swal.fire('Deleted', `The employee ${this.selectedEmp[0].name} has been removed.`, 'success')
      }
      else if (result.isDenied) {
        Swal.fire('Delete cancelled', '', 'info')
      }
    })
  }

  addEmp() {
    let emp = new Employee();
    emp.id = this.empId;
    emp.name = this.empName;
    emp.gender = this.empGender;
    emp.salary = this.empSal;
    emp.email = this.empEmail;
    emp.city = this.empCity;
    emp.agreeTerms = this.empAck;
    this.employees.push(emp);
    this.addBtn = false;
    this.closeModal.nativeElement.click();
    Swal.fire('Awesome!', `The new employee ${this.empName} has been added.`, 'success');
  }
  updEmp(empId: any) {
    this.ind = this.employees.findIndex(x => x.id === empId); //get index
    if(this.ind >= 0){ //update if employee found
      this.employees[this.ind].name = this.empName; //update fields except Emp ID
      this.employees[this.ind].gender = this.empGender;
      this.employees[this.ind].email = this.empEmail;
      this.employees[this.ind].city = this.empCity;
      this.employees[this.ind].salary = this.empSal;
      this.employees[this.ind].agreeTerms = this.empAck;
      this.closeModal.nativeElement.click();
      Swal.fire('Great!', 'The employee record has been updated', 'success');
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Record not found...',
        text: 'Seems the Employee ID got changed'
      })
    }
    this.closeModal.nativeElement.click();
  }
}


