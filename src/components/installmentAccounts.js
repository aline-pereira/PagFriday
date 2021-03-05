import '../styles/components/installmentAccounts.css'

export function InstallmentAccounts() {
return (
<div className="installment">
    <div className="installment__content">
        <div className="installment__content-image">
            <img src="icons/pagamentodecontas.png" alt="Pagamento de contas" />
        </div>
        <div className="installment__content-description">
            <h3 className="installment__content-title">
            Receba até R$1.000 de volta pagando as suas contas com cartão de qualquer banco, em até 12x
            </h3>
            <p className="installment__content-text">
                Pague contas ou boletos, acima de R$400 e receba parte do dinheiro de volta na conta PagBank.
            </p>
            <span className="installment__content-installment">Pagamento à vista: <b>R$15 de volta</b></span>
            <span className="installment__content-installment">Parcelamento de 2 a 5 vezes: <b>8% de volta</b></span>
            <span className="installment__content-installment">Parcelamento de 6 a 9 vezes: <b>12% de volta</b></span>
            <span className="installment__content-installment">Parcelamento de 10 a 12 vezes: <b>22% de volta</b></span>
            <p className="installment__content-text">
                Vale lembrar, essa oferta é válida para a semana da PagFriday e apenas para clientes que nunca fizeram pagamentos de contas e boletos pelo app.
            </p>
            <button className="installment__content-button">
                Aproveite no super app
            </button>
            <span>
                Período: semana de 23/11 a 27/11.
            </span>
            <p className="installment__content-lastText">
                Cashback limitado a R$1.000. Elegível: pagamento de contas ou boletos acima de R$400. Limitado a um uso por cliente. Cashback será pago até 03/12.
            </p>           
        </div>
    </div>
</div>
);
}