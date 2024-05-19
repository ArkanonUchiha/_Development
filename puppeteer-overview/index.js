import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function openWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400
  }),
    page = await browser.newPage();

  await page.goto('https://example.com');
  await browser.close();
}

// openWebPage();

async function captureScreenshot() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400
  }),
    page = await browser.newPage();

  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
}

// captureScreenshot();

async function goToElement() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400,
  }),
    page = await browser.newPage();

  await page.goto('https://quotes.toscrape.com/');
  await page.click('a[href = "/login"]');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'login.png' });
  await browser.close();
}

// goToElement();

async function getDataFromPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400,
  }),
    page = await browser.newPage();

  await page.goto('https://example.com/');

  const element = await page.$('div'),
    elementDOM = await page.evaluate((elemento) => {
      const element = elemento.innerHTML,
        text = elemento.textContent;

      return { element, text };
    }, element);

  await element.dispose();

  console.log(elementDOM);


  // const element = await page.$('div');
  // const elementDOM = await page.evaluate(elemento => elemento.innerHTML, element);
  // const elementText = await page.evaluate(elemento => elemento.textContent, element);
  // await element.dispose();

  // console.log(elementDOM, elementText);

  await browser.close();
}

// getDataFromPage();

async function handleDynamicWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100,
  }),
    page = await browser.newPage();

  await page.goto('https://quotes.toscrape.com/');

  const elementsLength = await page.$$eval('.quote', quotes => quotes.length),
    elementsDOM = await page.$$eval('.quote', quotes => {
      return quotes.map(el => {
        const element = el.innerHTML,
          text = el.textContent;

        return { element, text };
      });
    }),
    quotes = await page.$$eval('.quote > .text', quotes => {
      return quotes.map(el => {
        const text = el.textContent;

        return text;
      });
    }),
    authors = await page.$$eval('.quote .author', authors => {
      return authors.map(el => {
        const author = el.textContent;

        return author;
      });
    }),
    tags = await page.$$eval('.quote .tags meta', tags => {
      return tags.map(el => {
        const tag = el.content;

        return tag;
      });
    }),
    result = [quotes, authors, tags];

  // await quotes.dispose();
  // await authors.dispose();
  // await tags.dispose();

  // console.log(elementsLength);
  // console.log(elementsDOM);
  // console.log(quotes);
  // console.log(authors);
  // console.log(tags);
  console.log(result);

  fs.writeFile('quotes.json', JSON.stringify(result, null, 2));

  await browser.close();
}

handleDynamicWebPage();
