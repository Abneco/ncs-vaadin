// vaadin-lumo-styles-icons.d.ts

declare module '@vaadin/vaadin-lumo-styles/icons.js' {
    // Ici, vous pouvez déclarer les exportations spécifiques de ce module.
    // Par exemple, si le module exporte des constantes pour les icônes, vous pourriez les déclarer ainsi :
    export const myIconName: string; // Remplacez 'myIconName' par le nom réel de l'icône

    // Si vous n'êtes pas sûr des exportations spécifiques ou si le module est utilisé d'une manière qui ne nécessite pas d'exportations détaillées, vous pouvez utiliser une approche générique :
    const icons: { [key: string]: string }; // Un objet avec des clés de type string et des valeurs de type string
    export default icons;
}
