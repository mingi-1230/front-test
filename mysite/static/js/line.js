new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [0,2,4,6,8,10,12,14,16,18,20,22],
      datasets: [{ 
          data: [5.5491986,
            3.5540967,
            0.2748199,
            -0.3691957,
            -0.30978608,
            1.3619653,
            7.761651,
            0.7036764,
            0.032842703,
            4.206326,
            5.578975,
            -0.14990497,
            0.5765714,
            7.7209253,
            8.085527,
            7.6427393
            ],
          label: "Sadness",
          borderColor: "#3e95cd",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '05-24 Sadness'
      }
    }
  });