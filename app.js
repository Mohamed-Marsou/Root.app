const fs = require("fs");
const http = require("http");
const url = require("url");
const express = require("express");
// import modules
const replaceTamplate = require("./moules/replaceTamlates");

//////////////////////////////////////////////////////////////////
//-------------------------## SERVER ##-------------------------
//////////////////////////////////////////////////////////////////
// Reading DATA from JSON ONCE.
const data = fs.readFileSync(`${__dirname}/dev-data/path.json`, "utf-8");
const dataObj = JSON.parse(data);

// Tamplates
const tempIndex = fs.readFileSync(`${__dirname}/tamplates/index.html`, "utf-8");
const tempOverview = fs.readFileSync(
  `${__dirname}/tamplates/overiew.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/tamplates/card.html`, "utf-8");

// Port
const port = 8000;

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/index") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardsHtml = dataObj
      .map((el) => replaceTamplate(tempCard, el))
      .join("");
    const output = tempIndex.replace("{%PATHCARDS%}", cardsHtml);
    res.end(output);

    // Product page
  } else if (pathname === "/overiew") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const overview = dataObj[query.id];
    const output = replaceTamplate(tempOverview, overview);
    res.end(output);

    // API
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);

    // Not found
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
});

//////////////////////////////////////////////////////////////////
//-------------------------## Listening ##-------------------------
//////////////////////////////////////////////////////////////////
server.listen(port, "127.0.0.1", () => {
  console.log(`Listening to request on port ${port}`);
});
