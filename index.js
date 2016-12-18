#!/usr/bin/env node
/*!
 * -----------
 * SCGDB®-Data
 * -----------
 * Data of SCGDB — A manually curated dedicated schizosaccharomyces comparative genome database.
 * ______________________________________________________________________________________________
 *
 * CCPE ——————— Centre for Computational Protein Engineering.
 *
 * Architecture and Code Handcrafted by Prabhat Kumar.
 * Architectuur en Code handgemaakt door Prabhat Kumar.
 * @author    : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Prabhat Kumar [http://prabhatkumar.org/].
 * @copyright : Sequømics Research [http://research.sequomics.com/].
 * @copyright : Sequømics Corporation [http://sequomics.com/].
 * ______________________________________________________________________________________________
 *
 * @date      : 18-Dec-2016
 * @license   : Apache, version 2.0
 * @purpose   : To create Data System(s) with Node.js® and NPM.
 * @require   : Node.js®
 * @require   : NPM
 * @build     : SEED™ — Skövde
 *              └────── A Sequømics Product — http://seed.sequomics.com/.
 * ______________________________________________________________________________________________
 *
 * --/The Heart of Data System/-- of "SCGDB®-Data".
 * ______________________________________________________________________________________________
 */

// global __dirname: true
// global require: true

// # Usage: $ node -v
// # Usage: $ npm -v

// Invoking strict mode.
"use strict";

// To load required Node module.
// -----------------------------
var os         = require('os');
var fs         = require('fs');
var path       = require('path');

// To load required NPM modules.
// -----------------------------
var chalk      = require('chalk');
var semver     = require('semver');

// Default color defined.
// ----------------------
var noop       = chalk.red;
var yeep       = chalk.green;
var okay       = chalk.blue;
var boop       = chalk.cyan;
var goop       = chalk.gray;

///-------------------
// An object literals.
///-------------------
var build = {
  // Non-identifier property names are quoted.
  "system"     : "SEED™",
  "name"       : "Skövde",
  "year"       : "2016",
  "audience"   : "for all scientist and computational biologist."
};
