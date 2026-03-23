export const HYDERABAD_LOCATIONS = Array.from(new Set([
  // ============ CORE HYDERABAD (Central) ============
  'Abids', 'Nampally', 'Khairatabad', 'Lakdikapul', 'Masab Tank', 'Himayatnagar', 'Narayanaguda', 'Basheerbagh', 'Koti', 'Sultan Bazar', 'Barkatpura', 'Saifabad',
  'Mehdipatnam', 'Toli Chowki', 'Asif Nagar', 'Mallepally', 'Vijay Nagar Colony', 'Humayun Nagar', 'Gudimalkapur', 'Murad Nagar', 'Rethibowli', 'Amba Gardens', 'Ambedkar Nagar',
  'Panjagutta', 'Ameerpet', 'Begumpet', 'Somajiguda', 'Erramanzil', 'Raj Bhavan Road', 'Srinagar Colony', 'Madhura Nagar', 'Yousufguda', 'Vengal Rao Nagar', 'Krishna Nagar', 'Indira Nagar',
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
  'Marredpally', 'East Marredpally', 'West Marredpally', 'Lalaguda', 'Mettuguda', 'Sitaphalmandi', 'Warasiguda', 'Chilakalguda', 'Padmarao Nagar', 'Kavadiguda', 'Chilkalguda',
  'Alwal', 'Old Alwal', 'New Alwal', 'Father Balaiah Nagar', 'R.K. Puram', 'Subhash Nagar', 'Lothkunta', 'Venkatapuram', 'Temple Alwal', 'Loyola College Area',
  'Trimulgherry', 'Tirumalgherry', 'Picket', 'Gunrock Enclave', 'Karkhana', 'Vikrampuri', 'Diamond Point', 'Sikh Village', 'Sainikpuri', 'Yapral', 'Defence Colony', 'Vayupuri',
  'Bolarum', 'Macha Bollaram', 'Kowkur', 'Ammuguda', 'Risala Bazaar', 'Hakimpet', 'Jawahar Nagar', 'Bolarum Golf Course Area',
  
  // ============ MALKAJGIRI & EAST ============
  'Malkajgiri', 'Safilguda', 'Anandbagh', 'Neredmet', 'Old Neredmet', 'Vinayak Nagar', 'Goutham Nagar', 'Moula Ali', 'Kushaiguda', 'HB Colony', 'AS Rao Nagar', 'Kamala Nagar', 'Dr AS Rao Nagar',
  'Uppal', 'Habsiguda', 'Ramanthapur', 'Nacharam', 'Mallapur', 'Chengicherla', 'Boduppal', 'Nagole', 'Bandlaguda', 'Nagaram', 'Dammaiguda', 'Peerzadiguda', 'Laxmi Nagar',
  'Kapra', 'ECIL', 'Sainikpuri', 'Yapral', 'Radhika Theatre Area', 'Vayupuri', 'Saket', 'Kapra Lake Area', 'Cherlapally', 'Rampally',
  'L.B. Nagar', 'Vanasthalipuram', 'Hayath Nagar', 'Champapet', 'Karmanghat', 'Bairamalguda', 'Hastinapuram', 'Auto Nagar', 'Mansoorabad', 'Nagole Road', 'RK Puram LB Nagar',
  
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
]));
