const markets = require('./marketNames')
const products = require('./productNames')
const dictionary = require('./dictionary')

//procedureComm
let procedureCommDict = Object.values(dictionary.procedureComm)
procedureCommDict = [...new Set(procedureCommDict)]

let procedureCommDictStr = []
for(let i=0; i<procedureCommDict.length; i++){
  procedureCommDictStr.push({procedurecommodity:procedureCommDict[i]})
}





const marketLabels = Object.values(markets.markets)


marketStructure = []
for (let i=0; i<marketLabels.length; i++){
  marketStructure.push({commoditymarket: marketLabels[i]})
}

const productLabels = Object.values(products.products)

productStructure = []
for (let i=0; i<productLabels.length; i++){
  productStructure.push({commodityproduct: productLabels[i]})
}

const catOrder = {
    education: {
      labels: [
        "University/College",
        "Secondary",
        "Primary",
        "No formal education"
      ],
      structure: [
        { education: "No formal education" },
        { education: "Primary" },
        { education: "Secondary" },
        { education: "University/College" }
      ]
    },
    gender: {
      labels: ["Female", "Male"],
      structure: [{ gender: "Male" }, { gender: "Female" }]
    },
    crossing_freq: {
      labels: ["Monthly", "Weekly", "Daily", "Never"],
      structure: [
        { crossing_freq: "Never" },
        { crossing_freq: "Daily" },
        { crossing_freq: "Weekly" },
        { crossing_freq: "Monthly" }
      ]
    },
    crossing_location: {
      labels: [
        "Busia",
        "Cyanika",
        "Katuna",
        "Loitokitok",
        "Malaba",
        "Mutukula",
        "Namanga",
        "Nyingine",
        "Other",
        "Rubavu-Goma",
        "Sirare/Isebania",
        "Taveta"
      ],
      structure: [
        { crossing_location: "Busia" },
        { crossing_location: "Cyanika" },
        { crossing_location: "Katuna" },
        { crossing_location: "Loitokitok" },
        { crossing_location: "Malaba" },
        { crossing_location: "Mutukula" },
        { crossing_location: "Namanga" },
        { crossing_location: "Nyingine" },
        { crossing_location: "Other" },
        { crossing_location: "Rubavu-Goma" },
        { crossing_location: "Sirare/Isebania" },
        { crossing_location: "Taveta" }
      ]
    },
    age: {
      labels: ["<20", "21-30", "31-40", "41-50", "51-60", ">60"],
      structure: [
        { age: "<20" },
        { age: "21-30" },
        { age: "31-40" },
        { age: "41-50" },
        { age: "51-60" },
        { age: ">60" }
      ]
    },
    country_of_residence: {
      labels: ["KEN", "RWA", "TZA", "UGA"],
      structure: [
        { country_of_residence: "KEN" },
        { country_of_residence: "UGA" },
        { country_of_residence: "RWA" },
        { country_of_residence: "TZA" }
      ]
    },
    primary_income: {
      labels: ["No", "Yes"],
      structure: [{ primary_income: "Yes" }, { primary_income: "No" }]
    },
    language: {
      labels: ["English", "Kinyarwanda", "Luganda", "Lukiga", "Swahili"],
      structure: [
        { language: "English" },
        { language: "Swahili" },
        { language: "Luganda" },
        { language: "Kinyarwanda" },
        { language: "Lukiga" }
      ]
    },
    produce: {
      labels: ["No", "Yes"],
      structure: [{ produce: "Yes" }, { produce: "No" }]
    },
    //   // TODO: add   a comma here ☝️ when you uncomment the code
    procedurecommodity: {
      labels: procedureCommDict,
      structure: procedureCommDictStr
    },
    procedurecommoditycat: {
      labels: [
        " Bees and Their Products",
        "Cereals",
        "Clothing & Shoes",
        "Cosmetics",
        "Fish Products",
        "Fruits",
        "Legumes",
        "Legumes ",
        "Livestock & Livestock Products",
        "Poultry",
        "Pulses",
        "Timber",
        "Tubers",
        "Vegetables"
      ],
      structure: [
        { procedurecommoditycat: " Bees and Their Products" },
        { procedurecommoditycat: "Cereals" },
        { procedurecommoditycat: "Clothing & Shoes" },
        { procedurecommoditycat: "Cosmetics" },
        { procedurecommoditycat: "Fish Products" },
        { procedurecommoditycat: "Fruits" },
        { procedurecommoditycat: "Legumes" },
        { procedurecommoditycat: "Legumes " },
        { procedurecommoditycat: "Livestock & Livestock Products" },
        { procedurecommoditycat: "Poultry" },
        { procedurecommoditycat: "Pulses" },
        { procedurecommoditycat: "Timber" },
        { procedurecommoditycat: "Tubers" },
        { procedurecommoditycat: "Vegetables" }
      ]
    },
  
    proceduredest: {
      labels: [
        "KEN",
        "KEN->TZA",
        "KEN->UGA",
        "Kenya->Tanzania",
        "Kenya->Uganda",
        "Maize",
        "OutsideEAC",
        "TZA->KEN",
        "UGA",
        "UGA->KEN"
      ],
      structure: [
        { proceduredest: "KEN" },
        { proceduredest: "KEN->TZA" },
        { proceduredest: "KEN->UGA" },
        { proceduredest: "Kenya->Tanzania" },
        { proceduredest: "Kenya->Uganda" },
        { proceduredest: "Maize" },
        { proceduredest: "OutsideEAC" },
        { proceduredest: "TZA->KEN" },
        { proceduredest: "UGA" },
        { proceduredest: "UGA->KEN" }
      ]
    },
    procedurerequireddocument: {
      labels: [
        "Bill of Lading",
        "Certificate of Origin",
        "Import Entry Declaration Form (SAD)",
        "Import Permit",
        "National ID Card/Passport",
        "Phytosanitary Certificate",
        "Simplified Certificate Of Origin (SCOO)",
        "Valid Invoice",
        "Yellow Fever Card"
      ],
  
      structure: [
        { procedurerequireddocument: "Bill of Lading" },
        { procedurerequireddocument: "Certificate of Origin" },
        { procedurerequireddocument: "Import Entry Declaration Form (SAD)" },
        { procedurerequireddocument: "Import Permit" },
        { procedurerequireddocument: "National ID Card/Passport" },
        { procedurerequireddocument: "Phytosanitary Certificate" },
        {
          procedurerequireddocument: "Simplified Certificate Of Origin (SCOO)"
        },
        { procedurerequireddocument: "Valid Invoice" },
        { procedurerequireddocument: "Yellow Fever Card" }
      ]
    },
  
    procedurerelevantagency: {
      labels: [
        "COMESA Trade Information Desk Office (TIDO)",
        "Kenya National Chamber of Commerce & Industry (KNCCI)",
        "Kenya Plant Health Inspectorate Service (KEPHIS)",
        "Kenya Revenue Authority (KRA)",
        "Ministry of Agriculture Animal Industry & Fisheries (MAAIF)",
        "National Biosafety Authority (NBA)",
        "PORT Health",
        "Uganda National Bureau of Standards (UNBS)",
        "Uganda Police Dpts",
        "Uganda Revenue Authority (URA)"
      ],
  
      structure: [
        {
          procedurerelevantagency: "COMESA Trade Information Desk Office (TIDO)"
        },
        {
          procedurerelevantagency:
            "Kenya National Chamber of Commerce & Industry (KNCCI)"
        },
        {
          procedurerelevantagency:
            "Kenya Plant Health Inspectorate Service (KEPHIS)"
        },
        { procedurerelevantagency: "Kenya Revenue Authority (KRA)" },
        {
          procedurerelevantagency:
            "Ministry of Agriculture Animal Industry & Fisheries (MAAIF)"
        },
        { procedurerelevantagency: "National Biosafety Authority (NBA)" },
        { procedurerelevantagency: "PORT Health" },
        {
          procedurerelevantagency: "Uganda National Bureau of Standards (UNBS)"
        },
        { procedurerelevantagency: "Uganda Police Dpts" },
        { procedurerelevantagency: "Uganda Revenue Authority (URA)" }
      ]
    },
    procedureorigin: {
      labels: ["EAC", "KEN", "Outside EAC", "OutsideEAC", "TZA->KEN"],
      structure: [
        { procedureorigin: "EAC" },
        { procedureorigin: "KEN" },
        { procedureorigin: "Outside EAC" },
        { procedureorigin: "OutsideEAC" }
      ]
    },
    commoditycountry: {
      labels: [
        "BDI",
        "DRC",
        "KEN",
        "MWI",
        "RWA",
        "SSD",
        "TZA",
        "UGA",
        "SOM",
        "ETH"
      ],
      structure: [
        { commoditycountry: "BDI" },
        { commoditycountry: "DRC" },
        { commoditycountry: "KEN" },
        { commoditycountry: "MWI" },
        { commoditycountry: "RWA" },
        { commoditycountry: "SSD" },
        { commoditycountry: "TZA" },
        { commoditycountry: "UGA" },
        { commoditycountry: "SOM" },
        { commoditycountry: "ETH" }
      ]
    },
  
    commoditymarket: {
      labels: marketLabels,
      structure: marketStructure
    },
    commodityproduct: {
      labels: productLabels,
      structure:productStructure
    },
  
    commoditycat: {
      labels: [
        "Animal Product",
        "Animal Products",
        "Beans",
        "Cereals - Maize",
        "Cereals - Other",
        "Cereals - Rice",
        "Dry Maize",
        "Farm Input",
        "Farm Inputs",
        "Fruits",
        "Fuel",
        "Green Gram",
        "Imported Rice",
        "Maharagwe",
        "Maize Flour",
        "Matunda",
        "Mixed Beans",
        "Nafaka ",
        "Nafaka Za Mahindi",
        "Other",
        "Peas",
        "Roots & Tubers",
        "Seeds & Nuts",
        "Vegetable",
        "Vegetables"
      ],
      structure: [
        { commoditycat: "Animal Product" },
        { commoditycat: "Animal Products" },
        { commoditycat: "Beans" },
        { commoditycat: "Cereals - Maize" },
        { commoditycat: "Cereals - Other" },
        { commoditycat: "Cereals - Rice" },
        { commoditycat: "Dry Maize" },
        { commoditycat: "Farm Input" },
        { commoditycat: "Farm Inputs" },
        { commoditycat: "Fruits" },
        { commoditycat: "Fuel" },
        { commoditycat: "Green Gram" },
        { commoditycat: "Imported Rice" },
        { commoditycat: "Maharagwe" },
        { commoditycat: "Maize Flour" },
        { commoditycat: "Matunda" },
        { commoditycat: "Mixed Beans" },
        { commoditycat: "Nafaka " },
        { commoditycat: "Nafaka Za Mahindi" },
        { commoditycat: "Other" },
        { commoditycat: "Peas" },
        { commoditycat: "Roots & Tubers" },
        { commoditycat: "Seeds & Nuts" },
        { commoditycat: "Vegetable" },
        { commoditycat: "Vegetables" }
      ]
    },
  
    exchangedirection: {
      labels: [
        "BIF->RWF",
        "CDF->RWF",
        "KES->RWF",
        "KES->TZS",
        "KES->UGX",
        "KES->USD",
        "RWF->BIF",
        "RWF->CDF",
        "RWF->KES",
        "RWF->TZS",
        "RWF->UGX",
        "RWF->USD",
        "TSH->KES",
        "TZS->KES",
        "TZS->RWF",
        "TZS->UGX",
        "TZS->USD",
        "UGX->KES",
        "UGX->RWF",
        "UGX->TZS",
        "UGX->USD",
        "USD->KES",
        "USD->RWF",
        "USD->TZS",
        "USD->UGX"
      ],
  
      structure: [
        { exchangedirection: "BIF->RWF" },
        { exchangedirection: "CDF->RWF" },
        { exchangedirection: "KES->RWF" },
        { exchangedirection: "KES->TZS" },
        { exchangedirection: "KES->UGX" },
        { exchangedirection: "KES->USD" },
        { exchangedirection: "RWF->BIF" },
        { exchangedirection: "RWF->CDF" },
        { exchangedirection: "RWF->KES" },
        { exchangedirection: "RWF->TZS" },
        { exchangedirection: "RWF->UGX" },
        { exchangedirection: "RWF->USD" },
        { exchangedirection: "TSH->KES" },
        { exchangedirection: "TZS->KES" },
        { exchangedirection: "TZS->RWF" },
        { exchangedirection: "TZS->UGX" },
        { exchangedirection: "TZS->USD" },
        { exchangedirection: "UGX->KES" },
        { exchangedirection: "UGX->RWF" },
        { exchangedirection: "UGX->TZS" },
        { exchangedirection: "UGX->USD" },
        { exchangedirection: "USD->KES" },
        { exchangedirection: "USD->RWF" },
        { exchangedirection: "USD->TZS" },
        { exchangedirection: "USD->UGX" }
      ]
    }
  };

  function all(){
      return catOrder
  }
  
  module.exports = {all, catOrder};
  