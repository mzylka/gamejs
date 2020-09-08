# gamejs

[Wypróbuj](https://mzylka.github.io/gamejs/dist/index.html)

Prosta gierka stworzona na potrzeby szlifowania języka JS. W głównej mierze skupiłem się do napisania logiki niż wyglądu interfejsu.

## Przebieg gry

### Stworzenie bohatera

Na początku gracz ma do dyspozycji dwa punkty umiejętności, które może dodać do dwóch głównych statystyk w zależności od preferencji. Aby stworzyć postać należy wydać wszystkie punkty.

![Tworzenie bohatera](https://mzylka.github.io/portfolio/images/gamejs-huge2.jpg)

### Menu główne

Po stworzeniu postaci, gracza wita menu główne. W górnej części możemy zobaczyć statystyki:
* Punkty życia
* Punkty doświadczenia
* Poziom
* Punkty obrażeń
* Ilość monet
* Ilość mikstur leczących

Dolna część udostępnia użytkownikowi dostęp do funkcji:
* Walki
* Wypicia mikstury leczenia
* Wskrzeszenia bohatera (aktywne gdy bohater nie żyje)
* Sklepu z miksturami

![Main menu](https://mzylka.github.io/portfolio/images/gamejs-huge.jpg)

### Walka

Walka odbywa się automatycznie, a podczas jej trwania gracz nie podejmuje żadnych akcji. O procesie walki informuje dolna część menu, gdzie ukazany jest zmieniający się status walczących postaci i historia przebiegu walki. Turę rozpoczyna zawsze postać gracza. Po wygranej bitwie bohater otrzymuje punkty doświadczenia i monety. Jeśli punkty doświadczenia osiągną wynzaczony próg to bohater awansuje na następny poziom podnosząć przy tym jego statystyki.

![Walka](https://mzylka.github.io/portfolio/images/gamejs-huge3.jpg)

### Mikstury leczenia

Jeśli bohater stracił punkty życia, można je przywrócić korzystając z opcji wypicia misktury leczenia.

### Wskrzeszenie

Opcji wskrzeszenia jest dostępna, jeśli bohater zginał podczas walki. Aby przywrócić go do życia, gracz musi przejść losowo generowany labirynt.

* Czerwony punkt - gracz
* Zielony punkt - wyjście z labiryntu

Sterowanie odbywa się za pomocą klawiszy strzałek:
* <kbd>&#8592;</kbd> - W lewo
* <kbd>&#8593;</kbd> - W górę
* <kbd>&#8594;</kbd> - W prawo
* <kbd>&#8595;</kbd> - W dół

Po przejściu labiryntu bohater wraca do życia z 5 punktami życia.

![Wskrzeszenie](https://mzylka.github.io/portfolio/images/gamejs-huge4.jpg)

### Sklep z miksturami

Jeśli bohater ma wystarczająco dużo monet, może zakupić w sklepie mikstury leczące.

## Planowane funkcje:
* Oddzielenie warstwy widoku od logiki
* Poprawa warstwy wizualnej
* Nazywanie bohatera podczas tworzenia
