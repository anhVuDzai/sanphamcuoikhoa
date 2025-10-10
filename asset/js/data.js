const url_api = "https://jsa44.nextgentra.com/api/vuposts?populate=*";
const key_api =
  "a77380280a76ea2811b475dbbcea8aeee3862a3ecb75ca0333a232116b093b2124cc0ca47b8befd91d03cf70e66940c1b8c75239f083dd96b54a2f937102928c6be43096d0d6f041d0d39d0950f7ab4e2009514eceaa70e6ff0e974c16a77d2bdf1a31b657fd74d022ad28815283bdbbe2c0dcb556c3a79ee5b4ec26b6a16d53";

var book = document.querySelector(".favourite");

fetch(url_api, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key_api}`,
  },
})
  .then((res) => res.json())
  .then((resp) => {
    console.log(resp);

    for (let i = 0; i < resp.data.length; i++) {
      console.log(resp.data[i]);

      book.innerHTML += `<div class="book">
                   <div style="margin: 10px;">
                    <a href="${list[i].link}" style="text-decoration: none;">
                      <img src="${fda}" alt="" style="max-width: 172px; max-height: 212px; border-radius: 5px;">
                       <p class="font name" style="text-decoration: none; color: whitesmoke;">${resp.data[i].des}</p>
                     </a></div></div>`;
    }
  });
