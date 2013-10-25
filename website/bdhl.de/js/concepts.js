var families = [
        "Andean",
        "Germanic",
        "French",
        "Ob-Ugrian",
        "Bai",
        "Bulgarian",
        "Dutch",
        "Norwegian",
        "Romance",
        "Sinitic",
        "Slavic",
        "Japanese"
];
   
var sequences = [
    "beef",
    "gut",
    "self",
    "shall",
    "sick",
    "tall",
    "to drop",
    "will not",
    "worm ",
    "Friday",
    "I",
    "Monday",
    "Saturday",
    "Sunday",
    "Wednesday",
    "alive",
    "all",
    "already",
    "ant",
    "apple",
    "apples",
    "arm",
    "ash",
    "ashes",
    "bake",
    "bamboo",
    "bark",
    "barley",
    "bath",
    "beast",
    "bed",
    "bee",
    "behind",
    "belly",
    "better",
    "big",
    "bird",
    "bite",
    "bitter",
    "black",
    "blood",
    "bone",
    "bottom",
    "bovine animal",
    "bread",
    "breast ",
    "bridge ",
    "brother",
    "buckwheat",
    "calf",
    "carry",
    "chain dance",
    "cheese",
    "cherry",
    "chicken",
    "child",
    "chopsticks",
    "classifier chicken",
    "classifier clothes",
    "classifier grain of rice",
    "claw",
    "cloth",
    "cloud",
    "cold",
    "comb",
    "corn",
    "cow",
    "dark",
    "daughter",
    "day",
    "deep",
    "does not want",
    "dog",
    "door",
    "down",
    "dragon ",
    "drink",
    "dry",
    "ear",
    "early",
    "earring",
    "earth",
    "earthworm",
    "easy",
    "eat",
    "egg",
    "eggs",
    "eight",
    "enter",
    "evening",
    "eye",
    "eyebrow",
    "far",
    "fast",
    "fat",
    "father",
    "fear",
    "finger ",
    "finger",
    "fingernail",
    "fire",
    "firewood",
    "first",
    "fish",
    "five",
    "flay",
    "flour",
    "fly",
    "foot",
    "fountain",
    "four",
    "fragrant",
    "frog",
    "frost",
    "full",
    "gave",
    "ghost",
    "give back",
    "give",
    "glutinous rice ",
    "goat",
    "good",
    "goose",
    "grapes",
    "grass",
    "grease fat",
    "green",
    "guests",
    "hair",
    "hand",
    "hands",
    "harvest",
    "has come",
    "he-goat",
    "he/she ",
    "head",
    "healthy",
    "hear",
    "heart",
    "heavy",
    "hemp",
    "her",
    "here",
    "high",
    "hoe",
    "holy",
    "home",
    "honey",
    "horn",
    "horse",
    "hot",
    "hound",
    "house",
    "hundred",
    "hunger",
    "hungry",
    "ice",
    "ill",
    "in",
    "inside",
    "interest",
    "intestine",
    "iron",
    "is",
    "key",
    "kill",
    "knee",
    "know",
    "lake",
    "lamb",
    "leaf",
    "lentils",
    "liver",
    "long",
    "louse",
    "man",
    "meat",
    "men",
    "mid",
    "milk",
    "month",
    "moon",
    "mother",
    "mouse",
    "mouth",
    "much;many",
    "nail",
    "naked",
    "name",
    "neck",
    "needle",
    "new",
    "night",
    "nine",
    "north",
    "nose",
    "not",
    "now",
    "oak",
    "old man",
    "one",
    "one's",
    "open",
    "ours",
    "out",
    "outside",
    "oven",
    "over",
    "ox",
    "pay",
    "peak",
    "person ",
    "person",
    "pick up",
    "picking",
    "pocket",
    "pretty",
    "quick",
    "quickly",
    "rain",
    "read",
    "red",
    "right",
    "ring",
    "river",
    "road",
    "rooster",
    "root",
    "salt",
    "sand",
    "saw",
    "say",
    "sea",
    "seven",
    "sharp",
    "sheep",
    "shepherd",
    "shepherds",
    "sickle",
    "sister",
    "sit",
    "six",
    "skin",
    "sky",
    "sleep",
    "small",
    "smoke",
    "snow",
    "something",
    "son",
    "sore",
    "stand",
    "star",
    "stone",
    "stool",
    "storm",
    "such",
    "sun",
    "swim",
    "tail",
    "tear",
    "ten",
    "that",
    "the man",
    "the middle",
    "the milk",
    "the town",
    "them",
    "then",
    "there is no",
    "they",
    "thin",
    "thing",
    "this",
    "thorn",
    "those",
    "three",
    "thunder",
    "time",
    "to ask",
    "to bark",
    "to bite",
    "to blow",
    "to boil",
    "to buy",
    "to catch a cold",
    "to chirp",
    "to close",
    "to comb",
    "to cry",
    "to cut up",
    "to cut",
    "to die",
    "to drink",
    "to eat",
    "to fall down",
    "to fight",
    "to grind",
    "to hear",
    "to hide",
    "to itch",
    "to see",
    "to sit",
    "to swear",
    "to wash",
    "today",
    "toe",
    "tomato",
    "tomorrow",
    "tongue",
    "tooth",
    "top",
    "tree",
    "two",
    "up",
    "wait",
    "walk",
    "walnut",
    "warm",
    "was",
    "water",
    "we",
    "well",
    "were",
    "what",
    "where",
    "which",
    "white",
    "who",
    "whole",
    "will",
    "wind",
    "wine",
    "with",
    "wolf",
    "woman",
    "wool",
    "word",
    "world",
    "yard",
    "year",
    "yellow",
    "yesterday",
    "you",
    "young",
    "yours"
];

var taxa = [
    "Abbekerk (NH)",
    "Aduard (Gn)",
    "Aldomirovci (slivnica)",
    "Almkerk (NB)",
    "Amami",
    "Ameide (ZH)",
    "American English",
    "Apolobamba",
    "Arconciel",
    "Arnex",
    "Asparuhovo (lom)",
    "Asparuhovo (prov)",
    "Asserøy",
    "Australian English (Perth)",
    "Avry-sur-Matran",
    "Ayent",
    "Babjak (razl)",
    "Bachkovo (asgr)",
    "Bagrenci (kjust)",
    "Balgari (carev)",
    "Banishte (brezn)",
    "Bansko (razl)",
    "Beglezh (luk)",
    "Beijing",
    "Belene (svisht)",
    "Belgian Dutch",
    "Belica (razl)",
    "Bilzen (BeLb)",
    "Bistrica (blgr)",
    "Bjørnevatn",
    "Bogdanov dol (pern)",
    "Bollezeele (FrVl)",
    "Borisovo (elh)",
    "Borre",
    "Boudry",
    "Bov (svog)",
    "Brashljan (mtarn)",
    "Brekke",
    "Brielle (ZH)",
    "Brouckerque (FrVl)",
    "Brouwershaven (Ze)",
    "Bryne",
    "Brønnøysund",
    "Buchin prohod (god)",
    "Bulgarian",
    "Buren (Fr)",
    "Buurmalsen (Gl)",
    "Bygstad",
    "Bø",
    "Cajamarca",
    "Callantsoog (NH)",
    "Canadian English",
    "Caparevo (sand)",
    "Caraz",
    "Central German (Cologne)",
    "Central German (Honigberg)",
    "Central German (Luxembourg)",
    "Central German (Murrhardt)",
    "Cerlatez",
    "Cerneux-Péquignot",
    "Cerovica (kjust)",
    "Champéry",
    "Changsha",
    "Charnex",
    "Chaux-du-Milieu",
    "Chavín",
    "Chengdu",
    "Chepelare (asgr)",
    "Chernogorovo (paz)",
    "Chernomorec (bs)",
    "Chevroux",
    "Chimborazo",
    "Chukovec (radom)",
    "Château-d'Oex",
    "Cochabamba",
    "Collex",
    "Collombey",
    "Commugny",
    "Conthey",
    "Corcelles",
    "Corongo",
    "Court",
    "Courtedoux",
    "Courtepin",
    "Cuzco",
    "Czech",
    "Côte-aux-Fées",
    "Danish",
    "Dashi",
    "Den Hoorn (NH)",
    "Dermanci (luk)",
    "Develier",
    "Devenci (luk)",
    "Devesilica (krgr)",
    "Dichin (vtarn)",
    "Dinevo (hask)",
    "Diva slatina (mont)",
    "Divdjadovo (shum)",
    "Dobarsko (razl)",
    "Dobroselec (topgr)",
    "Dobroslavci (sof)",
    "Dobrotino (gd)",
    "Dokka",
    "Dolna beshovica (vrach)",
    "Dolna dikanja (radom)",
    "Dolna melna (tran)",
    "Dolna riksa (mont)",
    "Dolna srudena (bel)",
    "Dolni bogrov (sof)",
    "Dolno levski (pan)",
    "Dompierre",
    "Dorkovo (velgr)",
    "Dovre",
    "Drabishna (ivgr)",
    "Dragizhevo (vtarn)",
    "Dragodanovo (sliv)",
    "Dragoevo (presl)",
    "Dragojchinci (kjust)",
    "Dutch (Antwerp)",
    "Dutch (Limburg)",
    "Dutch (Ostend)",
    "Dutch",
    "Ega",
    "Eggesbøneset",
    "Elnesvågen",
    "Elov dol (pk)",
    "English (Buckie)",
    "English (Lindisfarne)",
    "English (Liverpool",
    "English (London",
    "English (North Carolina)",
    "English (Singapore)",
    "English (Tyrone)",
    "English",
    "Enina (kaz)",
    "Enqi",
    "Eryuan",
    "Ezerovo (parvom)",
    "Fagerhaug",
    "Faroese",
    "Flåte",
    "Foldvik, Brunlanes",
    "French",
    "Fully",
    "Furen (vrach)",
    "Fuzhou",
    "Fyllingsdalen",
    "Fyresdal",
    "Gabare (bslat)",
    "Gabra (elpel)",
    "Galata (tetev)",
    "Ganchovec (drjan)",
    "Garmen (gd)",
    "Garvan (sil)",
    "Gega (petr)",
    "German",
    "Gjøra",
    "Glozhene (orjah)",
    "Golema rakovica (elpel)",
    "Golemo malovo (sliven)",
    "Golica (varn)",
    "Goljama zheljazna (tetev)",
    "Goljamo shivachevo (sliv)",
    "Gongxing",
    "Gorna rosica (sevl)",
    "Gorni varpishta (drjan)",
    "Gouderak (ZH)",
    "Govedarci (sam)",
    "Gradec (vd)",
    "Grimentz",
    "Grône",
    "Guangzhou",
    "Guiyang",
    "Haamstede (Ze)",
    "Hachijō",
    "Haerbin",
    "Hafrsfjord",
    "Haikou",
    "Halden",
    "Hangzhou",
    "Hefei",
    "Heqing",
    "Hermance",
    "High German (Biel)",
    "High German (Bodensee)",
    "High German (Graubuenden)",
    "High German (Herrlisheim)",
    "High German (North Alsace)",
    "High German (Ortisei)",
    "High German (Tuebingen)",
    "High German (Walser)",
    "Hisøy",
    "Holwerd (Fr)",
    "Huancané",
    "Huancavelica",
    "Huancayo",
    "Huhehaote",
    "Huhla (ivgr)",
    "Humbeek (BeBr)",
    "Hundvåg",
    "Hvojna (asgr)",
    "Icelandic",
    "Indian English (Delhi)",
    "Indzhe vojvoda (mtarn)",
    "Ingen (Gl)",
    "Inkawasi",
    "Italian",
    "Ivanski (shum)",
    "Izvorovo (harm)",
    "Jaqaru",
    "Javorovo (asgr)",
    "Jian'ou",
    "Jianchuan",
    "Jianxing",
    "Jinan",
    "Jinman",
    "Jugan Khanti",
    "Kagoshima",
    "Kaldfarnes",
    "Kalipetrovo (sil)",
    "Kalojanovo (plov)",
    "Kantens (Gn)",
    "Karaisen (pavl)",
    "Karanovo (ajt)",
    "Kaspichan (np)",
    "Kawki",
    "Kazim Khanti",
    "Kerkrade (Lb)",
    "Knokke (BeWv)",
    "Koedijk (NH)",
    "Koekelare (BeWv)",
    "Kolju marinovo (chirp)",
    "Konda Khanti",
    "Konda Mansi",
    "Konska (brezn)",
    "Kopilovci (mont)",
    "Koprivshtica (pird)",
    "Korten (nzag)",
    "Kortrijk (BeWv)",
    "Kostenec (iht)",
    "Kovachevci (sam)",
    "Kozichino (pom)",
    "Kramolin (sevl)",
    "Kravenik (sevl)",
    "Kreta (vrach)",
    "Kristiansand",
    "Krivnja (razgr)",
    "Krogtoft, Borge",
    "Kunming",
    "Kyoto",
    "Kōchi",
    "L'Auberson",
    "Laconnex",
    "Ladino",
    "Lamboing",
    "Landeron",
    "Lanping",
    "Lanzhou",
    "Le Sentier",
    "Leermens (Gn)",
    "Levunovo (sand)",
    "Lies (Fr)",
    "Ligurian",
    "Likrisovskoje Khanti",
    "Liljache (vr)",
    "Lillehammer",
    "Lipnica (botgr)",
    "Ljubenova mahala (nzag)",
    "Lobosh (rad)",
    "Lombard (East)",
    "Lombard (West)",
    "Lomnes",
    "Longirod",
    "Lourtier",
    "Low German (Achterhoek)",
    "Low German (Bargstedt)",
    "Lower Lozva Mansi",
    "Lozen (sof)",
    "Luobenzhuo",
    "Malomirovo (elh)",
    "Malyj Jugan Khanti",
    "Mandal",
    "Marchaevo (sof)",
    "Marikostinovo (petr)",
    "Markovo (shum)",
    "Martigny",
    "Mazhelong",
    "Meerbeek (BeBr)",
    "Meixian",
    "Merdanja (vtarn)",
    "Merichleri (chirp)",
    "Middle Lozva Mansi",
    "Midsland (Fr)",
    "Mihalci (pavl)",
    "Milchina laka (kul)",
    "Miyako",
    "Miège",
    "Molde",
    "Momchilovci (smol)",
    "Momina banja (pl)",
    "Momina klisura (pz)",
    "Momkovo (svgr)",
    "Montalchez",
    "Montbovon",
    "Montpreveyres",
    "Moorslede (BeWv)",
    "Mouscron (Be)",
    "Mugla (dev)",
    "Murist",
    "Mussel (Gn)",
    "Mørkved",
    "Naas, Eide",
    "Nanchang",
    "Nanjing",
    "Nanning",
    "Nazareth (BeOv)",
    "Nendaz",
    "New Zealand English (Auckland)",
    "Nieurlet (FrVl)",
    "Nigerian English (Igbo)",
    "Nijeholtpade (Fr)",
    "Nijmegen (Gl)",
    "Nikolovo (hask)",
    "Nikolovo(lipnik) (rus)",
    "Nizjam Khanti",
    "Noevci (brezn)",
    "Noiraigue",
    "Nordstrand",
    "North Mansi",
    "Norwegian (Stavanger)",
    "Nova lovcha (gd)",
    "Nova nadezhda (hs)",
    "Novo selo (trojan)",
    "Obdorsk Khanti",
    "Occitan",
    "Ognen (karn)",
    "Oki",
    "Omarchevo (nzag)",
    "Ooike (BeOv)",
    "Oostende (BeWv)",
    "Oosterend (Fr)",
    "Opan (stzag)",
    "Orkanger",
    "Ormont-Dessus",
    "Orsières",
    "Oruro",
    "Orvin",
    "Osenec (razgr)",
    "Oudeschoot (Fr)",
    "Panagjurishte (gd)",
    "Paskalevec (pavl)",
    "Pavelsko (asgr)",
    "Pelatikovo (kjust)",
    "Pelimka Mansi",
    "Petarnica (plev)",
    "Pevec (targ)",
    "Piershil (ZH)",
    "Pingyao",
    "Plagne",
    "Plakovo (vt)",
    "Podvis (karn)",
    "Polish",
    "Poperinge (BeWv)",
    "Pozharevo (tutr)",
    "Prahins",
    "Proto-Germanic",
    "Proto-Slavic",
    "Puno",
    "Qiliqiao",
    "Qingdao",
    "Rabisha (belgr)",
    "Radovene (vr)",
    "Rakevo (vr)",
    "Rakovica (kul)",
    "Rani lug (tryn)",
    "Raundalen, Fagnastøl",
    "Razboishte (god)",
    "Renkum (Gl)",
    "Roche",
    "Russian",
    "Russland",
    "Ruzhinci (belgr)",
    "Sadina (pop)",
    "Sado",
    "Sandnessjøen",
    "Saparevo (dup)",
    "Savagnier",
    "Savièse",
    "Schagen (NH)",
    "Scheveningen (ZH)",
    "Schinnen (Lb)",
    "Scottish",
    "Sekirovo (plov)",
    "Selfors",
    "Semsalves",
    "Senokos (blgr)",
    "Sestrino (petr)",
    "Shanghai",
    "Shantou",
    "Sherkali Khanti",
    "Shexian",
    "Shipka (kaz)",
    "Shiroka laka (dev)",
    "Shiroki dol (sam)",
    "Shtipsko (prov)",
    "Shuri",
    "Silvolde (Gl)",
    "Sinja Khanti",
    "Sint-Annen (Gn)",
    "Skobelevo (sliv)",
    "Slaveino (smol)",
    "Slavjanovo (plev)",
    "Sloten (Fr)",
    "Smilde (Dr)",
    "Smochevo (dupn)",
    "Smolsko (pird)",
    "Solishta (dev)",
    "Sombeval",
    "Sortland",
    "South African English (Johannisburg)",
    "Sredec (zlgr)",
    "St-Gingolph",
    "Stakevci (blgr)",
    "Stambolovo (hask)",
    "Stange",
    "Stanghelle",
    "Starmen (bel)",
    "Stjørdal",
    "Stjørdalshalsen",
    "Stoilovo (mt)",
    "Straldzha (jamb)",
    "Stroevo (plov)",
    "Støa",
    "Sucre",
    "Sugiez",
    "Suhindol (vtarn)",
    "Sushica (blgr)",
    "Suzhou",
    "Svetlina (topgr)",
    "Svirkovo (harm)",
    "Swedish (Skane)",
    "Swedish (Stockholm)",
    "Sætre",
    "Sørkjosen",
    "Taibei",
    "Taiyuan",
    "Taoyuan",
    "Taquile",
    "Tavda Mansi",
    "Tena",
    "Ter Apel (Gn)",
    "Tianjin",
    "Tihomir (krgr)",
    "Tihomirovo (stzag)",
    "Tiwanaku",
    "Tjøtta",
    "Tokyo",
    "Topolchane (sliv)",
    "Trancovica (nik)",
    "Trastenik (plev)",
    "Tremjugan Khanti",
    "Tromsø",
    "Trondheim",
    "Tunxi",
    "Tuoluo",
    "Tynset sentrum",
    "Ulft (Gl)",
    "Undheim",
    "Upper Demjanka Khanti",
    "Ustovo (sm)",
    "Vabel (nik)",
    "Vakh Khanti",
    "Vaklinovo (gd)",
    "Valche pole (svgr)",
    "Vallorbe",
    "Valthermond (Dr)",
    "Varbica (presl)",
    "Varbovo (blgr)",
    "Vardun (targ)",
    "Varsseveld (Gl)",
    "Vartovskoje Khanti",
    "Varvara (paz)",
    "Vasiljovo (tetev)",
    "VasjuganKhanti",
    "Vaugondry",
    "Velkovci (pk)",
    "Venetian",
    "Verkhne Kalimsk Khanti",
    "Vermes",
    "Vernier",
    "Veyrier",
    "Villars-le-Terroir",
    "Vinarovo (vid)",
    "Vinishte (mont)",
    "Vladinja (lov)",
    "Voden (elh)",
    "Vojnjagovo (karl)",
    "Vrachesh (botgr)",
    "Vranilovci (gabr)",
    "Vresovo (ajt)",
    "Vullierens",
    "Walshoutem (BeBr)",
    "Waregem (BeWv)",
    "Wateringen (ZH)",
    "Wenzhou",
    "West Frisian (Grou)",
    "West-Terschelling (Fr)",
    "Wierum (Fr)",
    "Workum (Fr)",
    "Wuhan",
    "Wulumuqi",
    "Xi'an",
    "Xiamen",
    "Xianggang",
    "Xiangtan",
    "Xiangyun",
    "Xining",
    "Yiddish (New York)",
    "Yinchuan",
    "Yunlong",
    "Zabardo (asgr)",
    "Zabernovo (mt)",
    "Zamfirovo (berk)",
    "Zanozhene (berk)",
    "Zdravkovec (gabr)",
    "Zelenigrad (tran)",
    "Zevenaar (Gl)",
    "Zhaltusha (ard)",
    "Zheglica (vid)",
    "Zhelen (svog)",
    "Zheljazkovo (sred)",
    "Zhengzhou",
    "Zheravna (kot)",
    "Zhoucheng",
    "Zutendaal (BeLb)",
    "Zuydcoote (FrVl)",
    "Évolène",
    "Øra"
];

$(function() {
    	    $( "#family" ).autocomplete({
    	        source: families
    	    });
    	});
$(function() {
    	    $( "#sequence" ).autocomplete({
    	        source: sequences
    	    });
    	});

$(function() {
    	    $( "#taxa" ).autocomplete({
    	        source: taxa
    	    });
    	});

