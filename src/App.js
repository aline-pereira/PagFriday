import { BannerHeader } from "./components/bannerHeader";
import { CdBlack } from "./components/cdBlack";
import { InstallmentAccounts } from "./components/installmentAccounts";

import "./styles/global.css";

function App() {
    return (
        <section className="container">
            <div>
                <BannerHeader />
            </div>
            <div>
                <CdBlack/>
            </div>
            <div className="text">
                <p>
                    O PagBank tem as melhores ofertas da Black Friday para você. Garanta <br/> muitas vantagens e dinheiro de volta.
                </p>
            </div>
            <div>
                <InstallmentAccounts/>
            </div>
        </section>
    );
}

export default App;