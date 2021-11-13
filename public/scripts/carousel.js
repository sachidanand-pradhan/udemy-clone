function createCarousel() {
    // a function to get the data via api
    async function getData() {
        let res = await fetch(`http://localhost:5000/api/products`);
        let data = await res.json();

        makecarouselOf(data);
    }
    getData();


    // a function to create the carousel
    function makecarouselOf(data) {

        let carouselList = document.querySelectorAll('.carousel');

        carouselList.forEach((carousel) => {
            // creating container for the carousel
            let container = document.createElement('div');
            container.setAttribute('class', 'carousel-container flex m-auto');
            container.style.overflowY = 'visible';
            container.style.overflowX = 'hidden';
            container.style.height = '430px';
            container.style.width = '100%';
            container.id = 'container';

            data.forEach((product, idx) => {
                let parentCard = document.createElement('div');
                parentCard.className = 'relative left-1';
                parentCard.style.width = 'fit-content';
                parentCard.style.overflowY = 'visible';

                // creating card1
                let card1 = document.createElement('div');
                card1.setAttribute('class', 'p-2 h-auto mt-20');
                card1.style.width = '242px';

                // course image
                let img = document.createElement('img');
                img.src = product.image;
                img.setAttribute('class', 'w-full border');

                // course title
                let title = document.createElement('h3');
                title.setAttribute('class', 'text-md font-bold h-12 overflow-hidden w-full my-1');
                title.innerText = product.title;

                // course author
                let author = document.createElement('p');
                author.setAttribute('class', 'text-sm text-gray-500 h-5 overflow-hidden');
                author.innerText = product.author;

                // course rating div
                let ratingDiv = document.createElement('div');
                ratingDiv.setAttribute('class', 'flex z-1 w-max');

                let rating = document.createElement('h4');
                rating.setAttribute('class', 'text-md font-bold text-yellow-600 my-0');
                rating.innerText = product.rating;

                let stars = document.createElement('div');
                stars.setAttribute('class', 'flex w-max h-max mx-1.5 my-0 inline-block right-4 ');
                stars.innerHTML = `<img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5 mt-1'/>
                           <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5 mt-1'/>
                           <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5 mt-1'/>
                           <img src="https://img.icons8.com/fluency/14/000000/star.png" class='h-4 w-3.5 mt-1'/>
                           <img src="https://img.icons8.com/color/14/000000/star-half-empty.png" class='h-4 w-3.5 mt-1'/>`

                let noOfRatings = document.createElement('p');
                noOfRatings.setAttribute('class', 'text-sm text-gray-500 my-0 pt-1');
                noOfRatings.innerHTML = '(118,644)';
                ratingDiv.append(rating, stars, noOfRatings);

                // course price
                let priceDiv = document.createElement('div');
                priceDiv.setAttribute('class', 'flex my-0 w-max');

                let newPrice = document.createElement('p');
                newPrice.setAttribute('class', 'text-md font-bold');
                newPrice.innerText = '₹' + product.price;

                let oldPrice = document.createElement('p');
                oldPrice.setAttribute('class', 'text-md text-gray-500 line-through mx-2 font-light');
                oldPrice.innerText = '₹' + product.oldprice;

                // append everything to card1
                priceDiv.append(newPrice, oldPrice);
                card1.append(img, title, author, ratingDiv, priceDiv);

                // adding a bestseller tag to card1
                if (product.rating >= 4.8) {
                    let bestSeller = document.createElement('div');
                    bestSeller.setAttribute('class', 'text-sm w-max px-1 font-semibold my-2 mr-3');
                    bestSeller.style.background = '#eceb98';
                    bestSeller.style.color = '#3d3c0a';
                    bestSeller.innerText = 'Bestseller';
                    card1.append(bestSeller);
                }

                // creating card2
                let card2 = document.createElement('section');
                card2.className = 'w-80 shadow-2xl absolute bg-white mx-8 p-6 z-20';
                card2.style.height = 'fit-content';
                card2.style.display = 'none';
                card2.style.top = '0';

                // displaying the popup menu on left or on right
                idx = idx % 5;
                let hoverOn;
                if (idx <= 2) hoverOn = 'left';
                else hoverOn = 'right';

                if (hoverOn == 'right') { card2.style.right = '230px'; }
                else card2.style.left = '230px';

                // creating title
                let title2 = document.createElement('h2');
                title2.className = 'text-xl font-semibold h-14 overflow-hidden';
                title2.innerText = product.title;

                let updatedDiv = document.createElement('div');
                updatedDiv.className = 'flex';

                // adding bestseller tag
                if (product.rating >= 4.8) {
                    let bestSeller = document.createElement('div');
                    bestSeller.setAttribute('class', 'text-sm w-max px-1 font-semibold my-2 mr-3');
                    bestSeller.style.background = '#eceb98';
                    bestSeller.style.color = '#3d3c0a';
                    bestSeller.innerText = 'Bestseller';
                    updatedDiv.append(bestSeller);
                }

                // showing when was the course updated
                let updatedOn = document.createElement('p');
                updatedOn.innerHTML = "Updated <b>October 2021 </b>";
                updatedOn.className = 'text-green-700 text-sm mt-2 font-normal';
                updatedDiv.append(updatedOn);

                let levels = document.createElement('p');
                levels.className = 'text-xs text-gray-500 my-1';
                levels.innerText = 'All Levels . Subtitles';

                // short description
                let shortDecp = document.createElement('p');
                shortDecp.className = 'text-sm text-gray-500 max-w-24 overflow-hidden';
                shortDecp.innerText = product.shortDecp;

                // creating content
                let contentParent = document.createElement('div');
                contentParent.className = 'mt-2'

                // creating content line 2
                let contentDiv1 = document.createElement('div');
                contentDiv1.className = 'flex mt-1';

                let tick1 = document.createElement('div');
                tick1.innerHTML = '<img src="https://img.icons8.com/external-becris-lineal-becris/18/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>';
                tick1.style.maxWidth = '30px';
                tick1.style.minWidth = '30px';
                tick1.style.margin = '15px 0px 0px 0px';

                let content1 = document.createElement('p');
                content1.className = 'text-sm text-gray-500 h-10 overflow-hidden w-max mt-1';
                content1.innerText = product.learn[0].l1;
                contentDiv1.append(tick1, content1);

                // creating content line 2
                let contentDiv2 = document.createElement('div');
                contentDiv2.className = 'flex mt-1';

                let tick2 = document.createElement('div');
                tick2.innerHTML = '<img src="https://img.icons8.com/external-becris-lineal-becris/18/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>';
                tick2.style.maxWidth = '30px';
                tick2.style.minWidth = '30px';
                tick2.style.margin = '15px 0px 0px 0px';

                let content2 = document.createElement('p');
                content2.className = 'text-sm text-gray-500  h-10 overflow-hidden';
                content2.innerText = product.learn[0].l2;
                contentDiv2.append(tick2, content2);

                // creating content line 3
                let contentDiv3 = document.createElement('div');
                contentDiv3.className = 'flex mt-1';

                let tick3 = document.createElement('div');
                tick3.innerHTML = '<img src="https://img.icons8.com/external-becris-lineal-becris/18/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"/>';
                tick3.style.maxWidth = '30px';
                tick3.style.minWidth = '30px';
                tick3.style.margin = '10px 0px 0px 0px';

                let conten3 = document.createElement('p');
                conten3.className = 'text-sm text-gray-500 text-left h-10 overflow-hidden';
                conten3.innerText = product.learn[0].l3;
                contentDiv3.append(tick3, conten3);
                contentParent.append(contentDiv1, contentDiv2, contentDiv3);

                // add to cart 
                let cartDiv = document.createElement('div');
                cartDiv.className = 'flex mt-2';

                let addToCart = document.createElement('div');
                addToCart.className = 'p-2 text-center h-10 font-bold text-white bg-purple-700 w-max flex-grow hover:bg-purple-900';
                addToCart.innerText = 'Add To Cart';

                // creating like button
                let like = document.createElement('div');
                like.className = 'rounded-full w-10 border border-gray-900 border-2 h-10 ml-2 p-2';
                like.innerHTML = '<img src="https://img.icons8.com/ios/48/000000/like.png"/>';
                like.onclick = () => { like.innerHTML = '<img src="https://img.icons8.com/emoji/48/000000/heart-suit.png"/>' }

                // appending everything to parent card

                cartDiv.append(addToCart, like);
                card2.append(title2, updatedDiv, levels, shortDecp, contentParent, cartDiv);
                parentCard.append(card1, card2);

                // appending all components into the container
                container.append(parentCard);

                // display popup div on hover
                card1.addEventListener('mouseenter', (event) => {
                    let allSections = container.querySelectorAll('section');
                    allSections.forEach((section) => {
                        section.style.display = 'none';
                    })

                    let cards = event.target.parentNode.querySelector('section');
                    cards.style.display = 'block';
                });
                container.addEventListener('mouseleave', (event) => {
                    let allSections = container.querySelectorAll('section');
                    allSections.forEach((section) => {
                        section.style.display = 'none';
                    })
                });
            })

            // adding a scroll left button
            let scrollLeftBtn = document.createElement('div');
            scrollLeftBtn.className = 'absolute right-0 top-36 bg-black rounded-full w-10 h-10 p-2 z-40';
            scrollLeftBtn.class = 'scrlLeft'
            scrollLeftBtn.innerHTML = `<img src="https://img.icons8.com/ios-glyphs/24/ffffff/chevron-right.png" />`;
            scrollLeftBtn.style.zIndex = '999';

            // adding a scroll right button
            let scrollRightBtn = document.createElement('div');
            scrollRightBtn.className = 'absolute left-0 top-36 bg-black rounded-full w-10 h-10 p-2 z-40';
            scrollRightBtn.class = 'scrlRight'
            scrollRightBtn.innerHTML = `<img src="https://img.icons8.com/ios-glyphs/24/ffffff/chevron-left.png" />`;
            scrollRightBtn.style.display = 'none';

            // appending all components into the container
            container.append(scrollLeftBtn, scrollRightBtn);

            
            scrollRightBtn.onclick = scrollRight;
            scrollLeftBtn.addEventListener('click', (event) => {
                scrollLeft(event);
            })


            carousel.append(container);
        })
    }


    // <img src="https://img.icons8.com/officel/50/000000/triangle-stroked.png"/>
    function scrollLeft(e) {
        let cont = document.getElementsByClassName('carousel-container');
        // console.log('container',cont);

        let container = e.target.parentNode.parentNode || e.target.parentNode;
        container.scrollLeft += 1450;

        let srlRBtn = container.querySelector('.scrlRight');
        srlRBtn.style.display = 'block';
    }

    function scrollRight() {
        let container = document.getElementById('container');
        container.scrollLeft -= 1435;

        let srlRBtn = document.getElementById('scrlRight');
        if (container.scrollLeft <= 100) srlRBtn.style.display = 'none';
    }
}

