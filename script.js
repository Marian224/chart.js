const lineData = {
    labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень'],
    datasets:[{
        label: 'Продажі (тис.грн)',
        data: [15, 45, 30, 45, 50, 40, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)', 
        tension: 0.3,
        pointRadius: 5,        
    }]
};

const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        plugins: {
            length: {
                position: 'top',
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const myLineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig
);

const pieData = {
    laabels: ['Оренда', 'Їжа', 'Транспорт', 'Розваги', 'Інше'],
     datasets: [{
        label: 'Щомісячні витрати',
        data: [1200, 500, 200, 300, 150], // Значення
        backgroundColor: [
            'rgb(255, 99, 132)', // Червоний
            'rgb(54, 162, 235)', // Синій
            'rgb(255, 205, 86)', // Жовтий
            'rgb(75, 192, 192)', // Зелений
            'rgb(153, 102, 255)' // Фіолетовий
        ],
        hoverOffset: 10 // Ефект при наведенні
    }]
};

const pieConfig = {
    type: 'doughnut',
    data: pieData,
    options: {
        responsive: true,
        plugins: {
            length: {
                position: 'right',
            },
            title: {
                display: false
            }
        }
    }
};

const myPieChart = new Chart(
    document.getElementById('pieChart'),
    pieConfig
);