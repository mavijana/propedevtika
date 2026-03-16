// Translation object with all content in Serbian and English
const i18n = {
  sr: {
    labels: {
      title: "Propedeutika Psihologije",
      subtitle: "Psychology Propaedeutics",
      language: "JEZIK / LANGUAGE",
      topics: "Oblasti",
      experiments: "Eksperimenti",
      tests: "Testovi",
      subjects: "Predmeti",
      search: "Pretraga",
      home: "Početna",
      about: "O nama",
      startTest: "Započni test",
      submitTest: "Potvrdi odgovore",
      yourResult: "Tvoj rezultat",
      testHistory: "Istorija testova",
      question: "Pitanje",
      of: "od",
      previous: "Prethodni rezultati",
      noPreviousResults: "Nemaš prethodnih rezultata za ovaj test",
      retake: "Ponovi test",
      clearHistory: "Obriši istoriju",
      researcher: "Istraživač/i",
      year: "Godina",
      keyFinding: "Ključno otkriće",
      close: "Zatvori",
      credits: "© 2024 Propedeutika Psihologije. Sva prava zadržana."
    },
    subjects: [
      {
        id: "intro",
        name: "Uvod u psihologiju",
        description: "Psihologija je nauka o ponašanju i mentalnim procesima. Upoznaj se sa osnovnim konceptima, granama i primenom psihologije u svakodnevnom životu.",
        topics: [
          {
            title: "Definicija i cilj psihologije",
            description: "Psihologija je sistematsko proučavanje ponašanja i kognitivnih procesa. Kombinuje empirijsku metodu sa teorijskom analizom kako bi razumela ljudsku prirodu."
          },
          {
            title: "Grane psihologije",
            description: "Klinička psihologija, razvojna psihologija, socijalna psihologija, kognitivna psihologija, biološka psihologija i brojne druge grane omogućavaju specijalizovano proučavanje različitih aspekata ljudskog ponašanja."
          },
          {
            title: "Istraživačke metode",
            description: "Psihologija koristi eksperimente, opservacije, upitike, slučajne studije i kvalitativne metode. Svaka metoda ima svoje prednosti i ograničenja u zavisnosti od istraživačkog pitanja."
          },
          {
            title: "Priroda i vaspitanje",
            description: "Dugotrajni scientifski dijalog između genetskog uticaja (priroda) i okruženja (vaspitanje) u oblikovanju ponašanja. Savremena psihologija認aje interakciju oba faktora."
          },
          {
            title: "Etika u psihologiji",
            description: "Istraživači moraju poštovati principima kao što su consens, povjerljivost, bezopasnost i minimizacija štete. Etički kodeksi štite učesnike u istraživanju."
          }
        ],
        experiments: [
          {
            title: "Pavlovljevo uslovljavanje",
            researcher: "Ivan Petrović Pavlov",
            year: "1927",
            description: "Pavlov je demonstrirao kako ponašanje može biti uslovljeno kroz asocijaciju. Pas je naučen da slini na zvuk zvona nakon što je zvono povezano sa hranom.",
            keyFinding: "Ponašanje može biti modifikovano kroz uslovljavanje - klasični primjer učenja kroz asocijaciju."
          },
          {
            title: "Operantno uslovljavanje",
            researcher: "Burrhus Frederic Skinner",
            year: "1938",
            description: "Skinner je istraživao kako ponašanje može biti oblikovano kroz posledice (nagrade i kazne). Eksperiment sa merdevima pokazuje kako pijetlovi uče da vrše radnje za nagradu.",
            keyFinding: "Ponašanje se oblikuje kroz što se dešava nakon njega - principi ojačanja i kažnjavanja."
          },
          {
            title: "Hartley i emocije",
            researcher: "Margaret Mead",
            year: "1935",
            description: "Mead je istraživala kako razlike u kulturi utiču na emocije i ponašanje. Pokazala je da emocije nisu samo biološke već su oblikovane društvenim normapm.",
            keyFinding: "Emocije i ponašanje su delom proizvod kulture i društvenog okruženja, ne samo bioloških faktora."
          }
        ],
        testId: null
      },
      {
        id: "biological",
        name: "Biološke osnove ponašanja",
        description: "Istražujemo kako funkcije mozga, nervnog sistema i genetike utiču na ponašanje. Novi tehnološki dostignuća omogućavaju nam da vidimo mozak u akciji.",
        topics: [
          {
            title: "Nervni sistem",
            description: "Centralni nervni sistem (mozak i kičmena moždina) i periferalni nervni sistem (somatski i autonomni) koordinuju sve naše aktivnosti od disanja do mišljenja."
          },
          {
            title: "Neuroni i sinapsa",
            description: "Neuroni su osnovne jedinice nervnog sistema koje komuniciraju kroz sinapse. Hemijski signali (neurotransmiteri) omogućavaju komunikaciju između neurona."
          },
          {
            title: "Delovi mozga",
            description: "Korteks, hipokampus, amigdala, cerebelum i druge strukture takođe obavljaju specifične funkcije. Oštećenje određenih delova može dovesti do jasno vidljivih promena u ponašanju."
          },
          {
            title: "Hormoni i endokrini sistem",
            description: "Hormoni kao testosteron, estrogen i kortizol modifikuju ponašanje, raspoloženje i fiziološke procese. Endokrini sistem deluje u sinhronizaciji sa nervnim sistemom."
          },
          {
            title: "Genetika i ponašanje",
            description: "Geni utiču na predispozicije, ali okruženje određuje kako će se te predispozicije manifestovati. Epigenetika pokazuje kako iskustva mogu aktivirati ili deaktivirati gene."
          }
        ],
        experiments: [
          {
            title: "Rat Park eksperiment",
            researcher: "Bruce Alexander",
            year: "1981",
            description: "Alexander je istražio zavisnost stavivši pacove u obogaćenu okruženje sa drugim pacovima i raznolikim aktivnostima. Rezultat je pokazao da je okruženje kritično za sprečavanje problematične upotrebe droga.",
            keyFinding: "Socijalno okruženje i stimulacija su ključne za dobrostanje, ne samo biološka sklonost zavisnosti."
          },
          {
            title: "Phineas Gage i promena ličnosti",
            researcher: "John Harlow",
            year: "1868",
            description: "Phineas Gage je preživeo nesreću sa željeznom šipkom kroz čelo. Nakon toga se dramatično promenio - od pouzdanog radnika do nepredvidive osobe. Ovo je pokazalo povezanost mozga i ličnosti.",
            keyFinding: "Oštećenje određenih delova mozga (u ovom slučaju prefrontalnog korteksa) utiče na ličnost i ponašanje."
          },
          {
            title: "Split-Brain eksperiment",
            researcher: "Roger Sperry",
            year: "1960-1970",
            description: "Sperry je istraživao pacijente čija je korpus kalozum (veza između mozličnih hemisfera) preseknuta. Otkrio je da leva i desna hemisfera rade kao dva različita um sa različitim способnostима.",
            keyFinding: "Mozak ima dva polusfere sa različitim sposobnostima - analitička leva i holističke desna."
          }
        ],
        testId: null
      },
      {
        id: "developmental",
        name: "Razvojna psihologija",
        description: "Kako se menja misljenje, ponašanje i emocije od rođenja kroz adultnost. Uključuje fizički, kognitivni i socijalno-emocionalni razvoj.",
        topics: [
          {
            title: "Pijagetove faze kognicije",
            description: "Piaget je identifikovao četiri faze: senzomotorna (0-2), preoperaciona (2-7), konkretna operaciona (7-11) i formalna operaciona (11+). Svaka faza ima karakteristične vrste razmišljanja."
          },
          {
            title: "Privrženost i razdvajanje",
            description: "Majowitz je istraživao 'stranu situaciju' - kako se bebe ponašaju kada se odvajaju od majke. Razvio je teoriju stilova privrženosti (sigurna, anksiozna-otporna, zaobilačka)."
          },
          {
            title: "Socijalni razvoj",
            description: "Razvoj socijalno ponašanja, razumevanja drugih i samodostojanstva. Erikson je opisao osam faza razvoja lidske duševnog razvoja kroz ceo život."
          },
          {
            title: "Moralnim razvojom",
            description: "Kohlberg je identifikovao tri nivoa moralnog razvoja od hedonizma preko konformizma do principa. Giligan je dodao alternativni pogled fokusirajući se na etiku brige."
          },
          {
            title: "Adolescencija",
            description: "Kritična faza identifikacije, autonomije i socijalne reorientacije. Mozak (posebno prefrontalni korteks) se još razvija, što objašnjava zašto su tinejdžeri sklonjiji riziku."
          }
        ],
        experiments: [
          {
            title: "Stranu situacija",
            researcher: "Mary Ainsworth",
            year: "1963",
            description: "Ainsworth je zapažala bebe dok su bile sa majkom, potom su odvajane i ponovo susretane. Odgovori beba su pokazali različite stilove privrženosti.",
            keyFinding: "Postoje različiti stilovi privrženosti (sigurna, anksiozna-otporna, zaobilačka) koje oblikuju budućie odnose."
          },
          {
            title: "Harlow-ova opasna mužica-surogat majka",
            researcher: "Harry Harlow",
            year: "1958",
            description: "Harlow je dao majmunima izbor između majke od žice sa hranom ili majke od tkanine bez hrane. Majmuni su postojano birali tkaninu - pokazujući značaj bliskosti preko hrane.",
            keyFinding: "Privrženost je razvojno važnija od zadovoljenja gladi - potrebna je socijalna briga i fizički kontakt."
          },
          {
            title: "Bobo lutka eksperiment",
            researcher: "Albert Bandura",
            year: "1961",
            description: "Bandura je pokazao deci video odrasle osobe koja je agresivna prema Bobo lutki. Deca koja su to videla su kasnije bila agresivnija prema lutki. Ovo dokazuje učenje kroz opažanje.",
            keyFinding: "Deca uče ponašanje posmatrajući druge - agresija i dobro ponašanje mogu biti modlovani kroz primere."
          }
        ],
        testId: "attachment"
      },
      {
        id: "perception",
        name: "Psihologija percepcije i kognicije",
        description: "Kako naš mozak vidi, čuje i obrađuje informacije iz sveta. Od osnovnog čulnog opažanja do kompleksnog mišljenja.",
        topics: [
          {
            title: "Čulna oprema i prag",
            description: "Svaki čuvor ima minimalnu količinu stimulusa potrebnu za detekciju (apsolutni prag). Takođe postoji razlikovalnost - sposobnost detektovanja razlike između stimulusa (diferentni prag)."
          },
          {
            title: "Pažnja",
            description: "Selektivna pažnja omogućava nam da se fokusiramo na važne informacije zadržavajući ostalo u pozadini. Fenomen koktela - možemo čuti svoje ime dok ne slušamo razgovor, što pokazuje da se informacije obrađuju čak i bez svesti."
          },
          {
            title: "Prepoznavanje oblika",
            description: "Naš mozak organizuje vizualne informacije u oblike korišćenjem principa kao što su sličnost, nablizost i zatvorenost. Psiholozi razlikuju teoriju karakteristika i teoriju globalne konfiguracije."
          },
          {
            title: "Memorija",
            description: "Tri tipa memorije: senzorna (sekunde), kratkoročna (do 30 sekundi), dugoročna (potencijalno večno). Kodovanje, čuvanje i preuzimanje su tri faze memorije."
          },
          {
            title: "Problemo rešavanje i kreativnost",
            description: "Mentalni procesi kada se mozak suočava sa novim situacijama. Heurističko rasuđivanje koristi brze 'pravilo od buke', dok je algoritmičko rasuđivanje sistematsko i pouzdano."
          }
        ],
        experiments: [
          {
            title: "Fenomen koktela",
            researcher: "E. Cherry",
            year: "1953",
            description: "Cherry je testirao sposobnost čuća da se fokusira na jedan razgovor u buci. Iznešeno je da se imena učesnika često čuju čak i u 'ignorisanim' kanalu, pokazujući da se informacija obrađuje.",
            keyFinding: "Pažnja je selektivna ali ne može potpuno ignorisati važne informacije - mozak ima 'detektor važnosti'."
          },
          {
            title: "Slepota za promenama",
            researcher: "Daniel Simons",
            year: "1990",
            description: "U čuvenom eksperimentu, gledalci gledaju video gdje se proslava igrača promeni između scena. Većina ne primetiti promenu. Ekvivalent: video gde osoba u kostima gorile šeta kroz pristrojstvo koje nikko ne vidi.",
            keyFinding: "Selektivna pažnja znači da često ne primetimo velike promene u našem vizuelnom polju."
          },
          {
            title: "Miler-Lyerova iluzija",
            researcher: "Franz Müller-Lyer",
            year: "1889",
            description: "Vizuelna iluzija gde su Dve linije iste dužine ali izgledaju različitih dužina zbog strelica na krajevima. Ovo pokazuje kako mozak koristi principe kao što su perspektiva i kontekst.",
            keyFinding: "Percepcija nije prosto prikupljanje informacija - mozak aktivno koristi kontekst i iskustvo da razume svet."
          }
        ],
        testId: "cognitive-bias"
      },
      {
        id: "emotions",
        name: "Psihologija emocija i motivacije",
        description: "Šta nas motiviše i kako emocije utiču na ponašanje? Od osnovnih potreba do kompleksnih ambicija.",
        topics: [
          {
            title: "Maslow-ova hijerarhija potreba",
            description: "Maslow je identifikovao različite nivoe potreba od fizioloških (hrana, sen) preko sigurnosti, ljubavi, samodostojanstva, do samorealizacije. Nižu potrebu mora biti zadovoljeno pre nego što osoba aspira viške."
          },
          {
            title: "Motivaciona stanja",
            description: "Drive je unutrašnja fiziološka neravnoteža koja motiviše ponašanje. Primeri include glad, žeđ, temperaturna regulacija. Sekundarne potrebe (uznemirev, moć, afilијacija) se razvijaju kroz iskustvo."
          },
          {
            title: "Teorija emocija",
            description: "James-Lange teorija kaže da emocija dolazi od prepoznavanja tela (srce nije, znači plašim se). Cannon-Bard teorija sugeriše da su emocije i telo uzbudljenja simultana. Shachter-Singer teorija - etiketiramo arosurementа emociju na osnovu konteksta."
          },
          {
            title: "Ekspresija emocije",
            description: "Ekman je pokazao da su neka izraza lica univerzalna (strah, ljutnja, radost). Međutim, kultura utiče na kada je ok pokazati emocije i na intenzitet pokaza."
          },
          {
            title: "Regulacija emocija",
            description: "Kako upravljamo emocijama? Strategije uključuju kognitivnu preformulaciju (promisljanju), pažnju (izbegavanje okidaća), supresiju (prikrivanje izražavanja) i prihvatanje."
          }
        ],
        experiments: [
          {
            title: "Mizdrilovani eksperiment Schachter-Singera",
            researcher: "Stanley Schachter i Jerome Singer",
            year: "1962",
            description: "Učesnici su primili epinefrin (adrenalin) i rekao im se način ekspresija emocije u redini - depresivna ili vesela. Njihova emocija se promenila na osnovu konteksta i šta su drugima radili.",
            keyFinding: "Emocije su delom proizvod tela i delom proizvod kognitivne interpretacije konteksta."
          },
          {
            title: "Iz facijalnog povratnog sistema",
            researcher: "James Laird",
            year: "1974",
            description: "Laird je zatražio od učesnika da prave lica - osmeh (između prsta) ili frown (četiri veka). Učesnici koji su osmehivali su videli karikature kao smiješnije i osjetili više zabave.",
            keyFinding: "Čak i kada je nametnuto, korišćenje lica mišića može uticati na doživljaj emocije - bodily feedback matters."
          },
          {
            title: "Duckworth eksperiment karaktera",
            researcher: "Angela Duckworth",
            year: "2005",
            description: "Duckworth je pratila učenike da objasne razliku između inteligencije kao fiksne (mindset fiksnog) i kao razvivojnog (mindset razvoja). Učenici sa mindsetom razvoja su više ulagali u učenje i bolje su se izveštavali.",
            keyFinding: "Motivacija je delom povezana sa našom percepcijom (da li verujemo da možemo da se poboljšamo) nego samo sa sposobnostima."
          }
        ],
        testId: null
      },
      {
        id: "personality",
        name: "Psihologija ličnosti",
        description: "Šta čini osobu jedinstvenom? Kako psiholog meriti i razumeti razlike između ljudi.",
        topics: [
          {
            title: "Model pet faktora (Big Five)",
            description: "Nauka je convergirala na pet glavnih dimenzija ličnosti: Otvorenost (kreativnost), Savesnost (organizovanost), Ekstroverzija (društvenost), Agreeableness (pitomost), Neurotizam (emocionalna nestabilnost)."
          },
          {
            title: "Psihoanalitička teorija",
            description: "Freud je sugerioshi da su ponašanja voguljena nesvesnim konfliktima i ranama iskustvima. Id (impulsi), ego (realnost) i superego (moralna savest) se bore za kontrolu."
          },
          {
            title: "Teorija tipa",
            description: "Myers-Briggs tipologija kategorisuje ljude u 16 tipova na osnovu preferenci (introverzija-ekstroverzija, senzacija-intuicija, razmišljanje-osećanje, prosuđivanje-percepcija)."
          },
          {
            title: "Samosaznanja i samoprocena",
            description: "Kako poznajemo sebe? Kako precizna je naša samoprocena? Često precenjujemo na kakvo su nam ponašanja usled pristrasnosti kao što su fundamentalni atribucijski offset."
          },
          {
            title: "Socijalna okruženja i ličnost",
            description: "Situacija ima uticaj na ponašanje. Osoba može biti mirnična na poslu ali bujna sa prijateljima. Interakcionizam sugeriše da je ponašanje rezultat person × situation."
          }
        ],
        experiments: [
          {
            title: "Mračna studija Zimbardo",
            researcher: "Philip Zimbardo",
            year: "1971",
            description: "Zimbardo je postavio simulaciju zatora sa zdravim studentima. Kao čuvari su postali kruelni dok su se zatvorenici povinovali naređenjima. Eksperiment je stopiran jer je situacija dramatično oblikovala ponašanje učesnika.",
            keyFinding: "Ponašanje je teško oblikovano od strane situacije i uloga. Ordinarne osobe mogu postati autoritarne u određenim uslovima."
          },
          {
            title: "Milgramov eksperiment poslušnosti",
            researcher: "Stanley Milgram",
            year: "1961",
            description: "Milgram je tražio učesnike da daju električne šokove drugoj osobi (zaista aktor) za loše odgovore. Većina je nastavila i sa naredbom autoritete čak i kada je žrtva molila da stane.",
            keyFinding: "Običnih osoba mogu biti motivisane da rade neželjene stvari kada se pod naredbom autoritete - obajsnutjavajući kako je obezvršavano zlo."
          },
          {
            title: "Projektivni testovi",
            researcher: "Hermann Rorschach",
            year: "1921",
            description: "Rorschach je razvio test sa mrljama mastila gde osoba описuje šta vidi. Pretpostavka je da će osoba 'projektovati' svoju ličnost na nejasnu sliku.",
            keyFinding: "Subjektivne odgovore na vejasne stimulu mogu otkriti nešto o ličnosti, ali reliabilnost i validnost психологички testova je diskutabilna."
          }
        ],
        testId: "big-five"
      },
      {
        id: "social",
        name: "Socijalna psihologija",
        description: "Kako drugi utiču na nas? GruPI, konformizam, autoritet, stereotipi i socijalne norme.",
        topics: [
          {
            title: "Konformizmu",
            description: "Tendencija promene ponašanja ili verovanja da se uslažu sa grupom. Asch je pokazao da će ljudi tvrditi da su neispravne linije tačne ako grupa već tako kaže."
          },
          {
            title: "Socijalni uticaj",
            description: "Tri tipa: compliance (sloga sa zahtevima), identifikacija (slaganje jer verujemo), internalizacija (slaganje jer verujemo da je tačno). Razlika je u dugoročnosti efekta."
          },
          {
            title: "Grupi razmišljanja",
            description: "Fenomen gde je grupa dolazi do nepristojnih odluke jer se svi setuju da je moda razmišljanja već deljena. Kritički razgovori se izbjegavaju jer nitko ne želi biti nonkonformist."
          },
          {
            title: "Atribucija i stereotipi",
            description: "Fundamentalni atribucijski offset - vidimo tuđe ponašanje kao uslov karaktera, a naše kao situacijski usloven. Stereotipi su generalizovane predstave o grupama koje često budu pogrešni."
          },
          {
            title: "Alterizmerom",
            description: "Spremnost da se pomogne drugima. Darley i Latane su pokazali da će osoba manje verovatno pomoći ako ima drugih prisutnih (distribuirana odgovornost)."
          }
        ],
        experiments: [
          {
            title: "Asch-ov konformiteta eksperiment",
            researcher: "Solomon Asch",
            year: "1951",
            description: "Asch je tražio od učesnika da identifikuju jednake linije od tri opcije. Kada su drugi (zapravo akteri) dali kriv odgovore, većina učesnika je slazala sa grupom čak i kada je znala da je to pogrešno.",
            keyFinding: "Ljudi će konformirati grupi čak i kada vide da je grupa pogrešna - konformizam je moćan faktor."
          },
          {
            title: "Bystanderska studija",
            researcher: "John Darley i Bibb Latané",
            year: "1968",
            description: "Učesnici su čuli što je neko epilepse u drugoj sobi. Kada su bili sami, 85% je prijavilo. Kada su bili u grupi od pet, samo 31% je prijavilo (distribuirana odgovornost).",
            keyFinding: "Prisustvo drugih smanjuje verovatnoću da će osoba intervenisati - distribuirana odgovornost smanjuje pomoć."
          },
          {
            title: "Mere eksperiment i stereotipi",
            researcher: "Claude Steele",
            year: "1995",
            description: "Steele je tražio od crnih i belih stuденata da rade sklaljivač математičkog testa. Kada je rečeno da je test dijagnostički (peti stereotipi), crni studenti su lošije napravili. Kada je bilo rekao je da nije dijagnostički, razlika je nestala.",
            keyFinding: "Stereotipi mogu uticati na izvedbu kroz 'prijetnju stereotipa' - anksioznost od mogućnosti da zaista biti stereotip."
          }
        ],
        testId: "empathy"
      },
      {
        id: "learning",
        name: "Psihologija učenja i pamćenja",
        description: "Kako učimo nove stvari i zadržavamo znanje? Od klasičnog uslovljavanje do memorijskih strategija.",
        topics: [
          {
            title: "Tipovi memorije",
            description: "Senzorna memorija čuva информације sekunde. Kratkoročna memorija (takođe radna) čuva do 30 sekundi. Dugoročna memorija može čuvati podatke doživotno preko konsolidacije memorije."
          },
          {
            title: "Kodovanje i preuzimanje",
            description: "Kako informacije dolaze do memorije (kodovanje) i kako se kasnije pronalaze (preuzimanje). Efekt specifičnosti kodiranja - najbolje preuzimanje se dešava kada je kontekst preuzimanja sličan kontekstu kodiranja."
          },
          {
            title: "Zaborav",
            description: "Ebbinghaus je pokazao da zaboravljamo rapidno samo što učimo, ali ako prelazovemo, memorije se pojačava. Zaborav je više preuzimanja neuspešnog nego gubitka memorije."
          },
          {
            title: "Slike memorije",
            description: "Vizuelne informacije se pamte bolje od verbalnih (koeficijent slike). Metode kao što su loci mogu memosmos dramačiti poboljšati memoriju."
          },
          {
            title: "Transfer učenja",
            description: "Kada se nauči nešto u jednoj situaciji prenosi na novu situaciju? Transferu je bolje pri više varijabilnih vežbi i kada se nauče princip umesto samo faktora."
          }
        ],
        experiments: [
          {
            title: "Forbringhaus Zaborav krivaja",
            researcher: "Hermann Ebbinghaus",
            year: "1885",
            description: "Ebbinghaus je koristio beznačajne slogove (kao nonsense) i testirao se u različitim vremenskim intervalima. Dokumentovao je da zaboravljamo nepravilno - brzo na početku, kasnije sporije.",
            keyFinding: "Zaborav sledi predvidljiv obrazac; između redovnog pregleda (spaced repetition) se može izboriti zaboravi."
          },
          {
            title: "Eksperiment Loftus lažne memorije",
            researcher: "Elizabeth Loftus",
            year: "1995",
            description: "Loftus je ubdio učesnike sa informacijama o event (npr. autoudesima) koji se nikada nisu dogodili. U sugestiji podrobne priče, brojni učesnici su zaista 'sjetili' lažnog eventa.",
            keyFinding: "Memorija nije stalna sveska - može biti izmenjena i sugestije mogu stvoriti lažne memorije."
          },
          {
            title: "Specijalist eksperiment Gobet-Simonova",
            researcher: "Fernand Gobet i Herbert Simon",
            year: "1996",
            description: "Šahovski stručnjaci mogu zapamtiti položaje šaha nakon kratkotrajne izlaganja ali ne nasumični položaji. To pokazuje da je ekspertizaMemorija zavisi od znanja - vizuelne memorije je bolja kada ima značenja.",
            keyFinding: "Memorije je priklonjena znanjem - stručnjaci mogu pamti više znanja jer je to značajno organizovano u njihovoj umnoj knjizi."
          }
        ],
        testId: null
      },
      {
        id: "abnormal",
        name: "Abnormalna psihologija",
        description: "Proučavanje mentalnih bolesti i poremećaja. Kako se razvijaju i kako se lečenju?",
        topics: [
          {
            title: "Definicija abnormalnog",
            description: "Abnormalno ponašanje je statistički neobično, diskontinualno sa normalnim, osoba koja ozbiljno patnja, i ponašanje je kontrapharmacevtical zajednici normama."
          },
          {
            title: "Klasifikacija poremećaja",
            description: "DSM-5 (Dijagnostički i Statističko Priručnik Mentalnih Poremećaja) je standardni referentni klasifikator u SAD. ICD je korišćeni u drugim delovima sveta."
          },
          {
            title: "Anksiozni poremećaji",
            description: "Generalizovana anksioznost, fobije, post-traumatski stres. Često je anksioznost proporcionalna rezultatom stvarne opasnosti, što sprečava normalnom funkcionisanju."
          },
          {
            title: "Depresija i bipolarni poremećaj",
            description: "Depresija je karakterisao tuga, губитак interes u aktivnosti, sniženi energija. Bipolarni poremćaj uključuje periodi depresije i eufemijske (manije) stanja."
          },
          {
            title: "Schizofrenia i psihoza",
            description: "Karakteriziran halucinacijama (vidim/čujem što nije stvarno) ili zablude (verovanje u netačno). Često je geneski i okruženja faktor."
          }
        ],
        experiments: [
          {
            title: "Rosenhan pseudo-pacijent eksperiment",
            researcher: "David Rosenhan",
            year: "1973",
            description: "Rosenhan i njegovi saradnici pretvarali su se mentalno bolni i prijavili se u bolnice. Diagnosticireni su sa psihozom ili Schizofrenia. Zapanjujuće, nijedan od njih nije primetio da nisu zaista bolni.",
            keyFinding: "Mentalna bolna dijagnoza je subjektivna i može biti pogrešna. Labeling može stvoriti očekivanja koja oblikuju ponašanje."
          },
          {
            title: "Termin trauma eksperiment Paul Ekman",
            researcher: "Paul Ekman",
            year: "1990",
            description: "Ekman je istraživala ekspresije lica u poremećajima koji povezani sa traumom. Otkrio je da još netouch traume mogu manifestovati kao depresija ili anksioznost kroz telesne znakove.",
            keyFinding: "Psihološka trauma može biti somatizovana (pokazati kao fizičke simptome). Trauma se može čitati kroz lice i telo."
          },
          {
            title: "Albert Ellis REBT",
            researcher: "Albert Ellis",
            year: "1955",
            description: "Ellis je razvio racionalno-emocionalnu behavioralnu terapi - ideja da su ne aktivirajući događaji već naši nerelacionalni verovanja koja uzrokuju emocionalnu patnju. REBT koristi disputation.",
            keyFinding: "Depresija i anksioznost su često rezultat iracionalno verovanja - psihološka terapija može biti efikasna kroz kognitivnu preformulaciju."
          }
        ],
        testId: null
      },
      {
        id: "applied",
        name: "Primenjena psihologija",
        description: "Kako koristimo psihologiju u praksi? Klinička, organizacijska, obrazovna i sportska psihologija.",
        topics: [
          {
            title: "Klinička psihologija",
            description: "Dijagnoza i tretman mentalnih bolesti. Klinički psiholog mora imati master ili doktorsku diplomu i licencu. Rad može biti individualni ili grupni."
          },
          {
            title: "Organizacijska psihologija",
            description: "Primena psihologije u radnom okruženju. Includes izbor, trening, motivacija, liderstvo, komunikacija, organizacijska kultura i konflikt resenja."
          },
          {
            title: "Edukacijska psihologija",
            description: "Primena psihologije u učenju. Includes instrukcijski design, procena, diferenciacija, motivacija, inkluzije i podrške za učenike posebnih potreba."
          },
          {
            title: "Sportska psihologija",
            description: "Korišćenje psihologije da poboljšanja atletska izvedba. Uključuje vizuelizaciju, razgovor sa sobom, fokusu, motivaciju, timsku dinamiku."
          },
          {
            title: "Zdravstvene psihologije",
            description: "Kako psihološki faktori utiču na zdravlje? Stres, koping, pridržavanje koga zdravstveni protokoli, bolesničke iskustva i završne brige su fokusa."
          }
        ],
        experiments: [
          {
            title: "Lokalni kontrole eksperiment Rottera",
            researcher: "Julian Rotter",
            year: "1966",
            description: "Rotter je razvio skalu da meri ljude verovanje da li može kontrolisati sopstvenu sudbinu (interni locus) ili je to pod kontrolom drugih/fate (eksterni locus).",
            keyFinding: "Locus kontrole utiče na motivaciju, napor i mentalno zdravlje. Interni locus je često povezan sa boljim rezultatima."
          },
          {
            title: "Slomljena Windows teorija",
            researcher: "James Wilson i George Kelling",
            year: "1982",
            description: "Teorija je da ako mala neaglasitost ispraskaje nezapaženo, ona vodi do većim zločina - pogrešan signal privlači pogrešnu aktivnost. Policijama su počele radi na malim stvarima kao graffiti.",
            keyFinding: "Male promene okruženja mogu imati velike efekte na ponašanje - 'broken windows' teorija je kontroverzna ali influential u kriminologiji."
          },
          {
            title: "Demonstracija Zimbardo kognitivne disonancije",
            researcher: "Philip Zimbardo",
            year: "1969",
            description: "Učesnici su traženi da obave nudnu aktivnost (turiranje igde). Neki su plaćeni malo ($1) drugi su plaćeni mnogo ($20). Čini se da oni plaćeni malo su percipirani kao interesniju - 'trebati' je biti to interesnija da opravdaju malo novca.",
            keyFinding: "Kognitivna disonancija - konflikt između stavova i ponašanja - dovodi do promene stavova da se uslužimo ponašanjem."
          }
        ],
        testId: "locus-of-control"
      }
    ],
    tests: [
      {
        id: "big-five",
        name: "Test Big Five (OCEAN)",
        description: "Otkupи svoju personalnost kroz pet dimenzija: Otvorenost, Savesnost, Ekstroverzija, Ljubaznost i Neurotizam.",
        questions: [
          { text: "Ja sam osoba koja je kreativna i inventivna.", traits: ["openness"], weight: 1 },
          { text: "Ja sam osoba koja teži biti organizovana i pažljiva.", traits: ["conscientiousness"], weight: 1 },
          { text: "Ja sam osoba koja je druželjubiva i voli biti među ljudima.", traits: ["extraversion"], weight: 1 },
          { text: "Ja sam osoba koja je saosećajna i ima razumevanja za druge.", traits: ["agreeableness"], weight: 1 },
          { text: "Često se osećam anksiozna i nervozna.", traits: ["neuroticism"], weight: 1 },
          { text: "Ja radim inovativne stvari.", traits: ["openness"], weight: 1 },
          { text: "Ja obično radim stvari pažljivo.", traits: ["conscientiousness"], weight: 1 },
          { text: "Ja sam osoba koja je malo rezervisana i tiha.", traits: ["extraversion"], weight: -1 },
          { text: "Ja se sveđam sa ostalim.", traits: ["agreeableness"], weight: 1 },
          { text: "Ja se lako osjetim razdraženom.", traits: ["neuroticism"], weight: 1 }
        ],
        scale: "1-5",
        resultInterpretation: {
          openness: "Otvorenost za iskustvo - kreativnost, znatiželja, aprecijacija za umetnost",
          conscientiousness: "Savesnost - organizovanost, pažljivost, samokontrol",
          extraversion: "Ekstroverzija - druželjubivost, aseptivnost, energičnost",
          agreeableness: "Ljubaznost - saosećajnost, pouzdanost, altruizam",
          neuroticism: "Neurotizam - anksioznost, depresija, razdražljivost"
        }
      },
      {
        id: "locus-of-control",
        name: "Test Locus Control",
        description: "Saznaј da li veruješ da kontrolišeš svoju sudbinu (interni) ili da su stvari ustanovljene (eksterni).",
        questions: [
          { text: "Stvari koje se meni dešavaju su bez moje kontrole.", externalScore: 1 },
          { text: "U potpunosti sam odgovoran za svoj uspeh ili neuspeh.", internalScore: 1 },
          { text: "Često osečam da je ono što se desi zavisi od moje sreće ili nesreće.", externalScore: 1 },
          { text: "U većini slučajeva, moji napori donose željene rezultate.", internalScore: 1 },
          { text: "Često se osećam da ne mogu da kontrolišem važne stvari.", externalScore: 1 },
          { text: "Ono što se desi je direktno u mojim rukama.", internalScore: 1 },
          { text: "Često se osečam da malo-šta zavisi od mojih odluka.", externalScore: 1 },
          { text: "Ako se dobro planiram, mogu da izbegnem nesreću.", internalScore: 1 },
          { text: "Događaji koji se nažalost dešavaju često su bez moje kontrole.", externalScore: 1 },
          { text: "Moj život je oblikovan mojim sopstvenim odlukama.", internalScore: 1 }
        ],
        scale: "1-5",
        resultInterpretation: "Vaš rezultat pokazuje da li verujete da ste u kontroli svoje sudbine (interni locus) ili da su stvari izvan vaše kontrole (eksterni locus)."
      },
      {
        id: "attachment",
        name: "Attachment Style Quiz",
        description: "Otkrij svoj stil privrženosti u odnosima - sigurna, anksiozna, zaobilačka ili iskompleksna.",
        questions: [
          { text: "U manjim vrednostima osečam se sigurno i prizivan kada sam sa mojom bliskom osobom.", style: "secure" },
          { text: "Često se brinem da moja bliska osoba ne želi biti sa mnom.", style: "anxious" },
          { text: "Preferujem da se ne oslanjam na druge.", style: "avoidant" },
          { text: "Želim biti vrlo blizu sa mojom bliskom osobom ali se brinem da mogu biti povređen.", style: "fearful" },
          { text: "Mogu biti sam bez anksioznosti jer verujem svojoj bliskoj osobi.", style: "secure" },
          { text: "Često trebam da budem blizu sa mojom bliskom osobom.", style: "anxious" },
          { text: "Često budem udaljen od drugih.", style: "avoidant" },
          { text: "Želim blisku vezu ali se brinem o povredi.", style: "fearful" }
        ],
        scale: "1-4",
        resultInterpretation: {
          secure: "Sigurna privrženost - osećate se sigurno u odnosima i možete održavati zdrave veze.",
          anxious: "Anksiozna privrženost - trebate puno potvrda i možete biti zavisni od drugih.",
          avoidant: "Zaobilačka privrženost - preferujete nrezavisnost i možete biti hladni u odnosima.",
          fearful: "Iskompleksna privrženost - želite blisku vezu ali se brinate o povredama."
        }
      },
      {
        id: "cognitive-bias",
        name: "Cognitive Bias Self-Check",
        description: "Prepoznaj svoje kognitivne pristrasnosti - kako sistematski greške u razmišljanju. ",
        questions: [
          { text: "Kada nešto ide pogrešno, obično krivi druge umesto sebe.", bias: "fundamental-attribution-error" },
          { text: "Teško je promeniti mišljenja svoga čak i sa dokazima.", bias: "confirmation-bias" },
          { text: "Često se oslanjam na informacije koje čujem prvo.", bias: "primacy-effect" },
          { text: "Verujem ovakvim osobama koje su samouverene čak i bez dokaza.", bias: "illusory-truth" },
          { text: "Teško je vidjeti odnose između stvari koji nisu zaista povezani.", bias: "illusory-correlation" },
          { text: "Ponos u pogrešnim odlukama čak i kada se pokazu pogrešnim.", bias: "sunk-cost-fallacy" },
          { text: "Često mislim da su drugi slični kao što sam ja.", bias: "false-consensus" },
          { text: "Verujem da sam bolji od proseka u većini stvari.", bias: "dunning-kruger" },
          { text: "Teško je da promenim mom ponašanju čak i kada znam da je pogrešno.", bias: "status-quo-bias" },
          { text: "Preferiram da radim ono što sam radio pre nego da isprobam nove stvari.", bias: "status-quo-bias" }
        ],
        scale: "1-5",
        resultInterpretation: "Svatko ima kognitivne pristrasnosti - one su deo kako naš mozak brza obrađuje informacije. Awareness je prvi korak ka smanjenju njihovog uticaja."
      },
      {
        id: "empathy",
        name: "Empathy Quotient Test",
        description: "Merimo vašu sposobnost razumevanja i deljenja emocija drugih - vašu empatsku kvocijentnost.",
        questions: [
          { text: "Često mogu da shvatim šta neko drugi osećanja čak i bez njihovog izgovaranja.", empathy: true },
          { text: "Teško mi je da razumem zašto se neko brine oko stvari koje se meni ne čine važnim.", empathy: false },
          { text: "Volim da slušam o tuđim problemima i teškoćama.", empathy: true },
          { text: "Često sam previše fokusiran na sebe da bih primetio kako se drugi osećaju.", empathy: false },
          { text: "Mogu da se zamislim u situaciji drugog čak i ako se ne slažem sa njima.", empathy: true },
          { text: "Kada vidim nekog da plače, želim da budem sa njim i da ga tešim.", empathy: true },
          { text: "Teško mi je da se povezem sa tuđim osećanjima.", empathy: false },
          { text: "Želim da pomognem ljudima koji pate.", empathy: true },
          { text: "Često slušam sa empatijom i bez sudenja.", empathy: true },
          { text: "Lakše mi je da kritikujem nego da razumem.", empathy: false },
          { text: "Mogu da asimiliram tuđe perspektive i stavove.", empathy: true },
          { text: "Empatija je za mene važna vrednost.", empathy: true }
        ],
        scale: "1-5",
        resultInterpretation: "Vaš rezultat pokazuje vašu empatičnu sposobnost - sposobnost razumevanja i deljenja osećanja drugih. Viša empatkuja može voditi do boljih odnosa."
      }
    ]
  },
  en: {
    labels: {
      title: "Psychology Propaedeutics",
      subtitle: "Introduction to Psychology",
      language: "LANGUAGE / JEZIK",
      topics: "Topics",
      experiments: "Experiments",
      tests: "Tests",
      subjects: "Subjects",
      search: "Search",
      home: "Home",
      about: "About",
      startTest: "Start Test",
      submitTest: "Submit Answers",
      yourResult: "Your Result",
      testHistory: "Test History",
      question: "Question",
      of: "of",
      previous: "Previous Results",
      noPreviousResults: "No previous results for this test",
      retake: "Retake Test",
      clearHistory: "Clear History",
      researcher: "Researcher(s)",
      year: "Year",
      keyFinding: "Key Finding",
      close: "Close",
      credits: "© 2024 Psychology Propaedeutics. All rights reserved."
    },
    subjects: [
      {
        id: "intro",
        name: "Introduction to Psychology",
        description: "Psychology is the scientific study of behavior and mental processes. Learn about the fundamental concepts, branches, and applications of psychology in everyday life.",
        topics: [
          {
            title: "Definition and Goals of Psychology",
            description: "Psychology is the systematic study of behavior and cognitive processes. It combines the empirical method with theoretical analysis to understand human nature and behavior."
          },
          {
            title: "Branches of Psychology",
            description: "Clinical psychology, developmental psychology, social psychology, cognitive psychology, biological psychology, and many other specializations enable focused study of different aspects of human behavior."
          },
          {
            title: "Research Methods",
            description: "Psychology uses experiments, observations, surveys, case studies, and qualitative methods. Each method has its own advantages and limitations depending on the research question."
          },
          {
            title: "Nature vs. Nurture",
            description: "The ongoing scientific dialogue between genetic influence (nature) and environment (nurture) in shaping behavior. Modern psychology acknowledges the interaction of both factors."
          },
          {
            title: "Ethics in Psychology",
            description: "Researchers must adhere to principles including informed consent, confidentiality, safety, and minimizing harm. Ethical codes protect participants in research."
          }
        ],
        experiments: [
          {
            title: "Pavlov's Classical Conditioning",
            researcher: "Ivan Petrovich Pavlov",
            year: "1927",
            description: "Pavlov demonstrated how behavior can be conditioned through association. A dog learned to salivate at the sound of a bell after the bell was paired with food.",
            keyFinding: "Behavior can be modified through conditioning - a classic example of learning through association."
          },
          {
            title: "Skinner's Operant Conditioning",
            researcher: "Burrhus Frederic Skinner",
            year: "1938",
            description: "Skinner investigated how behavior is shaped through consequences (rewards and punishments). His experiments with pigeons showed how animals learn to perform actions for rewards.",
            keyFinding: "Behavior is shaped by what happens after it - principles of reinforcement and punishment are powerful."
          },
          {
            title: "Mead's Cultural Study of Emotions",
            researcher: "Margaret Mead",
            year: "1935",
            description: "Mead investigated how cultural differences affect emotions and behavior. She showed that emotions are not purely biological but shaped by social norms.",
            keyFinding: "Emotions and behavior are partly products of culture and social environment, not just biological factors."
          }
        ],
        testId: null
      },
      {
        id: "biological",
        name: "Biological Bases of Behavior",
        description: "Explore how brain functions, nervous system, and genetics affect behavior. New technology allows us to see the brain in action.",
        topics: [
          {
            title: "The Nervous System",
            description: "The central nervous system (brain and spinal cord) and peripheral nervous system (somatic and autonomic) coordinate all our activities from breathing to thinking."
          },
          {
            title: "Neurons and Synapses",
            description: "Neurons are the basic units of the nervous system that communicate through synapses. Chemical signals (neurotransmitters) enable communication between neurons."
          },
          {
            title: "Brain Structures",
            description: "The cortex, hippocampus, amygdala, cerebellum, and other structures each perform specific functions. Damage to specific areas can result in clear changes in behavior."
          },
          {
            title: "Hormones and the Endocrine System",
            description: "Hormones like testosterone, estrogen, and cortisol modify behavior, mood, and physiological processes. The endocrine system works in coordination with the nervous system."
          },
          {
            title: "Genetics and Behavior",
            description: "Genes influence predispositions, but the environment determines how those predispositions manifest. Epigenetics shows how experiences can activate or deactivate genes."
          }
        ],
        experiments: [
          {
            title: "Rat Park Experiment",
            researcher: "Bruce Alexander",
            year: "1981",
            description: "Alexander investigated addiction by placing rats in an enriched environment with other rats and varied activities. The results showed environment is critical in preventing problematic drug use.",
            keyFinding: "Social environment and stimulation are key to well-being, not just biological predisposition to addiction."
          },
          {
            title: "Phineas Gage and Personality Change",
            researcher: "John Harlow",
            year: "1868",
            description: "Phineas Gage survived an accident with an iron pole through his head. After that he changed dramatically - from reliable worker to unpredictable person. This showed the connection between brain and personality.",
            keyFinding: "Damage to specific brain areas (in this case prefrontal cortex) affects personality and behavior."
          },
          {
            title: "Split-Brain Experiments",
            researcher: "Roger Sperry",
            year: "1960-1970",
            description: "Sperry studied patients whose corpus callosum (connection between brain hemispheres) was severed. He discovered that left and right hemispheres function like two separate minds with different abilities.",
            keyFinding: "The brain has two hemispheres with different abilities - analytical left and holistic right."
          }
        ],
        testId: null
      },
      {
        id: "developmental",
        name: "Developmental Psychology",
        description: "How thinking, behavior, and emotions change from birth through adulthood. Includes physical, cognitive, and socio-emotional development.",
        topics: [
          {
            title: "Piaget's Stages of Cognition",
            description: "Piaget identified four stages: sensorimotor (0-2), preoperational (2-7), concrete operational (7-11), and formal operational (11+). Each stage has characteristic types of thinking."
          },
          {
            title: "Attachment and Separation",
            description: "Ainsworth studied the 'strange situation' - how babies behave when separated from mother. She developed theory of attachment styles (secure, anxious-resistant, avoidant)."
          },
          {
            title: "Social Development",
            description: "Development of social behavior, understanding of others, and self-esteem. Erikson described eight stages of psychological development throughout the lifespan."
          },
          {
            title: "Moral Development",
            description: "Kohlberg identified three levels of moral development from hedonism through conformity to principles. Gilligan added an alternative view focusing on ethics of care."
          },
          {
            title: "Adolescence",
            description: "A critical period of identity formation, autonomy, and social reorientation. The brain (especially prefrontal cortex) is still developing, explaining why teens are risk-prone."
          }
        ],
        experiments: [
          {
            title: "Strange Situation",
            researcher: "Mary Ainsworth",
            year: "1963",
            description: "Ainsworth observed babies with mother, then separation and reunion. Babies' responses showed different attachment styles.",
            keyFinding: "There are different attachment styles (secure, anxious-resistant, avoidant) that shape future relationships."
          },
          {
            title: "Harlow's Surrogate Mother Monkeys",
            researcher: "Harry Harlow",
            year: "1958",
            description: "Harlow gave monkeys a choice between a wire mother with food or a cloth mother without food. Monkeys consistently chose the cloth - showing attachment is more important than feeding.",
            keyFinding: "Attachment is developmentally more important than hunger satisfaction - physical comfort and closeness are needed."
          },
          {
            title: "Bobo Doll Experiment",
            researcher: "Albert Bandura",
            year: "1961",
            description: "Bandura showed children a video of an aggressive adult toward a Bobo doll. Children who saw this were later more aggressive toward the doll, demonstrating observational learning.",
            keyFinding: "Children learn behavior by observing others - both aggression and prosocial behavior can be modeled through examples."
          }
        ],
        testId: "attachment"
      },
      {
        id: "perception",
        name: "Perception & Cognition",
        description: "How our brain sees, hears, and processes information from the world. From basic sensory perception to complex thinking.",
        topics: [
          {
            title: "Sensory Equipment and Thresholds",
            description: "Each sense has a minimum amount of stimulus needed for detection (absolute threshold). There's also difference detection - the ability to detect differences between stimuli (difference threshold)."
          },
          {
            title: "Attention",
            description: "Selective attention enables us to focus on important information while keeping other things in the background. The cocktail party effect - we can hear our name in a conversation we're not listening to, showing information is processed even without awareness."
          },
          {
            title: "Shape Recognition",
            description: "Our brain organizes visual information into shapes using principles like similarity, proximity, and closure. Psychologists distinguish between feature theory and whole configuration theory."
          },
          {
            title: "Memory",
            description: "Three types of memory: sensory (seconds), short-term (up to 30 seconds), long-term (potentially lifelong). Encoding, storage, and retrieval are three phases of memory."
          },
          {
            title: "Problem Solving and Creativity",
            description: "Mental processes when the brain faces new situations. Heuristic reasoning uses quick 'rules of thumb', while algorithmic reasoning is systematic and reliable."
          }
        ],
        experiments: [
          {
            title: "The Cocktail Party Effect",
            researcher: "E. Cherry",
            year: "1953",
            description: "Cherry tested the ability to focus hearing on one conversation in noise. He found that relevant information like names is often heard even in the 'ignored' channel, showing information is processed.",
            keyFinding: "Attention is selective but cannot completely ignore important information - the brain has an 'importance detector'."
          },
          {
            title: "Change Blindness",
            researcher: "Daniel Simons",
            year: "1990",
            description: "In a famous experiment, viewers watch a video where something changes between scenes. Most don't notice. Equivalent: a gorilla walks through a scene that nobody sees.",
            keyFinding: "Selective attention means we often don't notice large changes in our visual field."
          },
          {
            title: "Müller-Lyer Illusion",
            researcher: "Franz Müller-Lyer",
            year: "1889",
            description: "A visual illusion where two lines of equal length appear different due to arrows at the ends. Shows how the brain uses principles like perspective and context.",
            keyFinding: "Perception is not simply collecting information - the brain actively uses context and experience to understand the world."
          }
        ],
        testId: "cognitive-bias"
      },
      {
        id: "emotions",
        name: "Emotions & Motivation",
        description: "What motivates us and how emotions affect behavior? From basic needs to complex ambitions.",
        topics: [
          {
            title: "Maslow's Hierarchy of Needs",
            description: "Maslow identified different levels of needs from physiological (food, sleep) through safety, love, esteem, to self-actualization. Lower needs must be satisfied before aspiring to higher needs."
          },
          {
            title: "Motivational States",
            description: "Drive is an internal physiological imbalance that motivates behavior. Examples include hunger, thirst, temperature regulation. Secondary needs (achievement, power, affiliation) develop through experience."
          },
          {
            title: "Theories of Emotion",
            description: "James-Lange theory says emotion comes from recognizing bodily states (heart racing means I'm afraid). Cannon-Bard theory suggests emotions and body arousal are simultaneous. Schachter-Singer theory - we label arousal as emotion based on context."
          },
          {
            title: "Expression of Emotion",
            description: "Ekman showed that some facial expressions are universal (fear, anger, joy). However, culture influences when it's okay to show emotions and the intensity of display."
          },
          {
            title: "Emotion Regulation",
            description: "How do we manage emotions? Strategies include cognitive reappraisal (rethinking), attention (avoiding triggers), suppression (hiding expression), and acceptance."
          }
        ],
        experiments: [
          {
            title: "Schachter-Singer's Adrenaline Experiment",
            researcher: "Stanley Schachter and Jerome Singer",
            year: "1962",
            description: "Participants received epinephrine (adrenaline) and were told it was a vitamin. The expression of participants in the room - depressed or happy - changed the participants' emotion. Context shaped the emotion.",
            keyFinding: "Emotions are partly body-based and partly cognitive interpretation of context."
          },
          {
            title: "Facial Feedback System",
            researcher: "James Laird",
            year: "1974",
            description: "Laird asked participants to make faces - smile (pen between teeth) or frown. Participants who smiled thought cartoons were funnier and felt more enjoyment.",
            keyFinding: "Even when imposed, using facial muscles can affect emotional experience - bodily feedback matters."
          },
          {
            title: "Duckworth's Character Study",
            researcher: "Angela Duckworth",
            year: "2005",
            description: "Duckworth followed students to understand the difference between seeing intelligence as fixed (fixed mindset) or developable (growth mindset). Growth mindset students invested more in learning and performed better.",
            keyFinding: "Motivation is partly related to our perception (whether we believe we can improve) not just abilities."
          }
        ],
        testId: null
      },
      {
        id: "personality",
        name: "Personality Psychology",
        description: "What makes a person unique? How psychologists measure and understand differences between people.",
        topics: [
          {
            title: "Five Factor Model (Big Five)",
            description: "Science has converged on five main personality dimensions: Openness (creativity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (kindness), Neuroticism (emotional stability)."
          },
          {
            title: "Psychoanalytic Theory",
            description: "Freud suggested behavior is driven by unconscious conflicts and early experiences. The Id (impulses), Ego (reality), and Superego (moral conscience) struggle for control."
          },
          {
            title: "Type Theory",
            description: "Myers-Briggs typology categorizes people into 16 types based on preferences (introversion-extraversion, sensation-intuition, thinking-feeling, judging-perceiving)."
          },
          {
            title: "Self-Awareness and Self-Assessment",
            description: "How do we know ourselves? How accurate is our self-assessment? We often overestimate due to biases like the fundamental attribution error."
          },
          {
            title: "Social Situations and Personality",
            description: "Situations influence behavior. A person can be quiet at work but outgoing with friends. Interactionism suggests behavior results from person × situation."
          }
        ],
        experiments: [
          {
            title: "Zimbardo's Prison Experiment",
            researcher: "Philip Zimbardo",
            year: "1971",
            description: "Zimbardo set up a prison simulation in a basement. Healthy students assigned as guards became cruel while prisoners submitted. The experiment was stopped - situation shaped behavior dramatically.",
            keyFinding: "Behavior is powerfully shaped by situation and role. Ordinary people can become authoritarian in certain conditions."
          },
          {
            title: "Milgram's Obedience Experiment",
            researcher: "Stanley Milgram",
            year: "1961",
            description: "Milgram asked participants to give electric shocks to another person (actually an actor) for wrong answers. Most continued under orders from authority even when the victim pleaded to stop.",
            keyFinding: "Ordinary people can be motivated to do harmful things when ordered by authority - explaining how evil is carried out."
          },
          {
            title: "Projective Tests",
            researcher: "Hermann Rorschach",
            year: "1921",
            description: "Rorschach developed a test with inkblots where people describe what they see. The assumption is people will 'project' their personality onto ambiguous stimuli.",
            keyFinding: "Subjective responses to ambiguous stimuli might reveal personality, but reliability and validity of psychological tests is debated."
          }
        ],
        testId: "big-five"
      },
      {
        id: "social",
        name: "Social Psychology",
        description: "How do others influence us? Groups, conformity, authority, stereotypes, and social norms.",
        topics: [
          {
            title: "Conformity",
            description: "The tendency to change behavior or beliefs to match the group. Asch showed people will claim incorrect lines are correct if the group already said so."
          },
          {
            title: "Social Influence",
            description: "Three types: compliance (going along with requests), identification (complying because we believe), internalization (complying because we believe it's true). The difference is in lasting effect."
          },
          {
            title: "Groupthink",
            description: "Phenomenon where a group arrives at unwise decisions because everyone assumes the shared view is the right one. Critical discussions are avoided because no one wants to be nonconformist."
          },
          {
            title: "Attribution and Stereotypes",
            description: "Fundamental attribution error - we see others' behavior as due to character, ours as situational. Stereotypes are generalized beliefs about groups that are often wrong."
          },
          {
            title: "Altruism",
            description: "Willingness to help others. Darley and Latane showed a person is less likely to help if others are present (diffusion of responsibility)."
          }
        ],
        experiments: [
          {
            title: "Asch's Conformity Experiment",
            researcher: "Solomon Asch",
            year: "1951",
            description: "Asch asked participants to identify matching lines from three options. When the others (actually actors) gave wrong answers, most participants conformed to the group even knowing they were wrong.",
            keyFinding: "People will conform to groups even when they see the group is wrong - conformity is a powerful factor."
          },
          {
            title: "Bystander Study",
            researcher: "John Darley and Bibb Latané",
            year: "1968",
            description: "Participants heard someone having a seizure in another room. When alone, 85% reported it. When in a group of five, only 31% reported (diffusion of responsibility).",
            keyFinding: "The presence of others reduces the likelihood a person will intervene - diffusion of responsibility reduces helping."
          },
          {
            title: "Stereotype Threat Experiment",
            researcher: "Claude Steele",
            year: "1995",
            description: "Steele asked Black and White students to do a math test. When told it was diagnostic (activating stereotypes), Black students performed worse. When told it wasn't diagnostic, the difference disappeared.",
            keyFinding: "Stereotypes can affect performance through 'stereotype threat' - anxiety about confirming a stereotype."
          }
        ],
        testId: "empathy"
      },
      {
        id: "learning",
        name: "Learning & Memory",
        description: "How do we learn new things and retain knowledge? From classical conditioning to memory strategies.",
        topics: [
          {
            title: "Types of Memory",
            description: "Sensory memory holds information for seconds. Short-term memory (also working) holds up to 30 seconds. Long-term memory can store information for life through consolidation."
          },
          {
            title: "Encoding and Retrieval",
            description: "How information enters memory (encoding) and how it's later found (retrieval). The encoding specificity effect - best retrieval happens when retrieval context matches encoding context."
          },
          {
            title: "Forgetting",
            description: "Ebbinghaus showed we forget rapidly what we just learned, but with practice, memories strengthen. Forgetting is more about failed retrieval than memory loss."
          },
          {
            title: "Image Memory",
            description: "Visual information is remembered better than verbal (picture superiority effect). Methods like loci can dramatically improve memory."
          },
          {
            title: "Transfer of Learning",
            description: "When does learning in one situation transfer to a new situation? Transfer is better with variable practice and when principles are learned not just facts."
          }
        ],
        experiments: [
          {
            title: "Ebbinghaus Forgetting Curve",
            researcher: "Hermann Ebbinghaus",
            year: "1885",
            description: "Ebbinghaus used meaningless syllables (nonsense) and tested himself at different intervals. He documented that we forget irregularly - rapidly at first, then slower.",
            keyFinding: "Forgetting follows a predictable pattern; regular review (spaced repetition) can overcome forgetting."
          },
          {
            title: "Loftus False Memory Experiment",
            researcher: "Elizabeth Loftus",
            year: "1995",
            description: "Loftus convinced people of details about events (like car accidents) that never happened. With suggestion through detailed stories, many participants actually 'remembered' the false event.",
            keyFinding: "Memory is not a permanent record - it can be altered and suggestions can create false memories."
          },
          {
            title: "Chess Expert Study",
            researcher: "Fernand Gobet and Herbert Simon",
            year: "1996",
            description: "Chess experts could remember chess positions after brief exposure but not random positions. Shows expert memory depends on knowledge - visual memory is better when it has meaning.",
            keyFinding: "Memory is knowledge-dependent - experts can remember more because it's meaningfully organized in their mental library."
          }
        ],
        testId: null
      },
      {
        id: "abnormal",
        name: "Abnormal Psychology",
        description: "Study of mental illness and disorders. How they develop and how they're treated.",
        topics: [
          {
            title: "Definition of Abnormal",
            description: "Abnormal behavior is statistically unusual, deviation from normal, person is suffering significantly, and behavior violates community norms."
          },
          {
            title: "Classification of Disorders",
            description: "DSM-5 (Diagnostic and Statistical Manual of Mental Disorders) is the standard reference for diagnosis in the US. ICD is used in other parts of the world."
          },
          {
            title: "Anxiety Disorders",
            description: "Generalized anxiety, phobias, post-traumatic stress. Often anxiety is disproportionate to actual danger, preventing normal functioning."
          },
          {
            title: "Depression and Bipolar Disorder",
            description: "Depression is characterized by sadness, loss of interest in activities, low energy. Bipolar disorder includes periods of depression and euphoria (mania)."
          },
          {
            title: "Schizophrenia and Psychosis",
            description: "Characterized by hallucinations (seeing/hearing what isn't real) or delusions (believing what's false). Often has genetic and environmental factors."
          }
        ],
        experiments: [
          {
            title: "Rosenhan Pseudo-Patient Experiment",
            researcher: "David Rosenhan",
            year: "1973",
            description: "Rosenhan and colleagues pretended to be mentally ill and checked into hospitals. They were diagnosed with psychosis or schizophrenia. Shockingly, none of them were detected as fakes.",
            keyFinding: "Mental illness diagnosis is subjective and can be wrong. Labeling can create expectations that shape behavior."
          },
          {
            title: "Ekman's Trauma Study",
            researcher: "Paul Ekman",
            year: "1990",
            description: "Ekman investigated facial expressions in trauma-related disorders. He found that even old trauma can manifest as depression or anxiety through bodily signs.",
            keyFinding: "Psychological trauma can be somatized (show as physical symptoms). Trauma can be read through face and body."
          },
          {
            title: "Albert Ellis REBT",
            researcher: "Albert Ellis",
            year: "1955",
            description: "Ellis developed Rational Emotive Behavior Therapy - the idea that not activating events but our irrational beliefs about them cause emotional suffering. REBT uses disputation.",
            keyFinding: "Depression and anxiety often result from irrational beliefs - psychological therapy can be effective through cognitive restructuring."
          }
        ],
        testId: null
      },
      {
        id: "applied",
        name: "Applied Psychology",
        description: "How do we use psychology in practice? Clinical, organizational, educational, and sports psychology.",
        topics: [
          {
            title: "Clinical Psychology",
            description: "Diagnosis and treatment of mental illness. Clinical psychologists must have a master's or doctoral degree and license. Work can be individual or group."
          },
          {
            title: "Organizational Psychology",
            description: "Application of psychology in work settings. Includes selection, training, motivation, leadership, communication, organizational culture, and conflict resolution."
          },
          {
            title: "Educational Psychology",
            description: "Application of psychology to learning. Includes instructional design, assessment, differentiation, motivation, inclusion, and support for students with special needs."
          },
          {
            title: "Sports Psychology",
            description: "Using psychology to improve athletic performance. Includes visualization, self-talk, focus, motivation, and team dynamics."
          },
          {
            title: "Health Psychology",
            description: "How psychological factors affect health. Stress, coping, adherence to health protocols, patient experiences, and end-of-life care are focuses."
          }
        ],
        experiments: [
          {
            title: "Rotter's Locus of Control Experiment",
            researcher: "Julian Rotter",
            year: "1966",
            description: "Rotter developed a scale measuring whether people believe they control their destiny (internal locus) or that it's controlled by others/fate (external locus).",
            keyFinding: "Locus of control affects motivation, effort, and mental health. Internal locus is often associated with better outcomes."
          },
          {
            title: "Broken Windows Theory",
            researcher: "James Wilson and George Kelling",
            year: "1982",
            description: "The theory that if small disorders go unaddressed, it signals lawlessness attracting worse crime - broken windows invite more breaking. Police began focusing on small things like graffiti.",
            keyFinding: "Small environmental changes can have large effects on behavior - 'broken windows' theory is controversial but influential in criminology."
          },
          {
            title: "Zimbardo's Cognitive Dissonance",
            researcher: "Philip Zimbardo",
            year: "1969",
            description: "Participants were asked to do a boring task. Some were paid little ($1), others a lot ($20). Those paid little saw the task as more interesting - they 'had to' think it was interesting to justify low pay.",
            keyFinding: "Cognitive dissonance - conflict between attitudes and behavior - leads to attitude change to match behavior."
          }
        ],
        testId: "locus-of-control"
      }
    ],
    tests: [
      {
        id: "big-five",
        name: "Big Five Personality Test (OCEAN)",
        description: "Discover your personality through five dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism.",
        questions: [
          { text: "I am a person who is creative and inventive.", traits: ["openness"], weight: 1 },
          { text: "I am a person who tends to be organized and careful.", traits: ["conscientiousness"], weight: 1 },
          { text: "I am a person who is sociable and likes being around people.", traits: ["extraversion"], weight: 1 },
          { text: "I am a person who is compassionate and understanding of others.", traits: ["agreeableness"], weight: 1 },
          { text: "I tend to be anxious and nervous.", traits: ["neuroticism"], weight: 1 },
          { text: "I enjoy doing innovative things.", traits: ["openness"], weight: 1 },
          { text: "I usually do things carefully.", traits: ["conscientiousness"], weight: 1 },
          { text: "I am a person who is reserved and quiet.", traits: ["extraversion"], weight: -1 },
          { text: "I get along well with others.", traits: ["agreeableness"], weight: 1 },
          { text: "I am easily irritated.", traits: ["neuroticism"], weight: 1 }
        ],
        scale: "1-5",
        resultInterpretation: {
          openness: "Openness to Experience - creativity, curiosity, appreciation for art and ideas",
          conscientiousness: "Conscientiousness - organization, carefulness, self-control and discipline",
          extraversion: "Extraversion - sociability, assertiveness, and energetic approach to life",
          agreeableness: "Agreeableness - compassion, trustworthiness, and altruism toward others",
          neuroticism: "Neuroticism - anxiety, depression, and irritability in response to stress"
        }
      },
      {
        id: "locus-of-control",
        name: "Locus of Control Test",
        description: "Discover whether you believe you control your destiny (internal) or circumstances control you (external).",
        questions: [
          { text: "Things that happen to me are outside my control.", externalScore: 1 },
          { text: "I am responsible for my own success or failure.", internalScore: 1 },
          { text: "I often feel what happens to me is due to luck or chance.", externalScore: 1 },
          { text: "In most cases, my efforts bring the results I want.", internalScore: 1 },
          { text: "I often feel I cannot control important things.", externalScore: 1 },
          { text: "What happens to me is directly in my hands.", internalScore: 1 },
          { text: "It seems others have much influence over the important decisions in my life.", externalScore: 1 },
          { text: "By careful planning, I can avoid most misfortune.", internalScore: 1 },
          { text: "Events beyond my control often happen to me.", externalScore: 1 },
          { text: "My life is shaped by my own decisions.", internalScore: 1 }
        ],
        scale: "1-5",
        resultInterpretation: "Your score shows whether you believe you control your destiny (internal locus) or that circumstances are outside your control (external locus)."
      },
      {
        id: "attachment",
        name: "Attachment Style Quiz",
        description: "Discover your attachment style in relationships - Secure, Anxious, Avoidant, or Fearful.",
        questions: [
          { text: "In relationships, I feel secure and valued when I'm with my partner.", style: "secure" },
          { text: "I often worry that my partner doesn't want to be with me.", style: "anxious" },
          { text: "I prefer not to rely on others.", style: "avoidant" },
          { text: "I want closeness but worry I might get hurt.", style: "fearful" },
          { text: "I feel comfortable being alone without anxiety.", style: "secure" },
          { text: "I often need reassurance from my partner.", style: "anxious" },
          { text: "I often prefer to keep distance from others.", style: "avoidant" },
          { text: "I want close relationships but have fears about being hurt.", style: "fearful" }
        ],
        scale: "1-4",
        resultInterpretation: {
          secure: "Secure Attachment - You feel secure in relationships and can maintain healthy connections.",
          anxious: "Anxious Attachment - You need reassurance and can be dependent on others.",
          avoidant: "Avoidant Attachment - You prefer independence and can be distant in relationships.",
          fearful: "Fearful Attachment - You want connections but worry about being hurt."
        }
      },
      {
        id: "cognitive-bias",
        name: "Cognitive Bias Self-Check",
        description: "Recognize your cognitive biases - systematic errors in thinking.",
        questions: [
          { text: "When things go wrong, I usually blame others rather than myself.", bias: "fundamental-attribution-error" },
          { text: "I find it hard to change my beliefs even with evidence.", bias: "confirmation-bias" },
          { text: "I tend to rely on information I hear first.", bias: "primacy-effect" },
          { text: "I trust confident people even without proof.", bias: "illusory-truth" },
          { text: "I tend to see connections between things that aren't truly related.", bias: "illusory-correlation" },
          { text: "I'm proud of decisions even when they prove wrong.", bias: "sunk-cost-fallacy" },
          { text: "I often think others are similar to me.", bias: "false-consensus" },
          { text: "I believe I'm better than average at most things.", bias: "dunning-kruger" },
          { text: "It's hard for me to change behavior even when I know it's wrong.", bias: "status-quo-bias" },
          { text: "I prefer doing what I've done before rather than trying new things.", bias: "status-quo-bias" }
        ],
        scale: "1-5",
        resultInterpretation: "Everyone has cognitive biases - they're part of how our brain rapidly processes information. Awareness is the first step to reducing their impact."
      },
      {
        id: "empathy",
        name: "Empathy Quotient Test",
        description: "Measure your ability to understand and share the emotions of others - your empathic quotient.",
        questions: [
          { text: "I can often understand what someone else is feeling without them saying it.", empathy: true },
          { text: "It's hard for me to understand why someone worries about things I don't find important.", empathy: false },
          { text: "I enjoy listening to others talk about their problems and difficulties.", empathy: true },
          { text: "I'm often too focused on myself to notice how others feel.", empathy: false },
          { text: "I can put myself in someone else's shoes even if I disagree with them.", empathy: true },
          { text: "When I see someone cry, I feel moved to help.", empathy: true },
          { text: "It's hard for me to connect with others' feelings.", empathy: false },
          { text: "I want to help people who are suffering.", empathy: true },
          { text: "I naturally listen with empathy and without judgment.", empathy: true },
          { text: "I find it easier to criticize than to understand.", empathy: false },
          { text: "I can understand different perspectives and viewpoints.", empathy: true },
          { text: "Empathy is an important value to me.", empathy: true }
        ],
        scale: "1-5",
        resultInterpretation: "Your score shows your empathic ability - the capacity to understand and share the feelings of others. Higher empathy can lead to better relationships."
      }
    ]
  }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'sr';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Set HTML lang attribute
  document.documentElement.lang = currentLanguage;

  // Set initial language button
  updateLanguageButton();

  // Initialize sidebar with subjects
  initSidebar();

  // Load first subject or apply localStorage
  const savedSubject = localStorage.getItem('lastSubject') || 'intro';
  loadSubject(savedSubject);

  // Set up event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Language toggle
  const langBtn = document.getElementById('language-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', toggleLanguage);
  }

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', toggleHamburger);
  }

  // Sidebar subject clicks
  const subjects = document.querySelectorAll('.subject-nav');
  subjects.forEach(subj => {
    subj.addEventListener('click', (e) => {
      const subjectId = e.currentTarget.dataset.subject;
      loadSubject(subjectId);
    });
  });

  // Tab switches
  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      switchTab(e.currentTarget.dataset.tab);
    });
  });
}

function toggleLanguage() {
  currentLanguage = currentLanguage === 'sr' ? 'en' : 'sr';
  localStorage.setItem('language', currentLanguage);
  document.documentElement.lang = currentLanguage;
  updateLanguageButton();
  updateAllContent();

  // Fadeout and fadein effect
  document.body.style.opacity = '0.7';
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 150);
}

function updateLanguageButton() {
  const btn = document.getElementById('language-toggle');
  if (btn) {
    btn.textContent = currentLanguage === 'sr' ? 'EN' : 'SR';
  }
}

function updateAllContent() {
  // Update all labels
  updateLabels();

  // Update current subject content
  const currentSubject = document.querySelector('.subject-nav.active');
  if (currentSubject) {
    const subjectId = currentSubject.dataset.subject;
    loadSubject(subjectId);
  }
}

function updateLabels() {
  const labels = i18n[currentLanguage].labels;

  document.querySelectorAll('[data-label]').forEach(elem => {
    const labelKey = elem.dataset.label;
    if (labels[labelKey]) {
      elem.textContent = labels[labelKey];
    }
  });
}

function initSidebar() {
  const sidebar = document.getElementById('subjects-list');
  if (!sidebar) return;

  sidebar.innerHTML = '';

  i18n[currentLanguage].subjects.forEach(subject => {
    const div = document.createElement('button');
    div.className = 'subject-nav';
    div.dataset.subject = subject.id;
    div.textContent = subject.name;
    div.addEventListener('click', () => loadSubject(subject.id));
    sidebar.appendChild(div);
  });
}

function toggleHamburger() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
}

function loadSubject(subjectId) {
  // Update localStorage
  localStorage.setItem('lastSubject', subjectId);

  // Update active state
  document.querySelectorAll('.subject-nav').forEach(nav => {
    nav.classList.remove('active');
    if (nav.dataset.subject === subjectId) {
      nav.classList.add('active');
    }
  });

  // Get subject data
  const subject = i18n[currentLanguage].subjects.find(s => s.id === subjectId);
  if (!subject) return;

  // Update main content
  const mainContent = document.getElementById('main-content');

  // Update tabs and content
  document.querySelector('[data-tab="topics"]').classList.add('active');
  document.querySelector('[data-tab="experiments"]').classList.remove('active');
  document.querySelector('[data-tab="tests"]').classList.remove('active');

  switchTab('topics');

  // Close hamburger on mobile
  document.getElementById('sidebar').classList.remove('open');
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.tab === tabName) {
      btn.classList.add('active');
    }
  });

  // Update content display
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  const activeContent = document.getElementById(`${tabName}-content`);
  if (activeContent) {
    activeContent.classList.add('active');
  }

  // Get current subject
  const currentSubject = document.querySelector('.subject-nav.active');
  if (!currentSubject) return;
  const subjectId = currentSubject.dataset.subject;
  const subject = i18n[currentLanguage].subjects.find(s => s.id === subjectId);

  if (!subject) return;

  // Render appropriate content
  if (tabName === 'topics') {
    renderTopics(subject.topics);
  } else if (tabName === 'experiments') {
    renderExperiments(subject.experiments);
  } else if (tabName === 'tests') {
    renderTests(subject);
  }
}

function renderTopics(topics) {
  const container = document.getElementById('topics-content');
  if (!container) return;

  container.innerHTML = '';

  topics.forEach(topic => {
    const div = document.createElement('div');
    div.className = 'topic-item';
    div.innerHTML = `
      <h3>${topic.title}</h3>
      <p>${topic.description}</p>
    `;
    container.appendChild(div);
  });
}

function renderExperiments(experiments) {
  const container = document.getElementById('experiments-content');
  if (!container) return;

  container.innerHTML = '';

  const labels = i18n[currentLanguage].labels;

  experiments.forEach(exp => {
    const div = document.createElement('div');
    div.className = 'experiment-item';
    div.innerHTML = `
      <h3>${exp.title}</h3>
      <div class="exp-meta">
        <p><strong>${labels.researcher}:</strong> ${exp.researcher}</p>
        <p><strong>${labels.year}:</strong> ${exp.year}</p>
      </div>
      <div class="exp-description">
        <p>${exp.description}</p>
        <p><strong>${labels.keyFinding}:</strong></p>
        <p>${exp.keyFinding}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderTests(subject) {
  const container = document.getElementById('tests-content');
  if (!container) return;

  container.innerHTML = '';

  const labels = i18n[currentLanguage].labels;

  if (!subject.testId) {
    container.innerHTML = `<p>${createMsg('No tests available for this subject')}</p>`;
    return;
  }

  const test = i18n[currentLanguage].tests.find(t => t.id === subject.testId);
  if (!test) return;

  const div = document.createElement('div');
  div.className = 'test-item';
  div.innerHTML = `
    <h3>${test.name}</h3>
    <p>${test.description}</p>
    <button class="btn-primary" onclick="startTest('${test.id}')">${labels.startTest}</button>
  `;

  container.appendChild(div);

  // Show previous results
  showPreviousResults(test.id);
}

function showPreviousResults(testId) {
  const results = JSON.parse(localStorage.getItem(`test-${testId}-results`) || '[]');

  if (results.length === 0) {
    return;
  }

  const container = document.getElementById('tests-content');
  const labels = i18n[currentLanguage].labels;

  const historyDiv = document.createElement('div');
  historyDiv.className = 'test-history';
  historyDiv.innerHTML = `<h4>${labels.testHistory}</h4>`;

  results.forEach((result, idx) => {
    const date = new Date(result.date).toLocaleDateString(currentLanguage === 'sr' ? 'sr-RS' : 'en-US');
    historyDiv.innerHTML += `
      <div class="history-item">
        <p>${date}: ${result.summary}</p>
      </div>
    `;
  });

  container.appendChild(historyDiv);
}

function startTest(testId) {
  const test = i18n[currentLanguage].tests.find(t => t.id === testId);
  if (!test) return;

  const labels = i18n[currentLanguage].labels;

  // Create test interface
  const container = document.getElementById('tests-content');
  container.innerHTML = `
    <div class="test-interface">
      <div class="test-progress">
        <p>${labels.question} <span id="current-q">1</span> ${labels.of} <span>${test.questions.length}</span></p>
      </div>
      <div id="test-questions"></div>
      <div class="test-buttons">
        <button class="btn-primary" onclick="nextQuestion()" id="next-btn">${labels.submitTest}</button>
      </div>
    </div>
  `;

  // Store current test
  window.currentTest = {
    testId: testId,
    testData: test,
    answers: [],
    currentQuestion: 0
  };

  renderQuestion(0);
}

function renderQuestion(index) {
  const test = window.currentTest.testData;
  const question = test.questions[index];

  if (!question) {
    calculateAndDisplayResult();
    return;
  }

  const container = document.getElementById('test-questions');

  container.innerHTML = `
    <div class="question-card">
      <p>${question.text}</p>
      <div class="question-options">
  `;

  // Render options based on scale
  const scale = test.scale || '1-5';
  const [min, max] = scale.split('-').map(Number);

  for (let i = min; i <= max; i++) {
    container.innerHTML += `
      <label>
        <input type="radio" name="answer" value="${i}" onchange="recordAnswer(${i})">
        <span>${i}</span>
      </label>
    `;
  }

  container.innerHTML += `</div></div>`;

  document.getElementById('current-q').textContent = index + 1;
}

function recordAnswer(value) {
  if (!window.currentTest) return;

  window.currentTest.answers[window.currentTest.currentQuestion] = parseInt(value);
}

function nextQuestion() {
  if (!window.currentTest) return;

  const currentAnswer = window.currentTest.answers[window.currentTest.currentQuestion];

  if (currentAnswer === undefined) {
    alert(i18n[currentLanguage].labels.submitTest);
    return;
  }

  window.currentTest.currentQuestion++;

  if (window.currentTest.currentQuestion < window.currentTest.testData.questions.length) {
    renderQuestion(window.currentTest.currentQuestion);
  } else {
    calculateAndDisplayResult();
  }
}

function calculateAndDisplayResult() {
  if (!window.currentTest) return;

  const test = window.currentTest.testData;
  const answers = window.currentTest.answers;
  const testId = window.currentTest.testId;

  let result = {};

  // Different scoring logic based on test type
  if (testId === 'big-five') {
    result = calculateBigFive(test, answers);
  } else if (testId === 'locus-of-control') {
    result = calculateLocusOfControl(test, answers);
  } else if (testId === 'attachment') {
    result = calculateAttachment(test, answers);
  } else if (testId === 'cognitive-bias') {
    result = calculateCognitiveBias(test, answers);
  } else if (testId === 'empathy') {
    result = calculateEmpathy(test, answers);
  }

  displayTestResult(result, testId, test);
  saveTestResult(testId, result);
}

function calculateBigFive(test, answers) {
  const traits = { openness: 0, conscientiousness: 0, extraversion: 0, agreeableness: 0, neuroticism: 0 };
  const counts = { ...traits };

  test.questions.forEach((q, idx) => {
    if (q.traits) {
      q.traits.forEach(trait => {
        traits[trait] += answers[idx] * q.weight;
        counts[trait]++;
      });
    }
  });

  // Calculate averages
  Object.keys(traits).forEach(key => {
    traits[key] = counts[key] > 0 ? Math.round(traits[key] / counts[key]) : 0;
  });

  return traits;
}

function calculateLocusOfControl(test, answers) {
  let internal = 0;
  let external = 0;

  test.questions.forEach((q, idx) => {
    if (q.internalScore) internal += answers[idx];
    if (q.externalScore) external += answers[idx];
  });

  return { internal, external, locus: internal > external ? 'internal' : 'external' };
}

function calculateAttachment(test, answers) {
  const styles = { secure: 0, anxious: 0, avoidant: 0, fearful: 0 };

  test.questions.forEach((q, idx) => {
    styles[q.style]++;
  });

  let maxStyle = 'secure';
  let maxCount = 0;

  Object.keys(styles).forEach(style => {
    if (styles[style] > maxCount) {
      maxCount = styles[style];
      maxStyle = style;
    }
  });

  return { style: maxStyle, scores: styles };
}

function calculateCognitiveBias(test, answers) {
  const biases = {};

  test.questions.forEach((q, idx) => {
    if (!biases[q.bias]) biases[q.bias] = 0;
    biases[q.bias] += answers[idx];
  });

  return biases;
}

function calculateEmpathy(test, answers) {
  let empathyScore = 0;

  test.questions.forEach((q, idx) => {
    if (q.empathy) {
      empathyScore += answers[idx];
    } else {
      empathyScore += (6 - answers[idx]); // Reverse score
    }
  });

  return { score: empathyScore, maxScore: test.questions.length * 5 };
}

function displayTestResult(result, testId, test) {
  const container = document.getElementById('tests-content');
  const labels = i18n[currentLanguage].labels;
  const interpretation = test.resultInterpretation;

  let resultHtml = `<div class="test-result"><h3>${labels.yourResult}</h3>`;

  if (testId === 'big-five') {
    resultHtml += `
      <div class="result-scores">
        ${Object.keys(result).map(key => `
          <div class="score-item">
            <h4>${key.toUpperCase()}</h4>
            <div class="score-bar">
              <div class="score-fill" style="width: ${(result[key] / 5) * 100}%"></div>
            </div>
            <p>${result[key]}/5</p>
            <p class="interpretation">${interpretation[key]}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (testId === 'empathy') {
    const percentage = Math.round((result.score / result.maxScore) * 100);
    resultHtml += `
      <div class="result-summary">
        <h4>${labels.yourResult}: ${result.score}/${result.maxScore} (${percentage}%)</h4>
        <p>${interpretation}</p>
      </div>
    `;
  } else if (testId === 'attachment') {
    resultHtml += `
      <div class="result-summary">
        <h4>${result.style.toUpperCase()}</h4>
        <p>${interpretation[result.style]}</p>
      </div>
    `;
  } else {
    resultHtml += `<div class="result-summary"><p>${JSON.stringify(result)}</p></div>`;
  }

  resultHtml += `
    <div class="result-buttons">
      <button class="btn-secondary" onclick="location.reload()">${labels.retake}</button>
    </div>
  </div>`;

  container.innerHTML = resultHtml;
}

function saveTestResult(testId, result) {
  const results = JSON.parse(localStorage.getItem(`test-${testId}-results`) || '[]');

  results.push({
    date: new Date().toISOString(),
    result: result,
    summary: JSON.stringify(result).substring(0, 50) + '...'
  });

  // Keep only last 10 results
  if (results.length > 10) {
    results.shift();
  }

  localStorage.setItem(`test-${testId}-results`, JSON.stringify(results));
}

function createMsg(msg) {
  return i18n[currentLanguage].labels[msg] || msg;
}
