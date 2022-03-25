import { useEffect } from "react";
import { useMoralis, useERC20Balances } from "react-moralis";

function TokenBalance(props) {
  const { account, isAuthenticated } = useMoralis();
  const { fetchERC20Balances, data } = useERC20Balances();

  useEffect(() => {
    fetchERC20Balances({ params: { token_addresses: [props.tokenAddress] } });
  }, []);

  if (!account || !isAuthenticated) return null;

  return (
    <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}

export default TokenBalance;
