import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detail = '';
  principal = '';
  chiffreUn: number;
  chiffre2: number;
  operateur = '';
  calcul = '';
  choixOperateur = false;
  modeResultat = false;

  /**
   * Méthode permettant de prendre une entrée clavier et de l'a traiter
   * @param key l'entrée clavier
   */
  nouveauEntree(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.principal[this.principal.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
        this.choixOperateur = true;
      }
      if ((this.choixOperateur) || (this.principal === '')) {
        return;
      }
      this.chiffreUn = parseFloat(this.principal);
      this.operateur = key;
      this.choixOperateur = true;
    }
    if (this.principal.length === 10) {
      return;
    }
    this.principal += key;
  }

  /**
   * Méthode permettant d'effacer les champs de la calculette
   */
  effacer() {
    this.principal = '';
    this.detail = '';
    this.choixOperateur = false;
    this.modeResultat = false;
  }

  /**
   * Méthode permettant de faire le calcul après action de l'utilisateur sur le signe '='
   */
  faireCalcul() {
    // On récupère les données que l'on doit calculer
    this.calcul = this.principal;

    // On récupère le chiffre 2
    this.chiffre2 = parseFloat(this.principal.split(this.operateur)[1]);

    if (this.operateur === '/') {
      // Si l'opération est une division
      this.detail = this.principal;
      this.principal = (this.chiffreUn / this.chiffre2).toString();

      // On met le résultat
      this.detail = this.calcul;

      // On vérifie la taille car un chiffre trop grand n'est pas géré
      if (this.principal.length > 9) {
        this.principal = this.principal.substr(0, 9);
      }
    } else if (this.operateur === 'x') {
      // Si l'opération est une multiplication
      this.detail = this.principal;
      this.principal = (this.chiffreUn * this.chiffre2).toString();

      // On met le résultat
      this.detail = this.calcul;

      // On vérifie la taille car un chiffre trop grand n'est pas géré
      if (this.principal.length > 9) {
        this.messageErreur();
      }

    } else if (this.operateur === '-') {
      // Si l'opération est une soustraction
      this.detail = this.principal;
      this.principal = (this.chiffreUn - this.chiffre2).toString();

      // On met le résultat
      this.detail = this.calcul;

    } else if (this.operateur === '+') {
      // Si l'opération est une addition
      this.detail = this.principal;
      this.principal = (this.chiffreUn + this.chiffre2).toString();

      // On met le résultat
      this.detail = this.calcul;

      // On vérifie la taille car un chiffre trop grand n'est pas géré
      if (this.principal.length > 9) {
        this.messageErreur();
      }
    } else {
      // Ici : cas par défaut si ce n'est pas un cas attendu alors c'est qu'il y a une erreur
      this.detail = 'L\'opération souhaitée est invalide';
    }
    this.modeResultat = true;
  }

  /**
   * Méthode permettant de formatter un message d'erreur
   */
  private messageErreur(): void {
    this.principal = 'Erreur';
    this.detail = 'Le nombre est trop grand et donc n\'est pas géré';
  }
}
