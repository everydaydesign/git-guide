# Git-guide för grupparbete

## Innehåll

- [1. Om du aldrig använt Git förut](#1-om-du-aldrig-använt-git-förut)
  - [1.1 Vad är Git?](#11-vad-är-git)
  - [1.2 Varför använder vi Git i kursen?](#12-varför-använder-vi-git-i-kursen)
  - [1.3 Vad förväntas du kunna efteråt?](#13-vad-förväntas-du-kunna-efteråt)
  - [1.4 Vad gör du när?](#14-vad-gör-du-när)
- [2. Kom igång med grupparbete](#2-kom-igång-med-grupparbete)
- [3. Starta ett grupprojekt](#3-starta-ett-grupprojekt)
  - [3.1 En person skapar repot](#31-en-person-skapar-repot)
  - [3.2 Bjud in gruppmedlemmar](#32-bjud-in-gruppmedlemmar)
  - [3.3 Alla öppnar projektet](#33-alla-öppnar-projektet)
  - [3.4 Skapa din branch](#34-skapa-din-branch)
- [4. Grundläggande Git](#4-grundläggande-git)
  - [4.1 Stage vs Commit](#41-stage-vs-commit--vad-är-skillnaden)
  - [4.2 Spara ändringar (commit)](#42-spara-ändringar-commit)
  - [4.3 Arbetsflödet i tre steg](#43-arbetsflödet-i-tre-steg)
  - [4.4 Ångra ändringar](#44-ångra-ändringar)
  - [4.5 Se historik](#45-se-historik)
- [5. Grupparbete med Git](#5-grupparbete-med-git)
  - [5.1 Push och Pull](#51-push-och-pull--synka-med-github)
  - [5.2 Pull Requests](#52-pull-requests-pr--granska-innan-ni-slår-ihop)
  - [5.3 Granska en Pull Request](#53-granska-en-pull-request)
  - [5.4 Begär ändringar – exempel](#54-begär-ändringar--exempel)
  - [5.5 Tips för bra granskning](#55-tips-för-bra-granskning)
  - [5.6 Merge-konflikter](#56-merge-konflikter--när-två-ändrar-samma-fil)
  - [5.7 .gitignore](#57-gitignore--filer-som-inte-ska-delas)
- [6. Problem?](#6-problem)

---

## 1. Om du har aldrig använt Git förut

### 1.1 Vad är Git?

Git sparar "ögonblicksbilder" av din kod så du kan se historik och ångra ändringar. Istället för att ha filer som `projekt_v1.php`, `projekt_v2_final.php`, `projekt_v2_final_FINAL.php` håller Git koll på alla ändringar automatiskt. Du kan när som helst gå tillbaka till en tidigare version.

### 1.2 Varför använder vi Git i kursen?

- **Säkerhetskopiering** – din kod finns både lokalt och på GitHub.
- **Samarbete** – flera personer kan jobba i samma projekt utan att skriva över varandras kod.
- **Historik** – du kan se vem som ändrat vad och när.
- **Branschstandard** – nästan alla utvecklare använder Git dagligen.

### 1.3 Vad förväntas du kunna efteråt?

| Grundläggande | Grupparbete |
|---------------|-------------|
| Förstå vad stage och commit betyder | Skapa och byta mellan branches |
| Spara ändringar med tydliga meddelanden | Synka med GitHub (pull/push) |
| Ångra ändringar | Skapa och granska Pull Requests |
| | Lösa enkla merge-konflikter |

### 1.4 Vad gör du när?
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  GÖR EN GÅNG (projektstart)           │  GÖR VARJE ARBETSPASS               │
│  ──────────────────────────────────   │  ────────────────────────────────   │
│  □ Skapa repo (en person)             │  □ Byt till main + Pull             │
│  □ Bjud in gruppmedlemmar             │  □ Skapa/byt till din branch        │
│  □ Acceptera inbjudan                 │  □ Jobba med din kod                │
│  □ Skapa din första Codespace         │  □ Stage → Commit → Push            │
│                                       │  □ Skapa PR + be någon granska      │
│  KOMMUNIKATION                        │                                     │
│  ──────────────────────────────────   │                                     │
│  □ Bestäm vem som gör vad             │                                     │
│  □ Säg till innan du börjar på en fil │                                     │
│  □ Granska varandras Pull Requests    │                                     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2. Kom igång med grupparbete
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        GIT GRUPPARBETE – ÖVERSIKT                           │
│                                                                             │
│  1. EN person skapar repot och bjuder in de andra som collaborators         │
│  2. Alla gör PULL från main för att hämta senaste versionen                 │
│  3. Varje person skapar en egen BRANCH för sin uppgift                      │
│  4. När du är klar: PUSH + skapa PULL REQUEST                               │
│  5. En gruppmedlem GRANSKAR din kod                                         │
│  6. Efter godkännande: MERGE till main                                      │
│                                                                             │
│  Gyllene regeln: Jobba aldrig direkt i main – skapa alltid en branch!       │
└─────────────────────────────────────────────────────────────────────────────┘

                            ┌──────────────────┐
                        1.  │   Lisas GitHub   │
                            │   main branch    │◄────────────────────────────┐
                            │ (gruppens repo)  │                             │
                            └────────┬─────────┘                             │
                                     │                                       │
        ┌────────────────────────────┼────────────────────────────┐          │
        │ 2. pull                    │ 2. pull                    │ 2. pull  │
        ▼                            ▼                            ▼          │
  ┌────────────────┐          ┌────────────────┐          ┌────────────────┐ │
  │      Lisa      │          │      Erik      │          │      Anna      │ │
  │    Codespace   │          │    Codespace   │          │    Codespace   │ │
  │    (ägare)     │          │ (collaborator) │          │ (collaborator) │ │
  └───────┬────────┘          └───────┬────────┘          └───────┬────────┘ │
          │                           │                           │          │
          ▼                           ▼                           ▼          │
      3. branch:                  3. branch:                  3. branch:     │
         contact                     products                    login       │
          │                           │                           │          │
          └───────────────────────────┼───────────────────────────┘          │
                                      │                                      │
                                      │ 4. push + PR                         │
                                      ▼                                      │
                            ┌──────────────────┐                             │
                        5.  │   Pull Request   │                             │
                            │   + Granskning   │                             │
                            └────────┬─────────┘                             │
                                     │                                       │
                                     │ 6. Merge                              │
                                     └───────────────────────────────────────┘
```

## 3. Starta ett grupprojekt

### 3.1 En person skapar repot

En person i gruppen skapar projektet:

1. Gå till [mallrepot](https://github.com/everydaydesign/web-app) (Hoppa över detta steg om du inte arbetar med PHP/MySQL, skapa istället ett nytt repository)
2. Klicka på **"Use this template"** → **"Create a new repository"**
3. Välj ett namn, t.ex. `grupp1-designprojekt`
4. Välj **Private** (om ni inte vill att andra ska se)
5. Klicka på **Create repository**

### 3.2 Bjud in gruppmedlemmar

Samma person bjuder in resten av gruppen:

1. Gå till repot på GitHub
2. Klicka på **Settings** → **Collaborators** (i sidomenyn)
3. Klicka på **Add people**
4. Sök på gruppmedlemmens GitHub-användarnamn eller e-post
5. Klicka **Add to repository**
6. Upprepa för alla i gruppen

Gruppmedlemmarna får ett mejl och måste acceptera inbjudan!

### 3.3 Alla öppnar projektet

När alla har accepterat inbjudan:

1. Gå till repot på **github.com**
2. Klicka på **"<> Code"** → **"Codespaces"**
3. Klicka på **"Create codespace on main"**
4. Vänta medan miljön byggs (ca 1-2 minuter)

**Viktigt:** Varje person har sin egen Codespace – ni jobbar inte i samma fönster, utan synkar via Git!

**Nästa gång du ska jobba:**
1. Gå till [github.com/codespaces](https://github.com/codespaces)
2. Klicka på din befintliga Codespace (skapa inte en ny varje gång!)

### 3.4 Skapa din branch

Innan du börjar koda behöver du skapa en egen branch. En branch är en "kopia" av projektet där du kan jobba utan att påverka andras kod. Jobba aldrig direkt i `main`!

1. Titta längst ner till vänster i Codespace – där står det **main** (i statusfältet)
2. Klicka på **main**
3. En meny dyker upp högst upp – välj **Create new branch...**
4. Skriv ett namn som beskriver din uppgift, t.ex. `contact` eller `products`
5. Tryck **Enter** – du är nu på din nya branch (kolla att namnet ändrats längst ner)

Du är nu automatiskt på din nya branch och kan börja jobba. Alla commits du gör hamnar på din branch, inte i main.

**Bra branch-namn:**
```
contact
products
database-connection
startpage
```

**Varje nytt arbetspass** (när branchen redan finns):
1. Klicka på branch-namnet längst ner till vänster
2. Välj din branch från listan

**Branch-arbetsflöde:**
```
main         ●───────●───────────────────────●───────●
                     │                       ▲
                     │ 1. Skapa branch       │ 4. Merge (via PR)
                     ▼                       │
contact              ●─────●─────●───────────┘
                           │     │
                     2. commit  3. commit
```

> **Viktigt: Alla jobbar i samma repo!**
>
> Gruppmedlemmarna ska **inte** skapa egna repos. Alla öppnar Codespaces på **gruppledararens repo** – det som skapades med "Use this template". Det är där `.devcontainer/` finns, som installerar PHP, MySQL och allt ni behöver. Om du skapar ett eget tomt repo får du ingen utvecklingsmiljö.
>
> - Gruppledaren skapar repot med **"Use this template"**
> - Gruppledaren bjuder in alla som **collaborators**
> - Alla öppnar Codespaces på **samma repo**
> - Alla skapar egna **branches** i sin Codespace

---

## 4. Grundläggande Git

### 4.1 Stage vs Commit – vad är skillnaden?

Tänk dig att du packar en väska för en resa:

| Steg | Git-term | Beskrivning |
|------|----------|-------------|
| 1. Välja kläder | **Stage** | Du väljer vilka filer som ska ingå i nästa sparning |
| 2. Stänga väskan | **Commit** | Du sparar en "ögonblicksbild" med ett meddelande |

**Varför finns stage?** Du kanske har ändrat 5 filer men vill bara spara 2 av dem nu. Med stage väljer du exakt vilka ändringar som hör ihop logiskt – t.ex. "alla ändringar för inloggningssidan" i en commit och "buggfix i kontaktformuläret" i en annan.

### 4.2 Spara ändringar (commit)

1. Klicka på **Source Control**-ikonen i sidofältet (eller `Ctrl+Shift+G`)
2. Du ser ändrade filer under **Changes**
3. Klicka på **+** (plus-tecknet) för stage av filer (välj vilka som ska ingå)
4. Filerna flyttas till **Staged Changes**
5. Skriv ett commit-meddelande – eller klicka på **✨** (AI-ikonen) för att generera ett automatiskt
6. Klicka på **✓ Commit**

**Tips:** Commit ofta med tydliga meddelanden – det gör det lättare att hitta tillbaka!

### 4.3 Arbetsflödet i tre steg
```
    1. STAGE              2. COMMIT                  3. PUSH
  (välj filer)          (spara lokalt)          (dela med gruppen)
       │                      │                         │
       ▼                      ▼                         ▼
┌─────────────┐        ┌───────────────┐         ┌─────────────┐
│  Klicka +   │───────►│ Skriv medde-  │────────►│ Klicka Sync │
│  på filer   │        │ lande (eller  │         │ eller Push  │
│             │        │ ✨ för AI)    │         │             │
└─────────────┘        │ sedan ✓       │         └─────────────┘
                       └───────────────┘
```

**Kom ihåg:** Stage → Commit → Push. Alltid i den ordningen.

### 4.4 Ångra ändringar

| Situation | Lösning |
|-----------|---------|
| **Ångra ändringar i en fil (ej commit)** | Högerklicka på filen → **Discard Changes** |
| **Ta bort fil från staged** | Klicka på **−** bredvid filen under Staged Changes |
| **Ångra senaste commit** | **⋯** → **Commit** → **Undo Last Commit** |
| **Återställ till tidigare version** | Högerklicka på filen → **Open Timeline** → Välj version |

### 4.5 Se historik

1. Högerklicka på en fil i filträdet
2. Välj **Open Timeline**
3. Klicka på en tidigare version för att se skillnaden

---

## 5. Grupparbete med Git

När flera personer arbetar i samma projekt behöver ni synkronisera era ändringar via GitHub.

### 5.1 Push och Pull – synka med GitHub

| Kommando | Vad det gör | När |
|----------|-------------|-----|
| **Pull** | Hämtar andras ändringar från GitHub till dig | Alltid innan du börjar jobba |
| **Push** | Skickar dina commits till GitHub | När du är klar med en ändring |

**Så här gör du:**

1. **Innan du börjar jobba** – klicka på **⋯** → **Pull** (eller `Ctrl+Shift+P` → "Git: Pull")
2. **När du är klar** – commit först, sedan **⋯** → **Push**

**Gyllene regeln:** Pull innan du börjar, push när du är klar!

```
┌──────────────────────────────────────────┐
│              GitHub (Remote)             │
│         main branch på servern           │
└──────────────────────────────────────────┘
        │                    ▲
        │ 1. PULL            │ 2. PUSH
        │ (hämta)            │ (skicka)
        ▼                    │
┌──────────────────────────────────────────┐
│           Din lokala Codespace           │
│          din kopia av projektet          │
└──────────────────────────────────────────┘
```

---

### 5.2 Pull Requests (PR) – granska innan ni slår ihop

En Pull Request (PR) låter gruppen granska din kod innan den läggs in i main.

**Skapa en Pull Request:**

1. Pusha din branch till GitHub
2. Gå till repot på **github.com** → **Code**-fliken
3. Om du ser en gul banner **"Compare & pull request"** – klicka på den
4. **Om ingen banner syns:**
   - Klicka på **Pull requests**-fliken
   - Klicka på **New pull request** (grön knapp)
   - Välj din branch i **compare**-dropdown
5. Skriv en kort beskrivning av vad du gjort
6. Klicka på **Create pull request**
7. Be en gruppmedlem granska och klicka **Merge pull request**

**Tips:** Skriv vad ni ska titta på, t.ex. "Kolla att formuläret validerar korrekt"

**Efter din PR är mergad:**
1. Byt tillbaka till `main` (klicka på branch-namnet längst ner)
2. Pull för att hämta dina mergade ändringar
3. Ta bort din gamla branch (valfritt): **⋯** → **Branch** → **Delete Branch**

---

### 5.3 Granska en Pull Request

Vem som helst i gruppen kan granska – det behöver inte vara samma person varje gång. Den enda regeln är att du inte granskar din egen kod.

**Så här granskar du:**

1. Gå till repot på **github.com**
2. Klicka på **Pull requests**-fliken
3. Klicka på den PR du ska granska
4. Klicka på **Files changed** för att se ändringarna

**Tre alternativ när du granskat:**

| Val | När | Vad händer |
|-----|-----|------------|
| **Approve** | Allt ser bra ut | PR kan mergas |
| **Request changes** | Något behöver fixas | Författaren måste ändra |
| **Comment** | Frågor eller förslag | Ingen blockering |

---

### 5.4 Begär ändringar – exempel

**Scenario:** Lisa har skapat en PR med en fil som heter `q.php`. Erik tycker namnet är otydligt.

**Erik gör så här:**

1. I **Files changed**, hovra över raden med filnamnet
2. Klicka på **+** som dyker upp
3. Skriv en kommentar:
```
Kan du döpa om filen till något mer beskrivande?
T.ex. `search-query.php` eller `product-query.php`
så förstår man vad den gör.
```

4. Klicka på **Start a review**
5. När du skrivit alla kommentarer, klicka på **Finish your review**
6. Välj **Request changes** och klicka **Submit review**

**Lisa ser nu:**
- PR kan inte mergas
- Eriks kommentar på filen

**Lisa fixar det:**

1. Byter namn på filen lokalt i VS Code
2. Commit: "Döpte om q.php till product-query.php"
3. Pushar till samma branch

**Erik får notis och:**

1. Kollar att ändringen är gjord
2. Klickar **Files changed** → **Review changes**
3. Väljer **Approve**
4. Nu kan Lisa (eller Erik) klicka **Merge pull request**

---

### 5.5 Tips för bra granskning

**Som granskare:**
- Var tydlig med vad som behöver ändras
- Förklara varför, inte bara vad
- Ge förslag på lösning
- Var snäll – ni lär er tillsammans!

**Exempel på bra kommentarer:**
```
❌ "Dåligt namn"
✅ "Kan du döpa om till något mer beskrivande? Förslag: user-login.php"

❌ "Funkar inte"
✅ "Den här raden kraschar om $id är tom. Lägg till en if-sats som kollar först?"

❌ "Fel"
✅ "Här ska det vara == istället för = (jämförelse, inte tilldelning)"
```

**Som författare:**
- Ta inte kritik personligt – det handlar om koden
- Fråga om du inte förstår kommentaren
- Tacka för feedbacken!

**Pull Request-processen**

```
DU (författare)                              GRANSKARE
───────────────                              ─────────
┌─────────────────┐
│  1. Jobba i din │
│      branch     │
└────────┬────────┘
         ▼
┌─────────────────┐
│  2. Push till   │
│      GitHub     │
└────────┬────────┘
         ▼
┌─────────────────┐                      ┌─────────────────┐
│  3. Skapa Pull  │─────────────────────►│ 4. Granska kod  │
│     Request     │                      └────────┬────────┘
└─────────────────┘                               │
                                                  ▼
                                  ┌─────────────────────────────────┐
                                  │            5. BESLUT            │
                                  ├───────────┬───────────┬─────────┤
                                  │  Approve  │  Comment  │ Request │
                                  │ → Merge!  │→ Diskutera│ changes │
                                  │           │           │ → Fixa  │
                                  └───────────┴───────────┴─────────┘
```

---

### 5.6 Merge-konflikter – när två ändrar samma fil

En konflikt uppstår när två personer ändrat samma rad. Git vet inte vilken version som ska gälla.

**Så ser en konflikt ut:**

Lisa och Erik har båda ändrat navbaren i `header.php`:
```php
<<<<<<< HEAD
// Eriks version
<nav>
    <a href="index.php">Hem</a>
    <a href="products.php">Produkter</a>
</nav>
=======
// Lisas version
<nav>
    <a href="index.php">Startsida</a>
    <a href="contact.php">Kontakt</a>
</nav>
>>>>>>> login-page
```

**Lösning:** Prata med varandra och kombinera:
```php
<nav>
    <a href="index.php">Hem</a>
    <a href="products.php">Produkter</a>
    <a href="contact.php">Kontakt</a>
</nav>
```

**Så löser du den:**

1. VS Code markerar konflikten med färger
2. Klicka på ett alternativ:
   - **Accept Current** – behåll din version
   - **Accept Incoming** – använd den andras version
   - **Accept Both** – behåll båda
3. Eller redigera manuellt till rätt version
4. Ta bort `<<<<<<<`, `=======` och `>>>>>>>` om de finns kvar
5. Spara filen
6. Stage och commit

**Undvik konflikter:** Prata med gruppen om vem som jobbar med vilken fil!

---

### 5.7 .gitignore – filer som inte ska delas

Vissa filer ska inte laddas upp till GitHub. Skapa en fil som heter `.gitignore` i rotmappen (om den inte redan finns):
```
# Systemfiler
.DS_Store
Thumbs.db

# Editor-inställningar
.vscode/
*.swp

# Känslig information
config.local.php
.env

# Tillfälliga filer
*.log
*.tmp
```

Lägg aldrig lösenord eller API-nycklar i Git!

---

## 6. Problem?

| Problem | Lösning |
|---------|---------|
| Merge-konflikt | Se avsnittet "Merge-konflikter" ovan |
| Kan inte pusha | Pull först, lösa eventuella konflikter, sedan push |
| Commit till main av misstag | **⋯** → **Commit** → **Undo Last Commit**, skapa branch, commit igen |
| Ser inte andras ändringar | Pull från main |
| Fel branch | Klicka på branch-namnet längst ner och byt |
