# Strings

 
## Summary

### Wikipedia
A string is traditionally a sequence of characters, either as a literal constant or as some kind of variable.
A string is generally considered as a data type and is often implemented as an array data structure of bytes (or words) using some character encoding. 
a string may either cause storage in memory to be statically allocated for a predetermined maximum length or employ dynamic allocation. Most strings in modern programming languages are variable-length strings
In some languages they are available as primitive types and in others as composite types.


String datatypes have historically allocated one byte per character. These character sets were typically based on ASCII or EBCDIC. Most programming languages now have a datatype for Unicode strings.  UTF-8, UTF-16 and UTF-32 require the programmer to know that the fixed-size code units are different than the "characters".

C++ and Ruby, normally allow the contents of a string to be changed after it has been created; these are termed mutable strings.  Java and Python, the value is fixed and a new string must be created if any alteration is to be made; these are termed immutable strings. These languages also provide another type that is mutable, such as Java and .NET StringBuilder, the thread-safe Java StringBuffer, and the Cocoa NSMutableString. Most string implementations are very similar to variable-length arrays with the entries storing the character codes of corresponding characters. The principal difference is that, with certain encodings, a single logical character may take up more than one entry in the array.

Strings are typically implemented as arrays of bytes, characters, or code units.  A few languages such as Haskell implement them as linked lists instead.

The length of a string can be stored implicitly by using a special terminating character; often this is the null character (NUL), which has all bits zero. This representation is commonly referred to as a C string. The null character cannot be used in any string. Strings with length field do not have this limitation and can also store arbitrary binary data. String representations requiring a terminating character are commonly susceptible to buffer overflow problems if the terminating character is not present, caused by a coding error or an attacker deliberately altering the data. String representations adopting a separate length field are also susceptible if the length can be manipulated.





