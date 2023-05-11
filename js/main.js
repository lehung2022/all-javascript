
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
})
// (34:50) Listening for a HTML Form submit event
// (36:20) HTML Form default behavior
// (37:00) Prevent default behavior with event.preventDefault()
const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event) => {
        event.preventDefault();
        console.log("submit event");
    })
};
