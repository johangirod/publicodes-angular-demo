export default `
durée du déplacement: 15 jours

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
