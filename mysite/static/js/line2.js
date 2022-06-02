new Chart(document.getElementById("line-chart2"), {
    type: 'line',
    data: {
      labels: [0,2,4,6,8,10,12,14,16,18,20,22],
      datasets: [{ 
          data: [-1.8087668,
            -1.8467501,
            -1.5637408,
            -1.5093167,
            -1.2771121,
            -2.085342,
            -2.2167046,
            -1.8401889,
            -1.9647342,
            -2.4540884,
            -3.1712685,
            -1.5776808,
            -2.1841478,
            -1.1035334,
            -1.1608106,
            -0.35024476,
            ],
          label: "Anxiety",
          borderColor: "#3cba9f",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: '05-24 Anxiety'
      }
    }
  });