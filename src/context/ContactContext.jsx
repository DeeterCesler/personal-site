import { createContext, useContext, useState } from 'react';

const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openContact = () => setOpen(true);
  const closeContact = () => {
    setClosing(true);
    setTimeout(() => { setOpen(false); setClosing(false); }, 200);
  };

  return (
    <ContactContext.Provider value={{ open, closing, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
