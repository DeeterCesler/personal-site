import { createContext, useContext, useState, useRef } from 'react';

const ContactContext = createContext(null);

export const ContactProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timerRef = useRef(null);

  const openContact = () => setOpen(true);
  const closeContact = () => {
    setClosing(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { setOpen(false); setClosing(false); }, 200);
  };

  return (
    <ContactContext.Provider value={{ open, closing, openContact, closeContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
