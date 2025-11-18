function formatValue(value: string | number | boolean): string | number | boolean {
  if(typeof value === 'string') {
    return value.toUpperCase();
  } else if ( typeof value === 'number') {
    return value * 10;
  } else if(typeof value === 'boolean'){
    return !value;
   }
  
}






function getLength(value: string | any[]): number  {
  if (typeof value === 'string') {
    return value.length;
  } else if (Array.isArray(value)){
    return value.length; }
  
  return 0;
}



class Person  {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }}





type Books ={ title: string; rating: number };

function filterByRating(books: Books[]): Books[] {
  return books.filter(item => item.rating >= 4);}





type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive);
}






interface Book{
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );

    
}




function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
  const result: T[] = [];

  
  function existsIn(array: T[], value: T): boolean {
    for(let i = 0; i < array.length; i++) {
      if(array[i] === value) return true;
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++)  {
    const val = arr1[i];
    if (!existsIn(result, val)){
      result.push(val);
    }
  }

  for(let j = 0; j < arr2.length; j++){
    const val = arr2[j];
    if (!existsIn(result, val)){
      result.push(val);
    }
  }

  return result;
}





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;};
function calculateTotalPrice(products: Product[]): number{
  return products.reduce((total, product) => {
    const priceWithoutDiscount =product.price*product.quantity; 

    const discountAmount =  product.discount
      ? priceWithoutDiscount * (product.discount /100):0;

    const finalPrice = priceWithoutDiscount - discountAmount;
    return total + finalPrice;
 }, 0);
}
