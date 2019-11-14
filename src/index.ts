import { Configuration } from "./cfg";
import { JSLink } from "./jslink";
import "./styles.css";

// Create the JSLink
JSLink();

// Set the global variable
window["JSLinkMenu"] = { Configuration }