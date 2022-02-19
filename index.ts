// Import stylesheets
import { Person } from './person';
import './style.css';

let pessoa = new Person('Ricardo', 'Santos', 'Larguesa', 35);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Projeto</h1>
<div>${pessoa.getFullName()}</div>
<div>${pessoa.getBirthdayYear()}</div>
`;
