export const HYDERABAD_LOCATIONS = Array.from(new Set([
  // ============ CORE HYDERABAD (Central) ============
  'Abids', 'Nampally', 'Khairatabad', 'Lakdikapul', 'Masab Tank', 'Himayatnagar', 'Narayanaguda', 'Basheerbagh', 'Koti', 'Sultan Bazar', 'Barkatpura', 'Saifabad',
  'Mehdipatnam', 'Toli Chowki', 'Asif Nagar', 'Mallepally', 'Vijay Nagar Colony', 'Humayun Nagar', 'Gudimalkapur', 'Murad Nagar', 'Rethibowli', 'Amba Gardens', 'Ambedkar Nagar',
  'Panjagutta', 'Ameerpet', 'Somajiguda', 'Erramanzil', 'Raj Bhavan Road', 'Srinagar Colony', 'Madhura Nagar', 'Yousufguda', 'Vengal Rao Nagar', 'Krishna Nagar', 'Indira Nagar',
  'Banjara Hills', 'Jubilee Hills', 'Road No. 1', 'Road No. 10', 'Road No. 36', 'Road No. 45', 'Film Nagar', 'Journalist Colony', 'Kavuri Hills', 'Apollo Hospital Area', 'Nandagiri Hills',
  'SR Nagar', 'Sanjeeva Reddy Nagar', 'Balkampet', 'Maitrivanam', 'Vengal Rao Nagar Area', 'Umesh Chandra Statue Area', 'Czech Colony', 'BK Guda',
  
  // ============ OLD CITY (South) ============
  'Charminar', 'Falaknuma', 'Shalibanda', 'Barkas', 'Chandrayangutta', 'Talab Katta', 'Bandlaguda', 'Kishan Bagh', 'Bahadurpura', 'Puranapul', 'Madina', 'Patharghatti', 'Shah Ali Banda',
  'Moghalpura', 'Yakutpura', 'Dabeerpura', 'Darulshifa', 'Purani Haveli', 'Noorkhan Bazaar', 'Malakpet', 'Saidabad', 'Saroornagar', 'Kothapet', 'Dilsukhnagar', 'Chaitanyapuri',
  'Attapur', 'Rajendranagar', 'Upparpally', 'Hyderguda Bharat Nagar', 'Tejaswi Nagar', 'Budvel', 'Kismatpur', 'Bandlaguda Jagir', 'Gandipet', 'Osmansagar Road', 'Janachaitanya Colony',
  'Moinabad', 'Chevella Road', 'Appa Junction', 'TSPA Junction', 'Mir Alam Tank Area', 'Nehru Zoological Park Area',
  
  // ============ WEST HYDERABAD (IT Hub) ============
  'Madhapur', 'Hitech City', 'Gachibowli', 'Kondapur', 'Kothaguda', 'Hafeezpet', 'Miyapur', 'Chandanagar', 'Madinaguda', 'Deepthisri Nagar', 'Allwyn Colony', 'Nallagandla',
  'Nanakramguda', 'Financial District', 'Kokapet', 'Narsingi', 'Puppalguda', 'Manikonda', 'Alkapur Township', 'Lanco Hills Road', 'Wipro Circle', 'Q-City Area', 'Financial District Phase 2',
  'Tellapur', 'Nallagandla', 'Serilingampally', 'Gulmohar Colony', 'APHB Colony', 'BHEL', 'Beeramguda', 'Isnapur', 'Patancheru', 'Lingampally', 'Tara Nagar',
  'Mokila', 'Shankarpally', 'Kollur', 'Osman Nagar', 'Velimela', 'Gundlapochampally', 'Aminpur', 'Tellapur Road', 'Radha Krishna Nagar', 'Vattinagulapally',
  
  // ============ SECUNDERABAD & NORTH ============
  'Secunderabad', 'Paradise', 'Rasoolpura', 'Sindhi Colony', 'PG Road', 'MG Road', 'SD Road', 'Minister Road', 'James Street', 'Ranigunj', 'Old Lancer Line', 'Wellington Road',
  'Marredpally', 'East Marredpally', 'West Marredpally', 'Lalaguda', 'Mettuguda', 'Sitaphalmandi', 'Warasiguda', 'Chilakalguda', 'Padmarao Nagar', 'Kavadiguda',
  'Alwal', 'Old Alwal', 'New Alwal', 'Father Balaiah Nagar', 'R.K. Puram', 'Subhash Nagar', 'Lothkunta', 'Venkatapuram', 'Temple Alwal', 'Loyola College Area',
  'Trimulgherry', 'Picket', 'Gunrock Enclave', 'Karkhana', 'Vikrampuri', 'Diamond Point', 'Sikh Village', 'Sainikpuri', 'Yapral', 'Defence Colony', 'Vayupuri',
  'Bolarum', 'Macha Bollaram', 'Kowkur', 'Ammuguda', 'Risala Bazaar', 'Hakimpet', 'Jawahar Nagar', 'Bolarum Golf Course Area',
  
  // ============ MALKAJGIRI & EAST ============
  'Malkajgiri', 'Safilguda', 'Anandbagh', 'Neredmet', 'Old Neredmet', 'Vinayak Nagar', 'Goutham Nagar', 'Moula Ali', 'Kushaiguda', 'HB Colony', 'AS Rao Nagar', 'Kamala Nagar', 'Dr AS Rao Nagar',
  'Uppal', 'Habsiguda', 'Ramanthapur', 'Nacharam', 'Mallapur', 'Chengicherla', 'Boduppal', 'Nagole', 'Bandlaguda', 'Nagaram', 'Dammaiguda', 'Peerzadiguda', 'Laxmi Nagar',
  'Kapra', 'ECIL', 'Sainikpuri', 'Yapral', 'Radhika Theatre Area', 'Vayupuri', 'Saket', 'Kapra Lake Area', 'Cherlapally', 'Rampally',
  'L.B. Nagar', 'Vanasthalipuram', 'Hayathnagar', 'Champapet', 'Karmanghat', 'Bairamalguda', 'Hastinapuram', 'Auto Nagar', 'Mansoorabad', 'Nagole Road', 'RK Puram LB Nagar',
  
  // ============ MEDCHAL & NORTH DIST ============
  'Medchal', 'Medchal Town', 'Kompally', 'Suchitra', 'Jeedimetla', 'Chintal', 'Suraram', 'Shamirpet', 'Thumkunta', 'Turkapally', 'Gundlapochampally Area',
  'Bahadurpally', 'Dulapally', 'Maisammaguda', 'Gandimaisamma', 'Bowrampet', 'Dundigal', 'Gajularamaram', 'Bachupally', 'Nizampet', 'Pragathi Nagar', 'Hydernagar',
  'KPHB', 'KPHB Colony', 'KPHB Phase 1', 'KPHB Phase 2', 'KPHB Phase 3', 'KPHB Phase 4', 'KPHB Phase 6', 'JNTU Area', 'Kukatpally', 'Vivekananda Nagar', 'Moosapet', 'Balanagar', 'Ferozguda',
  
  // ============ GATED COMMUNITIES & APARTMENTS (SEO Targets) ============
  'Lanco Hills Society', 'My Home Avatar', 'My Home Vihanga', 'My Home Jewel', 'My Home Mangala', 'My Home Tarkshya', 'My Home Sayuk', 'My Home Bhooja', 'My Home Abhra', 'My Home Navadweepa',
  'Aparna Sarovar', 'Aparna Cyberzon', 'Aparna HillPark', 'Aparna Serene Park', 'Aparna Zenon', 'Aparna Sarovar Zenith', 'Aparna Sarovar Grande', 'Aparna One', 'Aparna Luxor Park',
  'Lansum Etania', 'Lansum Oxygen', 'Jayabheri Orange County', 'Jayabheri The Peak', 'Jayabheri Pine Valley', 'Jayabheri Enclave',
  'Rainbow Vistas', 'Lodha Belleza', 'Lodha Meridian', 'Prestige High Fields', 'PBEL City', 'SMR Vinay City', 'SMR Vinay Iconia',
  'SMR Vinay Metropolitan', 'Mantri Celestia', 'Vasavi Atlantis', 'Candieur 40', 'Trendset Winz', 'Tellapur Luxury Villas',
  'Kalpataru Residency', 'Sobha Dream Acres Area', 'Rithwik Enclave', 'DLF Garden City Area', 'Muppas Panchavati', 'Whistling Woods',
  'Hill Ridge Springs', 'DivyaSree NSL Orion Area', 'Boulder Hills', 'Indu Fortune Fields', 'Aditya Empress Towers', 'Ramky Towers',
  'The Prestige City', 'Prestige Rock Cliff', 'Prestige Clairemont', 'Prestige Beverly Hills', 'Vasavi Sarovar', 'Vasavi GP Trends',
  'Phoenix Golf Edge', 'Emaar Boulder Hills', 'Incor Lake City', 'DSR The Twins', 'DSR Skymarq', 'Vamsiram Newmark',
  
  // ============ MICRO-LOCALITIES & NEARBY PLACES ============
  'Nandagiri Hills Road', 'Film Nagar Site 2', 'Lotus Pond Area', 'Durgaam Cheruvu Road', 'Mindspace Junction', 'IKEA Hyderabad Area', 'Cyber Towers Road',
  'Financial District Gachibowli', 'Nanakramguda Junction', 'Waverock Area', 'Continental Hospital Area', 'DLF Cyber City Area',
  'Tellapur Lake Front', 'Osman Nagar Villas', 'Kokapet SEZ Area', 'Puppalguda Village', 'Manikonda Marichettu Junction', 'Ou Colony Manikonda',
  'Nagole Metro Station Area', 'Uppal Ring Road Junction', 'Habsiguda Street No 8', 'Tarnaka Junction', 'Mettuguda Metro Area',
  'AIBP Colony', 'Vikrampuri Colony', 'Karkhana Police Station Area', 'Sikh Village Area', 'Mudfort Area', 'Diamond Point Junction',
  'Kukatpally Housing Board', 'Kukatpally Metro Station', 'JNTU Kukatpally', 'Pragathi Nagar KPHB', 'Nizampet Village', 'Bachupally Cross Roads',
  'Suchitra Circle', 'Kompally Road', 'Doolapally Industrial Area', 'Jeedimetla Phase 1', 'Jeedimetla Phase 5',
  
  // ============ ADDED EXTRA AREAS (MEDCHAL-MALKAJGIRI) ============
  'Zinkalawada', 'Fathenagar', 'Hasmathpet', 'Babbuguda', 'Dharmaram', 'Narsampally', 'Yadgarpally East', 'Yadgarpally West',
  'Keesara Daira', 'Cheeryal', 'Thimmaipally', 'Haridaspally', 'Godumakunta', 'Bogaram', 'Ahmedguda', 'Keshavapur',
  'Nagaloor', 'Gagilapur', 'Dommara Pochampally', 'Shambipur', 'Mallampet', 'Uppal Bagayath', 'Fathullaguda',
  'Narapally', 'Jaganguda', 'Lalgadi Malakpet', 'Venkatapuram Alwal', 'Machabolaram Medchal',
  
  // ============ NEW EMERGING AREAS ============
  'Kollur ORR', 'Patancheru Industrial Area', 'Pashamylaram SEZ', 'Kothur Area', 'Shadnagar Town Area', 'Maheshwaram Area', 'Adibatla IT SEZ', 'Fab City Complex',
  'Pocharam Infosys Campus', 'Singapore Township Area', 'Cyber Gateway Area', 'IKEA Area', 'T-Hub 2.0 Area', 'HICC Area', 'Hitex Area',
  
  // ============ EXTRA MEDCHAL-MALKAJGIRI ADDITIONS ============
  'Ghatkesar', 'Keesara', 'Bibinagar', 'Uppal Canalside', 'Medipally', 'Peerzadiguda Area', 'Narapally Area', 'Chengicherla Village', 'Pratap Singaram',
  'Balanagar IDPL', 'Jeedimetla Industrial Hub', 'Chintal Area', 'Suraram Colony', 'Doolapally Area', 'Maisammaguda Area', 'Gandimaisamma Circle',
  'Dundigal Base Area', 'Shamirpet Lake Area', 'Lalgadi Malakpet Area', 'Gundlapochampally Villas', 'Medchal Outer Ring Road',
  
  // ============ EXTRA SECUNDERABAD ADDITIONS ============
  'Mettuguda Secunderabad', 'Chilakalguda Station Area', 'Sitaphalmandi Area', 'Warasiguda Colony', 'Padmarao Nagar East', 'Kavadiguda Circle',
  'Musheerabad Junction', 'Bholakpur Area', 'Parsigutta', 'Ram Nagar', 'Adikmet', 'Vidyanagar', 'Osmania University Area', 'Tarnaka Metro Area',

  // ============ GATED COMMUNITIES & APARTMENTS (INSIDE ORR) ============
  'My Home Krishe', 'My Home Ranga', 'My Home Constellation', 'My Home Nishada', 'My Home Tridasa', 'My Home Tarkshya Area', 'My Home Mangala Area',
  'Aparna CyberLife', 'Aparna CyberShine', 'Aparna CyberEast', 'Aparna Cyber4', 'Aparna Kanopy Tulip', 'Aparna Zenon Area',
  'Prestige High Fields Gachibowli', 'Prestige Clairemont Kokapet', 'Prestige Highline Area', 'Prestige High Fields Area',
  'Vasavi Urban Area', 'Vasavi Metropolis Area', 'Vasavi Crown Area', 'Vasavi Solitaire Heights Area',
  'Rajapushpa Atria', 'Rajapushpa Provincia', 'Rajapushpa Regalia', 'Rajapushpa Summit Area', 'Rajapushpa Green Hills Area',
  'ASBL Spire', 'ASBL Lakeside', 'ASBL Loft', 'ASBL Spectra Area',
  'Sumadhura Acropolis', 'Sumadhura Horizon', 'Sumadhura Folium Area',
  'Incor One City Area', 'Muppas Altius Area', 'Muppas Melody Area',
  'Pacifica Hillcrest Area', 'PBEL City Peerancheru', 'PBEL City Tower Area',
  'Rainbow Vistas Rock Garden', 'Lodha Belleza Area',

  // ============ MICRO-AREAS & LOCALITIES (INSIDE ORR) ============
  'Nanakramguda Financial District', 'Puppalguda Manikonda', 'Kokapet IT SEZ Area', 'Gandipet Road Area', 'Hydershakote Area', 'Peerancheru Area',
  'Kali Mandir Area', 'Bandlaguda Jagir Area', 'Sun City Bandlaguda', 'Bandlaguda Jagir Police Academy', 'Appa Junction Area',
  'Narsingi Junction Area', 'Kokapet ORR Toll Access', 'Tellapur ORR Access Area', 'Kollur ORR Access Area',
  'Bachupally IT Corridor Area', 'Nizampet Road Area', 'Pragathi Nagar Kukatpally Area',
  'Hafeezpet Road Area', 'Kondapur RTO Area', 'Botanical Garden Road Kondapur',
  'Gachibowli Stadium Area', 'IIIT Junction Area', 'Gowlidoddy Area', 'Gopanpally Area', 'Gopanpally Thanda', 'Q-City Gachibowli Area',
  'Khajaguda Area', 'Khajaguda Junction Area', 'Khajaguda Lake Area', 'Chitrapuri Colony Area',
  'Raidurg Area', 'Raidurg Metro Station Area', 'Dargah Area Raidurg',
  'Shaikpet Area', 'Shaikpet Nala Area', 'Tolichowki Area', 'Karwan Area', 'Karwan Bazar Area', 'Sabzi Mandi Area', 'Tappachabutra Area',
  'Attapur Pillar No 120 Area', 'Attapur Pillar No 80 Area', 'Attapur Pillar No 190 Area',
  'Rajendranagar Agriculture University Area', 'Aramghar Junction Area',
  'Malakpet Metro Station Area', 'Dilsukhnagar Metro Station Area', 'L.B. Nagar Ring Road Area',
  'Nagole Metro Junction Area', 'Habsiguda Street No 1 Area',
  'Neredmet X Roads Area', 'Sainikpuri Main Road Area', 'AS Rao Nagar Main Road Area',
  'Miyapur Metro Station Area', 'Miyapur Allwyn X Roads Area',
  'Kukatpally Y Junction Area', 'Moosapet X Roads Area',

  // ============ ADDITIONAL EXPANDED GATED COMMUNITIES (INSIDE ORR) ============
  'My Home Vipina', 'My Home Apas', 'My Home Akruti', 'My Home Tyaza', 'My Home Ankura', 'My Home Alluri',
  'Aparna CyberHeights', 'Aparna CyberZon', 'Aparna Kanopy Marigold', 'Aparna Astute', 'Aparna Urvi', 'Aparna Synergy',
  'Prestige Ivy League', 'Prestige Tranquil', 'Prestige Vaishnavi Orchard', 'Prestige Royal Woods', 'The Prestige City Bellagio',
  'Rajapushpa Imperia', 'Rajapushpa Eterna', 'Rajapushpa Open Skies', 'Lansum Eldorado', 'Jayabheri Temple Tree',
  'Jayabheri Silicon County', 'Jayabheri Meadows', 'Vasavi Brindavanam', 'Vasavi Waterfront', 'Vasavi Nandanam',
  'Candeur Crescent', 'Candeur Signature Area', 'ASBL Loft Financial District', 'Sumadhura Olives', 'Sumadhura Silver Ripples',
  'Sumadhura Eden Garden', 'SMR Vinay Boulder Conclave', 'Muppas Green Meadows', 'Muppas Indraprastha',
  'Kalpataru Residency Sanath Nagar', 'Phoenix Golf Edge Gachibowli', 'DSR The Twins Financial District',
  'DSR Skymarq Kokapet', 'Vamsiram Jyothi Cosmos', 'Ramky One Galaxia', 'Ramky One Kosmos', 'Ramky One Marvel',
  'Aditya Imperial Heights Hafeezpet', 'Honer Aquantis', 'Honer Vivantis', 'Honer Signatis Kukatpally',
  'Hallmark Vicinia Narsingi', 'Hallmark Sunnyside Narsingi', 'Hallmark Treasor Kokapet', 'Hallmark Silvanus Narsingi',
  'Vertex Sadguru Krupa Kukatpally', 'Vertex Pristine Kukatpally', 'Vertex Kingston Park Nallagandla', 'Vertex Vibe Kukatpally',
  'Janapriya Nile Valley Madhinaguda', 'Janapriya Arcadia Kowkur', 'Janapriya Metropolis Moti Nagar', 'Janapriya Utopia Attapur',
  'Aliens Space Station 1 Tellapur', 'Sattva Sunrise', 'Sattva Necklace Pride', 'Avasa Hills',

  // ============ ADDITIONAL MICRO-LOCALITIES (INSIDE ORR) ============
  'Financial District Phase 1', 'Financial District Phase 2', 'Kokapet Golden Mile', 'Kokapet Golden Mile Road',
  'Kokapet Lake Road', 'Gachibowli Stadium Road', 'Gachibowli DLF Road', 'Nanakramguda IT Enclave',
  'Puppalguda Golden Temple Area', 'Manikonda Ou Colony', 'Manikonda Puppalguda Road', 'Narsingi Circle Area',
  'Narsingi Puppalguda Road', 'Tellapur Lake Front Area', 'Tellapur Station Road', 'Nallagandla HUDA Layout',
  'Nallagandla Flyover Area', 'Kollur Exit Road', 'Kollur Village Area', 'Kollur Outer Ring Road',
  'Osman Nagar Lake Road', 'Vattinagulapally Village Area', 'Vattinagulapally ORR Access', 'Mokila Village Area',
  'Mokila Shankarpally Road', 'Shankarpally Town Area', 'Gopanpally IT Enclave', 'Gopanpally Wipro Circle Road',
  'Gowlidoddy Q City Road', 'Khajaguda Hills Area', 'Khajaguda Sports Academy Area', 'Chitrapuri Colony Main Road',
  'Lanco Hills Road Area', 'Raidurg Police Station Area', 'Raidurg Salarpuria Sattva Area', 'Shaikpet Flyover Area',
  'Shaikpet Qutb Shahi Tombs Area', 'Tolichowki Galaxy Theatre Area', 'Tolichowki Al-Hasnath Colony', 'Karwan Jiyaguda Area',
  'Attapur Pillar No 100 Area', 'Attapur Pillar No 150 Area', 'Attapur Pillar No 200 Area', 'Rajendranagar PVNR Expressway Area',
  'Rajendranagar Agriculture University Road', 'Bandlaguda Jagir Outer Ring Road', 'Peerancheru TSPA Junction',
  'Kali Mandir Peerancheru Area', 'Sun City Bandlaguda Road', 'Gandipet Ocean Park Road', 'Gandipet CBIT College Area',
  'Gandipet Shankarpally Road', 'Pragathi Nagar JNTU Road', 'Pragathi Nagar Katih Circle', 'Nizampet Road Metro Station',
  'Nizampet Pragathi Nagar Link Road', 'Bachupally Mallampet Road', 'Bachupally Miyapur Road', 'Bowrampet Bachupally Road',
  'Mallampet Medical College Area', 'Dundigal Air Force Station Area', 'Gandimaisamma Dundigal Road', 'Bahadurpally Kompally Link Road',
  'Suchitra Kompally Highway', 'Kompally Cineplanet Road', 'Kompally Runway 9 Area', 'Shamirpet Celebration Road',
  'Shamirpet BITS Pilani Area', 'Shamirpet ORR Exit 14 Area', 'Gundlapochampally Station Road', 'Medchal Highway Toll Plaza',
  'Medchal Station Road', 'Alwal Temple Road', 'Alwal Loyola College Area', 'Sainikpuri 5th Avenue Road',
  'Sainikpuri Vayupuri Colony', 'Yapral Kowkur Road', 'Yapral Defence Colony', 'Kowkur Military Area',
  'Bolarum Cantonment Area', 'Lothkunta Secunderabad', 'Karkhana Police Station Road', 'Vikrampuri Colony Secunderabad',
  'Sindhi Colony Secunderabad', 'Paradise Circle Secunderabad', 'West Marredpally Main Road', 'East Marredpally Police Station Area',
  'Lalaguda Railway Colony', 'Mettuguda Railway Hospital Area', 'Sitaphalmandi Station Road', 'Warasiguda Arts College Road',
  'Padmarao Nagar Garden Area', 'Kavadiguda CGO Towers Area', 'Musheerabad Gandhi Hospital Area', 'Tarnaka Osmania University Road',
  'Habsiguda Metro Station Area', 'Uppal Metro Depot Area', 'Uppal Bhagayath Layout', 'Ramanthapur Lake Area',
  'Nacharam Industrial Area', 'Mallapur Industrial Area', 'Boduppal Highway Area', 'Nagole Inner Ring Road',
  'Nagole Bandlaguda Road', 'Bandlaguda Nagole Area', 'Nagaram Dammaiguda Road', 'Dammaiguda Kapra Area',
  'Kapra Lakefront Enclave', 'ECIL Cross Roads', 'Cherlapally Jail Road Area', 'Rampally X Roads Area',
  'Ghatkesar IT Corridor Area', 'Narapally Highway Area', 'Peerzadiguda Uppal Area', 'Medipally Warangal Highway',
  'Pocharam IT SEZ Road', 'Singapore Township Ghatkesar', 'L.B. Nagar Metro Station Area', 'L.B. Nagar Ring Road Junction',
  'Vanasthalipuram Red Tank Area', 'Hayathnagar Highway Toll Plaza', 'Champapet Sagar Ring Road', 'Karmanghat Temple Area',
  'Bairamalguda Inner Ring Road', 'Hastinapuram North Area', 'Mansoorabad Lake Area', 'Kothapet Fruit Market Area',
  'Saroornagar Lake Road', 'Dilsukhnagar Main Road', 'Chaitanyapuri Metro Area', 'Malakpet Yashoda Hospital Area',
  'Saidabad Colony Area', 'Saidabad Singareni Collieries Area', 'Santosh Nagar X Roads', 'Kanchanbagh DRDO Area',
  'Chandrayangutta X Roads', 'Falaknuma Palace Area', 'Shalibanda Old City Area', 'Moghalpura Old City Area',
  'Yakutpura Old City Area', 'Dabeerpura Railway Station Area', 'Charminar Heritage Area', 'Madina Market Area',
  'Patharghatti Old City', 'Kishan Bagh Park Area', 'Bahadurpura Nehru Zoo Park', 'Puranapul Bridge Area',
  'Moinabad Chevella Highway', 'TSPA Junction Bandlaguda', 'Appa Junction ORR Entry', 'Kokapet Golden Mile Road',
  'Kollur ORR Service Road', 'Nanakramguda Financial District Exit', 'Patancheru GMR Airport Road', 'Patancheru ICRISAT Area',
  'Patancheru Industrial Area Phase 1', 'Pashamylaram Industrial Estate', 'Isnapur X Roads Patancheru', 'Beeramguda Temple Area',
  'BHEL Township Area', 'Lingampally Railway Station Area', 'Miyapur Allwyn Colony', 'Miyapur HMT Swarnapuri Colony',
  'Chandanagar Station Road', 'Madinaguda Deepthisri Nagar Area', 'Hafeezpet Station Road', 'Kondapur Botanical Garden Area',
  'Kondapur RTO Office Road', 'Madhapur Metro Station Area', 'Hitech City Mindspace Area', 'Hitech City Cyber Towers Area',
  'Gachibowli Wipro Circle', 'Gachibowli IIIT Junction', 'Gachibowli Gowlidoddy Road', 'Financial District Waverock Area',
  'Financial District Sheraton Area', 'Financial District ISB Road', 'Nanakramguda One West Area', 'Kokapet One Golden Mile',
  'Narsingi Alkapur Township Area', 'Manikonda Lanco Hills Society', 'Puppalguda Neknampur Road', 'Alkapur Township Sector 1',
  'Alkapur Township Sector 5', 'Langer Houz Golconda Fort Area', 'Tolichowki MD Lines', 'Shaikpet Aditya Empress Area',
  'Film Nagar Road No 92 Area', 'Jubilee Hills Road No 36 Area', 'Jubilee Hills Road No 45 Area', 'Banjara Hills Road No 1 Area',
  'Banjara Hills Road No 12 Area', 'Panjagutta Metro Station Area', 'Ameerpet Maitrivanam Area', 'Somajiguda Yashoda Hospital Area',
  'Khairatabad Raj Bhavan Area', 'Lakdikapul Station Area', 'Nampally Station Area', 'Abids GPO Area',
  'Koti Womens College Area', 'Himayatnagar Main Road', 'Narayanaguda Flyover Area', 'Barkatpura Park Area',
  'Basheerbagh Liberty Circle', 'Domalguda Ramakrishna Math Area', 'Gandhinagar Park Area', 'Kawadiguda Sailing Club Area',
  'Padmarao Nagar GHMC Park', 'Secunderabad Station Clock Tower Area', 'Secunderabad Club Area', 'Marredpally Playground Area',
  'Begumpet Airport Area', 'Begumpet Metro Station Area', 'Rasoolpura Metro Station Area', 'Sindhi Colony PG Road Area',
  'Minister Road Hospital Area', 'Ranigunj Secunderabad Area', 'Chilkalguda Secunderabad Area', 'Lalaguda Railway Workshop Area',
  'Mettuguda Metro Station Area', 'Tarnaka Metro Station Area', 'Habsiguda Street No 8 Area', 'Uppal Ring Road Metro Station',
  'Ramanthapur TV Studio Area', 'Nacharam Mallapur Link Road', 'Mallapur Industrial Sector', 'Chengicherla Forest Area',
  'Boduppal Ambedkar Nagar Area', 'Peerzadiguda Lake Area', 'Medipally Police Station Area', 'Narapally Nalla Malla Reddy College Area',
  'Ghatkesar Railway Station Area', 'Pocharam Sanskruti Township', 'L.B. Nagar Chintalkunta Area', 'Vanasthalipuram Deer Park Area',
  'Hayathnagar Word and Deed Area', 'Champapet Vaishnavi Nagar', 'Karmanghat Hanuman Temple Area', 'Saroornagar Indoor Stadium Area',
  'Kothapet Chaitanyapuri Metro Area', 'Dilsukhnagar Bus Depot Area', 'Malakpet Railway Station Area', 'Saidabad Singareni Colony',
  'Santosh Nagar Colony', 'Kanchanbagh Midhani Area', 'Chandrayangutta Police Station Area', 'Falaknuma Railway Station Area',
  'Shah Ali Banda Clock Tower Area', 'Moghalpura Sports Complex Area', 'Yakutpura Station Road', 'Darulshifa Area',
  'Purani Haveli Museum Area', 'Noorkhan Bazaar Area', 'Kishan Bagh Palace Area', 'Bahadurpura Nehru Zoo Park',
  'Puranapul Karwan Road', 'Attapur Happy Homes Area', 'Rajendranagar ICAR Area', 'Bandlaguda Jagir Suncity Area',
  'Peerancheru PBEL City Road', 'Gandipet Chaitanya Bharathi Institute', 'Kokapet Golden Mile Layout', 'Narsingi Gandipet Road',
  'Manikonda Puppalguda Golden Temple', 'Puppalguda Neknampur Lake Area', 'Alkapur Township Neknampur Area', 'Gachibowli ORR Exit Area',
  'Financial District US Consulate Road', 'Nanakramguda Golf Course Area', 'Gowlidoddy Q-City Campus', 'Gopanpally ICICI Towers Road',
  'Tellapur Villas Sector', 'Nallagandla Citizen Hospital Area', 'Serilingampally Lingampally Area', 'Miyapur JPN Nagar Area',
  'Chandanagar HUDA Colony Area', 'Madinaguda My Home Jewel Area', 'Hafeezpet Aditya Imperial Area', 'Kondapur Harsha Toyoto Area',
  'Madhapur Kavuri Hills Road', 'Hitech City Image Gardens Road', 'Pragathi Nagar KPHB Phase 9', 'Nizampet Vertex Pride Area',
  'Bachupally SLG Hospital Area', 'Bowrampet Oakridge School Area', 'Kompally Dola-ri-Dhani Road', 'Suchitra Circle Dairy Farm Road',
  'Jeedimetla Phase 3 Industrial', 'Quthbullapur Area', 'Quthbullapur Venkateshwara Nagar', 'Chintal Ganesh Temple Area',
  'Suraram Malla Reddy Hospital Area', 'Shamirpet Leonia Resort Area', 'Alwal Loyola Academy Road', 'Sainikpuri Radhika Theatre Road',
  'Yapral Kowkur Link Road', 'Kushaiguda Industrial Area', 'Kushaiguda ECIL X Roads', 'Cherlapally Industrial Area Phase 2',
  'Nagaram Dammaiguda Link Road', 'Rampally Village Area', 'Keesara Temple Road Area',

  // ============ MORE GATED COMMUNITIES, APARTMENTS, VILLAS & RESIDENCIES ============
  'My Home Raka', 'My Home Nishada Area', 'My Home Sayuk Tellapur', 'My Home Tarkshya Gachibowli',
  'Aparna Kanopy YellowBells', 'Aparna Cyber4 Kondapur', 'Aparna CyberShine Nallagandla', 'Aparna CyberLife Nallagandla',
  'Aparna Avani', 'Aparna Dharani', 'Aparna Sudharma', 'Aparna Elite',
  'Prestige City Bellagio Rajendranagar', 'Prestige High Fields Gachibowli', 'Prestige Clairemont Area',
  'Prestige Tranquil Kokapet', 'Prestige Vaishnavi Orchard Area', 'Prestige Beverly Hills Kokapet',
  'Rajapushpa Provincia Narsingi', 'Rajapushpa Imperia Tellapur', 'Rajapushpa Atria Kokapet',
  'Vasavi Atlantis Narsingi', 'Vasavi Metropolis Uppal', 'Vasavi Solitaire Heights Gachibowli',
  'Vasavi Urban Bachupally', 'Vasavi Waterfront Gachibowli', 'Vasavi Nandanam Area',
  'Lansum Eldorado Gandipet', 'Lansum Etania Gachibowli', 'Lansum Oxygen Area',
  'DSR Skymarq Kokapet', 'DSR Skymarq Villas', 'DSR The Twins Nanakramguda', 'DSR Skydrum Kokapet',
  'Incor One City Kukatpally', 'Incor Lake City Area', 'Incor Lake City Patancheru',
  'Candeur Crescent Nallagandla', 'Candeur Signature Tellapur', 'Candeur 40 Miyapur', 'Candeur Lakescape Tellapur',
  'SMR Vinay Iconia Kondapur', 'SMR Vinay Metropolitan Miyapur', 'SMR Vinay Boulder Conclave Area',
  'ASBL Spire Gachibowli', 'ASBL Lakeside Kokapet', 'ASBL Loft Financial District', 'ASBL Spectra Gachibowli',
  'Honer Aquantis Gachibowli', 'Honer Vivantis Gachibowli', 'Honer Signatis Kukatpally',
  'Sattva Necklace Pride Kavadiguda', 'Sattva Magnus Shaikpet', 'Sattva H Lites Area',
  'Hallmark Vicinia Narsingi', 'Hallmark Sunnyside Area', 'Hallmark Treasor Kokapet',
  'Muppas Melody Tellapur', 'Muppas Indraprastha Gachibowli', 'Muppas Green Meadows Area',
  'Rainbow Vistas Rock Garden Moosapet', 'Rainbow Vistas Phase 2', 'Rainbow Vistas Central Park',
  'Lodha Belleza Kukatpally', 'Lodha Meridian Kukatpally', 'Lodha Enclave Area',
  'Aliens Space Station Tellapur', 'Aliens Space Station 1 Kokapet',
  'Ramky One Galaxia Nallagandla', 'Ramky One Kosmos Nallagandla', 'Ramky Towers Gachibowli',
  'Aditya Imperial Heights Hafeezpet', 'Aditya Empress Towers Shaikpet',
  'Kalpataru Residency Sanath Nagar', 'Kalpataru Avante Sanath Nagar',
  'Triad Elite', 'Summit Gated Villas Tellapur', 'Provident Kenworth Rajendranagar', 'PBEL City Peerancheru',
  'Pacifica Hillcrest Financial District', 'Poddar Residency', 'Kohinoor Apartments', 'Fortune Fields Madhapur',
  
  // ============ MORE MICRO-AREAS, EXTENDED SUBURBS & LOCATIONS ============
  'Neknampur', 'Neknampur Village', 'Neknampur Lake Road', 'Puppalguda Neknampur',
  'Hydershakote', 'Hydershakote Village', 'Bandlaguda Jagir Hydershakote',
  'Kismatpur Village', 'Kismatpur Gandipet', 'Kismatpur Bandlaguda Jagir',
  'Peerancheru Village', 'Peerancheru TSPA Junction', 'TSPA Junction Area',
  'Gandipet Lake Road', 'Gandipet CBIT Road', 'Ocean Park Road Gandipet',
  'Gopanpally Village', 'Gopanpally Thanda Area', 'Gopanpally Wipro Road',
  'Gowlidoddy Village', 'Gowlidoddy Wipro Circle', 'Q-City Gowlidoddy',
  'Nallagandla HUDA Layout', 'Nallagandla Citizen Hospital Road', 'Nallagandla Lake Road',
  'Tellapur Lake Road', 'Tellapur Station Road Area', 'Tellapur ORR Exit Area',
  'Kollur Village', 'Kollur ORR Service Road', 'Kollur IT Corridor',
  'Vattinagulapally Village', 'Vattinagulapally Kokapet', 'Vattinagulapally ORR Area',
  'Mokila Village', 'Mokila Shankarpally Road', 'Shankarpally Station Road',
  'Narsingi Outer Ring Road', 'Narsingi Puppalguda Link Road', 'Narsingi Junction Circle',
  'Manikonda OU Colony Area', 'Manikonda Puppalguda Golden Temple Area', 'Manikonda Marichettu Tree Junction',
  'Alkapur Township Sector 2', 'Alkapur Township Sector 3', 'Alkapur Township Sector 4',
  'Adibatla IT SEZ Gated Villas', 'Adibatla Village', 'Adibatla TCS Campus Road',
  'Maheshwaram Gated Communities', 'Maheshwaram Gated Villas', 'Maheshwaram Town Area',
  'Kothur Industrial Area', 'Kothur Gated Communities', 'Kothur Village',
  'Kondapur Botanical Garden Road', 'Kondapur RTO Office Area', 'Kondapur Chirec School Road',
  'Madhapur Kavuri Hills Road', 'Madhapur Image Gardens Road', 'Madhapur Metro Station Area',
  'Hitech City Mindspace Road', 'Hitech City Cyber Towers Junction', 'Hitech City IKEA Road',
  'Kukatpally Housing Board Phase 9', 'KPHB Phase 9 Road', 'KPHB Phase 6 Colony',
  'Nizampet Road Metro Area', 'Nizampet Vertex Pride Road', 'Nizampet Village Road',
  'Pragathi Nagar Lake Area', 'Pragathi Nagar Katih Circle Road', 'Pragathi Nagar Kukatpally',
  'Bachupally Mallampet Cross Road', 'Bachupally SLG Hospital Area', 'Bachupally Miyapur Main Road',
  'Bowrampet IT Corridor', 'Bowrampet Gated Communities', 'Bowrampet Oakridge Road',
  'Mallampet Medical College Road', 'Mallampet Gated Communities', 'Mallampet Outer Ring Road',
  'Dundigal Base Road', 'Dundigal Air Force Academy Road', 'Dundigal Gandimaisamma Road',
  'Gandimaisamma Circle Area', 'Gandimaisamma Pragathi Nagar Link Road',
  'Kompally Cineplanet Highway', 'Kompally Runway 9 Road', 'Kompally Dola-ri-Dhani Area',
  'Suchitra Dairy Farm Road', 'Suchitra Highway Circle', 'Suchitra Jeedimetla Road',
  'Jeedimetla Industrial Hub Phase 3', 'Jeedimetla Phase 5 Road', 'Jeedimetla Village Area',
  'Quthbullapur Cross Roads', 'Quthbullapur Venkateshwara Nagar Area',
  'Chintal Ganesh Temple Area Road', 'Chintal Main Road Area',
  'Suraram Malla Reddy Hospital Road', 'Suraram Colony Area',
  'Shamirpet Lakefront Resorts', 'Shamirpet BITS Pilani Campus Road', 'Shamirpet ORR Service Road',
  'Gundlapochampally Station Road Area', 'Gundlapochampally Gated Villas Area',
  'Medchal Highway Toll Gate Road', 'Medchal Station Road Area',
  'Alwal Temple Road Area', 'Alwal Loyola College Road Area',
  'Sainikpuri Main Road Street 5', 'Sainikpuri Vayupuri Colony Area',
  'Yapral Kowkur Gated Communities', 'Yapral Defence Colony Area',

  // ============ OUTER RING ROAD (ORR) EXITS & SERVICE ROADS (Inside ORR) ============
  'Gachibowli ORR Exit 2', 'Narsingi ORR Exit 3', 'Gandipet ORR Exit 4', 'TSPA Junction ORR Exit 5', 'Rajendranagar ORR Exit 6',
  'Shamshabad ORR Exit 7', 'Tukkuguda ORR Exit 8', 'Adibatla ORR Exit 9', 'Bongloor ORR Exit 10', 'Pedda Amberpet ORR Exit 11',
  'Ghatkesar ORR Exit 12', 'Keesara ORR Exit 13', 'Shamirpet ORR Exit 14', 'Medchal ORR Exit 15', 'Dundigal ORR Exit 16',
  'Bowrampet ORR Exit 17', 'Mallampet ORR Exit 18', 'Patancheru ORR Exit 19', 'Kokapet ORR Service Road', 'Tellapur ORR Service Road',
  'Kollur ORR Service Road', 'Nanakramguda ORR Service Road', 'Financial District ORR Service Road', 'Puppalguda ORR Service Road',
  'Narsingi ORR Service Road', 'Bandlaguda Jagir ORR Service Road', 'Peerancheru ORR Service Road', 'Rajendranagar ORR Service Road',

  // ============ MICRO LANES & SUB-LOCALITIES (BANJARA HILLS / JUBILEE HILLS) ============
  'Banjara Hills Road No 2', 'Banjara Hills Road No 3', 'Banjara Hills Road No 4', 'Banjara Hills Road No 5',
  'Banjara Hills Road No 6', 'Banjara Hills Road No 7', 'Banjara Hills Road No 8', 'Banjara Hills Road No 9',
  'Banjara Hills Road No 10', 'Banjara Hills Road No 11', 'Banjara Hills Road No 13', 'Banjara Hills Road No 14',
  'Jubilee Hills Road No 1', 'Jubilee Hills Road No 2', 'Jubilee Hills Road No 3', 'Jubilee Hills Road No 4',
  'Jubilee Hills Road No 5', 'Jubilee Hills Road No 6', 'Jubilee Hills Road No 7', 'Jubilee Hills Road No 8',
  'Jubilee Hills Road No 9', 'Jubilee Hills Road No 10', 'Jubilee Hills Check Post Area', 'Jubilee Hills Nagarjuna Hills',
  'Jubilee Hills Saleem Nagar Colony', 'Jubilee Hills Siddamsetty Layout', 'Jubilee Hills Shyam Nagar Colony',
  'Jubilee Hills Dwarakapuri Colony', 'Jubilee Hills Osman Nagar Area', 'Jubilee Hills PVT Area',

  // ============ MICRO AREAS - AMEERPET & SR NAGAR ============
  'Ameerpet X Roads', 'Ameerpet Metro Station Lane', 'Ameerpet Sarada Devi Nagar', 'Ameerpet Telugu Akademi Road',
  'SR Nagar Metro Station Area', 'SR Nagar Sanjeeva Reddy Nagar Road', 'SR Nagar Police Station Lane',
  'Sanjeeva Reddy Nagar Block 1', 'Sanjeeva Reddy Nagar Block 2', 'Sanjeeva Reddy Nagar Block 3',
  'Sanjeeva Reddy Nagar Block 4', 'Sanjeeva Reddy Nagar Block 5', 'Srinagar Colony Main Road',
  'Srinagar Colony Lane 1', 'Srinagar Colony Lane 2', 'Srinagar Colony Lane 3', 'Madhura Nagar Colony',

  // ============ MICRO AREAS - KUKATPALLY LANES & SECTORS ============
  'KPHB Phase 1 Colony', 'KPHB Phase 2 Colony', 'KPHB Phase 3 Colony', 'KPHB Phase 4 Colony',
  'KPHB Phase 5 Colony', 'KPHB Phase 7 Colony', 'KPHB Phase 8 Colony', 'KPHB 12th Phase',
  'Kukatpally S R Nagar Lane', 'Kukatpally Balaji Nagar', 'Kukatpally Bhavani Nagar', 'Kukatpally Shivaji Nagar',
  'Kukatpally Meerpet', 'Kukatpally Pragathi Hills Colony', 'Kukatpally Vaishnavi Nagar',
  'Moosapet Bus Stand Area', 'Moosapet Madhura Nagar', 'Moosapet Indira Nagar', 'Moosapet Balanagar Link Road',
  'Balanagar Road No 1', 'Balanagar Road No 2', 'Balanagar Jeedimetla Link Road', 'Balanagar HMT Road',
  'Ferozguda Main Road', 'Ferozguda Colony', 'Ferozguda Balanagar Link',

  // ============ MICRO AREAS - MIYAPUR & CHANDANAGAR ============
  'Miyapur Metro Pillar 72 Area', 'Miyapur Allwyn X Roads Colony', 'Miyapur Aditya Nagar Colony',
  'Miyapur Prakash Nagar', 'Miyapur Ram Nagar Colony', 'Miyapur Ravi Nagar Colony',
  'Miyapur Vivekananda Nagar Colony', 'Miyapur HMT Township Road', 'Miyapur Narayana College Road',
  'Chandanagar West Area', 'Chandanagar East Area', 'Chandanagar Nizampet Road Junction',
  'Chandanagar Pragathi Nagar Feeder Road', 'Chandanagar HUDA Colony Road', 'Chandanagar Sanath Nagar Link',
  'Madinaguda Satya Nagar Colony', 'Madinaguda Prashanthi Nagar', 'Madinaguda Aditya Nagar',
  'Madinaguda Vivekananda Nagar', 'Madinaguda Bhavani Nagar Colony', 'Madinaguda Colony Main Road',

  // ============ MICRO AREAS - KONDAPUR & MADHAPUR ============
  'Kondapur Circle Area', 'Kondapur Guttala Begumpet', 'Kondapur Lakshmi Nagar Colony',
  'Kondapur Raidurgam Road', 'Kondapur Nandi Hills Colony', 'Kondapur Laxman Nagar',
  'Kondapur Anjaiah Nagar', 'Kondapur ECIL Layout', 'Kondapur Shivaji Nagar Colony',
  'Madhapur Bharat Nagar', 'Madhapur Dharma Reddy Colony', 'Madhapur Banjara Hills Extn',
  'Madhapur Srinivasa Nagar', 'Madhapur Tulasi Nagar', 'Madhapur Raviraj Nagar',
  'Madhapur Sri Krishna Nagar', 'Madhapur Aditya Nagar Colony', 'Madhapur Nandagiri Colony',

  // ============ MICRO AREAS - GACHIBOWLI & NANAKRAMGUDA ============
  'Gachibowli HIG Colony', 'Gachibowli MIG Colony', 'Gachibowli LIG Colony',
  'Gachibowli Shaikpet Road Junction', 'Gachibowli Pipeline Road', 'Gachibowli Hi-Tech Housing Colony',
  'Gachibowli Rahul Nagar', 'Gachibowli Bhaskar Nagar', 'Gachibowli Surya Nagar',
  'Nanakramguda Sector 1', 'Nanakramguda Sector 2', 'Nanakramguda Sector 3',
  'Nanakramguda HIG Colony', 'Nanakramguda Lane 1', 'Nanakramguda Kokapet Road',

  // ============ MICRO AREAS - KOKAPET & NARSINGI ============
  'Kokapet Phase 1', 'Kokapet Phase 2', 'Kokapet Phase 3', 'Kokapet Upperpally Road',
  'Kokapet Neopolis IT Park Area', 'Kokapet Old Village Road', 'Kokapet Venkateshwara Nagar',
  'Narsingi Sector 1', 'Narsingi Sector 2', 'Narsingi Sector 3', 'Narsingi Venkateshwara Colony',
  'Narsingi Bhavani Colony', 'Narsingi Vaishnavi Nagar Colony', 'Narsingi Shyam Nagar',
  'Narsingi Krishnarpana Colony', 'Narsingi Old Village', 'Narsingi Ramchandra Nagar',

  // ============ MICRO AREAS - KOMPALLY & SUCHITRA ============
  'Kompally Phase 1', 'Kompally Phase 2', 'Kompally Phase 3', 'Kompally Bharat Nagar',
  'Kompally Adarsh Nagar', 'Kompally Aditya Nagar', 'Kompally Shree Nagar Colony',
  'Kompally Srinivasa Nagar', 'Kompally Gangadhar Nagar', 'Kompally Rajarajeshwari Colony',
  'Suchitra Narayana Nagar', 'Suchitra Ashok Nagar', 'Suchitra Balaji Nagar',
  'Suchitra Bharat Nagar Colony', 'Suchitra Saraswathi Nagar', 'Suchitra Vasavi Nagar',
  'Suchitra Krishna Nagar', 'Suchitra Lakshmi Nagar', 'Suchitra Rajiv Nagar',

  // ============ MICRO AREAS - BACHUPALLY & NIZAMPET ============
  'Bachupally Phase 1', 'Bachupally Phase 2', 'Bachupally Sri Nagar Colony',
  'Bachupally Madhuranagar', 'Bachupally Balaji Nagar Colony', 'Bachupally Aditya Nagar',
  'Bachupally Vasavi Nagar', 'Bachupally Saraswathi Nagar Colony', 'Bachupally Sai Nagar',
  'Nizampet Main Road Colony', 'Nizampet Padmaja Nagar', 'Nizampet Vasavi Nagar',
  'Nizampet Srinivasa Nagar', 'Nizampet Aditya Nagar Colony', 'Nizampet Lakshmi Nagar Colony',
  'Nizampet Balaji Nagar', 'Nizampet SV Nagar Colony', 'Nizampet Sarada Colony',

  // ============ MICRO AREAS - UPPAL & HABSIGUDA ============
  'Uppal Canalside Road', 'Uppal Bhagayath Layout', 'Uppal Phase 1 Colony', 'Uppal Phase 2 Colony',
  'Uppal Nagar Colony', 'Uppal Shiva Nagar Colony', 'Uppal Sai Nagar Colony',
  'Uppal Srinivasa Nagar Colony', 'Uppal Nagole Road Colony', 'Uppal Medipally Road',
  'Habsiguda Street No 2', 'Habsiguda Street No 3', 'Habsiguda Street No 4', 'Habsiguda Street No 5',
  'Habsiguda Street No 6', 'Habsiguda Street No 7', 'Habsiguda Tarnaka Road Junction',
  'Habsiguda MLA Colony', 'Habsiguda Officers Colony', 'Habsiguda Vasavi Nagar',

  // ============ MICRO AREAS - DILSUKHNAGAR & KOTHAPET ============
  'Dilsukhnagar Street No 1', 'Dilsukhnagar Street No 2', 'Dilsukhnagar Street No 3',
  'Dilsukhnagar Street No 4', 'Dilsukhnagar Street No 5', 'Dilsukhnagar Venkateswara Colony',
  'Dilsukhnagar Krishna Nagar', 'Dilsukhnagar Venkataramana Colony', 'Dilsukhnagar Tirumala Nagar',
  'Kothapet Phase 1', 'Kothapet Phase 2', 'Kothapet Sri Nagar Colony', 'Kothapet Laxmi Nagar',
  'Kothapet Ambedkar Colony', 'Kothapet Veer Savarkar Nagar', 'Kothapet Gandhi Nagar',
  'Saroornagar Phase 1', 'Saroornagar Phase 2', 'Saroornagar Balaji Nagar', 'Saroornagar Kamala Nagar',

  // ============ MICRO AREAS - LB NAGAR & VANASTHALIPURAM ============
  'L.B. Nagar Phase 1', 'L.B. Nagar Phase 2', 'L.B. Nagar Phase 3', 'L.B. Nagar Saraswathi Nagar',
  'L.B. Nagar Balaji Nagar', 'L.B. Nagar Krishnaveni Colony', 'L.B. Nagar Sai Nagar',
  'Vanasthalipuram Phase 1', 'Vanasthalipuram Phase 2', 'Vanasthalipuram Phase 3',
  'Vanasthalipuram Balaji Nagar', 'Vanasthalipuram Srinivasa Colony', 'Vanasthalipuram Laxmi Nagar',
  'Hayathnagar Phase 1', 'Hayathnagar Phase 2', 'Hayathnagar Sai Nagar Colony',
  'Hastinapuram Phase 1', 'Hastinapuram Phase 2', 'Hastinapuram Phase 3', 'Hastinapuram Phase 4',
  'Hastinapuram Balaji Nagar', 'Hastinapuram Srinivasa Nagar Colony',

  // ============ MICRO AREAS - MALKAJGIRI & NEREDMET ============
  'Malkajgiri Phase 1', 'Malkajgiri Phase 2', 'Malkajgiri Sri Nagar Colony',
  'Malkajgiri Balaji Nagar Colony', 'Malkajgiri Bhavani Nagar', 'Malkajgiri Vidya Nagar',
  'Neredmet Phase 1', 'Neredmet Phase 2', 'Neredmet Balaji Nagar', 'Neredmet Vasavi Nagar',
  'Neredmet Vivekananda Nagar Colony', 'Neredmet Sri Nagar Colony', 'Neredmet Gandhi Nagar',
  'Safilguda Phase 1', 'Safilguda Phase 2', 'Safilguda Balaji Nagar', 'Safilguda Lakshmi Nagar',
  'Anandbagh Phase 1', 'Anandbagh Phase 2', 'Anandbagh Balaji Nagar Colony',
  'Moula Ali Phase 1', 'Moula Ali Phase 2', 'Moula Ali Srinivasa Nagar',

  // ============ MICRO AREAS - SECUNDERABAD LANES ============
  'Secunderabad Sarojini Devi Road', 'Secunderabad Rashtrapathi Road', 'Secunderabad Bank Street',
  'Secunderabad SP Road', 'Secunderabad Chapel Road', 'Secunderabad East Marredpally Road',
  'Marredpally Street No 1', 'Marredpally Street No 2', 'Marredpally Street No 3', 'Marredpally Park Lane',
  'Trimulgherry Phase 1', 'Trimulgherry Phase 2', 'Trimulgherry Colony Lane 1', 'Trimulgherry Colony Lane 2',
  'Alwal Phase 1', 'Alwal Phase 2', 'Alwal Phase 3', 'Alwal New Colony', 'Alwal Rajiv Nagar',
  'Alwal Gandhi Nagar', 'Alwal Venkateswara Nagar', 'Alwal Srinivasa Nagar Colony',
  'Sainikpuri Street No 1', 'Sainikpuri Street No 2', 'Sainikpuri Street No 3', 'Sainikpuri Street No 4',
  'Sainikpuri Street No 6', 'Sainikpuri Street No 7', 'Sainikpuri Vayupuri Road',
  'Yapral Phase 1', 'Yapral Phase 2', 'Yapral Kowkur Colony', 'Yapral Shiva Nagar',

  // ============ MICRO AREAS - OLD CITY LANES ============
  'Charminar Lane 1', 'Charminar Lane 2', 'Charminar Patherghati Road',
  'Malakpet Phase 1', 'Malakpet Phase 2', 'Malakpet New Colony', 'Malakpet Ambedkar Nagar',
  'Saidabad Phase 1', 'Saidabad Phase 2', 'Saidabad Colony', 'Saidabad Mangalhat',
  'Bandlaguda Phase 1', 'Bandlaguda Phase 2', 'Bandlaguda Lakshmi Nagar',
  'Attapur Phase 1', 'Attapur Phase 2', 'Attapur Colony', 'Attapur Shiva Nagar Colony',
  'Rajendranagar Phase 1', 'Rajendranagar Phase 2', 'Rajendranagar Colony',
  'Upparpally Phase 1', 'Upparpally Phase 2', 'Upparpally Srinivasa Nagar',
  'Chandrayangutta Phase 1', 'Chandrayangutta Phase 2', 'Chandrayangutta Sai Nagar',
  'Falaknuma Phase 1', 'Falaknuma Phase 2', 'Falaknuma Colony Road',

  // ============ MICRO AREAS - HAFEEZPET & SERILINGAMPALLY ============
  'Hafeezpet Phase 1', 'Hafeezpet Phase 2', 'Hafeezpet Main Road Colony',
  'Hafeezpet Sri Nagar Colony', 'Hafeezpet Rajiv Nagar', 'Hafeezpet Indira Nagar',
  'Hafeezpet Sai Nagar Colony', 'Hafeezpet Balaji Nagar', 'Hafeezpet Bhavani Nagar',
  'Serilingampally Phase 1', 'Serilingampally Phase 2', 'Serilingampally Phase 3',
  'Serilingampally Shashi Nagar', 'Serilingampally Yadagiri Nagar', 'Serilingampally Srinivasa Colony',
  'Serilingampally Gandhi Nagar Colony', 'Serilingampally Patelguda Area',

  // ============ MICRO AREAS - MEHDIPATNAM & TOLICHOWKI ============
  'Mehdipatnam Phase 1', 'Mehdipatnam Phase 2', 'Mehdipatnam Kishan Bagh Road',
  'Mehdipatnam Bhagya Nagar Colony', 'Mehdipatnam Vijaya Nagar Colony', 'Mehdipatnam Sai Nagar Colony',
  'Tolichowki Phase 1', 'Tolichowki Phase 2', 'Tolichowki Sai Nagar Colony',
  'Tolichowki Vijaya Nagar Colony', 'Tolichowki Golconda Cross Roads',
  'Masab Tank Phase 1', 'Masab Tank Phase 2', 'Masab Tank Greenland Colony',
  'Himayatnagar Lane 1', 'Himayatnagar Lane 2', 'Himayatnagar Lane 3', 'Himayatnagar Lakdikapul Link',
  'Narayanaguda Lane 1', 'Narayanaguda Lane 2', 'Narayanaguda Tank Road',

  // ============ MICRO AREAS - GHATKESAR & KEESARA ============
  'Ghatkesar Phase 1', 'Ghatkesar Phase 2', 'Ghatkesar Phase 3', 'Ghatkesar Village Road',
  'Ghatkesar Mandal Colony', 'Ghatkesar Venkateshwara Colony', 'Ghatkesar Balaji Nagar Colony',
  'Keesara Phase 1', 'Keesara Phase 2', 'Keesara Village Road', 'Keesara Mandal Office Area',
  'Keesara Balaji Nagar', 'Keesara Srinivasa Nagar Colony', 'Keesara ORR Exit Road',
  'Medipally Phase 1', 'Medipally Phase 2', 'Medipally Balaji Nagar', 'Medipally Srinivasa Nagar',
  'Peerzadiguda Phase 1', 'Peerzadiguda Phase 2', 'Peerzadiguda Colony Main Road',
  'Boduppal Phase 1', 'Boduppal Phase 2', 'Boduppal Sai Nagar Colony', 'Boduppal Balaji Nagar',
  'Nagole Phase 1', 'Nagole Phase 2', 'Nagole Srinivasa Nagar Colony',

  // ============ MICRO AREAS - NALLAGANDLA & TELLAPUR ============
  'Nallagandla Phase 1', 'Nallagandla Phase 2', 'Nallagandla Phase 3',
  'Nallagandla Sector 1', 'Nallagandla Sector 2', 'Nallagandla Sector 3',
  'Nallagandla Indira Nagar Colony', 'Nallagandla Sri Nagar Colony', 'Nallagandla Balaji Nagar',
  'Tellapur Phase 1', 'Tellapur Phase 2', 'Tellapur Phase 3', 'Tellapur Sector 1',
  'Tellapur Sector 2', 'Tellapur Sector 3', 'Tellapur Villas Block A', 'Tellapur Villas Block B',
  'Tellapur Villas Block C', 'Tellapur Villas Block D', 'Tellapur Colony Main Road',

  // ============ EMERGING MICRO AREAS - FINANCIAL DISTRICT & KOKAPET ============
  'Financial District Sector 1', 'Financial District Sector 2', 'Financial District Sector 3',
  'Financial District Wipro Road Lane', 'Financial District Q-City Road Lane',
  'Kokapet Sector 1', 'Kokapet Sector 2', 'Kokapet Sector 3', 'Kokapet Sector 4',
  'Kokapet Villas Block 1', 'Kokapet Villas Block 2', 'Kokapet Villas Block 3',
  'Puppalguda Sector 1', 'Puppalguda Sector 2', 'Puppalguda Village Main Road',
  'Manikonda Sector 1', 'Manikonda Sector 2', 'Manikonda Sector 3',
  'Manikonda Srinivasa Nagar Colony', 'Manikonda Balaji Nagar', 'Manikonda Indira Nagar Colony',

  // ============ MICRO AREAS - ECIL & KAPRA ============
  'ECIL Phase 1', 'ECIL Phase 2', 'ECIL X Roads Colony', 'ECIL Suryodaya Colony',
  'ECIL Balaji Nagar Colony', 'ECIL Srinivasa Nagar Colony', 'ECIL Vasavi Nagar',
  'Kapra Phase 1', 'Kapra Phase 2', 'Kapra Phase 3', 'Kapra Balaji Nagar Colony',
  'Kapra Srinivasa Nagar Colony', 'Kapra Indira Nagar Colony', 'Kapra Gandhi Nagar Colony',
  'Dammaiguda Phase 1', 'Dammaiguda Phase 2', 'Dammaiguda Colony Road',
  'Nagaram Phase 1', 'Nagaram Phase 2', 'Nagaram Colony Road',
  'Kushaiguda Phase 1', 'Kushaiguda Phase 2', 'Kushaiguda Colony Road',
  'AS Rao Nagar Phase 1', 'AS Rao Nagar Phase 2', 'AS Rao Nagar Balaji Nagar',
  'HB Colony Phase 1', 'HB Colony Phase 2', 'HB Colony Srinivasa Nagar',

  // ============ MICRO AREAS - SHAMIRPET & MEDCHAL ============
  'Shamirpet Phase 1', 'Shamirpet Phase 2', 'Shamirpet Phase 3',
  'Shamirpet Village Road', 'Shamirpet Mandal Colony', 'Shamirpet Lake Resort Road',
  'Medchal Phase 1', 'Medchal Phase 2', 'Medchal Phase 3', 'Medchal Colony Road',
  'Medchal Venkateshwara Nagar', 'Medchal Balaji Nagar Colony', 'Medchal Srinivasa Nagar',
  'Dundigal Phase 1', 'Dundigal Phase 2', 'Dundigal Colony Road', 'Dundigal Balaji Nagar',
  'Bowrampet Phase 1', 'Bowrampet Phase 2', 'Bowrampet Colony Road', 'Bowrampet Balaji Nagar',
  'Bahadurpally Phase 1', 'Bahadurpally Phase 2', 'Bahadurpally Colony Road',
  'Gandimaisamma Phase 1', 'Gandimaisamma Phase 2', 'Gandimaisamma Colony Road',
  'Gajularamaram Phase 1', 'Gajularamaram Phase 2', 'Gajularamaram Colony Road',
  'Maisammaguda Phase 1', 'Maisammaguda Phase 2', 'Maisammaguda Colony Road',

  // ============ MICRO AREAS - JEEDIMETLA & CHINTAL ============
  'Jeedimetla Phase 2', 'Jeedimetla Phase 4', 'Jeedimetla Phase 6', 'Jeedimetla Colony Road',
  'Jeedimetla IDPL Area', 'Jeedimetla Balaji Nagar', 'Jeedimetla Srinivasa Nagar Colony',
  'Chintal Phase 1', 'Chintal Phase 2', 'Chintal Colony Road', 'Chintal Balaji Nagar',
  'Chintal Srinivasa Nagar', 'Chintal Venkateswara Nagar', 'Chintal Gandhi Nagar',
  'Suraram Phase 1', 'Suraram Phase 2', 'Suraram Colony Road', 'Suraram Balaji Nagar',
  'Hydernagar Phase 1', 'Hydernagar Phase 2', 'Hydernagar Colony Road',
  'Pragathi Nagar Phase 1', 'Pragathi Nagar Phase 2', 'Pragathi Nagar Phase 3',

  // ============ MICRO AREAS - RAMANTHAPUR & NACHARAM ============
  'Ramanthapur Phase 1', 'Ramanthapur Phase 2', 'Ramanthapur Colony Road',
  'Ramanthapur Balaji Nagar', 'Ramanthapur Srinivasa Nagar', 'Ramanthapur Gandhi Nagar',
  'Nacharam Phase 1', 'Nacharam Phase 2', 'Nacharam Colony Road', 'Nacharam Balaji Nagar',
  'Nacharam Industrial Phase 1', 'Nacharam Industrial Phase 2', 'Nacharam IDPL Area',
  'Mallapur Phase 1', 'Mallapur Phase 2', 'Mallapur Colony Road', 'Mallapur Balaji Nagar',
  'Chengicherla Phase 1', 'Chengicherla Phase 2', 'Chengicherla Colony Road',

  // ============ MICRO AREAS - TARNAKA & METTUGUDA ============
  'Tarnaka Phase 1', 'Tarnaka Phase 2', 'Tarnaka Osmania University Colony',
  'Tarnaka Lalapet Road', 'Tarnaka Srinivasa Nagar', 'Tarnaka Balaji Nagar',
  'Mettuguda Phase 1', 'Mettuguda Phase 2', 'Mettuguda Colony Road',
  'Mettuguda Railway Quarters', 'Mettuguda Balaji Nagar', 'Mettuguda Srinivasa Nagar',
  'Sitaphalmandi Phase 1', 'Sitaphalmandi Phase 2', 'Sitaphalmandi Colony Road',
  'Warasiguda Phase 1', 'Warasiguda Phase 2', 'Warasiguda Colony Road',
  'Lalaguda Phase 1', 'Lalaguda Phase 2', 'Lalaguda Colony Road', 'Lalaguda Railway Quarters',
  'Chilakalguda Phase 1', 'Chilakalguda Phase 2', 'Chilakalguda Colony Road',
  'Padmarao Nagar Phase 1', 'Padmarao Nagar Phase 2', 'Padmarao Nagar Colony Road',
  'Kavadiguda Phase 1', 'Kavadiguda Phase 2', 'Kavadiguda Colony Road',

  // ============ OUTER HYDERABAD – RANGAREDDY DISTRICT TOWNS ============
  'Shamshabad', 'Shamshabad Town', 'Rajiv Gandhi International Airport Area', 'Mamidipally',
  'Yadadri', 'Ibrahimpatnam', 'Manchal', 'Kothur', 'Shadnagar', 'Farooqnagar',
  'Tandur', 'Vikarabad', 'Moinabad Village', 'Chevella', 'Dharur',
  'Pudur', 'Pedda Amberpet', 'Bongloor', 'Tukkuguda', 'Adibatla',

  // ============ SANGAREDDY DISTRICT LOCATIONS ============
  'Sangareddy', 'Sangareddy Town', 'Patancheru Town', 'Zaheerabad', 'Ramachandrapuram',
  'Narayankhed', 'Jogipet', 'Sadasivpet', 'Andole', 'Manoor',
  'Kulcharam', 'Nyalkal', 'Narsapur Sangareddy', 'Vatpally', 'Hathnoora',

  // ============ MEDCHAL–MALKAJGIRI DISTRICT EXTRA TOWNS ============
  'Medchal Town', 'Medchal MDO Office Area', 'Medchal Bypass Road', 'Alwal Bus Depot Area',
  'Bhongir Road Area', 'Yacharam', 'Ghatkesar Town', 'Keesara Town', 'Bibinagar Town',
  'Pocharam Village', 'Turkapally Village', 'Thumkunta Town', 'Hakimpet Town',

  // ============ PATANCHERU INDUSTRIAL BELT ============
  'Patancheru Phase 1 APIIC', 'Patancheru Phase 2 APIIC', 'Patancheru Phase 3',
  'Pashamylaram Industrial Area', 'Pashamylaram Phase 1', 'Pashamylaram Phase 2',
  'Isnapur Village Road', 'Isnapur Cross Roads', 'Ramachandrapuram Road Patancheru',
  'Rudraram Village', 'Rudraram APIIC Area', 'NATCO Pharma Road Area',
  'Autonagar Patancheru', 'APSRTC Depot Patancheru Road',

  // ============ ADIBATLA & MAHESHWARAM TOWNSHIPS ============
  'Adibatla Phase 1', 'Adibatla Phase 2', 'Adibatla Phase 3', 'Adibatla TCS SEZ Road',
  'Adibatla Infosys Road', 'Adibatla Aerospace SEZ', 'Adibatla IT Corridor Phase 2',
  'Maheshwaram Phase 1', 'Maheshwaram Phase 2', 'Maheshwaram Rajiv Gandhi Nagar',
  'Maheshwaram ALEAP Women Industrial Estate', 'Maheshwaram Township Road',
  'Kothur Phase 1', 'Kothur Phase 2', 'Kothur Highway Colony',
  'Tukkuguda Phase 1', 'Tukkuguda Phase 2', 'Tukkuguda Gated Villas',
  'Bongloor Phase 1', 'Bongloor Highway Road', 'Pedda Amberpet Village Road',

  // ============ SHAMSHABAD & AIRPORT AREA ============
  'Shamshabad Old Town', 'Shamshabad New Colony', 'Shamshabad Revenue Colony',
  'Airport Road RGIA', 'Shamshabad Airport Peripheral Road', 'Shamshabad APSRTC Area',
  'Mamidipally Village', 'Mamidipally Highway Area', 'Pahadishareef',
  'Pahadishareef Dargah Area', 'Pahadishareef Old Colony', 'Pahadishareef New Colony',
  'Rajendranagar Airport Feeder Road', 'Budvel Airport Road', 'Kismatpur Highway Area',

  // ============ IBRAHIMPATNAM & YADADRI AREA ============
  'Ibrahimpatnam Town', 'Ibrahimpatnam Old Colony', 'Ibrahimpatnam Revenue Colony',
  'Manchal Village', 'Manchal Highway Road', 'Manchal TSPA Road',
  'Yadadri Bhongir Town', 'Yadadri Temple Town', 'Bhongir Fort Area', 'Bhongir Station Road',
  'Mothkur Road Area', 'Choutuppal Town', 'Raigir Village Area',

  // ============ VIKARABAD & CHEVELLA CORRIDOR ============
  'Vikarabad Town', 'Vikarabad Station Area', 'Vikarabad Old Colony',
  'Chevella Town', 'Chevella Cross Roads', 'Chevella Revenue Colony',
  'Moinabad Town', 'Moinabad X Roads', 'Moinabad Chevella Highway Colony',
  'Dharur Village', 'Dharur Cross Roads', 'Pudur Village Area',

  // ============ NEW GATED COMMUNITIES – ADIBATLA / SOUTH HYD ============
  'Provident Kenworth Rajendranagar Phase 2', 'Provident Parkwoods Rajendranagar',
  'Sumadhura Folium Adibatla', 'Shriram Blue Isle Adibatla',
  'Green Valley Adibatla', 'Sattva East Crest Adibatla', 'Sattva Sky City Adibatla',
  'Urbanrise World of Joy Maheshwaram', 'Vajra Residency Maheshwaram', 'Vajra Hills Bandlaguda',
  'Mahindra Eden Maheshwaram', 'Godrej Infinity Kokapet', 'Godrej Zenith Kokapet',
  'Godrej Reserve Kokapet', 'Godrej Oasis Kokapet',

  // ============ NEW GATED COMMUNITIES – NORTH & WEST HYD ============
  'Aliens Space Station 2 Tellapur', 'Aliens Habitat Tellapur',
  'Urbanrise Trendsetters Bachupally', 'Urbanrise Westside Bachupally',
  'Shriram Chirping Woods Kompally', 'Shriram Grand One Kompally',
  'Phoenix Kessaku Kokapet', 'Phoenix One Kokapet', 'Phoenix Palladium Kokapet',
  'Incor PBEL City Phase 3', 'Incor PBEL City Phase 4',
  'My Home Avatar Manikonda', 'My Home Vihanga Manikonda',
  'Rainbow Vertex Nallagandla', 'Rainbow One Tellapur',
  'NCC Urban Gardenia Miyapur', 'NCC Urban One Miyapur',

  // ============ SECUNDERABAD EXTENSION & CANTONMENT AREAS ============
  'Secunderabad Cantonment', 'Secunderabad East', 'Secunderabad West',
  'Bowenpally', 'Bowenpally Market Area', 'Bowenpally Vegetable Market Road',
  'Marredpally Circle Area', 'Marredpally Stadium Road',
  'Begumpet Colony', 'Begumpet Officers Colony', 'Begumpet Air Force Area',
  'Bolarum Cantonment Phase 1', 'Bolarum Cantonment Phase 2',
  'Malkajgiri Cantonment Area', 'Neredmet Cantonment Road',
  'Tirumalagiri', 'Tirumalagiri Colony', 'Tirumalagiri Officers Quarters',
  'Picket Junction Area', 'James Street Secunderabad', 'Trevor Road Secunderabad',
  'General Bazaar Secunderabad', 'Residency Road Secunderabad', 'Clock Tower Circle Secunderabad',

  // ============ PANJAGUTTA TO NAMPALLY CORRIDOR ============
  'Panjagutta Circle', 'Panjagutta Green Land Colony', 'Panjagutta Amrutha Hills',
  'Saifabad Colony', 'Saifabad Assembly Colony', 'Raj Bhavan Colony Road',
  'Khairatabad Circle', 'Khairatabad Sardar Patel Road', 'Khairatabad Govt Quarters',
  'Nampally Exhibition Grounds Area', 'Nampally Station Road', 'Nampally Gandhi Bhawan Area',
  'Abids Mozamjahi Market', 'Abids Basheer Bagh', 'Abids Public Garden Area',
  'Basheerbagh Circle', 'Basheerbagh Liberty Area', 'Lakdikapul Bridge Area',

  // ============ HITECH CITY EXTENDED MICRO AREAS ============
  'Hitech City Phase 1', 'Hitech City Phase 2', 'Hitech City Phase 3',
  'Mindspace IT Park Area', 'Mindspace Raheja Area', 'Mindspace DLF Building Road',
  'Cyber Pearl Area', 'Cyber Gateway Madhapur', 'Image Gardens Area Madhapur',
  'Westin Hotel Road Hitech City', 'Novotel Hitech City Area',
  'L&T Infocity Road', 'Inorbit Mall Road Hitech City', 'IKEA Junction Road',
  'Raheja Mindspace Junction', 'Salarpuria Knowledge City Road',

  // ============ FINANCIAL DISTRICT EXTENDED ============
  'Nanakramguda ISB Road', 'Nanakramguda US Consulate Road', 'ISB Hyderabad Campus Area',
  'One Horizon Center Road', 'Waverock Building Road', 'Laxmi Cyber City Road',
  'DLF Cyber City Gachibowli', 'Microsoft Campus Gachibowli Road', 'Oracle Park Gachibowli',
  'Wipro SEZ Gachibowli Road', 'JNTU Alumni Avenue Gachibowli',

  // ============ KUKATPALLY–BALANAGAR EXTENDED ============
  'Kukatpally KPHB Main Road', 'Kukatpally Safilguda Extension', 'Kukatpally Old Town Area',
  'IDPL Balanagar Area', 'IDPL Colony Balanagar', 'Moula Ali Industrial Area',
  'Nacharam Industrial Sector 1', 'Nacharam Industrial Sector 2', 'Nacharam Industrial Sector 3',
  'Cherlapally Industrial Phase 1', 'Cherlapally Industrial Phase 3',
  'Kattedan Industrial Area', 'Kattedan Phase 1', 'Kattedan Phase 2', 'Kattedan APIIC Area',
  'Uppal Industrial Area', 'Uppal Bag Layout Area', 'Nagole APSRTC Depot Road',

  // ============ OLD CITY EXTENDED MICRO AREAS ============
  'Sultan Bazar Market Area', 'Laad Bazaar Charminar', 'Madina Circle Old City',
  'Gulzar Houz Area', 'Shalibanda Market Area', 'Shahi Masjid Area Old City',
  'Hussaini Alam Area', 'Aliabad Colony Old City', 'Habeeb Nagar Old City',
  'Habeeb Nagar Colony', 'Noor Khan Bazaar Inner Lane', 'Mir Alam Market Area',
  'Dhoolpet Market Area', 'Dhoolpet Old Colony', 'Chatrinaka Area', 'Chatrinaka Colony',
  'Santosh Nagar Colony Old City', 'Kanchanbagh Colony', 'Kanchanbagh DRDO Road',
  'Langar Houz Area', 'Langar Houz Colony', 'MD Lines Tolichowki',

  // ============ DILSUKHNAGAR EXTENDED ============
  'Dilsukhnagar Huda Complex Area', 'Dilsukhnagar Gaddiannaram Road',
  'Gaddiannaram', 'Gaddiannaram Market Road', 'Gaddiannaram Colony',
  'Moosarambagh Area', 'Moosarambagh Colony', 'Moosarambagh Bridge Road',
  'Amberpet Colony', 'Amberpet Pillar Road', 'Amberpet Main Road',
  'Nagarjuna Sagar Road Area', 'Malakpet Racing Club Area', 'Chaderghat Area',
  'Chaderghat Bridge Road', 'Chaderghat Colony', 'Yakutpura Station Market Area',

  // ============ MIYAPUR–LINGAMPALLY EXTENDED ============
  'Lingampally Station Colony', 'Lingampally MMTS Junction', 'Lingampally Old Village',
  'HMT Swarnapuri Colony', 'HMT Balanagar Road', 'BHEL R&D Area',
  'BHEL Township Phase 1', 'BHEL Township Phase 2', 'BHEL Township Phase 3',
  'Ramachandrapuram Miyapur Road', 'Ramachandrapuram Old Colony', 'Ramachandrapuram Revenue Colony',
  'Patancheru MMTS Station Area', 'Patancheru X Roads', 'Patancheru Bypass Road',
  'Beeramguda Station Road', 'Beeramguda Phase 1', 'Beeramguda Phase 2',
  'Isnapur Highway Area', 'Isnapur Revenue Colony',

  // ============ KOMPALLY–MEDCHAL HIGHWAY STRIP ============
  'Kompally Suchitra Cross Road', 'Kompally Outer Ring Road Exit',
  'Kompally Alwal Link Road', 'Kompally Shamirpet Link Road',
  'Kompally Revenue Colony', 'Kompally Bairamalguda Road',
  'Turkapally Cross Roads', 'Turkapally Revenue Colony', 'Turkapally Industrial Area',
  'Thumkunta Cross Roads', 'Thumkunta Revenue Colony',
  'Bollaram Industrial Area', 'Bollaram IDPL Area', 'Bollaram Village',
  'Jinnaram Village', 'Jinnaram Industrial Area', 'Jinnaram Sangareddy Road',

  // ============ ECIL–KAPRA–RAMPALLY EXTENDED ============
  'ECIL Kamala Nagar Colony', 'ECIL S.A.I Colony', 'ECIL Vikaspuri Colony',
  'ECIL Brindavan Colony', 'ECIL Vaishnavee Colony', 'ECIL Nehru Nagar',
  'Kapra Kamala Nagar', 'Kapra Brindavan Nagar', 'Kapra Vivekananda Nagar',
  'Rampally Phase 1', 'Rampally Phase 2', 'Rampally Revenue Colony',
  'Rampally Cherlapally Link Road', 'Rampally MIDC Area',
  'Jawaharnagar Colony', 'Jawaharnagar Revenue Area', 'Jawaharnagar Dump Yard Road',

  // ============ VANASTHALIPURAM–LB NAGAR EXTENDED ============
  'Vanasthalipuram MIDC Area', 'Vanasthalipuram Saradhi Colony',
  'Saroornagar Stadium Colony', 'Saroornagar Vijayapuri Colony',
  'Karmanghat Colony', 'Karmanghat Old Area', 'Karmanghat Feeder Road',
  'Champapet Vaishnavi Colony', 'Champapet Old Colony', 'Champapet Revenue Area',
  'Bairamalguda Phase 3', 'Bairamalguda Phase 4', 'Bairamalguda Revenue Colony',
  'Mansoorabad Phase 1', 'Mansoorabad Phase 2', 'Mansoorabad Revenue Colony',
  'Hayathnagar Revenue Colony', 'Hayathnagar Industrial Road',
  'Pochampally Weaving Village', 'Pochampally Revenue Colony'
]));

