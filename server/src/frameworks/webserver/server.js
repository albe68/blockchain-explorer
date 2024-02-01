import Moralis from "moralis";
import { config } from "../../../config.js";

const old_ad = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
const ad = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
const ch = "0x1";
const env = config.ENV;
export const router = (app) => {
  app.get("/getetherprice", async (req, res) => {
    try {
      if (env === "development") {
        const response = await Moralis.EvmApi.token.getTokenPrice({
          address: ad,
          chain: ch,
        });
        return res.status(200).json({
          message: "api called",
          resp: response,
        });
      }

      res.status(200).json({
        message: "api called in test",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

  app.get("/getwalletbalance", async (req, res) => {
    try {
      if (env === "development") {
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          address: ad,
          chain: ch,
        });
        return res.status(200).json({
          message: "moralis api response",
          rsp: response,
        });
      }
      res.status(200).json({
        message: "api called in test",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

  app.get("/gettransactions", async (req, res) => {
    try {
      console.log(`cola`, env);
      if (env === "development") {
        const response = await Moralis.AptosApi.transactions
          .getTransactions({
            network: "mainnet",
          })
          .catch((e) => console.log("HAHAHAHHAH", e));
        console.log(`mainnet${response}`);
        return res.status(200).json({
          message: "moralis api",
          res: response,
        });
      }
      res.status(200).json({
        message: "api called in test",
      });
    } catch (error) {
      res.status(400).json({
        message: error,
      });
    }
  });

  app.get("/address", async (req, res) => {
    try {
      console.log(`qqqqqqq`, req.query.id, `qqqqqqq`);

      // const { query } = req;

      // console.log(`query_id`, query.id);

      if (env === "development") {
        const response =
          await Moralis.EvmApi.transaction.getWalletTransactionsVerbose({
            address: query.id,
            chain: ch,
          });
        return res.status(200).json({
          message: "moralis api",
          resp: response,
        });
      }
      res.status(200).json({
        message: "api called in test",
        dummy: address_dummy_json,
      });
    } catch (error) {
      console.error("locker", error, "locker");
      res.status(400).json({
        message: "failure",
        error: error,
      });
    }
  });
};

const address_dummy_json = {
  json: "dummy predefined json",
  page_size: 100,
  page: 1,
  cursor:
    "eyJhbGciOiJIUzI1NiJ9.eyJ0YWJsZUluZGV4IjowLCJsYXN0RXZhbHVhdGVkS2V5Ijp7InRpbWVfdHhJbmRleCI6IjAwMDE3MDY1ODkzNTkwMDAwMDA4NCIsIndhbGxldEFkZHJlc3MiOiIweDIyNjBmYWM1ZTU1NDJhNzczYWE0NGZiY2ZlZGY3YzE5M2JjMmM1OTkifSwicGFnZU51bWJlciI6MCwia2V5Q29uZGl0aW9uRXhwcmVzc2lvbiI6eyJ3YWxsZXRBZGRyZXNzIjp7ImVxIjoiMHgyMjYwZmFjNWU1NTQyYTc3M2FhNDRmYmNmZWRmN2MxOTNiYzJjNTk5In0sInRpbWVfdHhJbmRleCI6eyJiZXR3ZWVuIjpbIjAwMDE0MzgyNjk5NzMwMDAwMDAwMCIsIjAwMDE3MDY1OTQyNDMwMDEwMDAwMCJdfX0sImxpbWl0IjoxMDAsIm9yZGVyIjoiZGVzY2VuZGluZyJ9.NHf4KdJ7g1hjoG2OiaP432DjPNRE-UV6yY1O1rlkLYw",
  result: [
    {
      hash: "0xccf9ef67b0fda5887befcddcb0c44e7d8cbac7531399994d4a370607743985f4",
      nonce: "30",
      transaction_index: "71",
      from_address: "0xd0996fd8113838be107539dabfa5ebd89583d45d",
      from_address_label: null,
      to_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      to_address_label: "Wrapped BTC (WBTC)",
      value: "0",
      gas: "48320",
      gas_price: "11322145914",
      input:
        "0x095ea7b30000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c7574820000000000000000000000000000000000000000000000000000000000a27718",
      receipt_cumulative_gas_used: "8367654",
      receipt_gas_used: "48320",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2024-01-30T05:56:47.000Z",
      block_number: "19117376",
      block_hash:
        "0x68a9a6ec8cec0c537674c255a1811e049f0cc672e01a75a6f342fe78fa8dda09",
      logs: [
        {
          address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          block_number: "19117376",
          block_hash:
            "0x68a9a6ec8cec0c537674c255a1811e049f0cc672e01a75a6f342fe78fa8dda09",
          block_timestamp: "2024-01-30T05:56:47.000Z",
          data: "0x0000000000000000000000000000000000000000000000000000000000a27718",
          log_index: "269",
          transaction_hash:
            "0xccf9ef67b0fda5887befcddcb0c44e7d8cbac7531399994d4a370607743985f4",
          transaction_index: "71",
          transaction_value: "0",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x000000000000000000000000d0996fd8113838be107539dabfa5ebd89583d45d",
          topic2:
            "0x0000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c757482",
          topic3: null,
          decoded_event: {
            label: "Approval",
            signature: "Approval(address,address,uint256)",
            type: "event",
            params: [
              {
                name: "owner",
                type: "address",
                value: "0xD0996fd8113838Be107539dAbFa5EbD89583d45d",
              },
              {
                name: "spender",
                type: "address",
                value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
              },
              {
                name: "value",
                type: "uint256",
                value: "10647320",
              },
            ],
          },
        },
      ],
      decoded_call: {
        type: "function",
        label: "approve",
        signature: "approve(address,uint256)",
        params: [
          {
            name: "_spender",
            type: "address",
            value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
          },
          {
            name: "_value",
            type: "uint256",
            value: "10647320",
          },
        ],
      },
    },
    {
      hash: "0xa8bd766f24545c334e5304909f6f49f596d688a10b17850e849a99f020d89904",
      nonce: "18",
      transaction_index: "186",
      from_address: "0xecb422088a6f7413c18ad765201d77f078049c70",
      from_address_label: null,
      to_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      to_address_label: "Wrapped BTC (WBTC)",
      value: "0",
      gas: "48320",
      gas_price: "11157435048",
      input:
        "0x095ea7b30000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c757482000000000000000000000000000000000000000000000000000000000003d31e",
      receipt_cumulative_gas_used: "14320157",
      receipt_gas_used: "48320",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2024-01-30T05:55:11.000Z",
      block_number: "19117368",
      block_hash:
        "0x44c1d68f26f0bdde8d78c7a2a5e0645398aba5606f6ebdb737828e25672552ee",
      logs: [
        {
          address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          block_number: "19117368",
          block_hash:
            "0x44c1d68f26f0bdde8d78c7a2a5e0645398aba5606f6ebdb737828e25672552ee",
          block_timestamp: "2024-01-30T05:55:11.000Z",
          data: "0x000000000000000000000000000000000000000000000000000000000003d31e",
          log_index: "374",
          transaction_hash:
            "0xa8bd766f24545c334e5304909f6f49f596d688a10b17850e849a99f020d89904",
          transaction_index: "186",
          transaction_value: "0",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x000000000000000000000000ecb422088a6f7413c18ad765201d77f078049c70",
          topic2:
            "0x0000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c757482",
          topic3: null,
          decoded_event: {
            label: "Approval",
            signature: "Approval(address,address,uint256)",
            type: "event",
            params: [
              {
                name: "owner",
                type: "address",
                value: "0xecb422088A6F7413c18Ad765201D77f078049C70",
              },
              {
                name: "spender",
                type: "address",
                value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
              },
              {
                name: "value",
                type: "uint256",
                value: "250654",
              },
            ],
          },
        },
      ],
      decoded_call: {
        type: "function",
        label: "approve",
        signature: "approve(address,uint256)",
        params: [
          {
            name: "_spender",
            type: "address",
            value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
          },
          {
            name: "_value",
            type: "uint256",
            value: "250654",
          },
        ],
      },
    },
    {
      hash: "0xd4e2dc9f729ec1815318bc1038a789c53b048e0dc30d06b830b298ce8861812e",
      nonce: "32",
      transaction_index: "105",
      from_address: "0x7c1b9300c06cf0794b35b59bc480bdc4111cc371",
      from_address_label: null,
      to_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      to_address_label: "Wrapped BTC (WBTC)",
      value: "0",
      gas: "48320",
      gas_price: "12264638821",
      input:
        "0x095ea7b30000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c7574820000000000000000000000000000000000000000000000000000000000053bd8",
      receipt_cumulative_gas_used: "8677477",
      receipt_gas_used: "48320",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2024-01-30T05:54:23.000Z",
      block_number: "19117364",
      block_hash:
        "0x2748327951b1be3aafb733620a838a877c5bd56030cc2d2bf5ab3260bed820f8",
      logs: [
        {
          address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          block_number: "19117364",
          block_hash:
            "0x2748327951b1be3aafb733620a838a877c5bd56030cc2d2bf5ab3260bed820f8",
          block_timestamp: "2024-01-30T05:54:23.000Z",
          data: "0x0000000000000000000000000000000000000000000000000000000000053bd8",
          log_index: "210",
          transaction_hash:
            "0xd4e2dc9f729ec1815318bc1038a789c53b048e0dc30d06b830b298ce8861812e",
          transaction_index: "105",
          transaction_value: "0",
          topic0:
            "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
          topic1:
            "0x0000000000000000000000007c1b9300c06cf0794b35b59bc480bdc4111cc371",
          topic2:
            "0x0000000000000000000000000b9d820c4e03bf8d3bb664d9c63184961c757482",
          topic3: null,
          decoded_event: {
            label: "Approval",
            signature: "Approval(address,address,uint256)",
            type: "event",
            params: [
              {
                name: "owner",
                type: "address",
                value: "0x7C1b9300C06cf0794B35B59bc480bdc4111cc371",
              },
              {
                name: "spender",
                type: "address",
                value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
              },
              {
                name: "value",
                type: "uint256",
                value: "343000",
              },
            ],
          },
        },
      ],
      decoded_call: {
        type: "function",
        label: "approve",
        signature: "approve(address,uint256)",
        params: [
          {
            name: "_spender",
            type: "address",
            value: "0x0b9D820C4E03bf8D3bB664D9C63184961c757482",
          },
          {
            name: "_value",
            type: "uint256",
            value: "343000",
          },
        ],
      },
    },
    {
      hash: "0x6e363880c22e70bdb2f1a4c67191b7f3bd42ede650e1b89930677580a9cd76d1",
      nonce: "180",
      transaction_index: "127",
      from_address: "0xf923e2e36f4eae305ce4efcc971f03a2bdde8812",
      from_address_label: null,
      to_address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      to_address_label: "Wrapped BTC (WBTC)",
      value: "0",
      gas: "55949",
      gas_price: "11871688218",
      input:
        "0xa9059cbb000000000000000000000000d0996fd8113838be107539dabfa5ebd89583d45d0000000000000000000000000000000000000000000000000000000000a0f078",
      receipt_cumulative_gas_used: "8463056",
      receipt_gas_used: "32499",
      receipt_contract_address: null,
      receipt_root: null,
      receipt_status: "1",
      block_timestamp: "2024-01-30T05:53:11.000Z",
      block_number: "19117358",
      block_hash:
        "0xeedac857e1aa03e6d97fabcc5bd8cccb2d6bfa702e7d876be434fa465cbd785c",
      logs: [
        {
          address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
          block_number: "19117358",
          block_hash:
            "0xeedac857e1aa03e6d97fabcc5bd8cccb2d6bfa702e7d876be434fa465cbd785c",
          block_timestamp: "2024-01-30T05:53:11.000Z",
          data: "0x0000000000000000000000000000000000000000000000000000000000a0f078",
          log_index: "244",
          transaction_hash:
            "0x6e363880c22e70bdb2f1a4c67191b7f3bd42ede650e1b89930677580a9cd76d1",
          transaction_index: "127",
          transaction_value: "0",
          topic0:
            "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          topic1:
            "0x000000000000000000000000f923e2e36f4eae305ce4efcc971f03a2bdde8812",
          topic2:
            "0x000000000000000000000000d0996fd8113838be107539dabfa5ebd89583d45d",
          topic3: null,
          decoded_event: {
            label: "Transfer",
            signature: "Transfer(address,address,uint256)",
            type: "event",
            params: [
              {
                name: "from",
                type: "address",
                value: "0xf923E2e36f4EAe305Ce4EFcC971f03a2bDdE8812",
              },
              {
                name: "to",
                type: "address",
                value: "0xD0996fd8113838Be107539dAbFa5EbD89583d45d",
              },
              {
                name: "value",
                type: "uint256",
                value: "10547320",
              },
            ],
          },
        },
      ],
      decoded_call: {
        type: "function",
        label: "transfer",
        signature: "transfer(address,uint256)",
        params: [
          {
            name: "_to",
            type: "address",
            value: "0xD0996fd8113838Be107539dAbFa5EbD89583d45d",
          },
          {
            name: "_value",
            type: "uint256",
            value: "10547320",
          },
        ],
      },
    },
  ],
};
