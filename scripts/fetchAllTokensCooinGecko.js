// // const fetch = require("node-fetch");

// console.log("fetchAllTokensCooinGecko");
// const response = await fetch(
//   "https://api.coingecko.com/api/v3/coins/list?include_platform=true&per_page=100&order=market_cap_desc",
//   { mode: "cors" }
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const tbody = document.querySelector("#token-table tbody");
//     data.forEach((token, index) => {
//       const tr = document.createElement("tr");
//       const rankTd = document.createElement("td");
//       rankTd.textContent = index + 1;
//       tr.appendChild(rankTd);
//       const nameTd = document.createElement("td");
//       nameTd.textContent = token.name;
//       tr.appendChild(nameTd);
//       const addressTd = document.createElement("td");
//       const platforms = Object.keys(token.platforms);
//       if (platforms.length > 0) {
//         addressTd.textContent = token.platforms[platforms[0]];
//         addressTd.setAttribute("data-address", token.platforms[platforms[0]]);
//         const copyButton = document.createElement("button");
//         copyButton.textContent = "Copy";
//         copyButton.addEventListener("click", () => {
//           const address = addressTd.getAttribute("data-address");
//           navigator.clipboard
//             .writeText(address)
//             .then(() => {
//               console.log(`Copied ${address} to clipboard`);
//             })
//             .catch((error) => {
//               console.error(`Error copying ${address} to clipboard: ${error}`);
//             });
//         });
//         addressTd.appendChild(copyButton);
//       } else {
//         addressTd.textContent = "N/A";
//       }
//       tr.appendChild(addressTd);
//       const marketCapTd = document.createElement("td");
//       marketCapTd.textContent = Number(token.market_cap).toLocaleString();
//       tr.appendChild(marketCapTd);
//       tbody.appendChild(tr);
//     });
//   })
//   .catch((error) => console.error(error));
// const hre = require("hardhat");
const main = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/list?include_platform=true",
    {
      mode: "cors",
    }
  );

  console.log(response);
};

main();
