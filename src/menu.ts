import { Components, Helper } from "gd-sprest-bs";

declare var SP;

/**
 * Menu
 */
export class Menu {
    // The element id
    private static ELEMENT_ID = "jslink-menu";

    // The list context
    private _ctx = null;

    // Constructor
    constructor(el: HTMLElement, ctx: any) {
        // Save the context
        this._ctx = ctx;

        // Create the link element
        let elLink = this.createLink();

        // Render the menu to the link
        this.render(elLink);

        // Append the link
        el.appendChild(elLink);
    }

    // Creates the menu link
    static CreateLink(el: HTMLElement) {
        let elMenu: HTMLDivElement = null;

        // Find the list view control
        let elListView = el.querySelector(".ms-csrlistview-controldiv");
        if (elListView) {
            // Create the menu element
            elMenu = document.createElement("div");

            // Set the styling
            elMenu.classList.add("ms-InlineSearch-DivBaseline");
            elMenu.style.paddingRight = "7px";

            // Get the search element
            let elSearch = elListView.querySelector(".ms-InlineSearch-DivBaseline");
            if (elSearch) {
                // Add the link before this element
                elListView.insertBefore(elMenu, elSearch);
            } else {
                // Append the menu
                elListView.appendChild(elMenu);
            }
        }

        // Return the menu
        return elMenu;
    }

    // Determines if the menu exists
    static Exists() { return document.querySelector("#" + this.ELEMENT_ID) != null; }

    // Create the menu
    private createMenu() {
        return Components.Dropdown({
            className: "jslink-menu-ddl",
            menuOnly: true,
            items: [
                {
                    text: "Option 1",
                    onClick: () => {
                        // Get the selected items
                        let items = this.getSelectedItems();

                        // Alert how many items are selected
                        alert("Number of items selected: " + items.length);
                    }
                },
                {
                    text: "Option 2",
                    onClick: () => {
                        // Get the selected items
                        let items = this.getSelectedItems();

                        // Create html to display in a dialog
                        let el = document.createElement("div");
                        el.innerHTML = [
                            "<h1>Selected Items</h1>",
                        ].join('\n');

                        // Parse the items
                        for(let i=0; i<items.length; i++) {
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
                }
            ]
        });
    }

    // Creates the menu link
    private createLink() {
        // Create the link element
        let elLink = document.createElement("a");

        // Set the link properties
        elLink.classList.add("ms-commandLink");
        elLink.id = Menu.ELEMENT_ID;
        elLink.innerHTML = "Additional Options";

        // Return the link
        return elLink;
    }

    // Gets the selected items
    private getSelectedItems() {
        let items = [];

        // Get the selected items
        let selectedItems = SP.ListOperation.Selection.getSelectedItems();

        // Parse the items
        for (let i = 0; i < selectedItems.length; i++) {
            let itemId = selectedItems[i].id;

            // Parse the list items
            for (let j = 0; j < this._ctx.ListData.Row.length; j++) {
                let item = this._ctx.ListData.Row[j];

                // See if this is the target item
                if (itemId == item.ID || itemId == item.Id) {
                    // Add the item
                    items.push(item);
                    break;
                }
            }
        }

        // Return the items
        return items;
    }

    // Renders the menu
    private render(el: HTMLElement) {
        // Create a popover
        Components.Popover({
            target: el,
            type: Components.PopoverTypes.Bottom,
            options: {
                html: true,
                trigger: "focus",
                content: () => {
                    // Create the menu
                    let menu = this.createMenu();

                    // Return the element
                    return menu.el;
                }
            }
        });
    }
}