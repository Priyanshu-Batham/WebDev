const block = document.querySelector(".block");
const fetchData = ()=>{
    fetch("https://priyanshubatham.pythonanywhere.com/")
    .then(Response=> Response.json())
    .then(data=> {
        // const stringer = JSON.stringify(data);
        const apiData = data;
        console.log(apiData.length);
        // block.innerHTML= `" ${apiData[0]}"`
        for(let i = 0;i < apiData.length; i++){
            const block = document.querySelector(".block");

            const newDiv = document.createElement("div");
            const position = document.createElement("div");
            const hash = document.createElement("div");
            const transaction = document.createElement("div");

            position.innerHTML = apiData[i][0];
            hash.innerHTML = apiData[i][1];
            transaction.innerHTML = apiData[i][2];

            newDiv.className = "data";
            hash.className = "hash";

            newDiv.appendChild(position);
            newDiv.appendChild(hash);
            newDiv.appendChild(transaction);

            block.appendChild(newDiv);

        }
    })
}
fetchData();
