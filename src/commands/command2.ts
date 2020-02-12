import { Components } from "gd-sprest-bs";

/**
 * The click event for 'Command 2'
 * @param items - The selected list items.
 */
export const Command2 = (items: Array<any>) => {
    // Create html to display in a dialog
    let content = "";

    // Parse the items
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // Add the item info
        content += "<p>" + item.Title + "</p>";
    }

    // Get the element to render the modal to
    let elModal = document.querySelector("#jslink-dlg");
    if (elModal == null) {
        // Create the element
        elModal = document.createElement("div");
        elModal.id = "jslink-dlg";
        document.body.appendChild(elModal);
    }

    // Create a dialog
    let dlg = Components.Modal({
        el: elModal,
        title: "Selected Items",
        body: content,
        onClose: (el) => {
            // Remove the element from the page
            document.body.removeChild(dlg.el);
        }
    });

    // Show the dialog
    dlg.show();
}