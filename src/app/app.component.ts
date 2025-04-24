import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados:Empleado[] = [
    new Empleado("Juan", "Pérez", "Desarrollador", 3000),
    new Empleado("Ana", "García", "Diseñadora", 3500),
    new Empleado("Luis", "Martínez", "Presidente", 5000),
    new Empleado("María", "López", "Analista", 4000),
    new Empleado("Pedro", "Sánchez", "Tester", 2800),
  ];
}
