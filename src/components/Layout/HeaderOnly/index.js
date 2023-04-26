import Header from '~/components/Layout/ComponentLayouts/Header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
