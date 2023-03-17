const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'api_key': 'tm-49bee39f-1ce6-4f13-8cf1-9fc5c69597f9'
    }
  };
  
  const apiUrl = 'https://api.tokenmetrics.com/v1/tokens';
  
  fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
      // Ordenar por capitalización de mercado de mayor a menor
      const tokensSorted = data.data.sort((a, b) => b.market_cap - a.market_cap);
  
      // Crear la tabla
      const table = document.createElement('table');
      table.classList.add('tokens-table');
  
      // Crea la fila de encabezado
      const headerRow = document.createElement('tr');
      const headerNames = ['Rank', 'Name', 'Symbol', 'Market Cap', 'Price', '24h Change', '7d Change', '30d Change'];
      headerNames.forEach(name => {
        const th = document.createElement('th');
        th.innerText = name;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      // Crea las filas de cada token
      tokensSorted.forEach((token, index) => {
        const tr = document.createElement('tr');
        tr.classList.add('token-row');
  
        // Rank
        const rankTd = document.createElement('td');
        rankTd.innerText = index + 1;
        tr.appendChild(rankTd);
  
        // Name
        const nameTd = document.createElement('td');
        nameTd.innerText = token.name;
        tr.appendChild(nameTd);
  
        // Symbol
        const symbolTd = document.createElement('td');
        symbolTd.innerText = token.symbol;
        tr.appendChild(symbolTd);
  
        // Market Cap
        const marketCapTd = document.createElement('td');
        marketCapTd.innerText = token.market_cap ? `$${token.market_cap.toLocaleString()} USD` : 'N/A';
        tr.appendChild(marketCapTd);
  
        // Price
        const priceTd = document.createElement('td');
        priceTd.innerText = token.price ? `$${token.price.toFixed(2)} USD` : 'N/A';
        tr.appendChild(priceTd);
  
        // 24h Change
        const change24hTd = document.createElement('td');
        change24hTd.innerText = token.percent_change_24h ? `${token.percent_change_24h.toFixed(2)}%` : 'N/A';
        tr.appendChild(change24hTd);
  
        // 7d Change
        const change7dTd = document.createElement('td');
        change7dTd.innerText = token.percent_change_7d ? `${token.percent_change_7d.toFixed(2)}%` : 'N/A';
        tr.appendChild(change7dTd);
  
        // 30d Change
        const change30dTd = document.createElement('td');
        change30dTd.innerText = token.percent_change_30d ? `${token.percent_change_30d.toFixed(2)}%` : 'N/A';
        tr.appendChild(change30dTd);
  
        table.appendChild(tr);
      });
  
      // Agrega la tabla al documento HTML
      document.body.appendChild(table);
    })
    .catch(error => console.error(error));
  