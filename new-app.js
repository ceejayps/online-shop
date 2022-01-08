const newlist = document.querySelector('#first-n');
var entry = [];

function renderHomelist(doc) {
    let prebutton = doc.data().paypalbutton.split('hosted_button_id" value="');
    let preId = prebutton[1].split('">')
    let paypalID = preId[0];
    //console.log(paypalID);
    let parentz = document.createElement('div')
    let parentchild = document.createElement('div')
    let imgcontainer = document.createElement('div')
    let textbody = document.createElement('div')
    let buttonbody = document.createElement('div')

    let imagebody = document.createElement('img')
    let itemname = document.createElement('h5')
    let pricebody = document.createElement('h6')
    let pricetag = document.createElement('em')
    let buttontext = document.createElement('div')

    let form = document.createElement("form")
    let hidden1 = document.createElement("input")
    let hidden2 = document.createElement("input")
    let table = document.createElement("table")
    let dropdownTr = document.createElement("tr")
    let dropdownTd = document.createElement("td")
    let dropdownInput = document.createElement("input")
    let dropdownTr2 = document.createElement("tr")
    let dropdownTd2 = document.createElement("td")
    let dropdownSelect = document.createElement("select")
    let dropdownOption0 = document.createElement("option")
    let dropdownOption1 = document.createElement("option")
    let dropdownOption2 = document.createElement("option")
    let dropdownOption3 = document.createElement("option")
    let dropdownOption4 = document.createElement("option")
    let hidden3 = document.createElement("input")




    parentz.setAttribute('class', "item features-image сol-12 col-md-6 col-lg-3")
    parentchild.setAttribute('class', "item-wrapper")
    imgcontainer.setAttribute('class', "item-img")
    textbody.setAttribute('class', "item-content")
    buttonbody.setAttribute('class', "mbr-section-btn item-footer mt-2")

    imagebody.setAttribute('data-slide-to', "2")
    imagebody.setAttribute('src', doc.data().image)

    itemname.setAttribute('class', "item-title mbr-fonts-style display-4")
    itemname.textContent = doc.data().name;
    pricebody.setAttribute('class', "item-subtitle mbr-fonts-style mt-1 display-7")
    pricetag.textContent = '$' + doc.data().price;

    buttontext.setAttribute('class', "btn  item-btn display-7")
    buttontext.textContent = ""
    buttontext.setAttribute('target', "_blank")

    form.setAttribute('target', "paypal")
    form.setAttribute('action', "https://www.paypal.com/cgi-bin/webscr")
    form.setAttribute('method', "post")

    hidden1.setAttribute('type', "hidden")
    hidden1.setAttribute('name', "cmd")
    hidden1.setAttribute('value', "_s-xclick")

    hidden2.setAttribute('type', "hidden")
    hidden2.setAttribute('name', "hosted_button_id")
    hidden2.setAttribute('value', paypalID);

    dropdownInput.setAttribute('type', "hidden")
    dropdownInput.setAttribute('name', "on0")
    dropdownInput.setAttribute('value', "Size")
    dropdownTd.textContent = "Size"

    dropdownSelect.setAttribute('name', "on0")

    dropdownOption0.setAttribute('value', "XS")
    dropdownOption1.setAttribute('value', "S")
    dropdownOption2.setAttribute('value', "M")
    dropdownOption3.setAttribute('value', "L")
    dropdownOption4.setAttribute('value', "XL")

    dropdownOption0.textContent = "XS"
    dropdownOption1.textContent = "S"
    dropdownOption2.textContent = "M"
    dropdownOption3.textContent = "L"
    dropdownOption4.textContent = "XL"




    //table.setAttribute('style',"float: left;")
    dropdownSelect.setAttribute('style', "float: right;")
    dropdownSelect.setAttribute('style', "background-color: #ffb5b5; margin-right: 10px; border:0; border-radius: 5%; padding-top: 5px; padding-bottom: 5px; padding-left: 15px; padding-right: 15px; color: white")

    hidden3.setAttribute('class', "mybtn  item-btn display-7")
    hidden3.setAttribute('value', "Add to cart")
    hidden3.setAttribute('type', "submit")
        // hidden3.setAttribute('style',"background-color: transparent; border:0; color: white")
    hidden3.setAttribute('style', "background-color: #ffb5b5; border:0; border-radius: 5%; padding-top: 10px; padding-bottom: 10px; padding-left: 15px; padding-right: 15px; color: white")

    hidden3.setAttribute('alt', "PayPal - The safer, easier way to pay online!")

    form.appendChild(hidden1);
    form.appendChild(hidden2);

    if (doc.data().sizeXs == true) {
        dropdownSelect.appendChild(dropdownOption0);
    }
    if (doc.data().sizeS == true) {
        dropdownSelect.appendChild(dropdownOption1);
    }
    if (doc.data().sizeM == true) {
        dropdownSelect.appendChild(dropdownOption2);
    }
    if (doc.data().sizeL == true) {
        dropdownSelect.appendChild(dropdownOption3);
    }
    if (doc.data().sizeXl == true) {
        dropdownSelect.appendChild(dropdownOption4);
    }

    dropdownTd2.appendChild(dropdownSelect);
    dropdownTr2.appendChild(dropdownTd2);

    dropdownTd.appendChild(dropdownInput);
    dropdownTr.appendChild(dropdownTd);

    table.appendChild(dropdownTr);
    table.appendChild(dropdownTr2);
    form.appendChild(table);

    form.appendChild(hidden3);

    buttontext.appendChild(form)


    buttonbody.appendChild(buttontext);
    pricebody.appendChild(pricetag);
    textbody.appendChild(itemname);
    textbody.appendChild(pricebody);
    imgcontainer.appendChild(imagebody);

    parentchild.appendChild(imgcontainer);
    parentchild.appendChild(textbody);
    parentchild.appendChild(buttonbody);

    parentz.appendChild(parentchild);

    newlist.appendChild(parentz);

};

db.collection('prods').orderBy("timestamp", "desc").get().then((snapshot) => {
    snapshot.docs.slice(0, 4).forEach(doc => {
        entry.push({ doc })
        renderHomelist(doc);

    })

});

console.log(Date(Date.now()))