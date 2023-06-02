import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>01/06/2023</td>
                        </tr>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="outcome">R$ 12.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>01/06/2023</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}