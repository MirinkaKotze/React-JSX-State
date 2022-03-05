import React from 'react'
import Header from './Header'
import './App.css';

// function App() {
//   const helloParagraph = React.createElement('p', {}, 'I`m inside the main Header!')

//   return React.createElement('div', {}, 
//     React.createElement('header', {className:"header__container"}, 
//       React.createElement('h1', {className:"header"}, 'Hello Header!'),
//       React.createElement('p', {}, 'I`m inside the header container!')), 
//     React.createElement('section', {className:"main__container"}, 
//         React.createElement('h2', {className:"main"}, 'Hello Main!', 
//           helloParagraph), ), 
//     React.createElement('footer', {}, React.createElement('h2', {className:"footer"}, 'Hello Footer!')),
//   )}

// export default App;

function App () {
  return (
    <Header />
  )
}

export default App;
