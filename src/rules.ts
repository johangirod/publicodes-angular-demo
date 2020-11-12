export default `
durée du déplacement: 
  unité: jours

nombre de repas:
  formule: durée du déplacement * 2 repas/jours

nombre de nuits:
  formule: (durée du déplacement) * 1 nuit/jour - 1 nuit
  unité: nuit 

indemnité:
  formule:
    allègement:
      assiette:
        somme:
          - repas * nombre de repas
          - logement et petit déjeuner * nombre de nuits
      abattement: abattement      

indemnité . abattement:
  unité: %
  formule:
    produit:
      assiette: 
        barème:
          assiette: durée du déplacement
          tranches: 
            - plafond: 3 mois
              taux: 0%
            - plafond: 2 ans
              taux: 15%
            - taux: 30%
      facteur: 1 / durée du déplacement

indemnité . repas:
  formule: 19 €/repas

indemnité . logement et petit déjeuner: 
  formule: 50.50 €/nuit
`
// https://publi.codes/studio/indemnit%C3%A9?code=%0Adur%C3%A9e%20du%20d%C3%A9placement%3A%20%0A%20%20unit%C3%A9%3A%20jours%0A%0Anombre%20de%20repas%3A%0A%20%20formule%3A%20dur%C3%A9e%20du%20d%C3%A9placement%20*%202%20repas%2Fjours%0A%0Anombre%20de%20nuits%3A%0A%20%20formule%3A%20(dur%C3%A9e%20du%20d%C3%A9placement)%20*%201%20nuit%2Fjour%20-%201%20nuit%0A%20%20unit%C3%A9%3A%20nuit%20%0A%0Aindemnit%C3%A9%3A%0A%20%20formule%3A%0A%20%20%20%20all%C3%A8gement%3A%0A%20%20%20%20%20%20assiette%3A%0A%20%20%20%20%20%20%20%20somme%3A%0A%20%20%20%20%20%20%20%20%20%20-%20repas%20*%20nombre%20de%20repas%0A%20%20%20%20%20%20%20%20%20%20-%20logement%20et%20petit%20d%C3%A9jeuner%20*%20nombre%20de%20nuits%0A%20%20%20%20%20%20abattement%3A%20abattement%0A%0Aindemnit%C3%A9%20.%20abattement%3A%0A%20%20unit%C3%A9%3A%20%25%0A%20%20formule%3A%0A%20%20%20%20produit%3A%0A%20%20%20%20%20%20assiette%3A%20%0A%20%20%20%20%20%20%20%20bar%C3%A8me%3A%0A%20%20%20%20%20%20%20%20%20%20assiette%3A%20dur%C3%A9e%20du%20d%C3%A9placement%0A%20%20%20%20%20%20%20%20%20%20tranches%3A%20%0A%20%20%20%20%20%20%20%20%20%20%20%20-%20plafond%3A%203%20mois%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20taux%3A%200%25%0A%20%20%20%20%20%20%20%20%20%20%20%20-%20plafond%3A%202%20ans%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20taux%3A%2015%25%0A%20%20%20%20%20%20%20%20%20%20%20%20-%20taux%3A%2030%25%0A%20%20%20%20%20%20facteur%3A%201%20%2F%20dur%C3%A9e%20du%20d%C3%A9placement%0A%0Aindemnit%C3%A9%20.%20repas%3A%0A%20%20formule%3A%2019%20%E2%82%AC%2Frepas%0A%0Aindemnit%C3%A9%20.%20logement%20et%20petit%20d%C3%A9jeuner%3A%20%0A%20%20formule%3A%2050.50%20%E2%82%AC%2Fnuit%0A