import React from "react";
import "./App.css";
import Logger from "./components/Logger";
// import { Switch, Route, NavLink } from "react-router-dom";
// import HTML from "./components/HTML";
// import CSS from "./components/CSS";
// import Home from "./components/Home";
// import JS from "./components/JS";

// import Card from "./components/Card";
// import Avatar from "./components/Avatar";
// import Counter from "./components/Counter";
// function App() {
//   const avatar1 = {
//     firstName: "Bart",
//     lastName: "Simpson",
//     image:
//       "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
//   };
//   const avatar2 = {
//     firstName: "Bart",
//     lastName: "Man"
//     // image:
//     //   "https://www.stickees.com/files/cartoon/the-simpsons/2242-bart-simpson-bartman.png"
//   };

//   return (
//     <section>
//       {/* <Hello />
//       <h1>Hello from App</h1>
//       <Card
//         cardTitle="Title from parent"
//         cardDescription="Description from parent"
//         cardButton="button from parent"
//         cardImg="https://i.udemycdn.com/course/750x422/1362070_b9a1_2.jpg"
//         cardLink="https://reactjs.org/"
//       />  */}
//       <Avatar {...avatar1} star />
//       <Avatar {...avatar2} />
//     </section>
//   );
// }

// export default App;

// function App() {
//   return <Counter />;
// }
// export default App;

// function App() {
//   return (
//     <section>
//       <header>
//         <ul>
//           <li>
//             <NavLink exact to="/">
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/html">HTML</NavLink>
//           </li>
//           <li>
//             <NavLink to="/css">CSS</NavLink>
//           </li>

//           <li>
//             <NavLink to="/js">JS</NavLink>
//           </li>
//         </ul>
//       </header>

//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/html" component={HTML} />
//         <Route path="/css" component={CSS} />
//         <Route path="/js" component={JS} />
//       </Switch>
//     </section>
//   );
// }
// export default App;
function App() {
  return <Logger />;
}
export default App;
