import './App.css';
let name ="Ravi"
function App() {
  return (


    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      Lovely
    </div>
    </>

    
  );
}


// function App(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {App(user)}!
//   </h1>
// );

export default App;


// App.js
// import './App.css';

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// function App() {
//   return (
//     <h1>
//       Hello, {user.firstName} {user.lastName}!
//     </h1>
//   );
// }

// export default App;
