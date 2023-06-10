import { user_info,user_rank,user_rating,username,solvedProblems,tag,inputValue} from "./client.mjs";

export const difficulty = {};
export const mySet = new Set();

export function barGraph() {
    //To destroy a chart;
    // if (myChart) {
    //     myChart.destroy();
    // }
//Traverse the solvedProblem array of objects;
for (let i = 0; i < solvedProblems.length; ++i) {
    difficulty[solvedProblems[i]['index']] = 0;
    mySet.add(solvedProblems[i]['index']);
}
for (let i = 0; i < solvedProblems.length; ++i) {
    difficulty[solvedProblems[i]['index']] += 1;
}
console.log("difficulty : ", difficulty);


const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        // labels: ['A', 'B', 'C', 'D', 'E', 'F','I','J','K','L','M'],
        labels: [...mySet],
        datasets: [
            {
                label: 'Index',
                data: Object.values(difficulty),
            },
        ],
    },
    options: {
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'black'
    }
})
};

