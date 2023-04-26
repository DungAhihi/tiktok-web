import Header from '~/components/Layout/ComponentLayouts/Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <SideBar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
