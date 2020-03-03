# Generate React Templates

This package is used to generate React template files for a component, container, or page (NextJS)

## Example return value:

The package creates a the following file(s) and places them into their corresponding directory.

### Page

### Container

### Component

## Usage

1. Install the package using npm or yarn:

   ```bash
    npm install @ebsolutions/generate-react-templates --saveDev
   ```

   or

   ```bash
    yarn add @ebsolutions/generate-react-templates --dev
   ```

2. Run the following commands to generate the applicable template:

```bash
   node ./node_modules/@ebsolutions/generate-react-templates --type=COMP --name=taco
   node ./node_modules/@ebsolutions/generate-react-templates --type=CONT --name=taco
   node ./node_modules/@ebsolutions/generate-react-templates --type=PAGE --name=taco

```

## Finshing touches

1. Adding Example return values above
1. Getting scripts to populate `package.json` on install
   - "gen:comp": "node ./node_modules/@ebsolutions/generate-react-templates --type=COMP --name=taco"
   - "gen:cont": "node ./node_modules/@ebsolutions/generate-react-templates --type=CONT --name=taco"
   - "gen:page": "node ./node_modules/@ebsolutions/generate-react-templates --type=PAGE --name=taco"

### Enhancements

1. Get `npx` command to work or add a script to package.json that calls node ./node_modules/etc.
1. Testing
