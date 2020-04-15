const puppeteer = require("puppeteer-core");
let url = "http://www.standvirtual.pt";

// const launchStandVirtual = async () => {
//   // const browser = await puppeteer.launch({ headless: true });
//   const browser = await puppeteer.launch({args:['--no-sandbox'], executablePath:'chromium-browser', headless: true});
//   const page = await browser.newPage();
//   await page.goto(url);

//   // const [marcas] = await page.$x('//*[@id="param1"]');
//   // const arr = await marcas.$x("option");
//   // const element = arr[5];
//   // const t = await element.getProperty('value').then((elm) => {return elm.jsonValue()});
//   // console.log(t);
  
//   // await browser.close();

//   return page;
// };

const getBrand = async () => {
  const browser = await puppeteer.launch({args:['--no-sandbox'], executablePath:'chromium-browser', headless: true});
  const standPage = await browser.newPage();
  await standPage.goto(url);

  const [marcas] = await standPage.$x('//*[@id="param1"]');
  const options = await marcas.$x("option");

  let ex = [];
  const ep = [...options];
  for (let i = 1; i < ep.length; i++) {
    const element = ep[i];
    // const t = await element.getProperty("innerText").then((elm) => {return elm.jsonValue()});
    const value = await element.getProperty("value").then((elm) => {return elm.jsonValue()});
    // const t2 = t.split(" ")[0];
    // const t2 = t.concat(" (", value, ")");
    ex.push(value);
  }
  // await browser.close();
  
  return ex;
};

// const getBrand = () => {return [1,2,3]}

export default getBrand();
