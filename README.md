

## 1. Interface VS Type 

### Interface
- object structure ডিফাইন করার জন্য ব্যবহৃত হয়
- `extends` ব্যবহার করে বাড়ানো যায়
- একই নামে বারবার declare করলে merge হয়ে যায়                                                     

 
```ts
interface User {
  name: string;

}

interface User{
  age: number;
}
````

### Type


* union,tuple,primitive সব ধরনের টাইপ define করতে পারে
* একই নামে পুনরায় declare করা যায় না, error দেয়
* Interface এর চেয়ে বেশি flexible

```ts
type ID = string | number;
type User = { name: string; age: number };
```

---

## 2. keyof এর ব্যবহার --- 

`keyof` কোনো object type এর সব key কে union type হিসেবে দেয় । কোনো object এর property নাম গুলোকে আলাদা type হিসেবে ব্যবহার করা যায়

```ts
type User ={
  name: string;
  age: number;
  email: string;
};

type UserKeys = keyof User;
//"name" | "age" | "email"

function getValue(obj: User, key: UserKeys) {
  return obj[key];

 }
```


