// CART LOGIC 
// product category page->

// when a user selectes a product 
// i have this map for a particular category
List<String>test = new ArrayList<>();

test.add("apparels");
test.add("electroncis");
test.add("beauty");
test.add("groceries");

// every element of the list is a product category, now every product cat has a hashmap connected to it 
// the map will have the products and price associated with  it


HashMap<String,Integer>s1 = new HashMap<>();

s1.put("t-shirt",599);
s1.put("hoodie",1300);
s1.put("shorts",330);
s1.put("hat",130);
s1.put("joggers",700);

HashMap<String,Integer>s2 = new HashMap<>();

s1.put("smartphone",499);
s1.put("laptop",899);
s1.put("headphones",99);
s1.put("tablet",299);
s1.put("smartwatch",199);

HashMap<String,Integer>s3 = new HashMap<>();

s1.put("sunscreen",7);
s1.put("hairserum",11);
s1.put("lipstick",14);
s1.put("moisturizer",19);
s1.put("perfume",99);

HashMap<String,Integer>s4 = new HashMap<>();

s1.put("olive oil",29);
s1.put("tomatosauce",8);
s1.put("garlic bread",9);
s1.put("cookies",19);
s1.put("chocolate",21);

// master map with all the categories and details

HashMap<String,HashMap<String,Integer>>mp = new HashMap<>();

mp.put(apparels,s1);
mp.put(electronics,s2);
mp.put(beauty,s3);
mp.put(groceries,s4);

// to fetch the product price
// go to mp.get(groceries).get("cookies")

in the cart , when ever a user enters or logins, we create a dummy hashmap
 HashMap<String,Integer>user = new HashMap<>();
 // when he/she enters add to cart

  // we update our map
 add to cart pressed -> int elm = mp.get(groceries).get("cookies")*(quantity);

 if(user.containsKey(cookies)){
 	user.put(cookies,user.get(cookies)+elm);
 }
 else{
 	user.put(cookies,elm);
 }

 // finally the final price will be 
 int total = 0;
 for(int jn:user.values()){
 	total+=jn;
  }

  // amount to be paid will be total

  if a user delets a product. 
  total-=(user.get(product));
  user.remove(product);

  new total = total.

