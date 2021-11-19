import Modal from "react-modal";
import incomeImg from "../../assets/entradas.svg";
import outcomeImg from "../../assets/saídas.svg";
import closeImg from "../../assets/fechar.svg";
import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="submit"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTypeContainer>
          <button type="button">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>
          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        <input type="number" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
