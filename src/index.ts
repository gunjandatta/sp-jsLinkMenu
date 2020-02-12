import { Configuration } from "./cfg";
import * as Commands from "./commands";
import { JSLink } from "./jslink";
import "./styles.css";

// Create the JSLink
JSLink();

// Set the global variable
window["JSLinkMenu"] = { Configuration, Commands }