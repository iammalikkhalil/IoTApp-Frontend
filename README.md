### Packages Used in this project

```bash
npm i axios react-native-gesture-handler react-native-linear-gradient react-native-safe-area-context react-native-screens socket.io-client @react-native-community/blur @react-navigation/native @react-navigation/native-stack @react-navigation/stack
```
##  _____________________________________________________________


## Adding Custom Fonts to Your React Native Project

### Step 1: Organize Font Files

1. Create a folder named "assets" in the root directory of your project.
2. Inside the "assets" folder, create a "fonts" directory.
3. Paste all font files (.ttf) into the "fonts" folder.

### Step 2: Configure React Native

1. Create a file named `react-native.config.js` in your project's root directory.
2. Add the following code to the file:

```javascript
module.exports = {
    project: {
        android: {},
        ios: {}
    },
    assets: ['./assets/fonts/']
};
```

### Step 3: Install React Native Asset Library

Run the following command globally to install the `react-native-asset` library:

```bash
npm i -g react-native-asset
```

### Step 4: Add Fonts to Your Project

Execute the following command to add fonts to your project:

```bash
npx react-native-asset
```

### Successful Integration

Congratulations! You've successfully added custom fonts to your project. Utilize them in your styles by referencing the font family:

```css
font-family: "your-font-name";
```

### Reminder

Don't forget to restart your React Native project or server to apply the changes.