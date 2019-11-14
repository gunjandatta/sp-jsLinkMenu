import { Configuration } from "./cfg";
import { JSLink } from "./jslink";

// Create the JSLink
JSLink();

// Set the global variable
window["JSLinkMenu"] = { Configuration }