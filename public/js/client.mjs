import { difficulty,barGraph,mySet,mySet_rating,Rate,barGraph_rating,barGraph_tags } from "./chart.mjs";
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
export const inputValue = "";
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

          // Iterate through each submission
          for (const submission of data.result) {
            // Check if the submission was successful
            if (submission.verdict === 'OK') {
              // Extract the problem details
              const problem = submission.problem;
              const Tag = submission.problem.tags;
              

              // Store the problem details in the solvedProblems array
              tag.push(Tag);
              solvedProblems.push(problem);
            }
          }

          // Process the list of solved problems
          // tag.forEach(function(tags,index) {
          //   console.log(`tags: ${tags[0]}`);
          // });
          // solvedProblems.forEach(function(problems,index){
          //   console.log(`problems: ${problems}`);
          // });
          problem_solved.textContent += "Problems Solved : " + solvedProblems.length;

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
  user_info.style.background = "white";
  user_info.style.borderRadius = "10px";
  user_info.style.boxShadow = "0px 1px 10px gray";
};

// Styling for each graph.
// So that there div appears after they are fetched.
