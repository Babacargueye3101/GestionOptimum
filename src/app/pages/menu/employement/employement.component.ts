import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeAddDialogComponent } from './employe-add-dialog/employe-add-dialog.component';

@Component({
  selector: 'app-employement',
  templateUrl: './employement.component.html',
  styleUrls: ['./employement.component.css']
})

export class EmployementComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'address', 'position', 'department', 'salary', 'employmentStatus', 'actions'];
  dataSource = new MatTableDataSource<Employee>([]);



  employees: Employee[] = [
    {
      id: 1,
      name: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      phone: '1234567890',
      address: '10 rue de Paris, Paris, France',
      birthdate: new Date('1985-06-15'),
      hireDate: new Date('2010-03-01'),
      position: 'Développeur',
      department: 'IT',
      salary: 3500,
      employmentStatus: 'Actif'
    },
    {
      id: 2,
      name: 'Marie Curie',
      email: 'marie.curie@example.com',
      phone: '0987654321',
      address: '20 avenue de Lyon, Lyon, France',
      birthdate: new Date('1978-11-07'),
      hireDate: new Date('2015-07-15'),
      position: 'Analyste',
      department: 'Marketing',
      salary: 2800,
      employmentStatus: 'En congé'
    },
    {
      id: 3,
      name: 'Ali Ndiaye',
      email: 'ali.ndiaye@example.com',
      phone: '1122334455',
      address: '5 rue de Dakar, Dakar, Sénégal',
      birthdate: new Date('1990-03-22'),
      hireDate: new Date('2018-05-20'),
      position: 'Responsable RH',
      department: 'Ressources Humaines',
      salary: 4000,
      employmentStatus: 'Actif'
    },
    {
      id: 4,
      name: 'Aissatou Sow',
      email: 'aissatou.sow@example.com',
      phone: '6677889900',
      address: '12 boulevard de Saint-Denis, Saint-Denis, France',
      birthdate: new Date('1980-09-14'),
      hireDate: new Date('2012-01-10'),
      position: 'Assistante',
      department: 'Administration',
      salary: 2500,
      employmentStatus: 'Suspendu'
    },
    {
      id: 5,
      name: 'Oumar Diallo',
      email: 'oumar.diallo@example.com',
      phone: '2233445566',
      address: '18 rue de la Liberté, Paris, France',
      birthdate: new Date('1988-12-30'),
      hireDate: new Date('2016-09-05'),
      position: 'Développeur Frontend',
      department: 'IT',
      salary: 3200,
      employmentStatus: 'Actif'
    }
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    // Simuler le chargement des employés (remplacez ceci par une vraie requête API)
    this.employees = [
      {
        id: 1,
        name: 'Jean Dupont',
        email: 'jean.dupont@example.com',
        phone: '1234567890',
        address: '10 rue de Paris, Paris, France',
        birthdate: new Date('1985-06-15'),
        hireDate: new Date('2010-03-01'),
        position: 'Développeur',
        department: 'IT',
        salary: 3500,
        employmentStatus: 'Actif'
      },
      {
        id: 2,
        name: 'Marie Curie',
        email: 'marie.curie@example.com',
        phone: '0987654321',
        address: '20 avenue de Lyon, Lyon, France',
        birthdate: new Date('1978-11-07'),
        hireDate: new Date('2015-07-15'),
        position: 'Analyste',
        department: 'Marketing',
        salary: 2800,
        employmentStatus: 'En congé'
      },
      {
        id: 3,
        name: 'Ali Ndiaye',
        email: 'ali.ndiaye@example.com',
        phone: '1122334455',
        address: '5 rue de Dakar, Dakar, Sénégal',
        birthdate: new Date('1990-03-22'),
        hireDate: new Date('2018-05-20'),
        position: 'Responsable RH',
        department: 'Ressources Humaines',
        salary: 4000,
        employmentStatus: 'Actif'
      },
      {
        id: 4,
        name: 'Aissatou Sow',
        email: 'aissatou.sow@example.com',
        phone: '6677889900',
        address: '12 boulevard de Saint-Denis, Saint-Denis, France',
        birthdate: new Date('1980-09-14'),
        hireDate: new Date('2012-01-10'),
        position: 'Assistante',
        department: 'Administration',
        salary: 2500,
        employmentStatus: 'Suspendu'
      },
      {
        id: 5,
        name: 'Oumar Diallo',
        email: 'oumar.diallo@example.com',
        phone: '2233445566',
        address: '18 rue de la Liberté, Paris, France',
        birthdate: new Date('1988-12-30'),
        hireDate: new Date('2016-09-05'),
        position: 'Développeur Frontend',
        department: 'IT',
        salary: 3200,
        employmentStatus: 'Actif'
      }
    ];
    this.dataSource.data = this.employees;
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(EmployeAddDialogComponent, {
      width: '600px',
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Ajouter le nouvel employé à la liste
        const newEmployee = { id: this.dataSource.data.length + 1, ...result };
        this.dataSource.data = [...this.dataSource.data, newEmployee];
      }
    });
  }

  openEditDialog(employee: Employee): void {
    // Logique pour ouvrir le dialog d'édition d'employé
  }

  deleteEmployee(id: number): void {
    // Logique pour supprimer un employé
    this.dataSource.data = this.dataSource.data.filter(e => e.id !== id);
  }
}

interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  birthdate: Date;
  hireDate: Date;
  position: string;
  department: string;
  salary: number;
  employmentStatus: string;
}
