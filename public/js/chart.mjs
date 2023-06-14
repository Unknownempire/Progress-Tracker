import { user_info,user_rank,user_rating,username,solvedProblems,tag,inputValue,verdicts} from "./client.mjs";
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
        aspectRatio: 3,
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
        aspectRatio: 3,
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
        legend: {
            display: false, // Hide the labels
        },
        chartOptions,
        aspectRatio: 3,
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


//Pie chart

export const verdi= {};
export const mySet_verdicts = new Set();

export function piechart_verdict() {
    //To destroy a chart;
    // if (myChart) {
    //     myChart.destroy();
    // }
//Traverse the solvedProblem array of objects;
    verdicts.forEach(function (tags, index) {
        verdi[tags] = 0;
        mySet_verdicts.add(tags);
    });

    verdicts.forEach(function (tags, index) {
        // console.log(`tags: ${tags[0]}`);
        verdi[tags] += 1;
    });

console.log("verdicts : ", verdi);
var chartOptions = {
  cutout: 40 // Adjust this value to make the doughnut thinner
};


const ctx = document.getElementById('myChart_verdict').getContext('2d');

const myChart_verdict = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: [...mySet_verdicts],
        // labels: ['OK','WRONG_ANSWER','RUNTIME_ERROR','TIME_LIMIT_EXCEEDED','COMPILATION_ERROR','MEMORY_LIMIT_EXCEEDED','PRESENTATION_ERROR','IDLENESS_LIMIT_EXCEEDED',' SECURITY_VIOLATED','CRASHED','INPUT_PREPARATION_CRASHED','CHALLENGED',' SKIPPED','TESTING','REJECTED'],
        datasets: [
            {
                label: 'verdicts',
                data: Object.values(verdi),
            },
        ],
    },
    options: {
        legend: {
            display : false // Hide the labels
        },
        chartOptions,
        aspectRatio: 4,
        animationanimateScale : true,
        backgroundColor: [
            'rgb(0, 255, 0)',       // 'OK' (Accepted): Green
            'rgb(255, 0, 0)',       // 'WRONG_ANSWER': Red
            'rgb(128, 0, 128)',     // 'RUNTIME_ERROR': Purple
            'rgb(255, 255, 0)',     // 'TIME_LIMIT_EXCEEDED': Yellow
            'rgb(255, 165, 0)',     // 'COMPILATION_ERROR': Orange
            'rgb(0, 0, 139)',       // 'MEMORY_LIMIT_EXCEEDED': Dark Blue
            'rgb(255, 192, 203)',   // 'PRESENTATION_ERROR': Pink
            'rgb(173, 216, 230)',   // 'IDLENESS_LIMIT_EXCEEDED': Light Blue
            'rgb(139, 0, 0)',       // 'SECURITY_VIOLATED': Dark Red
            'rgb(169, 169, 169)',   // 'CRASHED': Dark Gray
            'rgb(165, 42, 42)',     // 'INPUT_PREPARATION_CRASHED': Brown
            'rgb(128, 128, 0)',     // 'CHALLENGED': Olive
            'rgb(211, 211, 211)',   // 'SKIPPED': Light Gray
            'rgb(0, 255, 255)',     // 'TESTING': Cyan
            'rgb(0, 100, 0)'],
        borderWidth: 2,
        borderColor: 'black',
        hoverOffset: 4
    }
})
};

