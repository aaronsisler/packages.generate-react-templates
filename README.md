# Generate React Templates

This package is used to generate React template files for a component, container, or page (NextJS)

## Example return value:

The package creates a the following file(s) and places them into their corresponding directory.

### Page

node ./node_modules/@ebsolutions/grt --templateType=PAGE --name=taco

### Container

node ./node_modules/@ebsolutions/grt --templateType=CONT --name=taco

### Component

node ./node_modules/@ebsolutions/grt --templateType=COMP --name=taco

## Usage

1. Install the package using npm or yarn:

   ```bash
    npm install @ebsolutions/grt --saveDev
   ```

   or

   ```bash
    yarn add @ebsolutions/grt --dev
   ```

2. TODO

## Finshing touches

1. Adding Example return values above
1. Testing

### Enhancements

1. Get `npx` command to work or add a script to package.json that calls node ./node_modules/etc.
