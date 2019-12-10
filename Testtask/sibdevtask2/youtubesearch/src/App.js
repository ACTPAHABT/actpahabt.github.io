import React from 'react';
import ReactDOM from "react-dom";
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

// function App() {
//   return (
//       <div>
//           <Header />
//           <Search />
//       </div>
//   );
// }

class App extends React.Component {
    render() {
        return (
            <div>
                               <Header />
                              <Search />
                          </div>
        );
    }
}
// function App() {
// ReactDOM.render(
//     <div>
//         <Button type="primary">Primary</Button>
//         <Button>Default</Button>
//         <Button type="dashed">Dashed</Button>
//         <Button type="danger">Danger</Button>
//         <Button type="link">Link</Button>
//     </div>
// );
// }

export default App;
