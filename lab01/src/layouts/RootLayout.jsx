import NavBarMenu from '../components/NavBarMenu';
import Footer from '../components/Footer';

function RootLayout({ children, items }) {
    return (
        <>
            <NavBarMenu items={items} />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default RootLayout;
