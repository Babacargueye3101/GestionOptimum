import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employe-add-dialog',
  templateUrl: './employe-add-dialog.component.html',
  styleUrls: ['./employe-add-dialog.component.css']
})
export class EmployeAddDialogComponent implements OnInit {

  employeeForm: FormGroup;

  employmentStatuses = [
    { value: 'active', viewValue: 'Actif' },
    { value: 'onLeave', viewValue: 'En congé' },
    { value: 'suspended', viewValue: 'Suspendu' },
    { value: 'terminated', viewValue: 'Terminé' },
    { value: 'probation', viewValue: 'En probation' },
    { value: 'partTime', viewValue: 'À temps partiel' },
    { value: 'contractual', viewValue: 'Contractuel' },
    { value: 'freelance', viewValue: 'Freelance' },
    { value: 'fullTime', viewValue: 'Temps plein' },
    { value: 'inTraining', viewValue: 'En formation' },
    { value: 'remote', viewValue: 'En télétravail' },
    { value: 'sickLeave', viewValue: 'En arrêt maladie' },
    { value: 'parentalLeave', viewValue: 'En congé parental' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeAddDialogComponent>
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      birthdate: [''],
      hireDate: [''],
      position: [''],
      department: [''],
      salary: [null],
      employmentStatus: ['active']
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
