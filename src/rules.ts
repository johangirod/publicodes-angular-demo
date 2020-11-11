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
    somme:
      - repas * nombre de repas
      - logement et petit déjeuner * nombre de nuits

indemnité . repas:
  formule: 19 €/repas

indemnité . logement et petit déjeuner: 
  formule: 50.50 €/nuit
`;
// https://publi.codes/studio/indemnit%C3%A9?code=dur%C3%A9e%20du%20d%C3%A9placement%3A%20%0A%20%20unit%C3%A9%3A%20jours%0A%0Anombre%20de%20repas%3A%0A%20%20formule%3A%20dur%C3%A9e%20du%20d%C3%A9placement%20*%202%20repas%2Fjours%0A%0Anombre%20de%20nuits%3A%0A%20%20formule%3A%20(dur%C3%A9e%20du%20d%C3%A9placement)%20*%201%20nuit%2Fjour%20-%201%20nuit%0A%20%20unit%C3%A9%3A%20nuit%20%0A%0Aindemnit%C3%A9%3A%0A%20%20formule%3A%0A%20%20%20%20somme%3A%0A%20%20%20%20%20%20-%20repas%20*%20nombre%20de%20repas%0A%20%20%20%20%20%20-%20logement%20et%20petit%20d%C3%A9jeuner%20*%20nombre%20de%20nuits%0A%0Aindemnit%C3%A9%20.%20repas%3A%0A%20%20formule%3A%2019%20%E2%82%AC%2Frepas%0A%0Aindemnit%C3%A9%20.%20logement%20et%20petit%20d%C3%A9jeuner%3A%20%0A%20%20formule%3A%2050.50%20%E2%82%AC%2Fnuit