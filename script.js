document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('stockChart').getContext('2d');

    // Dummy data for demonstration
    const labels = ['January', 'February', 'March', 'April', 'May'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'Harga Saham',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    new Chart(ctx, config);

    // Placeholder untuk intercept event klik pada watchlist
    const watchlist = document.querySelectorAll('#watchlist li');
    watchlist.forEach(stock => {
        stock.addEventListener('click', () => {
            alert(`Meminta prediksi untuk ${stock.textContent}.`);
            // Memasukan kode API fetching apabila ada sumber
        });
    });
});
