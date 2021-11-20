import { Container } from "./styles";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saídas.svg";
import total from "../../assets/total.svg";
import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={entrada} alt="entrada" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saida</p>
          <img src={saida} alt="saida" />
        </header>
        <strong>- R$1000</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>R$1000</strong>
      </div>
    </Container>
  );
}
