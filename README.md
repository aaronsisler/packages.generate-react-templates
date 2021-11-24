# Generate React Templates

This package is used to generate React template files for a component, container, or page (NextJS). The container and component files returned can be either Typescript or Javascript depending on the flag passed.

## Usage

1. Install the package using npm or yarn:

   ```bash
    npm install @ebsolutions/generate-react-templates --saveDev
   ```

   or

   ```bash
    yarn add @ebsolutions/generate-react-templates --dev
   ```

2. Run the desired command to generate the applicable template(s):

```bash
   node ./node_modules/@ebsolutions/generate-react-templates --type=COMP --name=taco
   node ./node_modules/@ebsolutions/generate-react-templates --type=CONT --name=taco
   node ./node_modules/@ebsolutions/generate-react-templates --type=PAGE --name=taco

```

**NOTE**: Adding --useTypescript==true to the CONT and COMP types will return Typescript (`.tsx` and `.ts`) files.

## Example return value:

The package creates a the following file(s) and places them into their corresponding directory.

### Page

Creates a page in the `pages/` directory as shown below:

      src/pages/page-name.js

### Container

Creates a container (Typescript or Javascript) in the `containers/` directory with file structure below:

      containers/name-container/
         - name-container.jsx`
         - index.js
         - name-container.module.scss

### Component

Creates a component (Typescript or Javascript) in the `components/` directory with file structure below:

     components/name-component/
         - name-component.jsx`
         - index.js
         - name-component.module.scss

## Finshing touches

1. Getting scripts to populate `package.json` on install
   - "gen:comp": "node ./node_modules/@ebsolutions/generate-react-templates --type=COMP --name=taco"
   - "gen:cont": "node ./node_modules/@ebsolutions/generate-react-templates --type=CONT --name=taco"
   - "gen:page": "node ./node_modules/@ebsolutions/generate-react-templates --type=PAGE --name=taco"

### Enhancements

1. Get `npx` command to work or add a script to package.json that calls node ./node_modules/etc.
1. Testing
