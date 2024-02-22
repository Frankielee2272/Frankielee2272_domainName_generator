/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Write your code here
  console.log("Hello Frank from the console!");

  // Create arrays for domain name generation
  let pronoun = ["the", "our", "him", "her", "them", "she", "he"];
  let adj = ["great", "big", "small", "fancy", "pretty"];
  let noun = ["jogger", "racoon", "swimmer", "driver", "blacksmith", "rider"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        console.log(pronoun[i] + adj[j] + noun[k] + ".net");
        console.log(pronoun[i] + adj[j] + noun[k] + ".us");
        console.log(pronoun[i] + adj[j] + noun[k] + ".io");
        console.log(pronoun[i] + adj[j] + noun[k] + ".etc");
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        console.log(pronoun[i] + adj[j] + noun[k] + ".net");
        console.log(pronoun[i] + adj[j] + noun[k] + ".us");
        console.log(pronoun[i] + adj[j] + noun[k] + ".io");
        console.log(pronoun[i] + adj[j] + noun[k] + ".org");
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        console.log(pronoun[i] + adj[j] + noun[k] + ".net");
        console.log(pronoun[i] + adj[j] + noun[k] + ".us");
        console.log(pronoun[i] + adj[j] + noun[k] + ".io");
        console.log(pronoun[i] + adj[j] + noun[k] + ".gov");
      }
    }
  }
};
