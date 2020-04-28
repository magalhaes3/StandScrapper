// const mysql = require('mysql');

const puppeteer = require("puppeteer");
let url = "https://www.standvirtual.pt";



async function getMakers() {
  const browser = await puppeteer.launch({args:['--no-sandbox'], executablePath:'chromium-browser', headless: true});
  const standPage = await browser.newPage();
  await standPage.goto(url);

  const [marcas] = await standPage.$x('//*[@id="param1"]');
  const options = await marcas.$x("option");

  let ex = [];
  const ep = [...options];
  for (let i = 1; i < ep.length; i++) {
    const element = ep[i];
    const makerName = await element.getProperty("text").then((elm) => {return elm.jsonValue()}).then(res => {return res.split(" (")[0]});
    let makerSearchName = await element.getProperty("value").then(res => {return res.jsonValue()});
    const maker = {maker_name: makerName, search_name: makerSearchName};
    ex.push(maker);
  }
  // await browser.close();
  
  return ex;
};

async function getModelsFrom(maker) {
  const browser = await puppeteer.launch({args:['--no-sandbox'], executablePath:'chromium-browser', headless: true});
  const standPage = await browser.newPage();
  await standPage.goto(url + "/carros/" + maker + "/");
  
  const [models] = await standPage.$x('//*[@id="param7"]');
  const options = await models.$x("option");

  let modelsList = [];
  const aux = [...options];
  for (let i = 1; i < aux.length; i++) {
    const element = aux[i];
    const modelName = await element.getProperty("text").then((elm) => {return elm.jsonValue()}).then(res => {return res.split(" (")[0]});
    const searchName = modelName.replace(" ", "-")
    const model = {model_name: modelName, search_name: searchName};
    modelsList.push(model);
  }
  // await browser.close();
  
  return modelsList;
}

module.exports = {
  getMakers,
  getModelsFrom,
};



// DATABASE STUFF -----------------------------------------------------------------------------

// var con = mysql.createConnection({
//   host: "192.168.1.13",
//   user: "root",
//   password: "",
//   database: "standscrapper"
// });


// con.connect(async function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   await getMakers().then(res => {return res}).then(res => {
//     res.forEach(maker => {
//       let sql = "";
//       let query = sql.concat("INSERT INTO maker (maker_name, search_name) VALUES ('", maker.maker_name, "', '", maker.search_name, "');");
      
//       con.query(query, function (err, result) {
//         if (err) throw err;
//       });
//     })
//   }
    
//   );
//   console.log("All makers in database!");
  
// });

// con.connect(async function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   await getMakers().then(res => {return res}).then(res => {
//     res.forEach(maker => {
//       // Inserir marca na base de dados
//       let sql = "";
//       let query = sql.concat("INSERT INTO maker (maker_name, search_name) VALUES ('", maker.maker_name, "', '", maker.search_name, "');");
//       con.query(query, function (err, result) {
//         if (err) throw err;
//       });

//       // Descobrir id da marca que acabámos de inserir 
//       let makerId = 0;
//       con.query("SELECT id FROM maker WHERE search_name = " + maker.search_name, function(err, result){
//         if (err) throw err;
//         makerId = result;
//       })

    
//       // Inserir modelos
      
//       let sql = "";
//       let query = sql.concat("INSERT INTO model (model_name, maker_id) VALUES ('", maker.maker_name, "', '", makerId, "');");
//       con.query(query, function (err, result) {
//         if (err) throw err;
//       });
//     })
//   }
    
//   );
//   console.log("All makers in database!");
  
// });
