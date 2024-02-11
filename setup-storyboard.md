
### Création du projet avec un storybooks
documentation
<br>
https://www.telerik.com/blogs/angular-component-library-part-1-how-to-build
<br>
https://www.telerik.com/blogs/angular-component-library-part-2-how-to-theme-publish-npm
<br>
https://www.telerik.com/blogs/angular-component-library-part-3-power-company-library-kendo-ui
<br>


````
ng new ncs-vaadin --create-application=false

cd ncs-vaadin

ng generate library ncs-vaadin-components --prefix=ncs-vaadin

npx storybook@latest init --type angular

ng run ncs-vaadin-components:storybook

compodoc -> no

open project with intellij

replace start per ng build ncs-vaadin-components

npm i @vaadin/vaadin

ouvrir .\projects\ncs-vaadin-components\package.json
  "peerDependencies": {
    "@angular/common": "^17.1.0",
    "@angular/core": "^17.1.0",
    "@vaadin/vaadin": "^24.3.3" //add
  },
  
  
Ajouter sub node_modules  
  
# Node
/node_modules
projects/ncs-vaadin-components/node_modules

correction
TypeError: Cannot read properties of undefined (reading 'selector')
https://github.com/storybookjs/storybook/issues/14828
package.json (princiaple)
...
  "workspaces": [
    "projects/*"
  ]
...
delete sub node_modules (lib)
npm install
````

### Test dans une application angular (local)

````text
ng build ncs-vaadin-components

Allez dans le dossier dist/ncs-vaadin-components et exécutez :
cd dist/ncs-vaadin-components
npm link

Ensuite, dans le projet Angular où vous souhaitez utiliser la bibliothèque, exécutez
npm link ncs-vaadin-components

npm install @vaadin/vaadin

ajouter la properties preserveSymlinks
"architect": {
"build": {
  "builder": "@angular-devkit/build-angular:application",
  "options": {
    "preserveSymlinks": true,
    "outputPath": "dist/ncs-vaadin-demo",
    ...
    
Ajouter ncs-vaadin-components comme dépendance
"ncs-vaadin-components": "file:C:\\Users\\bernardsylvain\\IdeaNeuronicsProjects\\ncs-vaadin"

Utiliser les composant ncs-vaadin

imports: [DatePickerComponent, ComboBoxComponent, ButtonComponent],
````



