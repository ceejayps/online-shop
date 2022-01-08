var listadder = document.querySelector('#addto');
const parent = document.querySelector('#parent-o');
var fileo = document.querySelector('#filebutton');
var imageo = document.querySelector('#leimg');
var imgUrl;


fileo.addEventListener('change', function() {
        const fileE = this.files[0];
        if (fileE) {
            const reader = new FileReader();
            reader.addEventListener('load', function() {
                imageo.setAttribute("src", this.result);
                imgUrl = this.result;

            })
            reader.readAsDataURL(fileE);
        }
    })
    // create element & render cafe
function renderCafe(doc) {








    let parentz = document.createElement('li');
    let child1 = document.createElement('div');
    let child2 = document.createElement('span');
    let child3 = document.createElement('div');
    let child4 = document.createElement('div');

    let child1child = document.createElement('div');
    let child3child = document.createElement('div');
    let child4child = document.createElement('div');
    let child4childo = document.createElement('div');

    let child1child1 = document.createElement('div');
    let child3child1 = document.createElement('img');
    let child4child1 = document.createElement('h4');
    let child4child2 = document.createElement('p');
    let child4child1child = document.createElement('strong');


    child4childo1 = document.createElement('button');
    child4childo2 = document.createElement('button');

    child4childo1text = document.createElement('span');
    child4childo2text = document.createElement('span');
    parentz.setAttribute("class", "row timeline-element first-separline mb-5")
    child1.setAttribute("class", "timeline-date col-12")
    child2.setAttribute("class", "iconBackground")
    child3.setAttribute("class", "col-12 col-md-6")
    child4.setAttribute("class", "col-12 col-md-6")
    child1child.setAttribute("class", "timeline-date col-12")
    child3child.setAttribute("class", "image-wrapper")
    child4child.setAttribute("class", "timeline-text-wrapper")
    child4childo.setAttribute("class", "col-12 col-md-auto mbr-section-btn")

    child4childo1.setAttribute("type", "button")
    child4childo1.setAttribute("data-id", doc.id)
    child4childo1.setAttribute("class", "btn btn-secondary display-4 filebutton")

    child4childo2.setAttribute("type", "button")
    child4childo2.setAttribute("data-id", doc.id)
    child4childo2.setAttribute("class", "btn btn-secondary display-4 uploadbutton")

    child4childo2text.setAttribute("class", "mbri-upload mbr-iconfont mbr-iconfont-btn")
    child4childo2.textContent = "Delete"

    child4childo1text.setAttribute("class", "mbri-upload mbr-iconfont mbr-iconfont-btn")
    child4childo1.textContent = "Edit"

    child4child1child.textContent = "look at me now"



    child1child1.setAttribute("class", "timeline-date-wrapper")
    child3child1.setAttribute("src", doc.data().image)
    child4child1.setAttribute("class", "mbr-timeline-title mbr-fonts-style mb-0 display-5")
    child4child2.setAttribute("class", "mbr-text mbr-fonts-style mt-3 mb-0 display-7")
    child4child2.textContent = doc.data().price // <p>

    child4child1child.textContent = doc.data().name //<strong>


    child4childo1.appendChild(child4childo1text)
    child4childo2.appendChild(child4childo2text)
    child4child1.appendChild(child4child1child)
    child4child.appendChild(child4child1)
    child4child.appendChild(child4child2)
    child4childo.appendChild(child4childo1)
    child4childo.appendChild(child4childo2)
    child4.appendChild(child4child)
    child4.appendChild(child4childo)


    child3child.appendChild(child3child1)
    child3.appendChild(child3child)

    child1child.appendChild(child1child1)
    child1.appendChild(child1child)

    parentz.appendChild(child1)
    parentz.appendChild(child2)
    parentz.appendChild(child3)
    parentz.appendChild(child4)

    parent.appendChild(parentz)


    parentz.setAttribute('data-id', doc.id);
    // name.textContent = doc.data().name;
    // city.textContent = doc.data().city;
    // cross.textContent = 'x';

    // li.appendChild(name);
    //li.appendChild(city);
    // li.appendChild(cross);

    parent.appendChild(parentz);

    // deleting data
    child4childo2.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.getAttribute('data-id');
        db.collection('prods').doc(id).delete();
        // window.location.reload();
    });
}

// getting data
// db.collection('cafes').orderBy('city').get().then(snapshot => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     });
// });

//saving data
listadder.addEventListener('submit', (e) => {
    console.log("nigga u clicked me")
    e.preventDefault();


    db.collection('prods').add({
        name: listadder.name.value,
        image: imgUrl,
        price: listadder.price.value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        paypalbutton: listadder.paypal.value,
        sneak: listadder.sneak.checked,
        sizeXs: listadder.sizeXs.checked,
        sizeS: listadder.sizeS.checked,
        sizeM: listadder.sizeM.checked,
        sizeL: listadder.sizeL.checked,
        sizeXl: listadder.sizeXl.checked,
    });


    listadder.name.value = '';
    listadder.price.value = '';
    listadder.paypal.value = '';
});

// real-time listener
db.collection('prods').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if (change.type == 'added') {
            renderCafe(change.doc);
        } else if (change.type == 'removed') {
            let parentz = parent.querySelector('[data-id=' + change.doc.id + ']');
            parent.removeChild(parentz);
        }
    });
});

// updating records (console demo)
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });