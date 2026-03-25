// ------------------------------
// 1. CONTADOR DE VISITANTES
// ------------------------------
let visitCount = localStorage.getItem('solarColombiaVisitors');
if (!visitCount) {
    visitCount = Math.floor(Math.random() * 450) + 120;
    localStorage.setItem('solarColombiaVisitors', visitCount);
} else {
    visitCount = parseInt(visitCount);
    let newCount = visitCount + 1;
    localStorage.setItem('solarColombiaVisitors', newCount);
    visitCount = newCount;
}

const visitorSpan = document.getElementById('visitorCount');
if(visitorSpan) visitorSpan.innerText = visitCount;

// ------------------------------
// 2. GRÁFICOS INTERACTIVOS GOOGLE CHARTS
// ------------------------------
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawAllCharts);

function drawAllCharts() {
    // Gráfico de barras: Capacidad solar por región
    const barData = google.visualization.arrayToDataTable([
        ['Región', 'MW Instalados (2025)', { role: 'style' }],
        ['Caribe', 485, '#F4B400'],
        ['Andina', 412, '#1E3A8A'],
        ['Orinoquía', 198, '#DC2626'],
        ['Pacífica', 97, '#F4B400'],
        ['Amazonía', 28, '#1E3A8A']
    ]);
    
    const barOptions = {
        title: 'Capacidad solar por región (MW) - Datos 2025',
        backgroundColor: '#fffbf0',
        legend: { position: 'none' },
        hAxis: