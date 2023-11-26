import Header from '../../components/header';
import Footer from '../../components/footer';

export default function HeaderFooter(Body) {
    const HeaderFooter = document.createElement('div');
    HeaderFooter.className = 'App';

    HeaderFooter.appendChild(Header());
    HeaderFooter.appendChild(Body());
    HeaderFooter.appendChild(Footer());

    return HeaderFooter;
}
