# Events
An interaction such as a mouse click, a keu press, an object changing values, or a webpage loading. 

#### The most common events in JavaScript
* ## onchange

Example:
```
<p> Enter the number of hours per week you can dedicate to learning:
    <input type="number" id="practiceHours" name="Practice Hours:" onchange="getPracticeHours()">
</p>
```
Note: Technically nothig has changes in the input field until the user clicks out of the input box of press the Enter key. 

* ## onmouseover
This enent allows you to make something interactive to take place when user hovers the mouse over some area.
Example:
```
<head>
    <script src="scripts/main.js>
</head>
<body>
<section id="thumbnails">
    <article class="itemthumbnail">
        <a href="" onmouseover="mouseOverPic(drum)"><img src="images/DRUM.jpg">
    </article>
    <article class="itemthumbnail">
        <a href="" onmouseover="mouseOverPic(guitar)"><img src="images/GUITAR.jpg">
    </article>
</section>
<script type="text/javascript>
    var drum = new product("Red Floor Tom", "With an exceptional design and oudstanding craftship, the . . . ", 230.00, "drum")
    var drum = new product("Yamaha", "With silver custom made strings and great sound, the wooden guitar. . . ", 450.00, "guitar")

    function mouseOverPic(product){
        document.getElementById("itemImage").src = "image\\" + product.imgsrc + ".jpg";
        document.getElementById("itemName").innerHTML = product.item;
        document.getElementById("itemDescription").innerHTML = product.description;
        document.getElementById("itemPrice").innerHTML = product.price.toFixed(2)
    }
</script>
</body>
```
Note: the product definition is stored in separate file scripts/main.js
```
const salesTaxRate = .075
incMsg = "This site is under construction and will be fuly functional soon."
fuction product(item, description, price, imgsrc){
    this.item = item;
    this.description = description;
    this.price = price;
    this.imgsrc = imgsrc;
}
```

* ## onload
On load event occures when window loads. 
Example:
```
...
<body onload="alert('This is example of onload event')">
...
```

* ## onclick
On click evenet is one of the most used event in JS. The action takes places after something is being clicked on, usually a button.
Example:
```
<div class = "itemquantity">
    <p>
        <input type="text" value="1" id="manqty><br/>
        <button id="manqtyadd onclick="addOne('manqty')">+</button>
        <button id="manqtysubtract onclick="javascript: document.getElementById('manqty').value--;">-</button>
    </p>
</div>
```

* ## onmouseout
onmouseout event triggers the action when mouse leaves area that event is assigned to. 
Example:
```
<h1>My First Heading</h1>
<p id="par">&emsp; &nbsp;</p>
<button onmouseout="javascript: document.getElementById('par').innerHTML = 'Hover over button to see text'" 
		onmouseover="javascript: document.getElementById('par').innerHTML = 'Some text'" >Show data</button>
</body>
```

* ## onkeydown
onkeydown event trigger when any key is pressed on the keyboard withing area event is assigned to.