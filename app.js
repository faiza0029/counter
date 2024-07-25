const endDate='6 September 2024 '
document.getElementById('end-date').innerText=endDate;
const inputs = document.querySelectorAll('input')
// const clock =()=>{

// }
function clock() {
    const end = new Date(endDate)
    const now= new Date()
    const diff = (end-now) / 1000;
    console.log(diff)
    inputs[0].value =Math.floor(diff/3600/24);
    inputs[1].value =Math.floor(diff/3600)%24;
    inputs[2].value =Math.floor(diff/60)%60;
    inputs[3].value =Math.floor(diff)%60;
    // convert into days
}
// initial call
clock()

/**
 * 1 day = 24 hours
 * 1 hr = 60 min
 * 60 min = 360 sec
 */
setInterval(
    ()=>{
        clock()
    },
    1000
)


  
  