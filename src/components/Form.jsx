import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCoins from "../hooks/useSelectCoins.jsx";
import { coins } from "../data/coins";

const ImputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  margin-top: 30px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [cryptos, setCryptos] = useState([]);
  const [coin, SelectCoins] = useSelectCoins("Elige tu Moneda", coins);

  useEffect(() => {
    const getAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await fetch(url);
      const result = await response.json();
      const arrayCrypto = result.Data.map((crypto) => {
        const objectCrypto = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };
        return objectCrypto;
      });

      setCryptos(arrayCrypto);
    };
    getAPI();
  }, []);

  return (
    <form>
      <SelectCoins />
      {coin}
      <ImputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Form;
