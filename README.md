# Úkol: Výlet na Havaj

## Zadání

Dvě kamarádky se rozhodly, že pojedou spolu na dovolenou. Jde o drahou dovolenou na Havaj, takže mohou jet pouze, pokud součet jejich úspor přesahuje 100 tisíc korun. Kamarádky se rozhodly, že budou platit všechno napůl, takže každá by měla platit 50 tisíc, ale hrozně se na dovolenou těší, takže vyrazí okamžitě, jakmile budou mít dohromady 100 tisíc, i kdyby jedna z nich měla platit víc. Dluh vyrovnají po dovolené.

Napiš sérii podmínek, která zjistí (do konzole vypíše):
1. Zda vůbec mohou nebo nemohou na dovolenou jet.
1. Pokud mohou jet (tj. mají dohromady 100 tisíc):
    1. Napiš, zda obě mají naspořeno dost (každá alespoň 50 tisíc).
    1. Nebo pokud má jedna kamarádka méně, tak napiš její jméno a kolik jí ještě chybí do 50 tisíc a tudíž kolik bude muset po dovolené splatit.
1. Pokud nemohou jet (tj. nemají dohromady 100 tisíc), tak napiš:
    1. Kolik peněz jim celkově ještě chybí.
    1. Kolik musí každá z nich ještě naspořit.


Vstupní data dostaneš v následujícím formátu:
```js
let osoba1 = {
	jmeno: 'Alena',
	uspory: 53000
};
let osoba2 = {
	jmeno: 'Karolína',
	uspory: 68000
};
```

Tvým úkolem je program nejenom napsat, ale i otestovat - tedy vymyslet víc možností vstupních dat a zkontrolovat, jestli to funguje správně. Je hned vidět, že u zadaných vstupních dat mohou kamarádky okamžitě bez problémů odjet. Určitě ale existuje možnost, kdy kamarádky mají tak málo úspor, že nemohou odjet vůbec. A taky možnost, že můžou odjet, ale po dovolené si musí srovnat dluhy. Odpovídající vstupní data si vymysli. Jejich formát bude vždycky stejný, jen částky budou jiné (a jiný bude i výstup programu).
