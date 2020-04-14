const puppeteer = require("puppeteer");
let url = "http://www.standvirtual.pt";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url);

  // const titulo = await page.title();
  const [marcas] = await page.$x('//*[@id="param1"]');
  const arr = await marcas.$x("option");
  const element = arr[5];
  const t = await element.getProperty('value').then((elm) => {return elm.jsonValue()});
  console.log(t);
  

  console.log(arr.length);
  
  // const arr2 = await getBrand(arr);

  // arr2.forEach(element => {
  //     console.log(element);

  // });

  await browser.close();
})();

const getBrand = async options => {
  let ex = [];
  const ep = [...options];
  for (let i = 0; i < ep.length; i++) {
    const element = ep[i];
    const t = await element.getProperty("innerText").then((elm) => {return elm.jsonValue()});
    // const t2 = await t.jsonValue();
    ex.push(t);
  }
  return ex;
};
