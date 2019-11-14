import { Helper, SPTypes } from "gd-sprest-bs";

/**
 * Configuration
 */
export const Configuration = Helper.SPConfig({
    ListCfg: [
        {
            ListInformation: {
                Title: "JSLink Demo",
                BaseTemplate: SPTypes.ListTemplateType.GenericList
            },
            ViewInformation: [
                {
                    ViewName: "All Items",
                    JSLink: "~sitecollection/siteassets/jslink-menu.js"
                }
            ]
        }
    ]
})