import React from 'react';
import Navigation from './components/Navigation';
import CustomBanner from './components/CustomBanner';
import MenuSection from './components/MenuSection';
import OrderOnlineSection from './components/OrderOnlineSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer.jsx';
import menuData from './Yenba_Gemak_Menu.json'; // Ensure this file is correctly formatted JSON

function App() {
    return (
        <>
            <Navigation />
            <CustomBanner />
            <MenuSection menu={menuData} />
            <OrderOnlineSection />
            <TestimonialsSection />
            <FAQSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
