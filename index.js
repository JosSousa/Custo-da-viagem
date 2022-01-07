const km = document.querySelector("#km");
const custoGasolina = document.querySelector("#custoGasolina");
const kmPorLitro = document.querySelector("#kmPorLitro");
const resultado = document.querySelector(".resultado");
const resultado0 = document.querySelector(".resultado0");

function calcularCustoViagem() {
  const custo = km.valueAsNumber * custoGasolina.valueAsNumber;
  const custoFinal = custo / kmPorLitro.valueAsNumber;
  resultado.textContent = `${"O custo da viagem é: "}
    ${custoFinal.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`;
  if (isNaN(custoFinal)) {
    resultado.textContent = "Preencha todos os campos";
  }
}
