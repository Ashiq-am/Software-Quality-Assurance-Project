function canBorrowBook(user, book, currentDate) {
     // Check if the user is active
     if (!user.active) {
         return "User is inactive, cannot borrow books.";
     }
 
     // Check if the user has overdue books
     if (user.overdueBooks > 0) {
         return "User has overdue books, cannot borrow more.";
     }
 
     // Check if the book is available
     if (book.availableCopies < 1) {
         return "Book is not available for borrowing.";
     }
 
     // Check if the book is a restricted book (only available for certain dates)
     if (book.restricted && book.availableFrom && currentDate < book.availableFrom) {
         return "Book is restricted, cannot borrow now.";
     }
 
     // If all conditions are met, the user can borrow the book
     return "Book can be borrowed.";
 }
 
 
 // Test data for users
 let user1 = { active: true, overdueBooks: 0 }; // Active user, no overdue books
 let user2 = { active: false, overdueBooks: 0 }; // Inactive user
 let user3 = { active: true, overdueBooks: 1 }; // Active user, but has overdue books
 
 // Test data for books
 let book1 = { availableCopies: 1, restricted: false }; // Book available, not restricted
 let book2 = { availableCopies: 0, restricted: false }; // Book not available
 let book3 = { availableCopies: 1, restricted: true, availableFrom: new Date("2024-09-28") }; // Restricted book
 
 let currentDate = new Date(); // Current date for comparison
 
 // Test cases - Code Coverage
 console.log(canBorrowBook(user1, book1, currentDate)); // Expected: Book can be borrowed
 console.log(canBorrowBook(user2, book1, currentDate)); // Expected: User is inactive
 console.log(canBorrowBook(user3, book1, currentDate)); // Expected: User has overdue books
 console.log(canBorrowBook(user1, book2, currentDate)); // Expected: Book not available
 console.log(canBorrowBook(user1, book3, currentDate)); // Expected: Book is restricted
 
 /* 
 - First Test covers the "everything is fine" scenario where the user can borrow the book.
 - Second Test covers the case when the user is inactive.
 - Third Test checks if the user has overdue books.
 - Fourth Test handles the case when the book is unavailable.
 - Fifth Test handles restricted book borrowing before the available date.
 - These tests ensure every line and condition in the code is executed at least once.
 */
 
 // Test cases - Path Testing
 console.log(canBorrowBook(user2, book1, currentDate)); // Path 1: User is inactive
 console.log(canBorrowBook(user3, book1, currentDate)); // Path 2: User has overdue books
 console.log(canBorrowBook(user1, book2, currentDate)); // Path 3: Book is unavailable
 console.log(canBorrowBook(user1, book3, currentDate)); // Path 4: Book is restricted
 console.log(canBorrowBook(user1, book1, currentDate)); // Path 5: Book can be borrowed
 
 /* Paths:
 1. User is inactive (user.active).
 2. User has overdue books (user.overdueBooks > 0).
 3. Book has no available copies (book.availableCopies < 1).
 4. Book is restricted and the current date is before the available date (book.restricted && currentDate < book.availableFrom).
 5. User can borrow the book (all conditions pass).
 */
 
 // Test cases - Control Flow Testing
 console.log(canBorrowBook(user1, book1, currentDate)); // Book can be borrowed (normal flow)
 console.log(canBorrowBook(user1, book3, new Date("2023-11-01"))); // Book can be borrowed (date after restriction)
 
 /* The first test case ensures that the normal flow of conditions is handled correctly (when all conditions are false).
    The second test ensures that the system correctly handles a book becoming available after its restriction is lifted.
 */
 
 // Test cases - Data Flow Testing
 console.log(canBorrowBook(user1, book1, currentDate)); // Book can be borrowed (data passed correctly)
 console.log(canBorrowBook(user1, book2, currentDate)); // Book not available (book availability handled correctly)
 
 /* The first test checks normal data flow where the user can borrow the book.
    The second test checks how the book.availableCopies affects the data flow, ensuring that unavailable books are handled correctly.
 */
 