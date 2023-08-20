import 'react-toastify/dist/ReactToastify.css';

import {Container} from "./App.styled";
import PhoneBook from './PhoneBook/PhoneBook';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

  function App() {
  return (
      <>
         <Container>
          <h1>-Phonebook- </h1>
            <PhoneBook /> 
          <h2>-Contacts-</h2>
            <Filter />
            <ContactList/>
         </Container>
      </>
     );

}

export default App;








































// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
