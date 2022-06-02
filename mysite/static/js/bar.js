new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
    labels: ["Fear", "Surprised", "Anger", "Sadness", "Neutrality","Happiness", "Anxiety", "Embarrassed", "Hurt", "interested", "Boredom"],
    datasets: [
        {
            label: "05-26",
            fill: true,
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179,181,198,1)",
            data: [-0.62874178,	0.948901868, -1.250223871, 1.23663546, 1.06688676, 5.060591872, -2.18472584, -2.09446212, -2.07416162, -1.700204564, -2.09756552
            ]
        }, {
            label: "05-25",
            fill: true,
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            data: [1.812462967, 1.524700207, -0.40692597, 1.24381225, 5.239975633, 0.266229047, -2.734003933, -3.396951767, -3.3996747, -2.721486033, -2.960172833
            ]
        }
    ]
    },
    options: {
        title: {
            display: true,
            text: 'Emotion Status by a day'
        }
    }
});