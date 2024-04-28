import React from 'react';
import Catalog from './Catalog';
import './styles.css';
 

const books = [
  { name: '97-things-every-software-architect-should-know',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/97-things-every-software-architect-should-know.pdf', },
  { name: 'Core Python',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/Core%20Python.pdf', },
  { name: 'Design Patterns',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/Design%20Patterns.pdf', },
  { name: 'MS Ajax Client Life-Cycle Events',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/MS%20Ajax%20Client%20Life-Cycle%20Events.pdf', },
  { name: 'Revionics.White.Paper.[Grid.Computing.in.a.Saas.Environment]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/Revionics.White.Paper.%5BGrid.Computing.in.a.Saas.Environment%5D.pdf', },
  { name: 'Revionics.White.Paper.[Software-as-a-Service-A Better.Approach.for.Retailers]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/Revionics.White.Paper.%5BSoftware-as-a-Service-A%20Better.Approach.for.Retailers%5D.pdf', },
  { name: 'Top 5 Most Common Missed Issues In Software Estimation',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/Top5MostCommonMissedIssuesInSoftwareEstimation.pdf', },
  { name: '[O`Reilly. Head First] - Head First Design Patterns - [Freeman]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BO%60Reilly.%20Head%20First%5D%20-%20Head%20First%20Design%20Patterns%20-%20%5BFreeman%5D.pdf', },
  { name: '[O`Reilly] - Art of Application Performance Testing - [Molyneaux]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BO%60Reilly%5D%20-%20Art%20of%20Application%20Performance%20Testing%20-%20%5BMolyneaux%5D.pdf', },
  { name: '[O`Reilly] - Art of Concurrency - [Breshears]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BO%60Reilly%5D%20-%20Art%20of%20Concurrency%20-%20%5BBreshears%5D.pdf', },
  { name: '[O`Reilly] - Beautiful Code - [Oram, Wilson]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BO%60Reilly%5D%20-%20Beautiful%20Code%20-%20%5BOram%2C%20Wilson%5D.pdf', },
  { name: '[Pearson] - Algorithms, 4th ed. - [Sedgewick, Wayne]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BPearson%5D%20-%20Algorithms%2C%204th%20ed.%20-%20%5BSedgewick%2C%20Wayne%5D.pdf', },
  { name: '[Springer] - The Algorithm Design Manual Second Edition, 2nd ed. - [Skiena]',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/%5BSpringer%5D%20-%20The%20Algorithm%20Design%20Manual%20Second%20Edition%2C%202nd%20ed.%20-%20%5BSkiena%5D.pdf', },
  
  { name: 'CSS2 Help Sheet',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/CSS2-Help-Sheet.pdf', },
  { name: 'CSS3 Help Sheet1',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/CSS3-Help-Sheet1.pdf', },
  { name: 'Google Cheat Sheet',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/Google%20Cheat%20Sheet.pdf', },
  { name: 'HTML Help Sheet',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/HTML%20Help%20Sheet.pdf', },
  { name: 'XSLT-1.0',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/XSLT-1.0.pdf', },
  { name: 'html cheat sheet',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/html-cheat-sheet.pdf', },
  { name: 'i3quest jquery',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/i3quest_jquery.pdf', },
  { name: 'javascript cheat sheet',  url: 'https://raw.githubusercontent.com/ajitpal/BookBank/master/cheatsheet/javascript_cheat_sheet.pdf', },
     
  // Add more categories and books here
];


function App() {
  return <Catalog books={books} />;
}

export default App;