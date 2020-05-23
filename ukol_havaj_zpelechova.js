let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};
let osoba2 = {
  jmeno: 'Karolína',
  uspory: 6000
};

// 1. Zda vůbec mohou nebo nemohou na dovolenou jet.
// 1. Pokud mohou jet (tj. mají dohromady 100 tisíc):
//     1. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
//     1. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
// 1. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
//     1. Kolik peněz jim celkově ještě chybí.
//     1. Kolik musí každá z nich ještě naspořit.

//prvni dlouhe a prehledne reseni
const check1 = () => {
if (osoba1.uspory + osoba2.uspory >= 100000) {
  console.log('Super, můžete vyrazit, holky,');
  if (osoba1.uspory >= 50000 && osoba2.uspory >= 50000) {
    console.log(`obě máte dost peněz.`)
  }
  const moneyCheck = (osoba) => {
    if (osoba.uspory < 50000) {
      console.log(`ale ${osoba.jmeno} bude muset po návratu doplatit ${50000 - osoba.uspory}!`)
    }
  }
  moneyCheck(osoba1);
  moneyCheck(osoba2);
} else {
  console.log(`Ještě vám holky celkem chybí ${100000 - (osoba1.uspory + osoba2.uspory)}.`)
  const moneyCheck = (osoba) => {
    if (osoba.uspory < 50000) {
      console.log(`${osoba.jmeno} musí ještě našetřit ${50000 - osoba.uspory}!`)
    } else {
      console.log(`${osoba.jmeno} už dál šetřit nemusí.`)
    }
  }
  moneyCheck(osoba1);
  moneyCheck(osoba2);
}};
//verze radoby kratsi

const check2 = () => {
  const moneyCheck = (osoba) => {
    if (osoba.uspory < 50000) {
      osoba.chybi = (50000 - osoba.uspory)
    } else {
      osoba.chybi = 0
    }
    return osoba.chybi
  }

  if (moneyCheck(osoba1) === 0 && moneyCheck(osoba2) === 0) {
    console.log('Maj na to vobě.')
  } else if (osoba1.uspory + osoba2.uspory >= 100000) //&& (moneyCheck(osoba1) > 0 || moneyCheck(osoba2) > 0 ))
  {
    console.log(`Vyražte, ${osoba1.jmeno} po návratu doplatí ${osoba1.chybi}, ${osoba2.jmeno} po návratu doplatí ${osoba2.chybi}.`)
  } else {
    console.log(`Ještě se nikam nejede, ${osoba1.jmeno} musí ještě ušetřit ${osoba1.chybi}, ${osoba2.jmeno} musí ještě ušetřit ${osoba2.chybi}.`)
  }
};

//a jak to otestovat?

//prvni pripad, obe maji nasetreno dost
osoba1.uspory = 60000;
osoba2.uspory = 70000;
check1();
check2();

//druhy pripad, dohromady maji nasetreno dost, ale prvni má méně než 50k
osoba1.uspory = 40000;
osoba2.uspory = 70000;
check1();
check2();

//treti pripad, dohromady maji nasetreno dost, ale druha má méně než 50k
osoba1.uspory = 400000;
osoba2.uspory = 7000;
check1();
check2();

//crvrty pripad, dohromady nemaji nasetreno dost
osoba1.uspory = 4000;
osoba2.uspory = 7000;
check1();
check2();

