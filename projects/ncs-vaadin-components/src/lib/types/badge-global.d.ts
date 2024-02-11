declare module '@vaadin/vaadin-lumo-styles/badge-global.js' {
    // Supposons que `badge` est un objet, vous pourriez avoir besoin d'ajuster ceci en fonction de sa structure réelle
    export const badge: any;

    // Déclarer `addLumoGlobalStyles` comme une fonction prenant deux paramètres de type string
    export function addLumoGlobalStyles(name: string, styles: any): void;
}
