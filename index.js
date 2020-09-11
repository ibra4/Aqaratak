/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

console = {};
console.log = () => { };
console.error = () => { };

AppRegistry.registerComponent(appName, () => App);
