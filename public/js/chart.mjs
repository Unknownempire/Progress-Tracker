import { user_info,user_rank,user_rating,username,solvedProblems,tag,inputValue} from "./client.mjs";
//indexes bar graph
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
        backgroundColor: 'green',
        borderWidth: 2,
        borderColor: 'black',
        hoverOffset: 4
    }
})
};


//rating bar graph

export const Rate= {};
export const mySet_rating = new Set();

export function barGraph_rating() {
    //To destroy a chart;
    // if (myChart) {
    //     myChart.destroy();
    // }
//Traverse the solvedProblem array of objects;
for (let i = 0; i < solvedProblems.length; ++i) {
    Rate[solvedProblems[i]['rating']] = 0;
    mySet_rating.add(solvedProblems[i]['rating']);
}
for (let i = 0; i < solvedProblems.length; ++i) {
    Rate[solvedProblems[i]['rating']] += 1;
}
console.log("rating : ", Rate);


const ctx = document.getElementById('myChart_rating').getContext('2d');

const myChart_rating = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [...mySet_rating],
        datasets: [
            {
                label: 'Ratings',
                data: Object.values(Rate),
            },
        ],
    },
    options: {
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'black',
        hoverOffset: 4
    }
})
};



//Donut Chart

export const problem_tags= {};
export const mySet_tags = new Set();

export function barGraph_tags() {
    //To destroy a chart;
    // if (myChart) {
    //     myChart.destroy();
    // }
//Traverse the solvedProblem array of objects;
    tag.forEach(function (tags, index) {
        problem_tags[tags[0]]= 0;
        mySet_tags.add(tags[0]);
    });

    tag.forEach(function (tags, index) {
        // console.log(`tags: ${tags[0]}`);
        problem_tags[tags[0]] += 1;
    });

console.log("tags : ", problem_tags);
var chartOptions = {
  cutout: 40 // Adjust this value to make the doughnut thinner
};


const ctx = document.getElementById('myChart_tags').getContext('2d');

const myChart_tags = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [...mySet_tags],
        datasets: [
            {
                label: 'tags',
                data: Object.values(problem_tags),
            },
        ],
    },
    options: {
        chartOptions,
        animationanimateScale : true,
        backgroundColor: ['rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)',
            'rgb(255, 0, 0)',
            'rgb(0, 255, 0)',
            'rgb(0, 0, 255)',
            'rgb(255, 128, 0)',
            'rgb(0, 255, 255)',
            'rgb(255, 0, 255)',
            'rgb(128, 0, 128)',
            'rgb(128, 128, 0)',
            'rgb(0, 128, 0)',
            'rgb(128, 0, 0)',
            'rgb(0, 0, 128)',
            'rgb(0, 128, 128)',
            'rgb(128, 128, 128)',
            'rgb(0, 255, 128)'],
        borderWidth: 2,
        // borderColor: 'black',
        hoverOffset: 4
    }
})
};
