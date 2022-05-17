import Footer from '../Footer/Footer';
import HeaderSearchbar from '../Header Searchbar/HeaderSearchbar';
import CategoryOptions from './CategoryOptions';

function Category() {
    return (
        <>
            <HeaderSearchbar />
            <div style={{ paddingTop: "61px" }}>
                <CategoryOptions currentPage='Category' />
                <Footer currentPage='Category' />
            </div>
        </>
    );
}

export default Category;


