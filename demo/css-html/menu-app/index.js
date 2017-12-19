(function() {
    var productItem = document.querySelectorAll('ul li');
    [].forEach.call(productItem, function(item) {
        item.addEventListener('click', function(event) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                var activeItem = document.querySelector('.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                this.classList.add('active');
            }

        })
    });

    [].forEach.call(document.querySelectorAll('.paper'), function(item) {
        item.addEventListener('click', function(event) {
            var hasActive = this.querySelector('.active');
            if (hasActive) {
                if (!this.classList.contains('item-active')) {
                    var activePaper = document.querySelector('.item-active');
                    if (activePaper) {
                        activePaper.classList.remove('item-active');
                    }
                    this.classList.add('item-active');
                }
            } else {
                this.classList.remove('item-active');
            }
        })
    });


    [].forEach.call(document.querySelectorAll('.minus'), function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            var number = +this.previousElementSibling.textContent;
            if (number == 0) {
                return;
            } else {
                number--;
                this.previousElementSibling.textContent = number;

                var itemsNode = document.querySelector('.item-active .product-count')
                var itemsCount = +itemsNode.textContent;
                itemsCount--;
                itemsNode.textContent = itemsCount;
                if (itemsCount == 0) {
                    document.querySelector('.item-active .status').classList.add('hidden')
                }
            }
        })
    });
    [].forEach.call(document.querySelectorAll('.plus'), function(item) {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
            var numberNode = this.previousElementSibling.previousElementSibling;
            var number = +numberNode.textContent;
            number++;
            numberNode.textContent = number;

            var itemsNode = document.querySelector('.item-active .product-count')
            var itemsCount = +itemsNode.textContent;
            if (itemsCount == 0) {
                document.querySelector('.item-active .status').classList.remove('hidden')
            }
            itemsCount++;
            itemsNode.textContent = itemsCount;
        })
    });
})()
