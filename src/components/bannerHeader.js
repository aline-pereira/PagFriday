import '../styles/components/bannerHeader.css'

export function BannerHeader() {
return (
<div className="bannerHeader">
    <div className="bannerHeader__logo">
        <img src="icons/logo.png" alt="Logo"/>
    </div>

    <div className="bannerHeader__content">
        <div className="bannerHeader__box">
            <img src="icons/pagFriday.png" alt="Oferta PagFriday"/>

            <div className="bannerHeader__box-bullets">
                <ul>
                    <li>
                        <p>Dinheiro <br/>de volta</p>
                        <span>
                        <img src="icons/cashback-icon.png" alt="Dinheiro de volta"/>
                        </span>
                    </li>

                    <li>
                        <p>Melhores <br/>ofertas</p>
                        <span>
                        <img src="icons/percent-icon.png" alt="Melhores ofertas"/>
                        </span>
                    </li>

                    <li>
                        <p>Grandes <br/>parceiros</p>
                        <span>
                        <img src="icons/star-icon.png" alt="Grandes parceiros"/>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="bannerHeader__box-phoneImg">
            <img src="icons/celular.png" alt="PagBank App"/>
        </div>
    </div>
</div>
);
}