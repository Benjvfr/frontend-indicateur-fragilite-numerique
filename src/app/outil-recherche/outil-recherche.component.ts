import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IndicateurNumeriqueService } from '../indicateur-numerique.service';
import { IndicateurNumerique } from '../model/indicateur-numerique';

@Component({
  selector: 'app-outil-recherche',
  templateUrl: './outil-recherche.component.html',
  styleUrls: ['./outil-recherche.component.css']
})
export class OutilRechercheComponent implements OnInit {

  nomCommune: string;
  hasResults: boolean = false;
  indicateur: IndicateurNumerique;

  constructor(
    private indicateurService: IndicateurNumeriqueService
  ) {}

  ngOnInit(): void {
    // Affichage par défaut
    this.nomCommune = "La Rochelle";
    this.lancerAnalyse();
  }

  lancerAnalyse() {
    if(this.nomCommune.length > 0) {
      this.indicateurService.getIndicateur(this.nomCommune).subscribe(
          (indicateur: IndicateurNumerique) => {
            this.indicateur = indicateur;
            this.hasResults = true;
          },
          (err: HttpErrorResponse) => {
            console.log("erreur:", err);
          }
      );
    }
  }

}
