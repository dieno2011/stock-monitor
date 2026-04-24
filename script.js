document.addEventListener('DOMContentLoaded', function() {
    const watchlistTable = document.querySelector('#watchlist tbody');
    const addButton = document.getElementById('add-button');
    const addStockInput = document.getElementById('add-stock');

    // Panggil fungsi widget TradingView
    let widget = new TradingView.widget({
        container_id: "tradingview_abcde",
        width: "100%",
        height: "100%",
        symbol: "",
        interval: "D",
        timezone: "exchange",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
    });

    // Emitten list dan data mok
    let stockData = {
        'AAPL': { price: 150, arb: 145, ara: 155, prediction: 152, suggest: 'Hold' },
        'GOOGL': { price: 2800, arb: 2600, ara: 2900, prediction: 2850, suggest: 'Buy' },
        'MSFT': { price: 300, arb: 290, ara: 310, prediction: 305, suggest: 'Sell' },
        'TSLA': { price: 900, arb: 850, ara: 950, prediction: 920, suggest: 'Buy' }
    };

    const addStockToWatchlist = (symbol) => {
        if (symbol in stockData && !watchlistTable.querySelector(`tr[data-symbol="${symbol}"]`)) {
            const row = document.createElement('tr');
            row.setAttribute('data-symbol', symbol);
            row.innerHTML = `
                <td>${symbol}</td>
                <td>${stockData[symbol].price}</td>
                <td>${stockData[symbol].arb}</td>
                <td>${stockData[symbol].ara}</td>
                <td>${stockData[symbol].prediction}</td>
                <td>${stockData[symbol].suggest}</td>
            `;
            row.addEventListener('click', () => updateChart(symbol));
            watchlistTable.appendChild(row);
        }
    };

    const updateChart = (symbol) => {
        widget.setSymbol(symbol);
    };

    // Tambah stock ketika tombol diklik
    addButton.addEventListener('click', () => {
        const symbol = addStockInput.value.trim().toUpperCase();
        if (symbol) addStockToWatchlist(symbol);
        addStockInput.value = '';
    });

    // Tambah beberapa saham awal ke watchlist
    ['AAPL', 'GOOGL', 'MSFT', 'TSLA'].forEach(symbol => addStockToWatchlist(symbol));
});
