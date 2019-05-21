#!/usr/bin/env node

const pptrFirefox = require("puppeteer-firefox");

pptrFirefox.launch({ headless: false, devtools: true });
