import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { DataDBService } from '../../services/data-db.service';
import { Item } from '../../models/characters';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent implements OnInit {
  dataManagementService = inject(DataDBService);
  characters =  this.dataManagementService.getCharacters();
  
  ngOnInit(): void {
   
  }
}
