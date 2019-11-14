import { Helper } from "gd-sprest-bs";
import { Menu } from "./menu";

declare var RenderHeaderTemplate, RenderFooterTemplate;

/**
 * JSLink
 */
export const JSLink = () => {
    // Create the JSLink
    Helper.JSLink.register({
        Templates: {
            Header: ctx => {
                // Render the default header
                return "<div id='jslink-header'>" + RenderHeaderTemplate(ctx) + "</div>";
            },
            Footer: ctx => {
                // See if the menu doesn't exists
                if (!Menu.Exists()) {
                    // Create the menu link
                    let elMenu = Menu.CreateLink(document.querySelector("#jslink-header"));

                    // Create the menu
                    new Menu(elMenu, ctx);
                }

                // Render the default footer
                return RenderFooterTemplate(ctx);
            }
        }
    });
}