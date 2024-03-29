// States
var country_arr = new Array("Federal Capital Territory", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara");

// Local Government
var s_a = new Array();
s_a[0] = "";
//FCT
s_a[1] = "Gwagwalada|Kuje|Abaji|Abuja Municipal|Bwari|Kwali";
//ABIA
s_a[2] = "Aba North|Aba South|Arochukwu|Bende|Ikwuano|Isiala-Ngwa North|Isiala-Ngwa South|Isuikwato|Obi Nwa|Ohafia|Osisioma|Ngwa|Ugwunagbo|Ukwa East|Ukwa West|Umuahia North|Umuahia South|Umu-Neochi";
//ADAMAWA
s_a[3] = "Demsa|Fufore|Ganaye|Gireri|Gombi|Guyuk|Hong|Jada|Lamurde|Madagali|Maiha|Mayo-Belwa|Michika|Mubi North|Mubi South|Numan|Shelleng|Song|Toungo|Yola North|Yola South";
//AKWA IBOM
s_a[4] = "Abak|Eastern Obolo|Eket|Esit Eket|Essien Udim|Etim Ekpo|Etinan|Ibeno|Ibesikpo Asutan|Ibiono Ibom|Ika|Ikono|Ikot Abasi|Ikot Ekpene|Ini|Itu|Mbo|Mkpat Enin|Nsit Atai|Nsit Ibom|Nsit Ubium|Obot Akara|Okobo|Onna|Oron|Oruk Anam|Udung Uko|Ukanafun|Uruan|Urue-Offong/Oruko|Uyo";
//ANAMBRA
s_a[5] = "Aguata|Anambra East|Anambra West|Anaocha|Awka North|Awka South|Ayamelum|Dunukofia|Ekwusigo|Idemili North|Idemili south|Ihiala|Njikoka|Nnewi North|Nnewi South|Ogbaru|Onitsha North|Onitsha South|Orumba North|Orumba South|Oyi";
//BAUCHI
s_a[6] = "Alkaleri|Bauchi|Bogoro|Damban|Darazo|Dass|Ganjuwa|Giade|Itas/Gadau|Jama'are|Katagum|Kirfi|Misau|Ningi|Shira|Tafawa-Balewa|Toro|Warji|Zaki";
//BAYELSA
s_a[7] = "Brass|Ekeremor|Kolokuma/Opokuma|Nembe|Ogbia|Sagbama|Southern Jaw|Yenegoa";
//BENUE
s_a[8] = "Ado|Agatu|Apa|Buruku|Gboko|Guma|Gwer East|Gwer West|Katsina-Ala|Konshisha|Kwande|Logo|Makurdi|Obi|Ogbadibo|Oju|Okpokwu|Ohimini|Oturkpo|Tarka|Ukum|Ushongo|Vandeikya";
//BORNO
s_a[9] = "Abadam|Askira/Uba|Bama|Bayo|Biu|Chibok|Damboa|Dikwa|Gubio|Guzamala|Gwoza|Hawul|Jere|Kaga|Kala/Balge|Konduga|Kukawa|Kwaya Kusar|Mafa|Magumeri|Maiduguri|Marte|Mobbar|Monguno|Ngala|Nganzai|Shani";
//CROSSRIVER
s_a[10] = "Akpabuyo|Odukpani|Akamkpa|Biase|Abi|Ikom|Yarkur|Odubra|Boki|Ogoja|Yala|Obanliku|Obudu|Calabar South|Etung|Bekwara|Bakassi|Calabar Municipality";
//DELTA
s_a[11] = "Oshimili|Aniocha|Aniocha South|Ika South|Ika North-East|Ndokwa West|Ndokwa East|Isoko south|Isoko North|Bomadi|Burutu|Ughelli South|Ughelli North|Ethiope West|Ethiope East|Sapele|Okpe|Warri North|Warri South|Uvwie|Udu|Warri Central|Ukwani|Oshimili North|Patani";
//EBONYI
s_a[12] = "Afikpo South|Afikpo North|Onicha|Ohaozara|Abakaliki|Ishielu|lkwo|Ezza|Ezza South|Ohaukwu|Ebonyi|Ivo";
//EDO
s_a[13] = "Esan North-East|Esan Central|Esan West|Egor|Ukpoba|Central|Etsako Central|Igueben|Oredo|Ovia SouthWest|Ovia South-East|Orhionwon|Uhunmwonde|Etsako East|Esan South-East";
//EKITI
s_a[14] = "Ado|Ekiti-East|Ekiti-West|Emure/Ise/Orun|Ekiti South-West|Ikare|Irepodun|Ijero|Ido/Osi|Oye|Ikole|Moba|Gbonyin|Efon|Ise/Orun|Ilejemeje";
//ENUGU
s_a[15] = "Enugu South|Igbo-Eze South|Enugu North|Nkanu|Udi Agwu|Oji-River|Ezeagu|IgboEze North|Isi-Uzo|Nsukka|Igbo-Ekiti|Uzo-Uwani|Enugu Eas|Aninri|Nkanu East|Udenu";
//GOMBE
s_a[16] = "Akko|Balanga|Billiri|Dukku|Kaltungo|Kwami|Shomgom|Funakaye|Gombe|Nafada/Bajoga|Yamaltu/Delta";
//IMO
s_a[17] = "Aboh-Mbaise|Ahiazu-Mbaise|Ehime-Mbano|Ezinihitte|Ideato North|Ideato South|Ihitte/Uboma|Ikeduru|Isiala Mbano|Isu|Mbaitoli|Ngor-Okpala|Njaba|Nwangele|Nkwerre|Obowo|Oguta|Ohaji/Egbema|Okigwe|Orlu|Orsu|Oru East|Oru West|Owerri-Municipal|Owerri North|Owerri West";
//JIGAWA
s_a[18] = "Auyo|Babura|Birni Kudu|Biriniwa|Buji|Dutse|Gagarawa|Garki|Gumel|Guri|Gwaram|Gwiwa|Hadejia|Jahun|Kafin Hausa|Kaugama Kazaure|Kiri Kasamma|Kiyawa|Maigatari|Malam Madori|Miga|Ringim|Roni|Sule-Tankarkar|Taura|Yankwashi";
//KADUNA
s_a[19] = "Birni-Gwari|Chikun|Giwa|Igabi|Ikara|jaba|Jema'a|Kachia|Kaduna North|Kaduna South|Kagarko|Kajuru|Kauru|Kubau|Kudan|Lere|Makarfi|Sabon-Gari|Sanga|Soba|Zango-Kataf|Zaria";
//KANO
s_a[20] = "Ajingi|Albasu|Bagwai|Bebeji|Bichi|Bunkure|Dala|Dambatta|Dawakin Kudu|Dawakin Tofa|Doguwa|Fagge|Gabasawa|Garko|Garum|Mallam|Gaya|Gezawa|Gwale|Gwarzo|Kabo|Kano Municipal|Karaye|Kibiya|Kiru|kumbotso|Kunchi|Kura|Madobi|Makoda|Minjibir|Nasarawa|Rano|Rimin Gado|Rogo|Shanono|Sumaila|Takali|Tarauni|Tofa|Tsanyawa|Tudun Wada|Ungogo|Warawa|Wudil";
//KATSINA
s_a[21] = "Bakori|Batagarawa|Batsari|Baure|Bindawa|Charanchi|Dandume|Danja|Dan Musa|Daura|Dutsi|Dutsin-Ma|Faskari|Funtua|Ingawa|Jibia|Kafur|Kaita|Kankara|Kankia|Katsina|Kurfi|Kusada|Mai'Adua|Malumfashi|Mani|Mashi|Matazuu|Musawa|Rimi|Sabuwa|Safana|Sandamu|Zango";
//KEBBI
s_a[22] = "Aleiro|Arewa-Dandi|Argungu|Augie|Bagudo|Birnin Kebbi|Bunza|Dandi|Fakai|Gwandu|Jega|Kalgo|Koko/Besse|Maiyama|Ngaski|Sakaba|Shanga|Suru|Wasagu/Danko|Yauri|Zuru";
//KOGI
s_a[23] = "Adavi|Ajaokuta|Ankpa|Bassa|Dekina|Ibaji|Idah|Igalamela-Odolu|Ijumu|Kabba/Bunu|Kogi|Lokoja|Mopa-Muro|Ofu|Ogori/Mangongo|Okehi|Okene|Olamabolo|Omala|Yagba East|Yagba West";
//KWARA
s_a[24] = "Asa|Baruten|Edu|Ekiti|Ifelodun|Ilorin East|Ilorin West|Irepodun|Isin|Kaiama|Moro|Offa|Oke-Ero|Oyun|Pategi";
//LAGOS
s_a[25] = "Agege|Ajeromi-Ifelodun|Alimosho|Amuwo-Odofin|Apapa|Badagry|Epe|Eti-Osa|Ibeju/Lekki|Ifako-Ijaye|Ikeja|Ikorodu|Kosofe|Lagos Island|Lagos Mainland|Mushin|Ojo|Oshodi-Isolo|Shomolu|Surulere";
//NASARAWA
s_a[26] = "Akwanga|Awe|Doma|Karu|Keana|Keffi|Kokona|Lafia|Nasarawa|Nasarawa-Eggon|Obi|Toto|Wamba";
//NIGER
s_a[27] = "Agaie|Agwara|Bida|Borgu|Bosso|Chanchaga|Edati|Gbako|Gurara|Katcha|Kontagora|Lapai|Lavun|Magama|Mariga|Mashegu|Mokwa|Muya|Pailoro|Rafi|Rijau|Shiroro|Suleja|Tafa|Wushishi";
//OGUN
s_a[28] = "Abeokuta North|Abeokuta South|Ado-Odo/Ota|Egbado North|Egbado South|Ewekoro|Ifo|Ijebu East|Ijebu North|Ijebu North East|Ijebu Ode|Ikenne|Imeko-Afon|Ipokia|Obafemi-Owode|Ogun Waterside|Odeda|Odogbolu|Remo North|Shagamu";
//ONDO
s_a[29] = "Akoko North East|Akoko North West|Akoko South Akure East|Akoko South West|Akure North|Akure South|Ese-Odo|Idanre|Ifedore|Ilaje|Ile-Oluji|Okeigbo|Irele|Odigbo|Okitipupa|Ondo East|Ondo West|Ose|Owo";
//OSUN
s_a[30] = "Aiyedade|Aiyedire|Atakumosa East|Atakumosa West|Boluwaduro|Boripe|Ede North|Ede South|Egbedore|Ejigbo|Ife Central|Ife East|Ife North|Ife South|Ifedayo|Ifelodun|Ila|Ilesha East|Ilesha West|Irepodun|Irewole|Isokan|Iwo|Obokun|Odo-Otin|Ola-Oluwa|Olorunda|Oriade|Orolu|Osogbo";
//OYO
s_a[31] = "Afijio|Akinyele|Atiba|Atigbo|Egbeda|IbadanCentral|Ibadan North|Ibadan North West|Ibadan South East|Ibadan South West|Ibarapa Central|Ibarapa East|Ibarapa North|Ido|Irepo|Iseyin|Itesiwaju|Iwajowa|Kajola|Lagelu Ogbomosho North|Ogbmosho South|Ogo Oluwa|Olorunsogo|Oluyole|Ona-Ara|Orelope|Ori Ire|Oyo East|Oyo West|Saki East|Saki West|Surulere";
//PLATEAU
s_a[32] = "Barikin Ladi|Bassa|Bokkos|Jos East|Jos North|Jos South|Kanam|Kanke|Langtang North|Langtang South|Mangu|Mikang|Pankshin|Qua'an Pan|Riyom|Shendam|Wase";
//RIVERS
s_a[33] = "Abua/Odual|Ahoada East|Ahoada West|Akuku Toru|Andoni|Asari-Toru|Bonny|Degema|Emohua|Eleme|Etche|Gokana|Ikwerre|Khana|Obia/Akpor|Ogba/Egbema/Ndoni|Ogu/Bolo|Okrika|Omumma|Opobo/Nkoro|Oyigbo|Port-Harcourt|Tai ";
//SOKOTO
s_a[34] = "Binji|Bodinga|Dange-shnsi|Gada|Goronyo|Gudu|Gawabawa|Illela|Isa|Kware|kebbe|Rabah|Sabon birni|Shagari|Silame|Sokoto North|Sokoto South|Tambuwal|Tqngaza|Tureta|Wamako|Wurno|Yabo";
//TARABA
s_a[35] = "Ardo-kola|Bali|Donga|Gashaka|Cassol|Ibi|Jalingo|Karin-Lamido|Kurmi|Lau|Sardauna|Takum|Ussa|Wukari|Yorro|Zing";
//YOBE
s_a[36] = "Bade|Bursari|Damaturu|Fika|Fune|Geidam|Gujba|Gulani|Jakusko|Karasuwa|Karawa|Machina|Nangere|Nguru Potiskum|Tarmua|Yunusari|Yusufari";
//ZAMFARA
s_a[37] = "Anka|Bakura|Birnin Magaji|Bukkuyum|Bungudu|Gummi|Gusau|Kaura|Namoda|Maradun|Maru|Shinkafi|Talata Mafara|Tsafe|Zurmi";



function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select Lga', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select State', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}