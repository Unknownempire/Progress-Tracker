import { difficulty,barGraph,mySet,mySet_rating,Rate,barGraph_rating,barGraph_tags,piechart_verdict} from "./chart.mjs";
const url = 'https://codeforces.com/api/'
const search_handle = document.querySelector("#user_handle")

const myhandle = `https://codeforces.com/api/user.info?handles=unknownempire`
// fetch(myhandle) 
//     .then(response => response.json())
//     .then(data => {
//       // console.log('hit');
//     // Process the retrieved data
//     console.log(data);
//   })
//   .catch(error => {
//     // Handle any errors that occurred during the request
//     console.error('Error:', error);
// });

//Changed to export for exporting-----------------------------
export const user_info = document.querySelector(".user-info");
export const username = document.querySelector(".username")
export const problem_solved = document.querySelector(".problem-solved");
export const user_rating = document.querySelector(".user-rating");
export const user_rank = document.querySelector(".user-rank");
export let solvedProblems = [];
export let tag = [];
export let verdicts =[];
export const inputValue = "";
const pie_styling =  document.querySelector("#myChart_verdict");
const doughnut_styling = document.querySelector("#myChart_tags");
const chartContainer = document.querySelector(".chart-container");
const charBar = document.querySelector('.bar');
//------------------------------------------------------------

search_handle.addEventListener("keydown", function(event)  {
  // Check if the key pressed is the Enter key (key code 13)
  if (event.keyCode === 13) {
    // When entering new user handle remove the previous users details from the div
    let childNodes = user_info.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      let childNode = childNodes[i];
      if (childNode.nodeType === Node.ELEMENT_NODE) {
        // Update the value of the element
        childNode.textContent = '';
      }
    }
    // CSS for the Div containing info of the user
        styling();


    // Get the value of the input box
    event.preventDefault();
    const inputValue = event.target.value;
    username.textContent += "Username : " + inputValue;


    // Do something with the value
    console.log('Input value:', inputValue);
    fetch(`https://codeforces.com/api/user.info?handles=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        // Process the retrieved data
        console.log(data);
        
        //Show User Rating---------------------------------------------------------------------------
        user_rating.textContent += "Rating : " + data.result[0].rating;
        //Show User Rank---------------------------------
        user_rank.textContent += "Rank : " + data.result[0].rank;


        
        
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
      // fetching user status data
    fetch(`https://codeforces.com/api/user.status?handle=${inputValue}&from=1&count=10000`)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          // const solvedProblems = [];
          // const tag = [];
          solvedProblems = [];
          tag =[];
          verdicts =[];

          // Iterate through each submission
          for (const submission of data.result) {
            // Check if the submission was successful
            if (submission.verdict === 'OK') {
              // Extract the problem details
              const problem = submission.problem;
              const Tag = submission.problem.tags;
              // const verd = submission.verdict;
              

              // Store the problem details in the solvedProblems array
              tag.push(Tag);
              solvedProblems.push(problem);
            }
          }
          for(const submission of data.result) {
            const verd = submission.verdict;
              verdicts.push(verd);
          }

          // Process the list of solved problems
          // tag.forEach(function(tags,index) {
          //   console.log(`tags: ${tags[0]}`);
          // });
          solvedProblems.forEach(function(problems,index){
            console.log(`problems: ${problems}`);
          });
          verdicts.forEach(function(problems,index){
            console.log(`verdict: ${problems}`);
          });
          problem_solved.textContent += "Problems Solved : " + solvedProblems.length;
          chart_style();
          bar_style();
          // making canvas element dynamically----------------------

          // createChartCanvas('myChart_verdict');
          // createChartCanvas('myChart_tags');
          // createChartCanvas('myChart');
          // createChartCanvas('myChart_rating');
          //------------------------------------------------

          // console.log(solvedProblems.length);
          // console.log('Solved problems:', solvedProblems);
          //tags of solved problems
          // console.log(tag.length);
          // console.log('tags:', tag);
          // console.log('Problems : ', solvedProblems);
         // making Bar graph--------------------------------------------------------------
          barGraph();
          barGraph_rating();
          barGraph_tags();
          piechart_verdict();

            //Traverse the solvedProblem array of objects;

        } else {
          console.error('Error:', data.comment);
        }
      })
      //----------------------------------------------------------------------------------
      .catch(error => {
        console.error('Error:', error);
      });
  }
});

function styling() {
  // user_info.style.border = "1px groove black";
  user_info.style.width = '50%';
  user_info.style.minHeight = '200px';
  user_info.style.marginBottom = '50px';
  user_info.style.display = 'flex';
  user_info.style.alignItems = 'center';
  user_info.style.justifyContent = 'center';
  user_info.style.flexDirection = 'column';
  user_info.style.textAlign = 'center';
  user_info.style.padding = '1%';
  user_info.style.fontFamily = "'Work Sans', sans-serif";
  user_info.style.background = "white";
  user_info.style.borderRadius = "10px";
  user_info.style.boxShadow = "0px 1px 10px gray";


  pie_styling.style.background = "white";
  pie_styling.style.borderRadius = "10px";
  pie_styling.style.boxShadow = "-1px 4px 10px gray";

  doughnut_styling.style.background = "white";
  doughnut_styling.style.borderRadius = "10px";
  doughnut_styling.style.boxShadow = "-1px 4px 10px gray";
};

function chart_style() {
   if (chartContainer) {
    chartContainer.style.width = '90vw';
    chartContainer.style.display = 'flex';
    chartContainer.style.flexDirection = 'column';
    chartContainer.style.alignItems = 'center';
    chartContainer.style.justifyContent = 'center';
  }
}
function bar_style() {
  if (charBar) {
    charBar.style.width = '90vw';
    charBar.style.display = 'flex';
    charBar.style.flexDirection = 'column';
    charBar.style.alignItems = 'center';
    charBar.style.justifyContent = 'center';
  }
}
// function createChartCanvas(elementId) {
//   var canvas = document.createElement('canvas');
//   canvas.id = elementId;

//   if (charBar) {
//     charBar.appendChild(canvas);
//   }
// }

// createChartCanvas('myChart_verdict');
// createChartCanvas('myChart_tags');
// createChartCanvas('myChart');
// createChartCanvas('myChart_rating');

// Styling for each graph.
// So that there div appears after they are fetched.

