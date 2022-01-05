import { Container } from "./styles";
import entrada from "../../assets/entradas.svg";
import saida from "../../assets/saídas.svg";
import total from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container
      style={{
        visibility: `${transactions.length !== 0 ? "visible" : "hidden"}`,
      }}
    >
      <div style={{ ["--order" as any]: transactions.length + 1 }}>
        <header>
          <p>Entradas</p>
          <img src={entrada} alt="entrada" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>

      <div style={{ ["--order" as any]: transactions.length + 2 }}>
        <header>
          <p>Saida</p>
          <img src={saida} alt="saida" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>

      <div
        style={{ ["--order" as any]: transactions.length + 3 }}
        className="highlight-background"
      >
        <header>
          <p>Total</p>
          <img src={total} alt="total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
