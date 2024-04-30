import { Component } from '@angular/core';
import { Listar } from '../../interfaces/Listar';
import { ListarService } from '../../services/listar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})

export class ListarComponent {
  listar1: Listar[] = [];

  constructor(private listarService: ListarService) { }

  ngOnInit(): void {
    this.listarService.getPokemons().subscribe(
      listar1 => this.listar1 = listar1,
      error => console.error('Error fetching pokemons', error)
    );
  }
}
