## 📚 Java Collections Cheat Sheet

---

### 📏 Size of `ArrayList`

- **Syntax**:  
  ```java
  ArrayList al = new ArrayList();
  ```
- **Initial Capacity**: `10`
- **When Adding the 11th Element**:  
  - A new internal array is created with increased capacity.
  - **Growth Formula**:  
    \[
    \text{new capacity} = (\text{old capacity} \cdot \frac{3}{2}) + 1
    \]
    So from 10 → (10 × 3/2) + 1 = **16**

---

### ➕➖ Adding and Removing Elements in `ArrayList`

```java
ArrayList al = new ArrayList();
al.add("john");
al.add(true);
al.add(10);

System.out.println(al); // Output: [john, true, 10]

al.remove(new Integer(10)); // Removes the Integer 10

System.out.println(al);     // Output: [john, true]

System.out.println(al.get(1)); // Output: true
```

---

### 🧩 Interfaces Implemented by `ArrayList`

- **Serializable**
- **Cloneable**
- **RandomAccess**

---

### ⚠️ When Not to Use `ArrayList`

- Frequent insertions/deletions in the middle of the list  
  → Use `LinkedList` instead

---

### 🔗 LinkedList Overview

- Structure:  
  ```
  Data, Address ----> Data, Address
  ============        ============
     NODE                NODE
  ```

- **Syntax**:
  ```java
  LinkedList l = new LinkedList(); // OR
  LinkedList ll = new LinkedList(Collection c);

  l.add("john");
  l.add(10);
  l.add(null);
  System.out.println(l);  // [john, 10, null]

  l.set(1, 13);
  System.out.println(l);  // [john, 13, null]

  l.add(2, true);
  System.out.println(l);  // [john, 13, true, null]

  l.removeLast();
  System.out.println(l);  // [john, 13, true]

  l.addFirst(1);
  System.out.println(l);  // [1, john, 13, true]
  ```

---

### 🔍 Difference Between `ArrayList` and `LinkedList`

| Feature                        | ArrayList                        | LinkedList                          |
|-------------------------------|----------------------------------|-------------------------------------|
| **Retrieval Performance**     | Best for fast access             | Slower for access                   |
| **Insertion/Deletion (middle)**| Less efficient                   | More efficient                      |
| **Memory Usage**              | Less overhead                    | More overhead (node pointers)       |

---

### 📦 Vector

- **Synchronized**: Thread-safe (unlike `ArrayList`)
- **Growth**: Doubles in size when capacity is exceeded
- **Syntax**:
  ```java
  Vector v = new Vector();
  v.add("john");
  v.add(10);
  v.addElement("doe");

  System.out.println(v); // [john, 10, doe]

  v.remove(1);
  System.out.println(v); // [john, doe]
  ```

---

### 🔍 Difference Between `Vector`, `ArrayList`, and `LinkedList`

| Feature                     | Vector                          | ArrayList                       | LinkedList                        |
|----------------------------|----------------------------------|----------------------------------|-----------------------------------|
| **Thread Safety**          | Yes (synchronized)               | No                               | No                                |
| **Growth Strategy**        | Doubles capacity                 | Grows by 50% + 1                 | N/A (linked nodes)                |
| **Performance**            | Slower due to synchronization    | Fast for access                  | Fast for insert/delete            |
| **Memory Usage**           | More overhead                    | Moderate                         | Higher (due to node pointers)     |
| **Use Case**               | Legacy thread-safe lists         | General-purpose list             | Frequent insert/delete operations |

---

### 🔁 Set (HashSet Example)

- **No Duplicates Allowed**
- **Unordered Collection**
- **Syntax**:
  ```java
  Set s = new HashSet();
  s.add("apple");
  s.add("banana");
  s.add("apple"); // Duplicate, ignored

  System.out.println(s); // [banana, apple] — order not guaranteed
  ```

- **Common Implementations**:
  - `HashSet` – Fast, unordered
  - `LinkedHashSet` – Maintains insertion order
  - `TreeSet` – Sorted order

---

### 🗂️ HashMap

- **Key-Value Pairs**
- **Allows One Null Key and Multiple Null Values**
- **Unordered**
- **Syntax**:
  ```java
  HashMap hm = new HashMap();
  hm.put(1, "One");
  hm.put(2, "Two");
  hm.put(null, "Zero");

  System.out.println(hm); // {null=Zero, 1=One, 2=Two}

  hm.remove(2);
  System.out.println(hm); // {null=Zero, 1=One}

  System.out.println(hm.get(1)); // One
  ```

---

### 🔍 Difference Between `HashMap` and `Hashtable`

| Feature              | HashMap                     | Hashtable                    |
|----------------------|-----------------------------|------------------------------|
| **Thread Safety**    | Not synchronized            | Synchronized                 |
| **Null Keys/Values** | Allows 1 null key, many null values | No null keys or values |
| **Performance**      | Faster (no sync overhead)   | Slower due to synchronization |

---


Here's a simple Java program that checks whether all pairs of brackets in a given string are **balanced**. It supports `{}`, `[]`, and `()` bracket types:

---

### ✅ Java Program to Check Balanced Brackets

```java
import java.util.Stack;

public class BracketChecker {
    public static boolean isBalanced(String input) {
        Stack<Character> stack = new Stack<>();

        for (char ch : input.toCharArray()) {
            // Push opening brackets
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            }
            // Check closing brackets
            else if (ch == ')' || ch == '}' || ch == ']') {
                if (stack.isEmpty()) return false;

                char top = stack.pop();
                if ((ch == ')' && top != '(') ||
                    (ch == '}' && top != '{') ||
                    (ch == ']' && top != '[')) {
                    return false;
                }
            }
        }

        // If stack is empty, all brackets matched
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        String test1 = "{}[]()";       // Balanced
        String test2 = "{[()]}";       // Balanced
        String test3 = "{[}]";         // Not Balanced
        String test4 = "{[(])}";       // Not Balanced

        System.out.println(test1 + " → " + isBalanced(test1));
        System.out.println(test2 + " → " + isBalanced(test2));
        System.out.println(test3 + " → " + isBalanced(test3));
        System.out.println(test4 + " → " + isBalanced(test4));
    }
}
```

---

### 🧠 How It Works

- Uses a **stack** to track opening brackets.
- For each closing bracket, it checks if the top of the stack matches the correct opening bracket.
- If mismatched or stack is empty when a closing bracket appears → **Not Balanced**.
- At the end, if the stack is empty → **Balanced**.
