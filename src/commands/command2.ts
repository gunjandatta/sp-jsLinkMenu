import { Helper } from "gd-sprest-bs";

/**
 * The click event for 'Command 2'
 * @param items - The selected list items.
 */
export const Command2 = (items: Array<any>) => {
    // Create html to display in a dialog
    let el = document.createElement("div");
    el.innerHTML = [
        "<h1>Selected Items</h1>",
    ].join('\n');

    // Parse the items
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Add the item info
        el.innerHTML += "<p>" + item.Title + "</p>";
    }

    // Display a dialog
    Helper.SP.ModalDialog.showModalDialog({
        title: "My Custom Dialog",
        html: el
    });
}