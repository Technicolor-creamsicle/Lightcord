export default class V2_SettingsPanel_Sidebar {

    constructor() {
        this.panels = {}
    }

    register(panel, component){
        this.panels[panel] = component
    }

    getComponent(panel, sidebar){
        return this.panels[panel](sidebar)
    }

    get items() {
        return [{
            text: "BetterDiscord Settings", 
            id: "core"
        }, {
            text: "Plugins", 
            id: "plugins"
        }, {
            text: "Themes", 
            id: "themes"
        }, {
            text: "Custom CSS", 
            id: "customcss"
        }];
    }

    get LCitems(){
        let items = [
            {
                text: "Lightcord Settings",
                id: "lightcord"
            }, {
                text: "RichPresence", 
                id: "status"
            }, {
                text: "Account Info",
                id: "accountinfo"
            }
        ]
        if(window.Lightcord.Settings.devMode)items.push({
            text: "Api Components Preview",
            id: "lcapipreview"
        })
        return items
    }

    render(sidebar) {
        return [
            {
                section: "HEADER",
                label: "Lightcord"
            },
            ...this.LCitems.map(e => {
                return {
                    section: e.id,
                    label: e.text,
                    element: this.getComponent(e.id, sidebar)
                }
            }),
            {
                section: "DIVIDER"
            },
            {
                section: "CUSTOM",
                element: this.getComponent("BDChangelogTitle")
            },
            ...this.items.map(e => {
                return {
                    section: e.id,
                    label: e.text,
                    element: this.getComponent(e.id, sidebar)
                }
            }),
            {
                section: "DIVIDER"
            }
        ]
    }
}

/**
 * No need to export settingsPanelSidebar on window
 */