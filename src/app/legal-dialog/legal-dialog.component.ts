import { Component, Inject, OnInit, HostListener } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-legal-dialog',
  templateUrl: './legal-dialog.component.html',
  styleUrls: ['./legal-dialog.component.scss'],
})
export class LegalDialogComponent {
  title = '';
  content = '';

  constructor(
    public dialogRef: MatDialogRef<LegalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { type: string }
  ) {
    switch (data.type) {
      case 'mentions':
        this.title = 'Mentions légales';
        this.content = `
          2025 Vertuo 4D Pro — EI — RCS Melun 750 668 238
          Siège social : 10 rue de l'Etang, 77240 Vert-Saint-Denis
          Directeur de la publication : M. Hadiouche
          Hébergeur : OVH, 2 rue Kellermann, 59100 Roubaix
        `;
        break;

      case 'confidentialite':
        this.title = 'Politique de confidentialité';
        this.content = `
          Votre vie privée est importante pour nous.
Cette politique de confidentialité décrit la manière dont [Nom du site] collecte, utilise et protège les informations personnelles des visiteurs de son site vitrine [URL du site].

1. Données collectées

Dans le cadre de la simple consultation du site, aucune donnée personnelle nominative n’est collectée automatiquement.

Nous pouvons toutefois recueillir :

Les informations que vous nous transmettez volontairement via le formulaire de contact (nom, prénom, adresse @, ville, message, etc ...) ;

Des données techniques (type de navigateur, durée de visite, pages consultées) collectées via des outils de mesure d’audience anonymisés (ex : Google Analytics, Matomo, etc.).

2. Utilisation des données

Les données recueillies sont utilisées uniquement pour :

\tRépondre à vos demandes de contact ;

\tAméliorer la présentation et le contenu du site ;

\tProduire des statistiques de fréquentation anonymes.

Vos données ne sont ni revendues ni partagées à des tiers, sauf obligation légale.

3. Conservation des données

Les messages transmis via le formulaire de contact peuvent être conservés pendant une durée maximale de 12 mois, le temps de traiter votre demande.
Les données de navigation sont conservées sous forme anonymisée à des fins statistiques.

4. Vos droits

Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :

\tDroit d’accès, de rectification et de suppression de vos données personnelles ;

\tDroit d’opposition au traitement de vos données.

Pour exercer ces droits, contactez-nous à :
vertuo-4dpro@hotmail.com

5. Cookies

Le site peut utiliser des cookies techniques ou de mesure d’audience.
Vous pouvez configurer votre navigateur pour refuser les cookies ou être averti lors de leur installation.
Aucun cookie publicitaire n’est utilisé.

6. Sécurité

Nous mettons en œuvre des mesures raisonnables pour protéger vos données contre tout accès non autorisé ou divulgation.

7. Contact

Vertuo 4D Pro  
Tél : 07 44 13 11 97  
Email : vertuo4dpro@gmail.com
        `;
        break;

    }
  }

  ngOnInit(): void {
    this.setDialogSize();
  }

  // Adapter la taille de la modale selon la largeur de l’écran
  @HostListener('window:resize')
  onResize() {
    this.setDialogSize();
  }

  private setDialogSize(): void {
    const width = window.innerWidth < 600 ? '90vw' : '600px';
    const height = 'auto';

    this.dialogRef.updateSize(width, height);
    this.dialogRef.updatePosition({ top: '10vh' });
            this.dialogRef.addPanelClass( 'custom-dialog-container');
      //this.dialogRef.back: 'custom-dialog-backdrop';
  }

  close(): void {
    this.dialogRef.close();
  }
}
