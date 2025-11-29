
        let books = [];

        const IMAGE_URL = "https://m.media-amazon.com/images/I/71ZB18P3inL._SY522_.jpg";

        function addBook() {
            let title = document.getElementById("title").value.trim();
            let author = document.getElementById("author").value.trim();
            let category = document.getElementById("category").value;

            if (!title || !author || !category) {
                alert("Please fill all fields!");
                return;
            }

            let book = {
                title,
                author,
                category,
                imageUrl: IMAGE_URL
            };

            books.push(book);
            renderBooks(books);

            document.getElementById("title").value = "";
            document.getElementById("author").value = "";
            document.getElementById("category").value = "";
        }

        function renderBooks(bookList) {
            let container = document.getElementById("booksContainer");
            container.innerHTML = "";

            bookList.forEach((book, index) => {
                let card = document.createElement("div");
                card.className = "card";

                // Image
                let img = document.createElement("img");
                img.src = book.imageUrl;

                // Title
                let title = document.createElement("h3");
                title.textContent = book.title;

                // Author
                let author = document.createElement("p");
                let authorBold = document.createElement("strong");
                authorBold.textContent = book.author;
                author.appendChild(authorBold);

                // Category
                let category = document.createElement("p");
                category.textContent = book.category;

                // Delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.className = "deleteBtn";
                deleteBtn.textContent = "Delete";

                deleteBtn.addEventListener("click", function () {
                    deleteBook(index);
                });

                // Append everything to card
                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(author);
                card.appendChild(category);
                card.appendChild(deleteBtn);

                // Add card to container
                container.appendChild(card);
            });
        }

        function deleteBook(index) {
            books.splice(index, 1);
            renderBooks(books);
        }

        function sortBooksAZ() {
            books.sort((a, b) => a.title.localeCompare(b.title));
            renderBooks(books);
        }

        function sortBooksZA() {
            books.sort((a, b) => b.title.localeCompare(a.title));
            renderBooks(books);
        }

        function filterBooks() {
            let category = document.getElementById("filterCategory").value;


            // category => fiction

            if (category === "All") {
                renderBooks(books);
                return;
            }

            let filtered = books.filter(book => book.category === category);
            renderBooks(filtered);
        }
   