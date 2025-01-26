const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const results = document.getElementById("result_recommendations")

btnSearch.addEventListener('click',searchCondition);
btnClear.addEventListener('click', resetForm);


function searchCondition() {
    const input = document.getElementById('search').value.toLowerCase();
    // const resultTitle = document.getElementById('resultTitle');
    // const resultText = document.getElementById('resultText');
    // const resultImage = document.getElementById('resultImage');
    const result = document.getElementById("result_recommendation")
    result.innerHTML = ''

    fetch('travel_recommendation_api.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data);

            const dataRecommendation = data.countries.find(item => item.name.toLowerCase() === input)
            if(dataRecommendation) {
                console.log("Data found");
                console.log(dataRecommendation);
                    results.innerHTML += `<div id="result_recommendation" style="padding: 20px;">
                                        <img src=${dataRecommendation.cities[0].imageUrl} id="resultImage" alt=${dataRecommendation.cities[0].name}>
                                        <h2 id="resultTitle">${dataRecommendation.cities[0].name}</h2>
                                        <p id="resultText">${dataRecommendation.cities[0].description}</p>
                                        </div>

                                        <div id="result_recommendation" style="padding: 20px;">
                                        <img src=${dataRecommendation.cities[1].imageUrl} id="resultImage" alt=${dataRecommendation.cities[1].name}>
                                        <h2 id="resultTitle">${dataRecommendation.cities[1].name}</h2>
                                        <p id="resultText">${dataRecommendation.cities[1].description}</p>
                                        </div>`
                    // result.innerHTML += `<h2 id="resultTitle">${dataRecommendation.cities[i].name}</h2>`
                    // result.innerHTML += `<p id="resultText">${dataRecommendation.cities[i].description}</p>`
                console.log(result)
            }else{
                    results.innerHTML += `<div id="result_recommendation" style="padding: 20px;">
                                            <p id= "resultText">Not Found</p>
                                            </div>`}
    })
}

function resetForm() {
    // const results = document.getElementById("result_recommendations")
        results.innerHTML = ""
}