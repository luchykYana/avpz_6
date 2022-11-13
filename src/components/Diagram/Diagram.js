import Chart from 'chart.js/auto';

import css from './Diagram.module.css';

const Diagram = ({title, criteria, id}) => {

    const data = (id) => {
        let mas = [];
        for (const elem of criteria) {
            mas.push(elem.values[id] * elem.grades[id]);
        }

        return mas;
    }

    const diagram = () => {
        const marksCanvas = document.getElementById(title);
        const context = marksCanvas.getContext('2d');

        const radarChart = new Chart(context, {
            type: 'radar',
            data: {
                labels: ["0", "36", "72", "108", "144", "180", "216", "252", "288", "324"],
                datasets: [{
                    label: title,
                    data: data(id),
                    backgroundColor: "rgba(200,0,0,0.2)",
                }]
            }
        });
    }

    const diagram2 = () => {
        const marksCanvas = document.getElementById(title);
        const context = marksCanvas.getContext('2d');

        const radarChart = new Chart(context, {
            type: 'radar',
            data: {
                labels: ["0", "36", "72", "108", "144", "180", "216", "252", "288", "324"],
                datasets: [
                    {
                        label: "Експерти галузі",
                        data: data(0),
                        backgroundColor: "rgba(200,0,0,0.2)",
                    },
                    {
                        label: "Експерти зручності",
                        data: data(1),
                        backgroundColor: "rgba(0,200,0,0.2)",
                    },
                    {
                        label: "Експерти з програмування",
                        data: data(2),
                        backgroundColor: "rgba(0,0,200,0.2)",
                    },
                    {
                        label: "Потенційні користувачі",
                        data: data(3),
                        backgroundColor: "rgba(200,0,200,0.2)",
                    }
                ]
            }
        });
    }

    return (
        <div>
            {id < 4 &&
                <div className={`${css.diagram}`}>
                    <canvas id={`${title}`} width="400" height="400" onClick={diagram}></canvas>
                </div>
            }

            {id === 4 &&
                <div className={`${css.diagram2}`}>
                    <canvas id={`${title}`} width="600" height="600" onClick={diagram2}></canvas>
                </div>
            }
        </div>
    );
};

export {Diagram};