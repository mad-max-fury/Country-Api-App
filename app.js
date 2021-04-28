const dark = document.getElementById("dark");
const body = document.getElementById("body");
const light = document.getElementById("light");
const countryCardsHolder = document.getElementById("countryCardsHolder");
const cardInfo = document.getElementById("cardInfo");
const main = document.getElementById("main");
const modalWindow = document.getElementById("ModalWindow");
const inputHolder = document.getElementById("inputHolder");
const inputField = document.getElementById("inputField");
const iconSearch = document.getElementById("iconSearch");
const countryRegion = document.getElementsByName("region")[0];
const darklight = document.getElementById("darkLight");
// const modalfirstNav = document.getElementsByClassName('modalfirstNav')
const firstNav = document.getElementById("firstNav");
const txt = document.getElementById("txt");
const filterRegion = document.getElementById("regions");

let switchDarkLightMode = () => {
  if (dark.classList.contains("darkMode")) {
    var div = document.getElementsByTagName("div");
    for (var i = 0; i < div.length; i++) {
      if (div[i].id.includes("countryCard")) {
        console.log(true);
        div[i].style.background = " hsl(209, 23%, 22%)";
        div[i].style["boxShadow"] =
          "0px 1px 2px 2px  hsl(209, 23%, 22%), 0 0 10px rgba(0, 0, 0, 0.1)";
      }
    }
  }

  if (light.classList.contains("lightMode")) {
    var div = document.getElementsByTagName("div");
    for (var i = 0; i < div.length; i++) {
      if (div[i].id.includes("countryCard")) {
        // console.log(true);
        div[i].style.background = " hsl(0, 0%, 100%)";
        div[i].style["boxShadow"] =
          "0px 1px 2px 2px  rgb(197, 195, 195), 0 0 10px rgba(0, 0, 0, 0.1)";
      }
    }
  }
};

let newElement = [];
let displayCard = (newElement) => {
  const cards = newElement
    .map((a) => {
      return `
   
      <div class="countryCard" id="countryCard">
       <img  id="logo" src="${a.flag}">
       <div id="detail">
           <h3 id="countryName">${a.name}</h3>
           <h4 id="pop1">Population : <span>${a.population}</span></h4>
           <h4 id="pop2">Region : <span>${a.region}</span></h4>
            <h4 id="pop3">Capital : <span>${a.capital}</span></h4>
         </div>
      </div>`;
    })
    .join("");
  countryCardsHolder.innerHTML = cards;
};

let modalWindowCardDetails = () => {
  result.forEach((cardDiv) => {
    cardDiv.addEventListener("click", (e) => {
      //    console.log(e.currentTarget.children[1].children[0].textContent);
      newElement.forEach((pikin) => {
        if (
          Object.values(pikin).includes(
            e.currentTarget.children[1].children[0].textContent
          )
        ) {
          main.style.display = "none";
          modalWindow.style.marginLeft = 0;
          // console.log(pikin);
          let currencyNames = "";
          let langNames = "";
          let border = "";
          pikin.currencies.forEach((currencyName) => {
            currencyNames = currencyName.name;
          });
          // console.log(currencyNames);
          pikin.languages.forEach((languageName) => {
            langNames = languageName.name;
          });
          // console.log(langNames);
          pikin.borders.forEach((borderName) => {
            border += ` <button>${borderName}</button>`;
          });
          // console.log(border);
          let newResult = "";
          newResult += `
                    <div id="ctrl2">
                      <img id="logo1" width="100%" height="100%"src="${pikin.flag}">
                    </div>
                   <div id="ctrl3">
                     <section id="firstDivision">
                          <aside>
                             <b id="names"style="font-size:50px"><h1 id="countryName">${pikin.name}</h1></b>
                             
                             <h4>Native Name: <span>   ${pikin.nativeName}</span></h4>
                             <h4>Population: <span> ${pikin.population}</span></h4>
                             <h4>Region: <span> ${pikin.region}</span></h4>
                             <h4>Sub-region: <span> ${pikin.subregion}</span> </h4>
                             <h4>Capital: <span>  ${pikin.capital}</span></h4>
                         </aside>
                         <aside id="aside2">
                             <h4>Top Level: <span> ${pikin.alpha2Code}</span></h4>
                             <h4>Currencies: <span> ${currencyNames}</span></h4>
                             <h4>Languages: <span> ${langNames}</span></h4>
                         </aside>
                      </section>
                     <section id="secondDivision">
                         <h4>Border Countries :</h4> ${border}</span>
                     </section>
                  </div>
                    
                    
                    `;
          cardInfo.innerHTML += newResult;
          // console.log(newResult);
        }
      });
    });
  });
};
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and successful");
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element, index) => {
        newElement.push(element);
      });
      displayCard(newElement); //DISPLAY CARD ON HOME PAGE
      result = [...countryCardsHolder.children];
      modalWindowCardDetails(result); //CREATE MODAL WINDOW

      //LIGHT MODE ONTROL
      light.addEventListener(
        "click",
        (AllDark = () => {
          // console.log('click successful');
          dark.classList.add("darkMode");
          dark.style.display = "flex";
          light.style.display = "none";
          body.style.background = "#202c37";
          body.style.color = " hsl(0, 0%, 100%)";
          modalWindow.style.background = "#202c37";
          firstNav.style.background = "hsl(209, 23%, 22%)";
          firstNav.style["boxShadow"] = " 0 4px 3px -2px  hsl(209, 23%, 22%)";
          inputHolder.style.background = "hsl(209, 23%, 22%)";
          inputHolder.style["boxShadow"] =
            " 0 4px 3px -2px  hsl(209, 23%, 22%)";
          filterRegion.style.background = "hsl(209, 23%, 22%)";
          filterRegion.style["boxShadow"] =
            " 0 4px 3px -2px  hsl(209, 23%, 22%)";
          dark.style.background = "hsl(209, 23%, 22%)";
          light.style.background = "hsl(209, 23%, 22%)";
          inputField.style.background = " hsl(209, 23%, 22%)";
          inputField.style.color = "  hsl(0, 0%, 100%)";
          txt.style.color = "  hsl(0, 0%, 100%)";

          var div = document.getElementsByTagName("div");
          for (var i = 0; i < div.length; i++) {
            if (div[i].id.includes("countryCard")) {
              // console.log(true);
              div[i].style.background = "hsl(209, 23%, 22%)";
              div[i].style["boxShadow"] =
                "0px 1px 2px 2px  hsl(209, 23%, 22%), 0 0 10px rgba(0, 0, 0, 0.1)";
            }
          }
        })
      );

      //DARK MODE CONTROL

      dark.addEventListener("click", () => {
        // console.log('click successful');
        light.classList.add("lightMode");
        light.style.display = "flex";
        dark.style.display = "none";
        body.style.background = "rgb(250, 250, 250)";
        body.style.color = " hsl(200, 15%, 8%)";
        modalWindow.style.background = " hsl(0, 0%, 98%)";
        firstNav.style.background = " hsl(0, 0%, 100%)";
        firstNav.style["boxShadow"] = "  0 4px 3px -2px rgb(236, 234, 234)";
        inputHolder.style.background = " hsl(0, 0%, 100%)";
        inputHolder.style["boxShadow"] =
          "4px 4px 3px -2px rgb(206, 205, 205), 0 0 10px rgba(0, 0, 0, 0.1)";
        filterRegion.style.background = " hsl(0, 0%, 100%)";
        filterRegion.style["boxShadow"] =
          " 4px 4px 3px -2px rgb(206, 205, 205), 0 0 10px rgba(0, 0, 0, 0.1)";
        dark.style.background = " hsl(0, 0%, 100%)";
        light.style.background = " hsl(0, 0%, 100%)";
        inputField.style.background = "  hsl(0, 0%, 100%)";
        inputField.style.color = " hsl(200, 15%, 8%)";
        txt.style.color = "  hsl(0, 0%, 100%)";

        var div = document.getElementsByTagName("div");
        for (var i = 0; i < div.length; i++) {
          if (div[i].id.includes("countryCard")) {
            // console.log(true);
            div[i].style.background = " hsl(0, 0%, 100%)";
            div[i].style["boxShadow"] =
              "0px 1px 2px 2px  rgb(197, 195, 195), 0 0 10px rgba(0, 0, 0, 0.1)";
          }
        }
      });

      // SEARCH FOR COUNTRY USING INPUT FILEDS

      inputField.addEventListener("keyup", (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredNames = newElement.filter((countryName) =>
          countryName.name.toLowerCase().includes(searchValue)
        );
        displayCard(filteredNames);
        result = [...countryCardsHolder.children];
        modalWindowCardDetails();
        switchDarkLightMode();
      });

      // SEARCH FOR INPUT FILEDS USING SEARCH ICON
      iconSearch.addEventListener("click", () => {
        let serchValue = inputField.value.toLowerCase();
        const filteredNames = newElement.filter((countryName) =>
          countryName.name.toLowerCase().includes(serchValue)
        );
        displayCard(filteredNames);
        result = [...countryCardsHolder.children];
        modalWindowCardDetails();
        switchDarkLightMode();
      });

      // SEARCH FOR COUNTRIES USING FILTER REIGION SELECT FILEDS
      countryRegion.addEventListener(
        "change",
        () => {
          let regionSearchValue = countryRegion.value.toLowerCase();
          const filteredRegion = newElement.filter((countryName) =>
            countryName.region.toLowerCase().includes(regionSearchValue)
          );
          displayCard(filteredRegion);
          result = [...countryCardsHolder.children];
          modalWindowCardDetails();
          switchDarkLightMode();
        },
        false
      );
    })
    .catch((err) => console.log("Error:", err));
});
